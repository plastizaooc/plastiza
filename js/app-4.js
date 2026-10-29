/*BOOT-START*/
/* Швидкість: під час першого показу сторінки другорядні ініціалізатори (анімації, підгонка шрифту футера, лічильники,
   маски телефонів тощо) відкладаються й виконуються по одному в паузах, коли браузер вільний. */
var __pzB=1,__pzQ=[];
function __pzW(n,f){return function(){if(__pzB){var a=arguments;for(var i=0;i<__pzQ.length;i++)if(__pzQ[i][0]===n&&!a.length){__pzQ.splice(i,1);break}__pzQ.push([n,f,this,a]);return}return f.apply(this,arguments)}}
function __pzFlush(){var ric=window.requestIdleCallback||function(c){return setTimeout(function(){c({timeRemaining:function(){return 8}})},30)};
 (function step(d){var t=performance.now();while(__pzQ.length){var j=__pzQ.shift();try{j[1].apply(j[2],j[3])}catch(e){console.warn(j[0],e)}if(performance.now()-t>12)break}
  if(__pzQ.length)ric(step,{timeout:600});else __pzB=0})()}
try{if(typeof fit==='function')fit=__pzW('fit',fit)}catch(e){}
try{if(typeof pellets==='function')pellets=__pzW('pellets',pellets)}catch(e){}
try{if(typeof countUp==='function')countUp=__pzW('countUp',countUp)}catch(e){}
try{if(typeof mqInit==='function')mqInit=__pzW('mqInit',mqInit)}catch(e){}
try{if(typeof swHints==='function')swHints=__pzW('swHints',swHints)}catch(e){}
try{if(typeof qsDrag==='function')qsDrag=__pzW('qsDrag',qsDrag)}catch(e){}
try{if(typeof prowInit==='function')prowInit=__pzW('prowInit',prowInit)}catch(e){}
try{if(typeof bgSl==='function')bgSl=__pzW('bgSl',bgSl)}catch(e){}
try{if(typeof lfoInit==='function')lfoInit=__pzW('lfoInit',lfoInit)}catch(e){}
try{if(typeof ccEnhance==='function')ccEnhance=__pzW('ccEnhance',ccEnhance)}catch(e){}
try{if(typeof ccRepad==='function')ccRepad=__pzW('ccRepad',ccRepad)}catch(e){}
try{if(typeof ovSetup==='function')ovSetup=__pzW('ovSetup',ovSetup)}catch(e){}
try{if(typeof ovSetup2==='function')ovSetup2=__pzW('ovSetup2',ovSetup2)}catch(e){}
try{if(typeof ovPos==='function')ovPos=__pzW('ovPos',ovPos)}catch(e){}
try{if(typeof rvUpd==='function')rvUpd=__pzW('rvUpd',rvUpd)}catch(e){}
try{if(typeof st6Upd==='function')st6Upd=__pzW('st6Upd',st6Upd)}catch(e){}
try{if(typeof stkSetup==='function')stkSetup=__pzW('stkSetup',stkSetup)}catch(e){}
try{if(typeof stkAll==='function')stkAll=__pzW('stkAll',stkAll)}catch(e){}
try{if(typeof slDots==='function')slDots=__pzW('slDots',slDots)}catch(e){}
try{if(typeof rlUpd==='function')rlUpd=__pzW('rlUpd',rlUpd)}catch(e){}
try{if(typeof tabSel==='function')tabSel=__pzW('tabSel',tabSel)}catch(e){}
try{if(typeof stProg==='function')stProg=__pzW('stProg',stProg)}catch(e){}
/* Перший показ: одразу будуються лише перші блоки сторінки (видима частина), решта додається
   по одному блоку в наступних кадрах — без довгого «зависання» і без стрибків верстки. */
var __pzT=null,__pzTD=0,__pzR0=render;
render=function(){if(__pzT){__pzT=[];}
 /* головна картинка першого екрана з заготовки лишається тією самою (браузер не перемальовує її вдруге) */
 var keep=__pzT===null?[].slice.call(document.querySelectorAll('#view img[fetchpriority=high]')):[];
 var r=__pzR0.apply(this,arguments);
 keep.forEach(function(o){var n=document.querySelector('#view img.'+o.className.split(' ')[0]+'[fetchpriority=high]:not([data-pk])');if(n&&n.className===o.className){o.setAttribute('data-pk','1');o.style.transform='';if(o.getAttribute('src')===n.getAttribute('src'))n.replaceWith(o);else{n.parentNode.insertBefore(o,n);n.removeAttribute('fetchpriority');n.setAttribute('loading','lazy')}}});try{typeof hxRotMove==='function'&&hxRotMove()}catch(e){}
 if(__pzT===null&&/[?&]pzcap=1/.test(location.search)){var f0=document.getElementById('view').firstElementChild;if(f0){var c0=document.createElement('div'),e0=f0;while(e0&&c0.innerHTML.length<1500&&c0.children.length<3){c0.appendChild(e0.cloneNode(true));e0=e0.nextElementSibling}[].forEach.call(c0.querySelectorAll('#hxg'),function(g){g.innerHTML=''});[].forEach.call(c0.querySelectorAll('.hx-glow'),function(g){g.removeAttribute('style')});[].forEach.call(c0.querySelectorAll('input,textarea,select'),function(g){g.setAttribute('data-cc','-');g.setAttribute('tabindex','-1')});window.__pzPre=c0.innerHTML;
  /* які тексти T впливають на цей екран (щоб сервер не показав застарілу заготовку, якщо їх змінили в адмінці) */
  try{var K=window.__pzK||[],dep=[],L0=lang;K.forEach(function(k){var v=T[L0][k];if(Array.isArray(v))T[L0][k]=v.map(function(_,i){return 'Q'+k+'Q'+i+'Q'});else if(typeof v==='string')T[L0][k]='Q'+k+'Q'});
   __pzR0();var hh=document.getElementById('view').innerHTML;K.forEach(function(k){if(hh.indexOf('Q'+k+'Q')>-1)dep.push(k)});window.__pzDep=dep}catch(e){window.__pzDep=null}}}
 if(__pzB&&__pzT===null&&!window.__txCap){var v=document.getElementById('view'),k=[].slice.call(v.children);__pzT=[];
  if(k.length>3){__pzT=k.slice(2);__pzT.forEach(function(n){n.remove()});document.documentElement.classList.add('pz-part')}}return r};
function __pzTail(done){var v=document.getElementById('view');
 (function next(){if(!__pzT||!__pzT.length){document.documentElement.classList.remove('pz-part');__pzTD=1;try{window.rtAfter&&rtAfter()}catch(e){}done();return}
  var n=__pzT.shift();v.appendChild(n);requestAnimationFrame(function(){setTimeout(next,0)})})()}
