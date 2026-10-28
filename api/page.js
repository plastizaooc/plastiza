// Сторінки сайту: SEO-адреси (UA без префікса, EN — /en/…), мета-теги під кожну сторінку,
// дані з адмінки (window.PZ_DATA) і базовий HTML для пошукових систем ще до запуску JS.
// Також: /sitemap.xml (?sitemap=1), JSON для превʼю (?json=1), редіректи з адмінки.
import { SHELL } from './_shell.js';
import { rtParse, rtIndex, rtPath, rtMeta, rtAll, rtKey, rtPageNames } from './_routes.js';
import { SITE_DEF } from './_site.js';
import { PRE, PRE_T, PRE_D } from './_pre.js';
import { LQ } from './_lq.js';
import { CR_T, CR_X, CR_P } from './_crit.js';
/* критичні стилі сторінки: лише правила, які потрібні її першому екрану */
const CRC = new Map();
function critCss(key) {
  if (CRC.has(key)) return CRC.get(key); const rg = CR_P[key]; if (!rg) return '';
  const on = new Uint8Array(CR_X.length); for (const [a, b] of rg) for (let i = a; i <= b; i++) on[i] = 1;
  const emit = (list) => list.map((n) => typeof n === 'number' ? (on[n] ? CR_X[n] : '') : ((x) => x ? n.h + '{' + x + '}' : '')(emit(n.k))).join('');
  const css = emit(CR_T); CRC.set(key, css); return css;
}
import { sql, hasDb } from './_db.js';

const INDEXING = process.env.SITE_INDEXING === '1'; // ⚠️ тимчасовий домен: індексацію вимкнено
const ORIGIN = () => (process.env.SITE_URL || 'https://plastiza.org').replace(/\/$/, '');
const KEYS = { 'site.prods': 'prods', 'site.posts': 'posts', 'site.faqs': 'faqs', 'site.tick': 'tick', 'site.contacts': 'contacts', 'site.seo': 'seo', 'site.texts': 'texts' };

let cache = { at: 0, rows: null };
async function loadDb() {
  if (!hasDb()) return {};
  if (cache.rows && Date.now() - cache.at < 10000) return cache.rows;
  try {
    const r = await sql(`SELECT key, value FROM settings WHERE key LIKE 'site.%' OR key = 'redirects'`);
    const o = {}; r.forEach((x) => (o[x.key] = x.value));
    cache = { at: Date.now(), rows: o };
    return o;
  } catch (e) { console.error('page db', e); return cache.rows || {}; }
}
const pzOf = (rows) => { const Z = {}; for (const k in KEYS) if (rows[k] != null) Z[KEYS[k]] = rows[k]; return Z; };
function dataFor(Z) {
  const prods = (Array.isArray(Z.prods) && Z.prods.length ? Z.prods : SITE_DEF.prods).filter((p) => p && p.on !== false && Array.isArray(p.v) && p.v.length);
  const posts = (Array.isArray(Z.posts) ? Z.posts : SITE_DEF.posts).filter((p) => p && p.st !== 'draft');
  const faqs = (Array.isArray(Z.faqs) && Z.faqs.length ? Z.faqs : SITE_DEF.faqs).filter((f) => f && f.on !== false);
  return { prods, posts, faqs, slugs: (Z.seo && Z.seo.slugs) || {}, seo: (Z.seo && Z.seo.meta) || {} };
}

const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, '');
const safeHtml = (s) => String(s ?? '').replace(/<\/?(script|iframe|object|embed|style)[^>]*>/gi, '').replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');

