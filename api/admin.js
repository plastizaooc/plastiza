// POST /api/admin  {op, ...args}  — single RPC endpoint for the admin panel (Vercel Hobby allows only 12 functions).
// Auth: "Authorization: Bearer <token>" from auth.login. First superadmin is created from env ADMIN_EMAIL + ADMIN_PASSWORD.
import { randomBytes, scryptSync, timingSafeEqual, createHash } from 'node:crypto';
import { sql, migrate, hasDb } from './_db.js';
import { json, cors } from './_tg.js';
import { hasBlob, blobPut, blobDel, safeName } from './_blob.js';

const SA = 'Суперадмін';
const ROLE_PERMS = {
  'Суперадмін': ['leads', 'clients', 'products', 'content', 'seo', 'contacts', 'mail', 'i18n', 'team', 'integrations'],
  'Менеджер': ['leads', 'clients', 'products'],
  'Контент-менеджер': ['content', 'seo', 'i18n', 'mail'],
};
const STATUSES = ['new', 'work', 'kp', 'done'];
const ST_LABEL = { new: 'Новий', work: 'В обробці', kp: 'КП надіслано', done: 'Закрито' };

const hashPw = (pw) => { const s = randomBytes(16).toString('hex'); return `scrypt$${s}$${scryptSync(pw, s, 64).toString('hex')}`; };
const checkPw = (pw, h) => { const [, s, d] = String(h).split('$'); if (!s || !d) return false; const a = scryptSync(pw, s, 64), b = Buffer.from(d, 'hex'); return a.length === b.length && timingSafeEqual(a, b); };
const tokHash = (t) => createHash('sha256').update(t).digest('hex');
const pub = (u) => u && ({ id: u.id, email: u.email, name: u.name, role: u.role, perms: u.role === SA ? ROLE_PERMS[SA] : u.perms, active: u.active, phone: u.phone, tg: u.tg, pos: u.pos, city: u.city, hours: u.hours, notify: u.notify, last_seen: u.last_seen });
const can = (u, sec) => u.role === SA || (u.perms || []).includes(sec);
class HttpErr extends Error { constructor(s, m) { super(m); this.status = s; } }
const need = (c, s, m) => { if (!c) throw new HttpErr(s, m); };
const log = (u, action, section) => sql('INSERT INTO audit_log(user_id, who, action, section) VALUES($1,$2,$3,$4)', [u ? u.id : null, u ? u.name : 'Система', action, section]).catch(() => {});

async function userFromReq(req) {
  const t = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!t) return null;
  const r = await sql(`SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = $1 AND s.expires_at > now() AND u.active`, [tokHash(t)]);
  if (!r[0]) return null;
  await sql('UPDATE sessions SET last_at = now() WHERE token = $1', [tokHash(t)]).catch(() => {});
  await sql('UPDATE users SET last_seen = now() WHERE id = $1', [r[0].id]).catch(() => {});
  return { ...r[0], _tok: tokHash(t) };
}

