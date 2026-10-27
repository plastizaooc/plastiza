// GET /api/tg-setup            — connect webhook + commands, return bot status (JSON)
// GET /api/tg-setup?test=1     — also send a test lead to all configured chats
// If SETUP_KEY env is set, add &key=<SETUP_KEY>.
import { tg, TOKEN, CHATS, webhookSecret, json, cors, leadText, leadId, SITE } from './_tg.js';

export function OPTIONS(req) {
  return new Response(null, { status: 204, headers: cors(req) });
}

export async function GET(req) {
  const url = new URL(req.url);
  const need = (process.env.SETUP_KEY || '').trim();
  if (need && url.searchParams.get('key') !== need) return json(req, { ok: false, error: 'bad_key' }, 401);

  const out = { ok: false, token: !!TOKEN(), chats: CHATS().length, bot: null, webhook: false, test: null };
  if (!TOKEN()) return json(req, { ...out, error: 'TG_BOT_TOKEN не задано у Vercel' });

  try {
    const me = await tg('getMe');
    out.bot = { username: me.username, name: me.first_name, link: `https://t.me/${me.username}` };
    const host = req.headers.get('x-forwarded-host') || url.host;
    await tg('setWebhook', {
      url: `https://${host}/api/tg-webhook`,
      secret_token: webhookSecret(),
      allowed_updates: ['message', 'my_chat_member'],
      drop_pending_updates: true,
    });
    out.webhook = true;
    await tg('setMyCommands', { commands: [{ command: 'id', description: 'Показати ID цього чату' }, { command: 'start', description: 'Як підключити заявки' }] });
    await tg('setMyDescription', { description: 'Бот надсилає менеджерам PLASTIZA заявки з сайту: контакти, сторінку, форму, перелік продукції та файли.' }).catch(() => {});
    out.chatInfo = [];
    for (const c of CHATS()) {
      try {
        const ch = await tg('getChat', { chat_id: c });
        out.chatInfo.push({ id: c, title: ch.title || [ch.first_name, ch.last_name].filter(Boolean).join(' '), ok: true });
      } catch (e) {
        out.chatInfo.push({ id: c, ok: false, error: String(e.message) });
      }
    }
    if (url.searchParams.get('test')) {
      const id = leadId();
      const text = '🧪 <b>Тестове сповіщення</b>\n\n' + leadText({
        type: 'quote', name: 'ТОВ «Тест-Буд»', phone: '+380 67 123 45 67', contact: 'messenger', messenger: 'Telegram',
        items: [
          { product: 'Фіксатор Настил', size: '25-30', packs: 4, perPack: '300 шт' },
          { product: 'Фіксатор Зірочка', size: '25/6-12', packs: 2, perPack: '1000 шт' },
        ],
        source: { form: 'quote-modal', title: 'Фіксатор «Настил» 25-30', url: SITE + '/#p-1-0' },
      }, id);
      out.test = [];
      for (const c of CHATS()) {
        try { await tg('sendMessage', { chat_id: c, text, parse_mode: 'HTML', link_preview_options: { is_disabled: true } }); out.test.push({ id: c, ok: true }); }
        catch (e) { out.test.push({ id: c, ok: false, error: String(e.message) }); }
      }
    }
    out.ok = true;
  } catch (e) {
    out.error = String(e.message || e);
  }
  return json(req, out);
}