function ssr(m, L, D) {
  const u = L !== 'en', i = u ? 0 : 1, a = (R, t) => `<a href="${esc(rtPath(R, L, D))}">${esc(t)}</a>`, N = rtPageNames();
  const nav = `<nav class="ssr-nav" aria-label="${u ? 'Розділи сайту' : 'Site sections'}"><ul>${['home', 'catalog', 'cat_rebar', 'cat_form', 'oem', 'srv0', 'srv1', 'srv2', 'about', 'delivery', 'contacts', 'faq', 'blog'].map((k) => `<li>${a(k === 'home' ? { p: 'home' } : k === 'catalog' ? { p: 'catalog', a: 'all' } : k === 'cat_rebar' ? { p: 'catalog', a: 'rebar' } : k === 'cat_form' ? { p: 'catalog', a: 'form' } : /^srv/.test(k) ? { p: 'soon', a: k.slice(3) } : { p: k }, N[k][i])}</li>`).join('')}</ul></nav>`;
  const meta = rtMeta(m.R, L, D), h1 = meta.t.replace(/\s*\|\s*PLASTIZA$/, '');
  let body = '';
  const k = m.k;
  if (/^p\d+-\d+$/.test(k)) {
    const [id, vi] = k.slice(1).split('-').map(Number), p = D.prods.find((x) => x.id == id);
    if (p) {
      const nm = p.n[L] || p.n.uk, un = p.u === 'm' ? (u ? 'м' : 'm') : (u ? 'шт' : 'pc'), sz = (v) => (Array.isArray(v[0]) ? v[0][i] : v[0]);
      body = `<h1>${esc(nm)} ${esc(sz(p.v[vi]))}</h1><p>${esc((p.d && (p.d[L] || p.d.uk)) || '')}</p>
<h2>${u ? 'Ціни та фасування' : 'Prices and packs'}</h2><ul>${p.v.map((v, j) => `<li>${a({ p: 'product', a: p.id + '-' + j }, `${nm} ${sz(v)}`)} — ${esc(String(v[1]).replace('.', u ? ',' : '.'))} ${u ? 'грн' : 'UAH'}/${un}, ${esc(v[2] || '—')} ${un} ${u ? 'в упаковці' : 'per pack'}</li>`).join('')}</ul>
${(p.sp || []).length ? `<h2>${u ? 'Характеристики' : 'Specifications'}</h2><dl>${p.sp.map((s) => `<dt>${esc(s[u ? 0 : 1])}</dt><dd>${esc(s[u ? 2 : 3])}</dd>`).join('')}</dl>` : ''}`;
    }
  } else if (k[0] === 'b' && k !== 'blog') {
    const po = D.posts.find((x) => String(x.id) === String(m.R.a));
    if (po) body = `<article><h1>${esc(po.t[i] || po.t[0])}</h1><p><time datetime="${esc(po.date)}">${esc(po.date)}</time></p><p>${esc(po.e[i] || po.e[0])}</p>${((po.b && (po.b[i] && po.b[i].length ? po.b[i] : po.b[0])) || []).map(([tg, tx]) => (/^(p|h2|h3|h4|ul|ol|blockquote|figure)$/.test(tg) ? `<${tg}>${safeHtml(tx)}</${tg}>` : '')).join('')}</article>`;
  } else if (k === 'catalog' || k === 'cat_rebar' || k === 'cat_form') {
    const c = k === 'cat_rebar' ? 'rebar' : k === 'cat_form' ? 'form' : null;
    body = `<h1>${esc(h1)}</h1><p>${esc(meta.d)}</p><ul>${D.prods.filter((p) => !c || p.cat === c).map((p) => `<li>${a({ p: 'product', a: p.id + '-0' }, p.n[L] || p.n.uk)}</li>`).join('')}</ul>`;
  } else if (k === 'blog') {
    body = `<h1>${esc(h1)}</h1><p>${esc(meta.d)}</p><ul>${D.posts.map((p) => `<li>${a({ p: 'post', a: String(p.id) }, p.t[i] || p.t[0])}</li>`).join('')}</ul>`;
  } else if (k === 'faq') {
    body = `<h1>${esc(h1)}</h1>${D.faqs.map((f) => `<h2>${esc((f.q && (f.q[L] || f.q.uk)) || '')}</h2><p>${esc(strip((f.a && (f.a[L] || f.a.uk)) || ''))}</p>`).join('')}`;
  } else {
    body = `<h1>${esc(h1)}</h1><p>${esc(meta.d)}</p>`;
  }
  return `<div class="ssr wrap">${body}${nav}</div>`;
}

function head(m, L, D, origin) {
  const meta = rtMeta(m.R, L, D), here = origin + rtPath(m.R, L, D);
  const alt = m.k === '404' ? '' : [['uk', 'uk'], ['en', 'en'], ['x-default', 'uk']].map(([hl, l]) => `<link rel="alternate" hreflang="${hl}" href="${esc(origin + rtPath(m.R, l, D))}">`).join('\n');
  return `<title>${esc(meta.t)}</title>
<meta name="description" content="${esc(meta.d)}">
<meta name="robots" content="${INDEXING && m.k !== '404' ? 'index, follow' : 'noindex, nofollow'}">
${m.k === '404' ? '' : `<link rel="canonical" href="${esc(here)}">`}
${alt}
<meta property="og:locale" content="${L === 'en' ? 'en_US' : 'uk_UA'}">
<meta property="og:title" content="${esc(meta.t)}">
<meta property="og:description" content="${esc(meta.d)}">
<meta property="og:url" content="${esc(here)}">`;
}

