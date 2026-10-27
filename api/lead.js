// POST /api/lead — receives a lead from any site form and forwards it to the Telegram chat(s).
// Body: multipart/form-data with field "data" (JSON) and optional "files", or plain JSON.
import { tg, CHATS, TOKEN, json, cors, leadText, leadId, SITE } from './_tg.js';
import { sql, migrate, hasDb } from './_db.js';

const MAX_FILES = 5;
const MAX_TOTAL = 4 * 1024 * 1024; // Vercel request body limit is ~4.5 MB

export function OPTIONS(req) {
  return new Response(null, { status: 204, headers: cors(req) });
}

export async function POST(req) {
  let data = {};
  let files = [];
  try {
    const ct = req.headers.get('content-type') || '';
    if (ct.includes('multipart/form-data')) {
      const fd = await req.formData();
      data = JSON.parse(fd.get('data') || '{}');
      files = fd.getAll('files').filter((f) => f && typeof f === 'object' && f.size > 0).slice(0, MAX_FILES);
    } else {
      data = await req.json();
    }
  } catch {
    return json(req, { ok: false, error: 'bad_request' }, 400);
  }

  // honeypot: bots fill hidden "website" field
  if (data.website) return json(req, { ok: true, id: 'skip' });

  const hasContact = String(data.phone || '').replace(/\D/g, '').length >= 7 || /@/.test(String(data.email || ''));
  if (!hasContact) return json(req, { ok: false, error: 'no_contact' }, 422);

  const tgReady = TOKEN() && CHATS().length;
  if (!tgReady && !hasDb()) return json(req, { ok: false, error: 'not_configured' }, 503);

  let id = leadId();
  let dbId = null;
  if (hasDb()) {
    try {
      await migrate();
      const s = data.source || {};
      const r = await sql(`INSERT INTO leads(code, type, name, phone, email, contact, messenger, message, comment, items, files, source)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING id`, [id, String(data.type || ''), String(data.name || '').slice(0, 200), String(data.phone || '').slice(0, 40), String(data.email || '').slice(0, 120),
        String(data.contact || ''), String(data.messenger || ''), String(data.message || '').slice(0, 4000), String(data.comment || '').slice(0, 1000),
        Array.isArray(data.items) ? data.items.slice(0, 100) : [], (data.files || []).map(String).slice(0, 10),
        { page: s.page, id: s.id, title: s.title, url: s.url, form: s.form, lang: s.lang }]);
      dbId = r[0].id; id = String(dbId);
    } catch (e) { console.error('DB insert failed', e); }
  }
  if (!tgReady) return json(req, { ok: !!dbId, id });
  const total = files.reduce((a, f) => a + f.size, 0);
  if (total > MAX_TOTAL) {
    data.files = [...(data.files || []), '⚠️ файли завеликі для пересилання — попросіть клієнта надіслати їх у месенджер'];
    files = [];
  }
  const text = leadText(data, id) + (dbId ? `\n🔗 <a href="${SITE}/admin#lead-${dbId}">Відкрити в адмінці</a>` : '');

  const errors = [];
  for (const chat of CHATS()) {
    try {
      const m = await tg('sendMessage', { chat_id: chat, text, parse_mode: 'HTML', link_preview_options: { is_disabled: true } });
      for (const f of files) {
        const fd = new FormData();
        fd.append('chat_id', chat);
        fd.append('reply_parameters', JSON.stringify({ message_id: m.message_id }));
        fd.append('caption', `📎 до заявки #${id}`);
        fd.append('document', f, f.name || 'file');
        await tg('sendDocument', fd);
      }
    } catch (e) {
      errors.push(String(e.message || e));
    }
  }
  if (dbId && errors.length < CHATS().length) await sql('UPDATE leads SET tg_ok = TRUE WHERE id = $1', [dbId]).catch(() => {});
  if (errors.length === CHATS().length && !dbId) return json(req, { ok: false, error: 'telegram_failed', detail: errors }, 502);
  return json(req, { ok: true, id });
}