const OPS = {
  /* ---------- auth ---------- */
  async 'ping'() { return { db: true }; },
  async 'auth.login'({ email, password }, req) {
    email = String(email || '').trim().toLowerCase();
    need(email && password, 400, 'Вкажіть email і пароль');
    let u = (await sql('SELECT * FROM users WHERE lower(email) = $1', [email]))[0];
    if (!u) {
      const n = (await sql('SELECT count(*)::int AS n FROM users'))[0].n;
      const ae = (process.env.ADMIN_EMAIL || '').trim().toLowerCase(), ap = process.env.ADMIN_PASSWORD || '';
      if (n === 0 && ae && ap && email === ae && password === ap) {
        u = (await sql(`INSERT INTO users(email, name, role, perms, pass_hash) VALUES($1,$2,$3,$4,$5) RETURNING *`, [ae, 'Адміністратор', SA, ROLE_PERMS[SA], hashPw(ap)]))[0];
        await log(u, 'Створено першого суперадміна', 'Система');
      }
    }
    if (!u || !u.active || !checkPw(password, u.pass_hash)) { await new Promise((r) => setTimeout(r, 600)); throw new HttpErr(401, 'Невірний email або пароль'); }
    const t = randomBytes(32).toString('hex');
    await sql(`INSERT INTO sessions(token, user_id, ua, ip, expires_at) VALUES($1,$2,$3,$4, now() + interval '30 days')`, [tokHash(t), u.id, (req.headers.get('user-agent') || '').slice(0, 200), (req.headers.get('x-forwarded-for') || '').split(',')[0]]);
    await log(u, 'Вхід в адмінпанель', 'Система');
    return { token: t, me: pub(u) };
  },
  async 'auth.logout'(_, req, me) { await sql('DELETE FROM sessions WHERE token = $1', [me._tok]); return {}; },
  async 'auth.me'(_, req, me) { return { me: pub(me) }; },
  async 'auth.sessions'(_, req, me) {
    const r = await sql('SELECT token, ua, ip, created_at, last_at FROM sessions WHERE user_id = $1 AND expires_at > now() ORDER BY last_at DESC', [me.id]);
    return { sessions: r.map((s) => ({ id: s.token.slice(0, 12), ua: s.ua, ip: s.ip, last_at: s.last_at, current: s.token === me._tok })) };
  },
  async 'auth.killOthers'(_, req, me) { await sql('DELETE FROM sessions WHERE user_id = $1 AND token <> $2', [me.id, me._tok]); return {}; },
  async 'auth.kill'({ id }, req, me) { await sql('DELETE FROM sessions WHERE user_id = $1 AND left(token, 12) = $2 AND token <> $3', [me.id, String(id), me._tok]); return {}; },

  /* ---------- profile ---------- */
  async 'profile.save'(a, req, me) {
    const f = {}; for (const k of ['name', 'phone', 'tg', 'pos', 'city', 'hours']) if (a[k] !== undefined) f[k] = String(a[k]).slice(0, 200);
    if (a.notify) f.notify = a.notify;
    if (a.email && a.email.toLowerCase() !== me.email) { need(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(a.email), 400, 'Некоректний email'); f.email = a.email.toLowerCase(); }
    if (a.password) { need(String(a.password).length >= 10, 400, 'Пароль — мінімум 10 символів'); f.pass_hash = hashPw(a.password); }
    const ks = Object.keys(f); if (ks.length) await sql(`UPDATE users SET ${ks.map((k, i) => `${k} = $${i + 2}`).join(', ')} WHERE id = $1`, [me.id, ...ks.map((k) => f[k])]);
    if (f.pass_hash) await sql('DELETE FROM sessions WHERE user_id = $1 AND token <> $2', [me.id, me._tok]);
    await log(me, 'Оновив(ла) профіль', 'Система');
    return { me: pub((await sql('SELECT * FROM users WHERE id = $1', [me.id]))[0]) };
  },

  /* ---------- team ---------- */
  async 'team.list'() {
    const r = await sql(`SELECT u.*, (SELECT count(*)::int FROM leads l WHERE l.manager_id = u.id AND l.status <> 'done') AS open FROM users u ORDER BY u.role = 'Суперадмін' DESC, u.name`);
    return { team: r.map((u) => ({ ...pub(u), open: u.open })), roles: ROLE_PERMS };
  },
  async 'team.save'({ id, role, perms, active }, req, me) {
    need(me.role === SA, 403, 'Лише суперадмін змінює доступи');
    need(+id !== me.id || active !== false, 400, 'Не можна деактивувати себе');
    if (role) need(ROLE_PERMS[role], 400, 'Невідома роль');
    const u = (await sql('SELECT * FROM users WHERE id = $1', [id]))[0]; need(u, 404, 'Користувача не знайдено');
    await sql('UPDATE users SET role = $2, perms = $3, active = $4 WHERE id = $1', [id, role || u.role, perms || u.perms, active ?? u.active]);
    if (active === false) await sql('DELETE FROM sessions WHERE user_id = $1', [id]);
    await log(me, `Змінив(ла) доступ: ${u.name} → ${role || u.role}${active === false ? ' (деактивовано)' : ''}`, 'Команда');
    return {};
  },
  async 'team.invite'({ email, name, role }, req, me) {
    need(me.role === SA, 403, 'Лише суперадмін запрошує користувачів');
    email = String(email || '').trim().toLowerCase(); need(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email), 400, 'Некоректний email');
    role = ROLE_PERMS[role] ? role : 'Менеджер';
    const pw = randomBytes(6).toString('base64url');
    try { await sql('INSERT INTO users(email, name, role, perms, pass_hash) VALUES($1,$2,$3,$4,$5)', [email, String(name || email.split('@')[0]).slice(0, 80), role, ROLE_PERMS[role], hashPw(pw)]); }
    catch { throw new HttpErr(409, 'Користувач з таким email уже існує'); }
    await log(me, `Запросив(ла) ${email} (${role})`, 'Команда');
    return { password: pw };
  },
  async 'team.resetPassword'({ id }, req, me) {
    need(me.role === SA, 403, 'Лише суперадмін');
    const pw = randomBytes(6).toString('base64url');
    await sql('UPDATE users SET pass_hash = $2 WHERE id = $1', [id, hashPw(pw)]); await sql('DELETE FROM sessions WHERE user_id = $1', [id]);
    await log(me, `Скинув(ла) пароль користувачу #${id}`, 'Команда');
    return { password: pw };
  },

  /* ---------- leads ---------- */
  async 'leads.list'() {
    const r = await sql(`SELECT l.*, u.name AS manager FROM leads l LEFT JOIN users u ON u.id = l.manager_id ORDER BY l.created_at DESC LIMIT 1000`);
    const ev = await sql(`SELECT e.*, u.name AS by FROM lead_events e LEFT JOIN users u ON u.id = e.user_id WHERE e.lead_id = ANY(SELECT id FROM leads ORDER BY created_at DESC LIMIT 1000) ORDER BY e.created_at`);
    const by = {}; ev.forEach((e) => (by[e.lead_id] = by[e.lead_id] || []).push({ k: e.kind, t: e.text, dt: e.created_at, by: e.by || 'Система' }));
    return { leads: r.map((l) => ({ ...l, events: by[l.id] || [] })) };
  },
  async 'leads.update'({ id, status, manager_id, due, note }, req, me) {
    const l = (await sql('SELECT * FROM leads WHERE id = $1', [id]))[0]; need(l, 404, 'Заявку не знайдено');
    const ev = [];
    if (status && status !== l.status) { need(STATUSES.includes(status), 400, 'Невідомий статус'); ev.push(['status', `Статус: ${ST_LABEL[status]}`]); }
    if (manager_id !== undefined && (manager_id || null) !== l.manager_id) {
      const m = manager_id ? (await sql('SELECT name FROM users WHERE id = $1', [manager_id]))[0] : null;
      ev.push(['assign', m ? `Призначено: ${m.name}` : 'Знято відповідального']);
    }
    await sql('UPDATE leads SET status = $2, manager_id = $3, due = $4, note = $5 WHERE id = $1', [id, status || l.status, manager_id === undefined ? l.manager_id : (manager_id || null), due === undefined ? l.due : (due || null), note === undefined ? l.note : String(note)]);
    for (const [k, t] of ev) await sql('INSERT INTO lead_events(lead_id, kind, text, user_id) VALUES($1,$2,$3,$4)', [id, k, t, me.id]);
    if (ev.length) await log(me, `Заявка #${id}: ${ev.map((e) => e[1]).join(', ')}`, 'Заявки');
    return {};
  },
  async 'leads.event'({ id, kind, text }, req, me) {
    need(String(text || '').trim(), 400, 'Опишіть дію');
    await sql('INSERT INTO lead_events(lead_id, kind, text, user_id) VALUES($1,$2,$3,$4)', [id, String(kind || 'note'), String(text).slice(0, 2000), me.id]);
    if (kind === 'kp') await sql(`UPDATE leads SET status = 'kp' WHERE id = $1 AND status IN ('new','work')`, [id]);
    await log(me, `Дія за заявкою #${id}: ${String(text).slice(0, 80)}`, 'Заявки');
    return {};
  },
  async 'leads.stats'() {
    const days = await sql(`SELECT to_char(d, 'YYYY-MM-DD') AS d, (SELECT count(*)::int FROM leads WHERE created_at >= d AND created_at < d + interval '1 day') AS n
      FROM generate_series(date_trunc('day', now() AT TIME ZONE 'Europe/Kyiv') - interval '13 days', date_trunc('day', now() AT TIME ZONE 'Europe/Kyiv'), interval '1 day') d`);
    return { days };
  },

  /* ---------- clients ---------- */
  async 'clients.list'() { return { overrides: await sql('SELECT * FROM clients') }; },
  async 'clients.save'(a, req, me) {
    need(a.key, 400, 'Немає ключа клієнта');
    await sql(`INSERT INTO clients(key, company, person, phone, email, tags, note, updated_at) VALUES($1,$2,$3,$4,$5,$6,$7, now())
      ON CONFLICT (key) DO UPDATE SET company = $2, person = $3, phone = $4, email = $5, tags = $6, note = $7, updated_at = now()`, [a.key, a.company || '', a.person || '', a.phone || '', a.email || '', a.tags || '', a.note || '']);
    await log(me, `Оновив(ла) клієнта «${a.company || a.key}»`, 'Клієнти');
    return {};
  },

  /* ---------- media (Vercel Blob) ---------- */
  async 'media.list'() { return { blob: hasBlob(), media: await sql('SELECT id, url, name, type, size, used, created_at FROM media ORDER BY created_at DESC LIMIT 500') }; },
  async 'media.upload'({ name, type, data, used }, req, me) {
    need(can(me, 'content') || can(me, 'products'), 403, 'Немає доступу до медіафайлів');
    need(hasBlob(), 503, 'Сховище файлів не підключене: Vercel → Storage → Blob → Connect to project');
    need(typeof data === 'string' && data.length > 10, 400, 'Немає файлу');
    const buf = Buffer.from(data.replace(/^data:[^,]*,/, ''), 'base64');
    need(buf.length <= 4 * 1024 * 1024, 413, 'Файл більший за 4 МБ');
    const ct = String(type || 'application/octet-stream');
    need(/^(image\/(webp|jpeg|png|gif|svg\+xml|avif)|video\/(mp4|webm)|application\/pdf)$/.test(ct), 415, 'Непідтримуваний тип файлу');
    const b = await blobPut('media/' + safeName(name), buf, ct);
    const r = await sql('INSERT INTO media(url, name, type, size, used, user_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING id, url, name, type, size, used, created_at', [b.url, String(name || '').slice(0, 160), ct, buf.length, String(used || '').slice(0, 160), me.id]);
    await log(me, `Завантажив(ла) файл «${String(name || '').slice(0, 80)}»`, 'Медіафайли');
    return { file: r[0] };
  },
  async 'media.delete'({ id }, req, me) {
    need(can(me, 'content') || can(me, 'products'), 403, 'Немає доступу до медіафайлів');
    const r = await sql('DELETE FROM media WHERE id = $1 RETURNING url, name', [+id]);
    if (r[0] && hasBlob() && /vercel-storage\.com/.test(r[0].url)) await blobDel([r[0].url]).catch(() => {});
    if (r[0]) await log(me, `Видалив(ла) файл «${r[0].name}»`, 'Медіафайли');
    return {};
  },

  /* ---------- journal ---------- */
  async 'log.list'() { return { log: await sql('SELECT who, action, section, created_at FROM audit_log ORDER BY created_at DESC LIMIT 300') }; },

  /* ---------- settings (contacts, ticker, faq, seo, content, mails, products …) ---------- */
  async 'settings.all'() { const r = await sql('SELECT key, value FROM settings'); const o = {}; r.forEach((x) => (o[x.key] = x.value)); return { settings: o }; },
  async 'settings.get'({ key }) { const r = await sql('SELECT value, updated_at FROM settings WHERE key = $1', [String(key)]); return { value: r[0] ? r[0].value : null, updated_at: r[0] ? r[0].updated_at : null }; },
  async 'settings.save'({ key, value, section }, req, me) {
    need(key && value !== undefined, 400, 'Немає даних');
    const sec = SET_SEC[String(key)] || 'content';
    need(can(me, sec), 403, 'Немає доступу до цього розділу');
    await sql(`INSERT INTO settings(key, value, updated_at, updated_by) VALUES($1,$2::jsonb, now(), $3) ON CONFLICT (key) DO UPDATE SET value = $2::jsonb, updated_at = now(), updated_by = $3`, [String(key), JSON.stringify(value), me.id]);
    await log(me, `Зберіг(ла) «${key}»`, section || 'Налаштування');
    return {};
  },
};
const SET_SEC = { contacts: 'contacts', ticker: 'content', faq: 'content', content: 'content', blog: 'content', media: 'content', redirects: 'seo', seo: 'seo', mails: 'mail', i18n: 'i18n', products: 'products', pdf: 'products', docs: 'integrations',
  'site.prods': 'products', 'site.posts': 'content', 'adm.blog': 'content', 'site.faqs': 'content', 'site.tick': 'content', 'site.contacts': 'contacts', 'site.seo': 'seo', 'site.texts': 'content' };