function sitemap(D, origin) {
  const x = rtAll(D).map((e) => {
    const alts = ['uk', 'en'].map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${esc(origin + rtPath(e.R, l, D))}"/>`).join('');
    const pr = e.k === 'home' ? '1.0' : /^p/.test(e.k) ? '0.8' : /^b/.test(e.k) && e.k !== 'blog' ? '0.6' : '0.7';
    return ['uk', 'en'].map((l) => `<url><loc>${esc(origin + rtPath(e.R, l, D))}</loc>${alts}<priority>${pr}</priority></url>`).join('\n');
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${x}\n</urlset>\n`;
}

const H_HTML = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, s-maxage=30, stale-while-revalidate=300' };
const J = (s) => JSON.stringify(s).replace(/</g, '\\u003c').replace(/[\u2028\u2029]/g, (c) => '\\u' + c.charCodeAt(0).toString(16));


/* Перший екран сторінки — готова розмітка (знята під час збірки), показується одразу, ще до завантаження скрипта.
   Скрипт сайту потім малює сторінку заново. Правки текстів з адмінки підставляються й сюди. */
const DEC = /aria-hidden|<svg|[↗→←↓✕✓]/;
function preTx(h, L, Z, DP) {
  const tx = Z && Z.texts; if (!tx || !h) return h;
  const sw = (a, b) => { if (a && b && a !== b && typeof a === 'string' && typeof b === 'string') h = h.split(a).join(b); };
  const TO = tx.T && tx.T[L], TD = PRE_T && PRE_T[L];
  if (TO && TD) for (const k of Object.keys(TO)) {
    const nv = TO[k], dv = TD[k]; if (nv == null || nv === '' || dv == null) continue;
    if (JSON.stringify(nv) !== JSON.stringify(dv) && (!DP || DP.includes(k))) return null; /* змінений текст першого екрана — заготовку не показуємо */
    if (Array.isArray(dv)) { if (Array.isArray(nv)) sw(dv[0], nv[0]); continue; }
    if (k === 'lead') sw(String(dv).replace(/\.\s+/, '. <br class="hx-br">'), String(nv).replace(/\.\s+/, '. <br class="hx-br">'));
    sw(dv, nv);
  }
  const M = tx[L]; if (M && typeof M === 'object') for (const k of Object.keys(M)) if (k.length > 2 && h.includes(k)) { if (DEC.test(k)) return null; sw(k, M[k]); }
  return h;
}
/* відео в заготовці — лише його постер (картинка), справжнє відео вмикає скрипт */
const preVid = (h) => h.replace(/<img class="hv-v" src="([^"]+)" alt="" fetchpriority="high" decoding="sync">/, '<img class="hv-v" src="$1" alt="" fetchpriority="high" decoding="sync" style="transform:scale(1.004)">').replace(/<video class="([^"]*)"[^>]*?poster="([^"]+)"[^>]*>\s*<\/video>/g, '<img class="$1" src="$2" alt="" fetchpriority="high" decoding="sync">')
  .replace(/<video [^>]*?poster="([^"]+)"[^>]*>\s*<\/video>/g, '<img src="$1" alt="" decoding="sync" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block">');
/* сторінки, чий перший екран показує дані з адмінки (товари, FAQ, статті): якщо їх змінено — без заготовки */
const PRE_DATA = { catalog: 'prods', cat_rebar: 'prods', cat_form: 'prods', pdf: 'prods', pdfm: 'prods', faq: 'faqs', srv0: 'faqs', srv1: 'faqs', srv2: 'faqs', blog: 'posts' };
function preHtml(k, L, Z) {
  const m0 = PRE[k + '|' + L + '|m']; if (!m0) return ['', ''];
  const dk = PRE_DATA[k]; if (dk && Z && Array.isArray(Z[dk]) && Z[dk].length) return ['', ''];
  const DP = PRE_D ? PRE_D[k + '|' + L] : null;
  const ct = (h) => { const c = Z && Z.contacts, d = PRE_T && PRE_T._c; if (!h || !c || !d) return h;
    const sw = (a, b) => { if (a && b && a !== b) h = h.split(a).join(b); };
    sw(d.edrpou, c.edrpou && String(c.edrpou)); sw(d.email, c.email);
    (d.phones || []).forEach((p, i) => { const n = c.phones && c.phones[i]; if (n && n !== p) { sw(p, n); sw(p.replace(/[^\d+]/g, ''), String(n).replace(/[^\d+]/g, '')); } });
    return h; };
  const m = ct(preTx(m0, L, Z, DP)); if (m === null) return ['', ''];
  let d = PRE[k + '|' + L + '|d']; d = d === '=' ? '' : d ? ct(preTx(d, L, Z, DP)) : ''; if (d === null) return ['', ''];
  const tm = '<template id="pzpm">' + preVid(m).replace('<img class="hv-v" src="/assets/hero/poster.webp"', () => '<img class="hv-v" src="' + LQ + '"') + '</template>' + (d ? '<template id="pzpd">' + preVid(d) + '</template>' : '');
  return [tm, '<script>!function(){var v=document.getElementById("view"),t=document.getElementById(innerWidth>760&&document.getElementById("pzpd")?"pzpd":"pzpm");if(v&&t)v.insertBefore(t.content.cloneNode(!0),v.firstChild)}()</script>'];
}

export async function GET(req) {
  const url = new URL(req.url);
  const rows = await loadDb(), Z = pzOf(rows), D = dataFor(Z), origin = ORIGIN();
  if (url.searchParams.has('json')) return new Response(JSON.stringify(Z), { headers: { 'content-type': 'application/json; charset=utf-8', 'access-control-allow-origin': '*', 'cache-control': 'public, max-age=0, s-maxage=20' } });
  if (url.searchParams.has('sitemap')) return new Response(sitemap(D, origin), { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=0, s-maxage=300' } });

  let raw = url.searchParams.has('path') ? '/' + (url.searchParams.get('path') || '') : url.pathname;
  try { raw = decodeURIComponent(raw); } catch (_) {}
  raw = raw.replace(/\/{2,}/g, '/');
  // редіректи, задані в адмінці (SEO → Редіректи)
  const red = Array.isArray(rows.redirects) ? rows.redirects : [];
  const lc = raw.toLowerCase().replace(/(.)\/+$/, '$1');
  for (const r of red) {
    if (!Array.isArray(r) || !r[0] || !r[1]) continue;
    const from = String(r[0]).trim().toLowerCase().replace(/(.)\/+$/, '$1');
    if (from === lc) {
      const to = String(r[1]).trim();
      if (!/^https?:/.test(to) && !rtParse(to, D)) continue; // ціль має існувати — інакше ігноруємо застаріле правило
      return new Response(null, { status: +r[2] === 302 ? 302 : 301, headers: { location: /^https?:/.test(to) ? to : encodeURI(to), 'cache-control': 'public, max-age=0, s-maxage=60' } });
    }
  }
  // нормалізація: без слеша в кінці, малі літери
  const norm = lc === '/index.html' ? '/' : lc;
  if (norm !== raw) {
    const qs = new URLSearchParams(url.search); qs.delete('path'); const q = qs.toString();
    return new Response(null, { status: 301, headers: { location: encodeURI(norm) + (q ? '?' + q : ''), 'cache-control': 'public, max-age=0, s-maxage=300' } });
  }
  const ix = rtIndex(D);
  let m = rtParse(norm, D, ix), status = 200;
  if (!m) { status = 404; const L = /^\/en(\/|$)/.test(norm) ? 'en' : 'uk'; m = { L, R: { p: '404' }, k: '404' }; }
  const L = m.L;
  const SH = L === 'en' ? SHELL.replace('<span class="cta-l">Запросити розрахунок</span><span class="cta-s">Розрахунок</span>', '<span class="cta-l">Request a quote</span><span class="cta-s">Quote</span>').replace('aria-label="Меню"', 'aria-label="Menu"').replace('<span class="bm-t">Меню</span>', '<span class="bm-t">Menu</span>').replace(/\n<link rel="preload" href="\/assets\/fonts\/[a-z]+-cyrillic\.woff2"[^>]*>/g, '') : SHELL;
  const PH = preHtml(m.k, L, Z);
  /* зі заготовкою: у сторінці лише критичні стилі, повний CSS підвантажує завантажувач після першого показу */
  let SH2 = SH;
  const CRIT = PH[0] ? critCss(m.k + '|' + L) : '';
  if (CRIT) SH2 = SH.replace(/<link rel="stylesheet" href="(\/css\/styles\.css[^"]*)">/, (a, u) => '<style>' + CRIT + '</style><script>window.PZCSS=' + JSON.stringify(u) + '</script><noscript>' + a + '</noscript>');
  const html = SH2.replace('@LANG@', L)
    .replace('<!--@HEAD@-->', head(m, L, D, origin))
    .replace('<!--@SSR@-->', () => PH[1] + ssr(m, L, D)).replace('</head>', () => PH[0] + '</head>')
    .replace('<!--@PRELOAD@-->', m.k === 'home' || m.k === 'about' ? '<link rel="preload" as="image" href="/assets/hero/poster.webp" fetchpriority="high" media="(min-width: 761px)">' : '')
    .replace('<!--@DATA@-->', `<script>window.PZ_DATA=${J(Z)};</script>`);
  return new Response(html, { status, headers: H_HTML });
}
export const HEAD = GET;