(function(){var flush=function(){(window.requestIdleCallback||setTimeout)(__pzFlush,{timeout:1200})};
 var start=function(){requestAnimationFrame(function(){setTimeout(function(){__pzTail(function(){if(document.readyState==='complete')setTimeout(flush,60);else addEventListener('load',function(){setTimeout(flush,60)})})},0)})};
/* решта сторінки й другорядні ініціалізатори — коли людина почне взаємодіяти (прокрутка, дотик, клавіша),
    коли низ першого екрана наближається, або через 7 с — що станеться раніше */
 var fired=0,EV=['scroll','wheel','touchstart','pointerdown','keydown','mousemove'],fire=function(){if(fired)return;fired=1;EV.forEach(function(e){removeEventListener(e,fire,{passive:true})});if(io)io.disconnect();start()},io=null;
 EV.forEach(function(e){addEventListener(e,fire,{passive:true})});setTimeout(fire,7000);
 try{var sn=document.createElement('i');sn.style.cssText='display:block;height:1px';(document.getElementById('foot')||document.body).before(sn);
  io=new IntersectionObserver(function(es){if(es[0].isIntersecting)fire()},{rootMargin:'0px 0px 400px 0px'});setTimeout(function(){if(!fired)io.observe(sn)},300)}catch(e){}
})();
/*BOOT-END*/
R=fromHash();rtBoot();if(document.getElementById('pzpm'))setTimeout(function(){render();rtAfter()},0);else{render();rtAfter()}
/* overlap effect for FAQ on service pages */
function ovSetup2(){document.querySelectorAll('#view .sp5>.sp6-f').forEach(f=>{if(f.parentElement.classList.contains('ov-wrap'))return;const prev=f.previousElementSibling;if(!prev)return;f.classList.add('ov-top','ov-sp');prev.classList.add('ov-under','ov-sp');const w=document.createElement('div');w.className='ov-wrap';prev.before(w);w.append(prev,f)});if(typeof ovPos==='function')ovPos()}
new MutationObserver(()=>requestAnimationFrame(ovSetup2)).observe(document.getElementById('view'),{childList:true});requestAnimationFrame(ovSetup2);

/* ===== unified line icons: replace text glyph arrows/crosses/checks with crisp thin SVG ===== */
(function(){const P={'↗':'M5 15L15 5M7 5h8v8','→':'M2.5 10h15M12.5 5l5 5-5 5','←':'M17.5 10h-15M7.5 5l-5 5 5 5','↓':'M10 2.5v15M5 12.5l5 5 5-5','✕':'M5 5l10 10M15 5L5 15','✓':'M3.5 10.5l4.2 4.2L16.5 5.5'};
const svg=g=>`<svg class="gi" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="butt" stroke-linejoin="miter" aria-hidden="true"><path d="${P[g]}"/></svg>`;
const RX=/[↗→←↓✕✓]/;
function run(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{if(!RX.test(n.textContent))return 2;const e=n.parentElement;if(!e||e.closest('script,style,textarea,option,.tk-s,svg,[contenteditable]'))return 2;return 1}});const L=[];let n;while(n=w.nextNode())L.push(n);
L.forEach(n=>{const t=n.textContent,f=document.createDocumentFragment();let buf='';for(const ch of t){if(P[ch]){if(buf){f.appendChild(document.createTextNode(buf));buf=''}const sp=document.createElement('span');sp.className='gw';sp.innerHTML=svg(ch);f.appendChild(sp)}else buf+=ch}if(buf)f.appendChild(document.createTextNode(buf));n.replaceWith(f)})}
let q=0;const go=()=>{q=0;run(document.body)};new MutationObserver(()=>{if(!q)q=requestAnimationFrame(go)}).observe(document.body,{childList:true,subtree:true,characterData:true});go()})();

/* stages: sequential progress fill on the bar above each step */
function stProg(){document.querySelectorAll('#view :is(ol.st2,ol.sp6-st):not([data-pg])').forEach(ol=>{ol.dataset.pg=1;const li=[...ol.children];if(!li.length)return;if(matchMedia('(prefers-reduced-motion: reduce)').matches){li.forEach(x=>x.classList.add('pg-d'));return}
let i=-1,t=0,vis=false;const D=1500;
const tick=()=>{if(!ol.isConnected||!vis){t=0;return}i++;if(i>=li.length){t=setTimeout(()=>{li.forEach(x=>x.classList.add('pg-r'));li.forEach(x=>x.classList.remove('pg-d','pg-c'));void ol.offsetWidth;li.forEach(x=>x.classList.remove('pg-r'));i=-1;t=setTimeout(tick,500)},1400);return}
if(i>0){li[i-1].classList.remove('pg-c');li[i-1].classList.add('pg-d')}li[i].classList.add('pg-c');t=setTimeout(()=>{li[i].classList.remove('pg-c');li[i].classList.add('pg-d');tick()},D)};
new IntersectionObserver(es=>{const v=es[0].isIntersecting;if(v&&!vis){vis=true;if(!t)tick()}else if(!v){vis=false;clearTimeout(t);t=0;i=-1;li.forEach(x=>x.classList.remove('pg-d','pg-c'))}},{threshold:.35}).observe(ol)})}
new MutationObserver(()=>requestAnimationFrame(stProg)).observe(document.getElementById('view'),{childList:true});requestAnimationFrame(stProg);


function hxTkAdd(hx){if(hx.querySelector('.hxtk'))return;const q=hx.querySelector('.hqi');if(!q)return;const u=lang==='uk',L=u?'uk':'en';
const it=[[u?'Фіксатори арматури для будівництва':'Rebar spacers for construction','catalog','rebar'],[SRV[0][lang],'soon','0'],[SRV[1][lang],'soon','1'],[SRV[2]?SRV[2][lang]:(u?'Комплектація будівельних об’єктів':'Construction site supply'),'soon','2']]
.map(([w,g,a])=>`<button class="tk-i" data-go="${g}" data-a="${a}"><span class="tk-w"><span>${w}</span><span aria-hidden="true">${w} ↗</span></span></button>`).join('<i class="tk-s" aria-hidden="true">✦</i>')+'<i class="tk-s" aria-hidden="true">✦</i>';
const d=document.createElement('div');d.className='tk hxtk';d.setAttribute('role','region');d.setAttribute('aria-label',u?'Напрями':'What we do');
d.innerHTML=`<div class="tk-t"><div class="tk-r">${it}</div><div class="tk-r" aria-hidden="true">${it.replace(/<button /g,'<button tabindex="-1" ')}</div></div>`;q.after(d)}
/* mobile hero: rotating line moves below the form */
function hxRotMove(){if(innerWidth>760)return;const hx=document.querySelector('#view .hx');if(!hx)return;hxTkAdd(hx);if(hx.querySelector('.hx-rot'))return;const tw=hx.querySelector('.hxg-b .tw-l'),q=hx.querySelector('.hqi');if(!tw||!q)return;const d=document.createElement('p');d.className='hx-rot';d.setAttribute('aria-hidden','true');d.appendChild(tw);q.after(d)}
new MutationObserver(()=>requestAnimationFrame(hxRotMove)).observe(document.getElementById('view'),{childList:true});requestAnimationFrame(hxRotMove);