const OPEN_OPS = new Set(['ping', 'auth.login']);
const PERM = { 'leads.': 'leads', 'clients.': 'clients', 'team.save': 'team', 'team.invite': 'team', 'team.resetPassword': 'team' };

export function OPTIONS(req) { return new Response(null, { status: 204, headers: cors(req) }); }
export async function POST(req) {
  if (!hasDb()) return json(req, { ok: false, error: 'db_not_configured', message: 'База даних не підключена (немає DATABASE_URL)' }, 503);
  let a = {};
  try { a = await req.json(); } catch { return json(req, { ok: false, message: 'Bad JSON' }, 400); }
  const fn = OPS[a.op];
  if (!fn) return json(req, { ok: false, message: 'Unknown op' }, 404);
  try {
    await migrate();
    let me = null;
    if (!OPEN_OPS.has(a.op)) {
      me = await userFromReq(req);
      if (!me) return json(req, { ok: false, error: 'auth', message: 'Потрібно увійти' }, 401);
      const p = Object.entries(PERM).find(([k]) => a.op.startsWith(k));
      if (p && !can(me, p[1])) return json(req, { ok: false, message: 'Немає доступу до цього розділу' }, 403);
    }
    const out = await fn(a, req, me);
    return json(req, { ok: true, ...out });
  } catch (e) {
    return json(req, { ok: false, message: e.status ? e.message : 'Помилка сервера: ' + e.message }, e.status || 500);
  }
}
export { ROLE_PERMS };
