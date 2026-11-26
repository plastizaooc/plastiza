// POST /api/hit — own cookieless page-view counter for the admin «Аналітика» (no cookies, no IP stored).
// Body JSON: {p: pathname, q: search (first hit only), r: referrer (first hit only), l: lang}
import { createHash } from 'node:crypto';
import { sql, migrate, hasDb } from './_db.js';

const BOT = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|embedly|monitor|curl|wget|python|axios|node-fetch|go-http/i;
const SRC = [
  [/google\./, 'Google'], [/bing\./, 'Bing'], [/duckduckgo\./, 'DuckDuckGo'], [/yahoo\./, 'Yahoo'],
  [/facebook\.|fb\.com/, 'Facebook'], [/instagram\./, 'Instagram'], [/t\.me|telegram\./, 'Telegram'],
  [/youtube\./, 'YouTube'], [/linkedin\./, 'LinkedIn'], [/prom\.ua/, 'Prom.ua'], [/chatgpt\.com|openai\./, 'ChatGPT'], [/claude\.ai/, 'Claude'],
];
const ok = () => new Response(null, { status: 204 });

function source(q, r, host) {
  const sp = new URLSearchParams(q || '');
  if (sp.get('gclid') || sp.get('gbraid') || sp.get('wbraid')) return 'Google Ads';
  const us = sp.get('utm_source');
  if (us) return ('utm: ' + us + (sp.get('utm_medium') ? ' / ' + sp.get('utm_medium') : '')).slice(0, 60);
  if (!r) return 'Прямий захід';
  let h = '';
  try { h = new URL(r).hostname.replace(/^www\./, ''); } catch { return 'Прямий захід'; }
  if (!h || h === host) return '';
  const m = SRC.find(([re]) => re.test(h));
  return m ? m[1] : h.slice(0, 60);
}

export async function POST(req) {
  try {
    if (!hasDb()) return ok();
    const ua = req.headers.get('user-agent') || '';
    if (!ua || BOT.test(ua)) return ok();
    let a = {};
    try { a = JSON.parse(await req.text()); } catch { return ok(); }
    const path = String(a.p || '/').slice(0, 200);
    if (!path.startsWith('/') || /^\/(admin|api)\b/.test(path)) return ok();
    const host = (req.headers.get('host') || '').replace(/^www\./, '');
    const src = a.r !== undefined || a.q ? source(String(a.q || ''), String(a.r || ''), host) : '';
    const dev = /iPad|Tablet/i.test(ua) ? 'Планшет' : /Mobi|Android|iPhone/i.test(ua) ? 'Телефон' : 'Комп’ютер';
    const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim();
    const day = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Kyiv' });
    const salt = createHash('sha256').update(process.env.DATABASE_URL || 'plz').digest('hex').slice(0, 16);
    const vh = createHash('sha256').update(`${day}|${ip}|${ua}|${salt}`).digest('hex').slice(0, 16);
    await migrate();
    await sql('INSERT INTO pv(path, src, dev, lang, vh) VALUES($1,$2,$3,$4,$5)', [path, src, dev, a.l === 'en' ? 'en' : 'uk', vh]);
    if (Math.random() < 0.01) await sql(`DELETE FROM pv WHERE at < now() - interval '400 days'`).catch(() => {});
  } catch (e) { console.error('hit', e); }
  return ok();
}