/* keep hyphenated words, units and phone numbers on one line */
(function(){const L='A-Za-zА-Яа-яІіЇїЄєҐґ’\'',RX=new RegExp(`[${L}0-9]+(?:[-‑/][${L}0-9]+)+|\\+?\\d[\\d ()\\-]{8,}\\d`,'g');
function nobr(root){if(!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const e=n.parentElement;if(!e||e.closest('script,style,textarea,input,svg,.nb,[contenteditable],.tw-l,.st6 .w'))return 2;return /[-/]|\d{3}/.test(n.textContent)?1:2}});const L2=[];let n;while(n=w.nextNode())L2.push(n);
L2.forEach(n=>{const t=n.textContent;RX.lastIndex=0;if(!RX.test(t))return;RX.lastIndex=0;const f=document.createDocumentFragment();let i=0,m;while(m=RX.exec(t)){if(m.index>i)f.appendChild(document.createTextNode(t.slice(i,m.index)));const s=document.createElement('span');s.className='nb';s.textContent=m[0];f.appendChild(s);i=m.index+m[0].length}if(i<t.length)f.appendChild(document.createTextNode(t.slice(i)));n.replaceWith(f)})}
window.nobr=nobr;let q=0;const run=()=>{q=0;nobr(document.getElementById('view'));nobr(document.getElementById('foot'))};
new MutationObserver(()=>{if(!q)q=requestAnimationFrame(run)}).observe(document.getElementById('view'),{childList:true});run()})();
ovSetup();rlUpd();tabSel();rvUpd();slDots();st6Upd();
addEventListener('hashchange',()=>{const n=fromHash();const hk=o=>o.p==='404'?'404:'+location.hash:o.p==='product'?'p-'+o.a:o.p==='post'?'b-'+o.a:o.p==='soon'?'soon-'+o.a:o.p==='pdf'?'pdf-'+o.a:o.p;const cur=hk(R),nx=hk(n);if(cur===nx)return;
const keep=n.p==='product'&&R.p==='product'&&String(R.a).split('-')[0]===String(n.a).split('-')[0];R=n;render();if(!keep)scrollTo(0,0)});

window.ICO_CP='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
window.ICO_OK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function dcBlock(){window.ICO_CP=window.ICO_CP||'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';const u=lang==='uk',cp=u?'Копіювати':'Copy',row=(href,txt,k)=>`<li><a href="${href}">${txt}</a><button type="button" class="dc-cp" data-cp="${txt}" aria-label="${cp} ${txt}" title="${cp}">${window.ICO_CP||''}</button></li>`;
const ms=[['WhatsApp','#25D366'],['Telegram','#229ED9'],['Viber','#7360F2']].map(([n,c])=>{const m=MSGR.find(x=>x[0]===n);return `<a class="dc-m" href="${m[1]}" target="_blank" rel="noopener" style="--mc:${c}">${m[2]}<span>${n}</span></a>`}).join('');
return `<div class="lf2-c"><span class="dc-l">${bx('lfC')}</span><div class="dc-ms">${ms}</div><ul class="dc">${row('mailto:plastiza.sale@gmail.com','plastiza.sale@gmail.com','Email')}</ul><div class="dc-ph">${PH.map(p=>`<a href="tel:${p.replace(/[^+\d]/g,'')}">${p}</a>`).join('')}</div></div>`}
document.addEventListener('click',e=>{const b=e.target.closest('.dc-cp');if(!b)return;e.preventDefault();const t=b.dataset.cp,done=()=>{b.classList.add('ok');b.innerHTML=ICO_OK;b.title=lang==='uk'?'Скопійовано':'Copied';clearTimeout(b._t);b._t=setTimeout(()=>{b.classList.remove('ok');b.innerHTML=ICO_CP;b.title=lang==='uk'?'Копіювати':'Copy'},1600)};try{navigator.clipboard.writeText(t).then(done,()=>{fbCopy(t);done()})}catch(_){fbCopy(t);done()}});
function fbCopy(t){const a=document.createElement('textarea');a.value=t;a.style.cssText='position:fixed;opacity:0';document.body.appendChild(a);a.select();try{document.execCommand('copy')}catch(_){}a.remove()}

function page404(){const u=lang==='uk';document.title=(u?'Сторінку не знайдено':'Page not found')+' — PLASTIZA';
return `<section class="e4"><div class="lfo" aria-hidden="true"><i></i></div><div class="e4-n" aria-hidden="true">404</div><div class="e4-c"><h1>${u?'Сторінку не знайдено':'Page not found'}</h1><p>${u?'Можливо, посилання застаріло або сторінку перенесли. Поверніться на головну або перегляньте каталог продукції.':'The link may be outdated or the page has moved. Go back to the homepage or browse the product catalog.'}</p><div class="e4-b"><button class="btn" data-go="home">${u?'На головну':'Back to homepage'} <span aria-hidden="true">→</span></button><button class="btn g" data-go="catalog" data-a="all">${u?'Каталог продукції':'Product catalog'}</button></div></div></section>`}

