// POST /api/tg-webhook — Telegram calls this when someone writes to the bot.
// Commands: /start, /id — reply with the chat id (needed for TG_CHAT_ID), /help.
import { tg, CHATS, webhookSecret, esc, SITE } from './_tg.js';

export async function POST(req) {
  if (req.headers.get('x-telegram-bot-api-secret-token') !== webhookSecret()) return new Response('forbidden', { status: 403 });
  let u = {};
  try { u = await req.json(); } catch { return new Response('ok'); }

  try {
    // bot added to a group
    const mc = u.my_chat_member;
    if (mc && ['member', 'administrator'].includes(mc.new_chat_member?.status)) {
      await tg('sendMessage', { chat_id: mc.chat.id, parse_mode: 'HTML', text: info(mc.chat) });
    }
    const m = u.message;
    const cmd = (m?.text || '').trim().split(/[\s@]/)[0].toLowerCase();
    if (m && ['/start', '/id', '/help'].includes(cmd)) {
      await tg('sendMessage', { chat_id: m.chat.id, parse_mode: 'HTML', text: info(m.chat), link_preview_options: { is_disabled: true } });
    }
  } catch (e) {
    console.error(e);
  }
  return new Response('ok');
}

function info(chat) {
  const on = CHATS().includes(String(chat.id));
  const name = chat.title || [chat.first_name, chat.last_name].filter(Boolean).join(' ') || 'цей чат';
  return [
    '<b>PLASTIZA · заявки з сайту</b>',
    '',
    `ID чату «${esc(name)}»: <code>${chat.id}</code>`,
    '',
    on
      ? '✅ Цей чат уже отримує заявки з сайту.'
      : 'Щоб заявки приходили сюди, додайте цей ID у змінну <b>TG_CHAT_ID</b> на Vercel (кілька чатів — через кому) і перезапустіть деплой.',
    '',
    `Сайт: ${SITE}`,
  ].join('\n');
}
