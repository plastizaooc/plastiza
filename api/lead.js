// POST /api/lead — receives a lead from any site form and forwards it to the Telegram chat(s).
// Body: multipart/form-data with field "data" (JSON) and optional "files", or plain JSON.
import { tg, CHATS, TOKEN, json, cors, leadText, leadId } from './_tg.js';

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

  if (!TOKEN() || !CHATS().length) return json(req, { ok: false, error: 'bot_not_configured' }, 503);

  const id = leadId();
  const total = files.reduce((a, f) => a + f.size, 0);
  if (total > MAX_TOTAL) {
    data.files = [...(data.files || []), '⚠️ файли завеликі для пересилання — попросіть клієнта надіслати їх у месенджер'];
    files = [];
  }
  const text = leadText(data, id);

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
  if (errors.length === CHATS().length) return json(req, { ok: false, error: 'telegram_failed', detail: errors }, 502);
  return json(req, { ok: true, id });
}