/* side menu v5 (reference: numbered list, pills, contacts) */
side=function(){const c=R.p,u=lang==='uk';let i=0;
const n=(g,l,a,cur,badge)=>`<button class="sm-i" data-go="${g}" ${a?`data-a="${a}"`:''} ${cur?'aria-current="page"':''}><i>${String(++i).padStart(2,'0')}</i><span>${l}</span>${badge?`<b>${badge}</b>`:''}</button>`;
const dark=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
const SUN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/></svg>';
const MOON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
$('#side').innerHTML=`<div class="sm-h"><button class="sm-logo" data-go="home">PLASTIZA</button><button class="sm-x" id="close" aria-label="${u?'Закрити меню':'Close menu'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div>
<nav class="sm-n" aria-label="${u?'Головне меню':'Main menu'}">${n('home',t('home'),'',c==='home')}${n('catalog',v4('menuProd'),'all',c==='catalog'||c==='product')}${n('about',t('about'),'',c==='about')}${n('oem',t('oem'),'',c==='oem'||c==='soon')}${n('pdf',u?'Каталог PDF':'PDF catalog','desk',c==='pdf','PDF')}${n('delivery',u?'Доставка та оплата':'Delivery & payment','',c==='delivery')}${n('faq',t('faq'),'',c==='faq')}${n('blog',t('blog'),'',c==='blog'||c==='post')}${n('contacts',t('contacts'),'',c==='contacts')}</nav>
<div class="sm-c"><div class="sm-lg" role="group" aria-label="Language"><button data-l="uk" aria-pressed="${u}">ua</button><button data-l="en" aria-pressed="${!u}">en</button></div><div class="sm-th" role="group" aria-label="${u?'Тема':'Theme'}"><button data-thm="light" aria-pressed="${!dark}" aria-label="${u?'Світла тема':'Light theme'}">${SUN}</button><button data-thm="dark" aria-pressed="${dark}" aria-label="${u?'Темна тема':'Dark theme'}">${MOON}</button></div></div>
<div class="sm-k"><div class="sm-kh">[ ${u?'Контакти':'Contacts'} ]</div><div class="sm-r"><span>Email</span><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a></div><div class="sm-r sm-rv"><span>${u?'Телефони':'Phones'}</span><div>${PH.map(p=>`<a href="tel:${p.replace(/[^+\d]/g,'')}">${p}</a>`).join('')}</div></div><div class="sm-r sm-rm"><span>${u?'Месенджери':'Messengers'}</span><div class="sm-ms">${[['WhatsApp','#25D366'],['Telegram','#229ED9'],['Viber','#7360F2']].map(([nm,cl])=>{const m=MSGR.find(x=>x[0]===nm);return `<a class="sm-m" href="${m[1]}" target="_blank" rel="noopener" style="--mc:${cl}" aria-label="${nm}" title="${nm}">${m[2]}</a>`}).join('')}</div></div><div class="sm-r sm-rv"><span>${u?'Адреси':'Offices'}</span><div>${AD.map(a=>`<p>${a[u?0:1]}</p>`).join('')}</div></div><div class="sm-r sm-rv"><span>${u?'Графік':'Hours'}</span><div>${HOURS.map(h=>`<p>${h[u?0:1]}</p>`).join('')}</div></div></div>
<p class="sm-d">${t('tag')}</p>`};
document.addEventListener('click',e=>{const b=e.target.closest('[data-thm]');if(!b)return;root.dataset.theme=b.dataset.thm;try{ls.s('theme',b.dataset.thm)}catch(_){}document.querySelectorAll('[data-thm]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.thm===b.dataset.thm))});
function smThm(){const d=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;document.querySelectorAll('[data-thm]').forEach(x=>x.setAttribute('aria-pressed',(x.dataset.thm==='dark')===d))}
new MutationObserver(smThm).observe(root,{attributes:true,attributeFilter:['data-theme']});try{matchMedia('(prefers-color-scheme:dark)').addEventListener('change',smThm)}catch(_){}
side();

/*FIXJS1-START*/
/* 28.10: швидкий зв’язок — вибір країни в списку телефонних кодів більше не закриває панель */
(function(){if(typeof qc!=='function')return;
 document.addEventListener('click',e=>{const t=e.target;window.__qcX=!!(t.closest&&t.closest('[data-qc-x],#qcb'));if(t.closest&&t.closest('#phdd,#phdscrim,.phd-scrim,.phc'))window.__qcKeep=Date.now()},true);
 document.addEventListener('pointerdown',e=>{const t=e.target;if(t.closest&&t.closest('#phdd,#phdscrim,.phd-scrim'))window.__qcKeep=Date.now()},true);
 const _qc=qc;qc=function(open){if(!open&&!window.__qcX){const dd=document.getElementById('phdd'),f=document.activeElement,inp=f&&f.closest&&f.closest('#qcp')&&/^(INPUT|TEXTAREA)$/.test(f.tagName);
  if(Date.now()-(window.__qcKeep||0)<700||dd||inp){try{qcY=scrollY}catch(_){}return}}window.__qcX=false;return _qc.apply(this,arguments)}})();
/*FIXJS1-END*/
/*FIXJS2-START*/
/* відео першого екрана вмикається після завантаження сторінки — не гальмує показ */
(function(){const go=()=>{if(navigator.connection&&navigator.connection.saveData)return;document.querySelectorAll('video[data-src]').forEach(v=>{if(v.dataset.on)return;v.dataset.on=1;v.preload='auto';v.src=v.dataset.src;const p=v.play();if(p&&p.catch)p.catch(()=>{})})};
 const sched=()=>{const ric=window.requestIdleCallback;if(ric)ric(go,{timeout:2500});else setTimeout(go,300)};
 if(document.readyState==='complete')setTimeout(sched,400);else addEventListener('load',()=>setTimeout(sched,400));
 new MutationObserver(()=>{if(document.readyState==='complete')sched()}).observe(document.getElementById('view'),{childList:true})})();
/*FIXJS2-END*/
/*FIXJS4-START*/
/* 29.10: код країни в полях телефону — за країною відвідувача (визначає сервер за IP);
   невідомо / прихована / помилка — український. Запам’ятовується на сесію. */
(function(){if(typeof ccEnhance!=='function'||typeof PCC==='undefined')return;
 const ok=c=>c&&PCC.some(x=>x[0]===c);let CC=null;try{CC=sessionStorage.getItem('pzcc')}catch(_){}
 const apply=()=>{if(!ok(CC)||CC==='UA')return;document.querySelectorAll('.phw input[data-cc="UA"]').forEach(el=>{if(!el.value&&!el.dataset.ccg&&document.activeElement!==el){el.dataset.ccg=1;ccSet(el,CC)}})};
 new MutationObserver(()=>{if(CC)requestAnimationFrame(apply)}).observe(document.body,{childList:true,subtree:true});
 if(CC)apply();
 else{const go=()=>fetch('/api/page?geo=1',{cache:'no-store'}).then(r=>r.ok?r.json():{}).then(j=>{CC=ok(j.cc)?j.cc:'UA';try{sessionStorage.setItem('pzcc',CC)}catch(_){}apply()}).catch(()=>{CC='UA'});
  if(/^(localhost|127\.)/.test(location.hostname)||location.protocol==='file:'||/claude/.test(location.hostname)){CC='UA';return}
  (window.requestIdleCallback||setTimeout)(go,{timeout:3000})}
})();
/*FIXJS4-END*/
/*FIXJS5-START*/
/* 29.10: обкладинки статей — фото (не вирізаний товар з прозорим фоном) розтягується на весь блок */
(function(){const isPh=s=>!!s&&!/\/assets\/img\/products\//.test(s)&&!/^data:/.test(s);
 const run=()=>document.querySelectorAll('#view :is(.pa-c,.bc-c,.bc2-c)>img').forEach(i=>{const c=i.parentElement,ph=isPh(i.getAttribute('src'));if(c.classList.contains('is-ph')!==ph)c.classList.toggle('is-ph',ph)});
 let q=0;new MutationObserver(()=>{if(!q)q=requestAnimationFrame(()=>{q=0;run()})}).observe(document.getElementById('view'),{childList:true,subtree:true});run()})();
/*FIXJS5-END*/
/*SYNC-START*/
/* ===================== Синхронізація з адмінкою + SEO-адреси =====================
   window.PZ_DATA підставляє сервер (api/page.js) з бази: товари, статті, FAQ, бігучий рядок,
   контакти, тексти сторінок, SEO. Без нього сайт працює на вбудованих даних.
   Адреси: UA — /fiksator-nastyl, EN — /en/slab-chair-nastil. У превʼю (claude.ai, file://) — #/шлях. */
/*ROUTES-START*/
/* ===== SEO-адреси сторінок (спільний код: сайт, сервер, адмінка) =====
   Українська версія — без префікса, англійська — під /en.
   R = {p, a} — внутрішній маршрут сайту; D — дані (товари, статті, перевизначення slug-ів і мета з адмінки). */
function rtPages(){return {
 home:['',''],catalog:['katalog','catalog'],cat_rebar:['fiksatory-armatury','rebar-spacers'],cat_form:['fiksatory-dlia-opalubky','formwork-accessories'],
 oem:['posluhy','services'],srv0:['lyttia-plastyku','injection-molding'],srv1:['vyhotovlennia-presform','mold-making'],srv2:['komplektatsiia-obiektiv','construction-supply'],
 about:['vyrobnytstvo','production'],delivery:['dostavka','delivery'],contacts:['kontakty','contacts'],faq:['pytannia-vidpovidi','faq'],blog:['blog','blog'],
 pdf:['katalog-pdf','pdf-catalog'],pdfm:['katalog-pdf-mobilnyi','pdf-catalog-mobile']}}
function rtPageNames(){return {home:['Головна','Home'],catalog:['Каталог','Catalog'],cat_rebar:['Фіксатори арматури','Rebar spacers'],cat_form:['Фіксатори для опалубки','Formwork accessories'],oem:['Послуги','Services'],srv0:['Лиття пластикових виробів','Plastic injection molding'],srv1:['Виготовлення пресформ','Mold making'],srv2:['Комплектація будівельних об’єктів','Construction site supply'],about:['Виробництво','Production'],delivery:['Доставка','Delivery'],contacts:['Контакти','Contacts'],faq:['Питання-відповіді','FAQ'],blog:['Блог','Blog'],pdf:['PDF-каталог (ПК)','PDF catalog (desktop)'],pdfm:['PDF-каталог (мобільний)','PDF catalog (mobile)']}}
function rtProdSlugs(){return {1:['fiksator-nastyl','slab-chair-nastil'],2:['fiksator-stiika','rebar-chair-stiika'],3:['fiksator-zirochka','star-spacer-zirochka'],4:['fiksator-zashchipka','clip-spacer-zashchipka'],5:['fiksator-zasuvka','slide-spacer-zasuvka'],6:['fiksator-konus','cone-spacer-konus'],7:['korok-yalynka','fir-tree-plug'],8:['fiksator-korok','formwork-plug-korok'],9:['dystantsiina-truba','spacer-tube']}}
function rtPostSlugs(){return {1:['yak-obraty-fiksator-armatury','how-to-choose-rebar-spacer'],2:['zakhysnyi-shar-betonu','concrete-cover'],3:['lyttia-pid-tyskom','injection-molding-process'],4:['presforma-pid-vash-vyrib','custom-mold-checklist'],5:['korky-i-konusy-dlia-opalubky','formwork-plugs-and-cones']}}
/* транслітерація за постановою КМУ №55 (2010) */
function rtSlugify(s){s=String(s==null?'':s).toLowerCase().replace(/[«»“”"'’ʼ`]/g,'');
 const M={а:'a',б:'b',в:'v',г:'h',ґ:'g',д:'d',е:'e',є:'ie',ж:'zh',з:'z',и:'y',і:'i',ї:'i',й:'i',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ь:'',ю:'iu',я:'ia',ы:'y',э:'e',ё:'io',ъ:''},S={є:'ye',ї:'yi',й:'y',ю:'yu',я:'ya'};
 let o='';for(let i=0;i<s.length;i++){const c=s[i],st=i===0||!/[а-яіїєґa-z0-9]/.test(s[i-1]);if(c==='з'&&s[i+1]==='г'){o+='zgh';i++;continue}o+=st&&S[c]?S[c]:(M[c]!=null?M[c]:c)}
 return o.replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').replace(/-{2,}/g,'-').slice(0,80)}
function rtLi(L){return L==='en'?1:0}
function rtPageSlug(id,L,D){const o=D&&D.slugs&&D.slugs[id];const v=o&&o[L];return v!=null&&v!==''?String(v):rtPages()[id][rtLi(L)]}
function rtProdBase(p,L){if(p.slug&&p.slug[L])return p.slug[L];const d=rtProdSlugs()[p.id];if(d)return d[rtLi(L)];const n=p.n&&(p.n[L]||p.n.uk);return rtSlugify(n)||('product-'+p.id)}
function rtSizeSlug(v,L){const s=Array.isArray(v[0])?v[0][1]||v[0][0]:v[0];return rtSlugify(s)}
function rtProdSlug(p,vi,L){const b=rtProdBase(p,L);if(!vi)return b;const v=p.v&&p.v[vi];return v?b+'-'+rtSizeSlug(v,L):b}
function rtPostSlug(po,L){if(po.slug&&po.slug[L])return po.slug[L];const d=rtPostSlugs()[po.id];if(d)return d[rtLi(L)];const t=po.t&&(po.t[rtLi(L)]||po.t[0]);return rtSlugify(t)||('post-'+po.id)}
/* R → ключ сторінки (для SEO, slug-ів і адмінки) */
function rtKey(R){if(!R)return 'home';const p=R.p,a=R.a;
 if(p==='home')return 'home';if(p==='catalog'){const c=a&&a.cat||a;return c==='rebar'?'cat_rebar':c==='form'?'cat_form':'catalog'}
 if(p==='soon')return 'srv'+(+a||0);if(p==='pdf')return a==='mob'?'pdfm':'pdf';
 if(p==='product'){const s=String(a).split('-');return 'p'+s[0]+'-'+(+s[1]||0)}
 if(p==='post')return 'b'+a;return p}
function rtFromKey(k){const m={home:{p:'home'},catalog:{p:'catalog',a:'all'},cat_rebar:{p:'catalog',a:'rebar'},cat_form:{p:'catalog',a:'form'},pdf:{p:'pdf',a:'desk'},pdfm:{p:'pdf',a:'mob'},blog:{p:'blog'}};
 if(m[k])return m[k];let x;if((x=/^srv(\d+)$/.exec(k)))return {p:'soon',a:x[1]};if((x=/^p(\d+)-(\d+)$/.exec(k)))return {p:'product',a:x[1]+'-'+x[2]};if((x=/^b(.+)$/.exec(k)))return {p:'post',a:x[1]};return {p:k}}
function rtPath(R,L,D){const pre=L==='en'?'/en':'',k=rtKey(R);let s;
 if(/^p\d+-\d+$/.test(k)){const [id,vi]=k.slice(1).split('-').map(Number),p=(D&&D.prods||[]).find(x=>x.id==id);s=p?rtProdSlug(p,vi,L):'product-'+id}
 else if(k[0]==='b'&&k!=='blog'){const po=(D&&D.posts||[]).find(x=>String(x.id)===String(R.a));s=rtPageSlug('blog',L,D)+'/'+(po?rtPostSlug(po,L):R.a)}
 else if(rtPages()[k])s=rtPageSlug(k,L,D);else s='';
 return s?pre+'/'+s:(pre||'/')}
/* усі сторінки сайту (для sitemap і SEO-таблиці в адмінці) */
function rtAll(D){const out=Object.keys(rtPages()).map(k=>({k,R:rtFromKey(k)}));
 (D&&D.prods||[]).filter(p=>p.on!==false).forEach(p=>(p.v||[]).forEach((v,vi)=>out.push({k:'p'+p.id+'-'+vi,R:{p:'product',a:p.id+'-'+vi}})));
 (D&&D.posts||[]).filter(p=>p.st!=='draft').forEach(p=>out.push({k:'b'+p.id,R:{p:'post',a:String(p.id)}}));return out}
/* шлях → {L,R,k}; null — сторінки не існує */
function rtIndex(D){const ix={};rtAll(D).forEach(x=>['uk','en'].forEach(L=>{ix[rtPath(x.R,L,D)]={L,R:x.R,k:x.k}}));return ix}
function rtParse(path,D,IX){path=String(path||'/').split(/[?#]/)[0];try{path=decodeURIComponent(path)}catch(_){}path=path.toLowerCase().replace(/\/{2,}/g,'/');if(path.length>1)path=path.replace(/\/+$/,'');if(!path)path='/';
 const ix=IX||rtIndex(D);return ix[path]||null}
/* ціна для мета: 1.728 → 1,728 (UA) */
function rtPrice(v,L){const s=String(v==null?'':v);return L==='en'?s:s.replace('.',',')}
function rtCut(s,n){s=String(s||'').replace(/<[^>]+>/g,'').replace(/\s+/g,' ').trim();if(s.length<=n)return s;const c=s.slice(0,n-1);return c.slice(0,Math.max(c.lastIndexOf(' '),n-25)).replace(/[,.;:—–-]+$/,'')+'…'}
/* мета за замовчуванням + перевизначення з адмінки (D.seo[key][L] = {t,d}) */
function rtMeta(R,L,D){const k=rtKey(R),u=L!=='en',B=' | PLASTIZA';let t='',d='';
 const DEF={
  home:[['Виробник фіксаторів арматури та пластикових виробів'+B,'ТОВ «Пластіза» — український виробник пластикових фіксаторів арматури та елементів опалубки. Лиття пластику на замовлення, пресформи. Ціни від виробника, доставка по Україні та в ЄС.'],['Rebar spacers and plastic parts manufacturer'+B,'PLASTIZA is a Ukrainian manufacturer of plastic rebar spacers and formwork accessories. Custom injection molding and mold making. Factory prices, delivery across Ukraine and the EU.']],
  catalog:[['Каталог фіксаторів арматури та елементів опалубки'+B,'Фіксатори «Настил», «Стійка», «Зірочка», «Защіпка», «Засувка», конуси, корки й дистанційні труби для опалубки. Ціни та фасування від виробника.'],['Rebar spacers and formwork accessories catalog'+B,'Slab chairs, rebar chairs, star and clip spacers, cones, plugs and spacer tubes for formwork. Manufacturer prices and pack sizes.']],
  cat_rebar:[['Фіксатори арматури від виробника — купити оптом'+B,'Пластикові фіксатори арматури для захисного шару бетону: «Настил», «Стійка», «Зірочка», «Защіпка», «Засувка». Фасування від 100 шт, ціни від виробника.'],['Plastic rebar spacers from the manufacturer'+B,'Plastic rebar spacers for concrete cover: slab chairs, rebar chairs, star, clip and slide spacers. Packs from 100 pcs at manufacturer prices.']],
  cat_form:[['Фіксатори для опалубки: конуси, корки, труби'+B,'Конуси, корки та дистанційні труби ПВХ і П/Е для опалубки від виробника. Захист стяжних гвинтів, герметизація отворів, ціни та фасування.'],['Formwork accessories: cones, plugs, spacer tubes'+B,'Cones, plugs and PVC/PE spacer tubes for formwork from the manufacturer. Tie protection and hole sealing, prices and pack sizes.']],
  oem:[['Лиття пластикових виробів і виготовлення пресформ'+B,'Лиття пластику під тиском на замовлення — від прототипу до серії, виготовлення пресформ під ваш виріб і комплектація будівельних об’єктів.'],['Plastic injection molding and mold making services'+B,'Custom plastic injection molding from prototype to series, mold making for your part and construction site supply.']],
  srv0:[['Лиття пластикових виробів на замовлення'+B,'Лиття пластику під тиском за вашими кресленнями: від пробної партії до великих тиражів. Підбір матеріалу, контроль якості, доставка.'],['Custom plastic injection molding'+B,'Injection molding to your drawings, from trial runs to large volumes. Material selection, quality control and delivery.']],
  srv1:[['Виготовлення пресформ для лиття пластику'+B,'Проєктуємо та виготовляємо пресформи під ваш виріб — для лиття на вашому підприємстві або на наших потужностях.'],['Injection mold making'+B,'We design and build molds for your part — to run at your plant or on our production line.']],
  srv2:[['Комплектація будівельних об’єктів'+B,'Постачаємо фіксатори, елементи опалубки та будівельні матеріали на об’єкт за одним замовленням. Доставка по Україні.'],['Construction site supply'+B,'Rebar spacers, formwork accessories and building materials delivered to your site in one order.']],
  about:[['Виробництво фіксаторів арматури та пластикових виробів'+B,'Власне виробництво повного циклу: пресформи, лиття пластику під тиском, контроль якості та відвантаження фіксаторів арматури.'],['Rebar spacer and plastic parts production'+B,'Full-cycle in-house production: molds, injection molding, quality control and shipping of rebar spacers.']],
  delivery:[['Доставка фіксаторів арматури по Україні та в ЄС'+B,'Доставка Новою поштою, Укрпоштою та перевізниками по Україні й у країни Європи. Самовивіз зі складів у Львові та Києві, оплата для юросіб і ФОП.'],['Delivery across Ukraine and the EU'+B,'Shipping by Nova Post, Ukrposhta and freight carriers across Ukraine and to Europe. Pickup in Lviv and Kyiv, payment terms for businesses.']],
  contacts:[['Контакти — офіси у Львові та Києві'+B,'Телефони, email і адреси офісів ТОВ «Пластіза» у Львові та Києві. Зв’яжіться з менеджером, щоб отримати розрахунок вартості.'],['Contacts — offices in Lviv and Kyiv'+B,'Phones, email and office addresses of PLASTIZA in Lviv and Kyiv. Contact a manager for a quote.']],
  faq:[['Питання та відповіді про фіксатори й лиття пластику'+B,'Відповіді на часті питання: як обрати фіксатор арматури, мінімальна партія, виготовлення пресформ, доставка та оплата.'],['FAQ about rebar spacers and injection molding'+B,'Answers to common questions: choosing a rebar spacer, minimum order, mold making, delivery and payment.']],
  blog:[['Блог про фіксатори арматури та лиття пластику'+B,'Корисні статті про фіксатори арматури, захисний шар бетону, елементи опалубки, лиття пластику та пресформи.'],['Blog about rebar spacers and injection molding'+B,'Useful articles on rebar spacers, concrete cover, formwork accessories, plastic injection molding and molds.']],
  pdf:[['PDF-каталог продукції'+B,'Завантажте PDF-каталог фіксаторів арматури та елементів опалубки з цінами й фасуванням.'],['PDF product catalog'+B,'Download the PDF catalog of rebar spacers and formwork accessories with prices and pack sizes.']],
  pdfm:[['PDF-каталог для телефона'+B,'Мобільна версія PDF-каталогу фіксаторів арматури та елементів опалубки.'],['PDF catalog for phones'+B,'Mobile version of the PDF catalog of rebar spacers and formwork accessories.']],
  '404':[['Сторінку не знайдено'+B,''],['Page not found'+B,'']]};
 if(DEF[k]){[t,d]=DEF[k][u?0:1]}
 else if(/^p\d+-\d+$/.test(k)){const [id,vi]=k.slice(1).split('-').map(Number),p=(D&&D.prods||[]).find(x=>x.id==id);if(p&&p.v[vi]){const v=p.v[vi],nm=p.n[L]||p.n.uk,sz=Array.isArray(v[0])?v[0][u?0:1]:v[0],un=p.u==='m'?(u?'м':'m'):(u?'шт':'pc');
   t=u?`${nm} ${sz} — ціна від ${rtPrice(v[1],L)} грн${B}`:`${nm} ${sz} — from ${rtPrice(v[1],L)} UAH${B}`;
   d=rtCut(u?`${nm} ${sz} від виробника: ${rtPrice(v[1],L)} грн/${un}, ${v[2]||'—'} ${un} в упаковці. ${p.d&&p.d.uk||''}`:`${nm} ${sz} from the manufacturer: ${v[1]} UAH/${un}, ${v[2]||'—'} ${un} per pack. ${p.d&&p.d.en||''}`,160)}}
 else if(k[0]==='b'){const po=(D&&D.posts||[]).find(x=>String(x.id)===String(R.a));if(po){const i=u?0:1,tt=po.t[i]||po.t[0];t=(tt+B).length<=68?tt+B:tt;d=rtCut(po.e&&(po.e[i]||po.e[0]),160)}}
 const o=D&&D.seo&&D.seo[k]&&D.seo[k][L];if(o){if(o.t)t=o.t;if(o.d)d=o.d}
 return {t:t||'PLASTIZA',d:d||''}}
/*ROUTES-END*/
function rtPM(){try{return /^https?:$/.test(location.protocol)&&!/claude|anthropic/.test(location.hostname)}catch(_){return false}}
var RT_IX,RT_SEO,RT_SL,CTR,TXC; /* без ініціалізації: rtBoot() заповнює їх раніше, ніж виконується цей рядок */
function rtD(){return {prods:P,posts:POSTS,slugs:RT_SL||{},seo:RT_SEO||{}}}
function rtIx(){return RT_IX||(RT_IX=rtIndex(rtD()))}
function rtNorm(){if(R.p==='catalog')return {p:'catalog',a:F.cat&&F.cat!=='all'?F.cat:'all'};if(R.p==='product'){const s=String(R.a).split('-');return {p:'product',a:s[0]+'-'+(+s[1]||0)}}return R}
function rtHere(){return rtPath(rtNorm(),lang,rtD())}
function rtAbs(path){try{return rtPM()?location.origin+path:'https://plastiza.org'+path}catch(_){return path}}
function rtAbsP(id){return rtAbs(rtPath({p:'product',a:id+'-0'},lang,rtD()))}
function rtCat(){if(R.p==='catalog'){const c=R.a&&R.a.cat||R.a;F.cat=c==='rebar'||c==='form'?c:'all'}}
function rtSet(push){if(R.p==='404')return;const path=rtHere();try{if(rtPM()){if(location.pathname!==path||push&&location.hash)history[push?'pushState':'replaceState'](null,'',path+(push?'':location.search))}
 else if(location.protocol!=='file:'||location.hash){const h='#'+path;if(location.hash!==h)history[push?'pushState':'replaceState'](null,'',h)}}catch(_){}}
function rtMetaTag(sel,mk){let el=document.head.querySelector(sel);if(!el){el=mk();document.head.appendChild(el)}return el}
function rtHead(){const D=rtD(),Rn=rtNorm(),m=rtMeta(Rn,lang,D);document.title=m.t;
 const md=(n,v,prop)=>{const el=rtMetaTag(`meta[${prop?'property':'name'}="${n}"]`,()=>{const e=document.createElement('meta');e.setAttribute(prop?'property':'name',n);return e});el.setAttribute('content',v)};
 md('description',m.d);md('og:title',m.t,1);md('og:description',m.d,1);md('og:locale',lang==='en'?'en_US':'uk_UA',1);
 if(!rtPM())return;const c404=R.p==='404';document.head.querySelectorAll('link[rel=canonical],link[rel=alternate][hreflang]').forEach(e=>{if(c404)e.remove()});if(c404)return;const here=location.origin+rtPath(Rn,lang,D);md('og:url',here,1);
 rtMetaTag('link[rel="canonical"]',()=>{const e=document.createElement('link');e.rel='canonical';return e}).href=here;
 [['uk','uk'],['en','en'],['x-default','uk']].forEach(([hl,L])=>{rtMetaTag(`link[rel="alternate"][hreflang="${hl}"]`,()=>{const e=document.createElement('link');e.rel='alternate';e.hreflang=hl;return e}).href=location.origin+rtPath(Rn,L,D)})}
/* завантаження: дані з бази → маршрут з адреси (викликається перед першим рендером) */
function rtBoot(){try{pzApply(window.PZ_DATA)}catch(e){console.warn('PZ',e)}
 let h='';try{h=location.hash||''}catch(_){}
 if(h.length>1&&h[1]!=='/'){const n=fromHash();if(n.p!=='404'){R=n;rtCat();return}}
 const pm=rtPM(),path=pm?location.pathname:(h.slice(0,2)==='#/'?h.slice(1):null);if(path==null)return;
 const m=rtParse(path,rtD(),rtIx());if(m){R=m.R;lang=m.L;rtCat()}else R={p:'404'}}
/* ---------- застосування даних з адмінки ---------- */
function pzPh(){return 'data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><rect width="400" height="400" fill="#ECEEF3"/><text x="200" y="210" text-anchor="middle" font-family="Arial" font-size="26" font-weight="700" fill="#A3A9B6" letter-spacing="4">PLASTIZA</text></svg>')}
function pzApply(Z){if(!Z||typeof Z!=='object')return;
 if(Z.seo){RT_SEO=Z.seo.meta||{};RT_SL=Z.seo.slugs||{}}
 if(Array.isArray(Z.prods)&&Z.prods.length){P.length=0;Z.prods.forEach(p=>{if(!p||p.on===false||!Array.isArray(p.v)||!p.v.length)return;p.sp=p.sp||[];p.n=p.n||{uk:'',en:''};p.d=p.d||{uk:'',en:''};P.push(p);
   if(p.img)IMGS[p.id]=p.img;else if(!IMGS[p.id])IMGS[p.id]=pzPh();
   p.v.forEach((v,i)=>{const k=p.id+'-'+i;if(p.vimg&&p.vimg[i])IMGV[k]=p.vimg[i];else if(p.img||!IMGV[k])IMGV[k]=IMGS[p.id]});
   if(Array.isArray(p.tg)&&p.tg.length)TAGS[p.id]=p.tg;if(p.pos!==undefined){if(p.pos)POS[p.id]=p.pos;else delete POS[p.id]}})}
 if(Array.isArray(Z.posts)){POSTS.length=0;Z.posts.filter(p=>p&&p.st!=='draft').forEach(p=>{const o=Object.assign({},p);if(typeof o.img==='string'&&o.img&&!IMGS[o.img]){IMGS['b'+o.id]=o.img;o.img='b'+o.id}else if(o.img==null||o.img==='')o.img=IMGS[o.id]?o.id:1;
   if(!o.min){const w=(o.b&&o.b[0]||[]).map(x=>String(x[1]||'')).join(' ').split(/\s+/).length;o.min=Math.max(1,Math.round(w/180))}
   o.tag=o.tag||['',''];o.t=o.t||['',''];o.e=o.e||['',''];o.b=o.b||[[],[]];POSTS.push(o)});
  try{POSTS.forEach(p=>{const k=p.tag[0];if(k&&!BGC.uk.some(x=>x[0]===k)){BGC.uk.push([k,k]);BGC.en.push([k,p.tag[1]||k])}})}catch(_){}}
 if(Array.isArray(Z.faqs)&&Z.faqs.length){['uk','en'].forEach(L=>{FQ[L].items=Z.faqs.filter(f=>f&&f.on!==false).map(f=>[f.c||'gen',(f.q&&(f.q[L]||f.q.uk))||'',(f.a&&(f.a[L]||f.a.uk))||''])})}
 if(Array.isArray(Z.tick)&&Z.tick.length){TICK.length=0;Z.tick.forEach(x=>x&&TICK.push(x))}
 if(Z.contacts)ctApply(Z.contacts);
 if(Z.texts&&Z.texts.T){['uk','en'].forEach(L=>{const o=Z.texts.T[L]||{};Object.keys(o).forEach(k=>{if(o[k]!==''&&o[k]!=null&&T[L])T[L][k]=o[k]})})}
 TXC={};RT_IX=null}
/* контакти: оновлюємо дані сайту + підміна захардкоджених значень у розмітці */
function ctApply(c){CTR=[];const pair=(a,b)=>{if(a&&b&&a!==b)CTR.push([a,b])},dg=s=>String(s||'').replace(/\D/g,'');
 if(Array.isArray(c.phones)&&c.phones.length){const old=PH.slice();c.phones.forEach((p,i)=>{if(!p)return;if(old[i]){pair(old[i],p);pair(dg(old[i]),dg(p))}});PH.splice(0,PH.length,...c.phones.filter(Boolean))}
 if(c.email)pair('plastiza.sale@gmail.com',c.email);
 if(Array.isArray(c.addr)&&c.addr.length){c.addr.forEach((a,i)=>{if(!a)return;if(AD[i]){pair(AD[i][0],a.uk);pair(AD[i][1],a.en)}AD[i]=[a.uk||'',a.en||a.uk||'']});AD.length=Math.min(AD.length,c.addr.length)}
 if(Array.isArray(c.hours)&&c.hours.length){c.hours.forEach((h,i)=>{if(HOURS[i]){pair(HOURS[i][0],h[0]);pair(HOURS[i][1],h[1])}HOURS[i]=[h[0]||'',h[1]||h[0]||'']});HOURS.length=c.hours.length}
 if(c.edrpou&&/^\d{6,10}$/.test(c.edrpou)){pair('ЄДРПОУ '+EDRPOU,'ЄДРПОУ '+c.edrpou);EDRPOU=c.edrpou;EDRPOU_URL='https://youcontrol.com.ua/catalog/company_details/'+EDRPOU+'/'}
 if(c.msgr)MSGR.forEach(m=>{const u=c.msgr[m[0]];if(u&&u!==m[1]){pair(m[1],u);m[1]=u}})}
function ctDom(root){if(!CTR||!CTR.length||!root)return;const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while((n=w.nextNode())){let t=n.nodeValue,o=t;CTR.forEach(([a,b])=>{if(t.indexOf(a)>-1)t=t.split(a).join(b)});if(t!==o)n.nodeValue=t}
 root.querySelectorAll('a[href],[data-cp],[data-copy]').forEach(el=>['href','data-cp','data-copy'].forEach(at=>{let v=el.getAttribute(at);if(!v)return;const o=v;CTR.forEach(([a,b])=>{if(v.indexOf(a)>-1)v=v.split(a).join(b)});if(v!==o)el.setAttribute(at,v)}))}
/* тексти сторінок: заміна блоку, якщо його HTML збігається зі стандартним */
/* регулярні вирази всередині функцій: txPass() викликається ще до виконання цього блоку */
function txInl(c){return /^(B|I|EM|STRONG|BR|SUP|SUB|SMALL|U|MARK|ABBR|TIME|WBR|S|Q|CODE)$/.test(c.tagName)||(c.tagName==='SPAN'||c.tagName==='A')&&!c.getAttribute('class')}
function txLeaf(el){if(!/\S/.test(el.textContent))return false;const ok=e=>{for(const c of e.children){if(!txInl(c)||!ok(c))return false}return true};return ok(el)}
function txCands(root){const out=[];const walk=el=>{for(const c of el.children){if(/^(SCRIPT|STYLE|SVG|TEXTAREA|SELECT|OPTION|INPUT|IMG|VIDEO|CANVAS|IFRAME|TEMPLATE|PICTURE|svg)$/.test(c.tagName))continue;if(txLeaf(c))out.push(c);else walk(c)}};if(root)walk(root);return out}
function txDec(n){return n.nodeType===1&&(n.getAttribute('aria-hidden')==='true'||n.tagName==='svg'||/^[↗→←↓✕✓✦•·+]$/.test(n.textContent.trim()))}
/* редагована частина блоку (без іконок-стрілок) — так її показує адмінка */
function txVal(el){const c=el.cloneNode(true);[...c.childNodes].forEach(n=>{if(txDec(n))n.remove()});return c.innerHTML.trim()}
function txSet(el,val){const kids=[...el.childNodes],dec=kids.filter(txDec);if(!dec.length){el.innerHTML=val;return}
 const first=kids.findIndex(n=>!dec.includes(n)&&/\S/.test(n.textContent)),pre=dec.filter(n=>first>-1&&kids.indexOf(n)<first),suf=dec.filter(n=>!pre.includes(n));
 const body=kids.filter(n=>!dec.includes(n)),tx=body.map(n=>n.textContent).join('');if(pre.length&&/^\s/.test(tx))val=' '+val;if(suf.length&&/\s$/.test(tx))val=val+' ';
 el.innerHTML=val;pre.reverse().forEach(n=>el.prepend(n));suf.forEach(n=>el.append(n))}
function txMap(){const Z=window.PZ_DATA,o=Z&&Z.texts&&Z.texts[lang];if(!o)return null;TXC=TXC||{};if(TXC[lang])return TXC[lang];const m=new Map();Object.keys(o).forEach(k=>{const v=o[k];if(typeof v==='string'&&v!=='')m.set(k,v)});return TXC[lang]=m}
function txPass(){const M=txMap();['view','foot','side'].forEach(id=>{const r=document.getElementById(id);if(!r)return;if(window.__txCap&&id!=='side')window.__txCap(id,r);
 if(M&&M.size)txCands(r).forEach(el=>{const k=el.innerHTML.trim();if(M.has(k))txSet(el,M.get(k))});ctDom(r)});lnPass()}
/* посилання в статтях: href="@ключ" (з адмінки) → справжня адреса сторінки */
function lnPass(){document.querySelectorAll('#view a[href^="@"]').forEach(a=>{const k=a.getAttribute('href').slice(1);a.setAttribute('href',rtPath(rtFromKey(k),lang,rtD()));a.dataset.rk=k})}
/* внутрішні посилання <a href="/…"> відкриваємо без перезавантаження */
document.addEventListener('click',e=>{if(e.defaultPrevented||e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const a=e.target.closest&&e.target.closest('#view a[href],#foot a[href]');if(!a||a.target==='_blank'||a.hasAttribute('download'))return;
 let h=a.getAttribute('href')||'';if(a.dataset.rk){const m=rtFromKey(a.dataset.rk);e.preventDefault();go(m.p,m.a);return}if(h[0]!=='/'||h[1]==='/')return;const m=rtParse(h,rtD(),rtIx());if(!m)return;e.preventDefault();if(m.L!==lang)lang=m.L;go(m.R.p,m.R.a)});
/* одразу після першого рендеру — до того, як інші шари перетворять стрілки на іконки */
function rtAfter(){try{txPass()}catch(e){console.warn(e)}}
/* ---------- навігація ---------- */
go=function(p,a){const keep=p==='product'&&R.p==='product'&&String(R.a).split('-')[0]===String(a).split('-')[0];R={p,a};rtCat();if(p==='product')F.col=COL[0];try{menu(false)}catch(_){}rtSet(true);render();if(!keep)scrollTo(0,0)};
var _rtFH=fromHash;fromHash=function(){let h='';try{h=location.hash||''}catch(_){}
 if(h.slice(0,2)==='#/'){const m=rtParse(h.slice(1),rtD(),rtIx());if(m){lang=m.L;return m.R}return {p:'404'}}
 if(rtPM())return R;return _rtFH()};
addEventListener('popstate',()=>{if(!rtPM())return;const m=rtParse(location.pathname,rtD(),rtIx()),n=m?m.R:{p:'404'};if(m&&rtKey(n)===rtKey(rtNorm())&&m.L===lang)return;
 const keep=n.p==='product'&&R.p==='product'&&String(R.a).split('-')[0]===String(n.a).split('-')[0];if(m)lang=m.L;R=n;rtCat();render();if(!keep)scrollTo(0,0)});
var _rtRender=render;render=function(){const r=_rtRender.apply(this,arguments);try{txPass();rtSet(false);rtHead()}catch(e){console.warn(e)}return r};
if(typeof updCat==='function'){var _rtUpd=updCat;updCat=function(){const r=_rtUpd.apply(this,arguments);try{rtSet(false);rtHead()}catch(_){}return r}}
/* перший рендер уже відбувся до цього блоку — доводимо адресу, мета й тексти */
try{txPass();rtSet(false);rtHead();try{side()}catch(_){}}catch(e){console.warn(e)}
/* превʼю поза доменом: підтягуємо дані з бази сайту */
if(!window.PZ_DATA&&!rtPM()&&location.protocol!=='file:'){fetch('https://plastiza.org/api/page?json=1').then(r=>r.ok?r.json():null).then(j=>{if(!j)return;window.PZ_DATA=j;pzApply(j);const k=rtKey(rtNorm());if(R.p==='product'||R.p==='post'){if(!rtParse(rtHere(),rtD(),rtIx()))R={p:'home'}}render()}).catch(()=>{})}
/*SYNC-END*/
