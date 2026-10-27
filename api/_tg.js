// Shared helpers for the PLASTIZA Telegram bot (Vercel serverless functions).
// Env vars (Vercel → Project → Settings → Environment Variables):
//   TG_BOT_TOKEN  — token from @BotFather
//   TG_CHAT_ID    — chat id(s) for lead notifications, comma-separated (group ids start with -100…)
//   SETUP_KEY     — optional; if set, /api/tg-setup requires ?key=<SETUP_KEY>
import { createHash } from 'node:crypto';

export const TOKEN = () => (process.env.TG_BOT_TOKEN || '').trim();
export const CHATS = () => (process.env.TG_CHAT_ID || '').split(/[\s,;]+/).filter(Boolean);
export const SITE = 'https://plastiza.vercel.app';

export const esc = (s) => String(s ?? '').replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
export const attr = (s) => esc(s).replace(/"/g, '&quot;');

export const webhookSecret = () => createHash('sha256').update('plastiza:' + TOKEN()).digest('hex').slice(0, 48);

export async function tg(method, payload) {
  const t = TOKEN();
  if (!t) throw new Error('TG_BOT_TOKEN is not set');
  const isForm = typeof FormData !== 'undefined' && payload instanceof FormData;
  const r = await fetch(`https://api.telegram.org/bot${t}/${method}`, {
    method: 'POST',
    headers: isForm ? undefined : { 'content-type': 'application/json' },
    body: isForm ? payload : JSON.stringify(payload || {}),
  });
  const j = await r.json().catch(() => ({ ok: false, description: 'Bad JSON from Telegram' }));
  if (!j.ok) throw new Error(`${method}: ${j.description || r.status}`);
  return j.result;
}

export const cors = (req) => {
  const o = req.headers.get('origin') || '*';
  return {
    'access-control-allow-origin': o,
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type',
    vary: 'origin',
  };
};
export const json = (req, data, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', ...cors(req) } });

const FORMS = {
  'quote-modal': 'Вікно «Запросити розрахунок»',
  'quick-consult': 'Швидка консультація (головна)',
  'header-callback': 'Зворотний дзвінок (швидкий зв’язок)',
  'services-callback': 'Зворотний дзвінок (послуги)',
  'delivery-pickup': 'Самовивіз зі складу',
  'product-supply': 'Обговорити постачання (товар)',
  'site-supply': 'Комплексне постачання',
  page: 'Форма заявки на сторінці',
  hero: 'Форма в першому екрані',
};
const TYPES = {
  quote: '🧮 Запит на розрахунок',
  consultation: '📞 Консультація',
  callback: '📞 Зворотний дзвінок',
  pickup: '🚚 Самовивіз',
  supply: '📦 Постачання',
};
const MSGR_URL = {
  WhatsApp: (d) => `https://wa.me/${d}`,
  Viber: (d) => `viber://chat?number=%2B${d}`,
  Telegram: (d) => `https://t.me/+${d}`,
};

export function leadId(now = new Date()) {
  const k = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Kyiv' }));
  const p = (n) => String(n).padStart(2, '0');
  return `${p(k.getDate())}${p(k.getMonth() + 1)}-${p(k.getHours())}${p(k.getMinutes())}${p(k.getSeconds())}`;
}

export function leadText(d, id) {
  const L = [];
  const src = d.source || {};
  const form = FORMS[src.form] || src.form || 'Форма на сайті';
  L.push(`<b>${TYPES[d.type] || '🆕 Нова заявка'}</b>  ·  <code>#${esc(id)}</code>`);
  L.push('');
  if (d.name) L.push(`👤 <b>${esc(d.name)}</b>`);
  const digits = String(d.phone || '').replace(/\D/g, '');
  if (digits) {
    L.push(`📞 ${esc(d.phone)}`); // Telegram auto-links phone numbers (tel: links are not allowed)
  }
  if (d.email) L.push(`✉️ ${esc(d.email)}`);
  if (d.contact) {
    let how = d.contact === 'call' ? 'Дзвінок' : d.contact === 'email' ? 'Email' : d.contact;
    if (d.contact === 'messenger' && d.messenger) {
      const u = digits && MSGR_URL[d.messenger] ? MSGR_URL[d.messenger](digits) : '';
      how = u.startsWith('https') ? `<a href="${attr(u)}">${esc(d.messenger)}</a>` : esc(d.messenger);
    } else how = esc(how);
    L.push(`💬 Зв’язатися: ${how}`);
  }
  if (Array.isArray(d.items) && d.items.length) {
    L.push('');
    L.push('<b>📦 Перелік продукції</b>');
    let packs = 0;
    d.items.forEach((it, i) => {
      const per = parseFloat(String(it.perPack || '').replace(',', '.'));
      const unit = String(it.perPack || '').replace(/^[\d\s.,]+/, '').trim() || 'шт';
      const total = per && it.packs ? ` = ${(per * it.packs).toLocaleString('uk-UA')} ${esc(unit)}` : '';
      packs += +it.packs || 0;
      L.push(`${i + 1}. ${esc(it.product)} <b>${esc(it.size)}</b> — ${esc(it.packs)} уп. × ${esc(it.perPack)}${total}`);
    });
    L.push(`<i>Разом: ${d.items.length} поз., ${packs} уп.</i>`);
  }
  if (d.message) {
    L.push('');
    L.push(`📝 ${esc(d.message)}`);
  }
  if (d.comment) L.push(`📝 ${esc(d.comment)}`);
  if (Array.isArray(d.files) && d.files.length) L.push(`📎 Файли: ${d.files.map(esc).join(', ')}`);
  L.push('');
  const url = typeof src.url === 'string' && /^https?:\/\//.test(src.url) ? src.url : '';
  const title = esc(src.title || src.page || 'Сайт');
  L.push(`📄 Сторінка: ${url ? `<a href="${attr(url)}">${title}</a>` : title}`);
  L.push(`🧾 Форма: ${esc(form)}`);
  if (src.lang && src.lang !== 'uk') L.push(`🌐 Мова сайту: ${esc(String(src.lang).toUpperCase())}`);
  const when = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
  L.push(`🕒 ${when}`);
  return L.join('\n').slice(0, 4000);
}
