new MutationObserver(()=>requestAnimationFrame(mp2Slide)).observe(document.getElementById('view'),{childList:true});

document.addEventListener('click',e=>{const li=e.target.closest('.lf3-row li');document.querySelectorAll('.lf3-row li.open').forEach(x=>{if(x!==li)x.classList.remove('open')});if(li&&matchMedia('(hover:none)').matches)li.classList.toggle('open')});

function lfAcc(ms,em,cp){const u=lang==='uk',CP=window.ICO_CP||'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>',
PHI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
MLI='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
row=(href,txt,ic)=>`<div class="lfa-r"><a class="lfa-p" href="${href}">${ic}<span>${txt}</span></a><button type="button" class="dc-cp lfa-cp" data-cp="${txt}" aria-label="${cp} ${txt}" title="${cp}">${CP}</button></div>`,
it=(t,body,open)=>`<details class="lfa-i" name="lfacc"${open?' open':''}><summary><span>${t}</span><i aria-hidden="true"></i></summary><div class="lfa-b">${body}</div></details>`;
return `<div class="lfa">${it(u?'Месенджери':'Messengers',`<div class="lfa-ms">${ms}</div>`,1)}${it('Email',row('mailto:'+em,em,MLI))}${it(u?'Телефони':'Phones',PH.map(p=>row('tel:'+p.replace(/[^+\d]/g,''),p,PHI)).join(''))}</div>`}
document.addEventListener('toggle',e=>{const d=e.target;if(!d.classList||!d.classList.contains('lfa-i')||!d.open)return;d.parentNode.querySelectorAll('.lfa-i[open]').forEach(x=>{if(x!==d)x.open=false})},true);

/* clickable slider dots (blog, related, advantages, process) */
document.addEventListener('click',e=>{const dot=e.target.closest('.bg-dots i,.sl-dots i,.mp2-dots i');if(!dot)return;const box=dot.parentNode,idx=[...box.children].indexOf(dot);
let sc=null,el=box;for(let k=0;k<5&&el&&!sc;k++){el=el.parentElement;if(!el)break;sc=[...el.querySelectorAll('*')].find(x=>{const c=getComputedStyle(x);return /(auto|scroll)/.test(c.overflowX)&&x.scrollWidth>x.clientWidth+4})||null}
if(!sc)return;const items=[...sc.children].filter(c=>c.getBoundingClientRect().width>0&&getComputedStyle(c).position!=='absolute');if(!items[idx])return;
sc.scrollTo({left:items[idx].offsetLeft-items[0].offsetLeft,behavior:'smooth'});const h=sc.closest('.mp2');if(h)h.dispatchEvent(new Event('pointerdown'))});

/* ===== product page: transparent supply process ===== */
const SPX={uk:{lab:'Постачання',h:[['Від',0],['запиту',1],['до',0],['відвантаження',1],['—',0],['прозоро:',0],['з',0],['рахунком,',1],['звітними',1],['документами',1],['і',0],['доставкою',1],['на',0],['ваш',0],['об’єкт.',0]],
lead:'Замовляєте одну позицію чи кілька — процес однаковий. Ви завжди знаєте, на якому етапі замовлення, що буде далі і хто з вами на зв’язку.',
st:[['Запит','Обираєте позицію, розмір і кількість упаковок. Менеджер перевіряє наявність на складі та терміни.',['Відповідь у робочий час','Мінімум — 1 упаковка']],
['Рахунок','Фіксуємо ціну й умови, виставляємо рахунок на ТОВ «Пластіза». Для регулярних поставок — договір.',['Безготівкова оплата','Готівка — при самовивозі']],
['Комплектація','Збираємо замовлення у заводських упаковках з маркуванням розміру на кожній.',['Фасування від 100 шт','Перевірка перед відправкою']],
['Відвантаження','Відправляємо перевізником або Новою поштою, чи готуємо до самовивозу. Повідомляємо дані відправлення.',['Україна та ЄС','Самовивіз: Львів, Київ']],
['Документи','Разом із товаром — видаткова накладна та звітні документи для вашої бухгалтерії.',['Видаткова накладна','Звітні документи']]],
fh:'Обговорити умови постачання',fs:'Залиште контакти — менеджер зателефонує й підготує розрахунок саме на цю позицію.',nm:'Ім’я або компанія',btn:'Обговорити постачання',ok:'Дякуємо! Менеджер зв’яжеться з вами найближчим часом.'},
en:{lab:'Supply',h:[['From',0],['request',1],['to',0],['shipment',1],['—',0],['transparent:',0],['with',0],['invoice,',1],['reporting',1],['documents',1],['and',0],['delivery',1],['to',0],['your',0],['site.',0]],
lead:'One item or several — the process is the same. You always know the order stage, what comes next and who is in touch.',
st:[['Request','Choose item, size and number of packs; we check stock and lead time.',['Reply in working hours','Minimum — 1 pack']],['Invoice','We fix the price and terms and issue an invoice from PLASTIZA LLC; contract for regular supply.',['Bank transfer','Cash on pickup']],['Packing','Factory packs with size marking on each.',['Packs from 100 pcs','Checked before dispatch']],['Shipment','By carrier or Nova Poshta, or ready for pickup; we share dispatch details.',['Ukraine and EU','Pickup: Lviv, Kyiv']],['Documents','Delivery note and reporting documents come with the goods.',['Delivery note','Reporting documents']]],
fh:'Discuss supply terms',fs:'Leave your contacts — a manager will call and prepare a quote for this item.',nm:'Name or company',btn:'Discuss supply',ok:'Thank you! A manager will contact you shortly.'}};
function supplyProc(){const d=SPX[lang],u=lang==='uk',ms=['WhatsApp','Telegram','Viber'].map(n=>{const m=MSGR.find(x=>x[0]===n);return `<a href="${m[1]}" target="_blank" rel="noopener">${n}</a>`}).join(', ');
return `<section class="sp7"><div class="sp7-top"><div>${secLab(d.lab)}<h2 class="sp7-h">${d.h.map(([w,a])=>a?`<em>${w}</em>`:w).join(' ')}</h2></div>
<div class="sp7-side"><p class="sp7-c"><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a><br><a href="tel:${PH[0].replace(/[^+\d]/g,'')}">${PH[0]}</a><br>${ms}</p><p class="sp7-l">${d.lead}</p></div></div>
<ol class="sp7-st">${d.st.map((x,i)=>`<li><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${x[0]}</h3><p>${x[1]}</p><ul>${x[2].map(t=>`<li>${t}</li>`).join('')}</ul></li>`).join('')}</ol>
<form class="sp7-f" novalidate><div class="sp7-ft"><b>${d.fh}</b><span>${d.fs}</span></div><input name="name" required placeholder="${d.nm}" aria-label="${d.nm}" autocomplete="name"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${d.btn}<i aria-hidden="true">↗</i></button><p class="lf-err" role="alert" hidden></p></form></section>`}
document.addEventListener('submit',e=>{const f=e.target.closest('.sp7-f');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');
if(!d.get('name')||!d.get('phone')){er.textContent=lang==='uk'?'Вкажіть ім’я та телефон.':'Enter your name and phone.';er.hidden=false;return}er.hidden=true;
pushLead({name:d.get('name'),phone:d.get('phone'),contact:'call',type:'supply',source:leadSource('product-supply'),okText:SPX[lang].ok});f.reset()});
const _product9=product;product=function(){let h=_product9();const fq=bd('w',secFaq()),i=h.indexOf(fq);const sec=bd('sp7-bd',supplyProc());return i>-1?h.slice(0,i)+sec+h.slice(i):h+sec};

/* faceted filters: only offer options that still yield products */
function filtEx(key){const sv=F[key];F[key]=[];const r=filt();F[key]=sv;return r}
fHtml=function(){const I=LI();
const ck=(k,v,l,on)=>`<button class="ck" data-f="${k}" data-v="${v}" aria-pressed="${on}"><i>${on?'✓':''}</i>${l}</button>`;
const dd=(id,key,ti,items)=>{const n=F[key].length;return `<div class="fdd${F.o[id]?' open':''}"><button class="fdb${n?' on':''}" data-acc="${id}" aria-expanded="${!!F.o[id]}" aria-haspopup="true">${ti}${n?`<b>${n}</b>`:''}<i class="chv" aria-hidden="true"><svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="butt" stroke-linejoin="miter"><path d="M1 1.5l5 5 5-5"/></svg></i></button>${F.o[id]?`<div class="fpop"><div class="sc">${items||`<p class="fnone">${lang==='uk'?'Немає варіантів для обраних фільтрів':'No options for current filters'}</p>`}</div></div>`:''}</div>`};
const any=F.fm.length||F.ps.length||F.pu.length||F.sz.length;
const pPs=filtEx('ps'),pFm=filtEx('fm'),pPu=filtEx('pu'),pSz=filtEx('sz');
const psOpt=[['h',t('hor')],['v',t('ver')]].filter(x=>F.ps.includes(x[0])||pPs.some(p=>POS[p.id]===x[0]));
const fmOpt=P.filter(p=>F.fm.includes(p.id)||pFm.includes(p));
const puAll=[...new Map(P.map(p=>PU(p.id)).filter(x=>x[0]).map(x=>[x[0],x])).values()];const puOpt=puAll.filter(x=>F.pu.includes(x[0])||pPu.some(p=>PU(p.id)[0]===x[0]));
const szAll=[...new Set(P.flatMap(p=>p.v.map(sz)))];const szAv=new Set(pSz.flatMap(p=>p.v.map(sz)));const szOpt=szAll.filter(v=>F.sz.includes(v)||szAv.has(v));
return `<input id="q" type="search" value="${F.q}" placeholder="${t('search')}" aria-label="${t('search')}">`
+dd('ps','ps',t('f_pos'),psOpt.map(x=>ck('ps',x[0],x[1],F.ps.includes(x[0]))).join(''))
+dd('fm','fm',t('f_form'),fmOpt.map(p=>ck('fm',p.id,short(p),F.fm.includes(p.id))).join(''))
+dd('pu','pu',t('f_pur'),puOpt.map(x=>ck('pu',x[0],x[I],F.pu.includes(x[0]))).join(''))
+dd('sz','sz',t('f_size'),szOpt.map(v=>ck('sz',v,v,F.sz.includes(v))).join(''))
+(any?`<button class="fclr" data-fclr>${lang==='uk'?'Скинути':'Reset'}</button>`:'')};

/* site-supply service: what we supply + sources */
function supplyRange(){const u=lang==='uk';
const G=u?[['01','Фундамент і монолітні роботи','Фіксатори арматури, елементи опалубки, арматура, в’язальний дріт, гідроізоляція, геотекстиль'],['02','Стіни та кладка','Блоки й цегла, кладкові розчини та клеї, армуюча сітка, перемички'],['03','Покрівля й ізоляція','Утеплювачі, пароізоляція та мембрани, кріплення, герметики'],['04','Оздоблення','Клеї для плитки, штукатурки, шпаклівки, ґрунтовки, фарби'],['05','Кріплення й витратні матеріали','Анкери, дюбелі, саморізи, монтажна піна, інструмент і витратні матеріали']]
:[['01','Foundations & monolithic works','Rebar spacers, formwork parts, rebar, tie wire, waterproofing, geotextile'],['02','Walls & masonry','Blocks and bricks, masonry mortars and adhesives, mesh, lintels'],['03','Roofing & insulation','Insulation, vapour barriers and membranes, fixings, sealants'],['04','Finishing','Tile adhesives, plasters, fillers, primers, paints'],['05','Fixings & consumables','Anchors, plugs, screws, foam, tools and consumables']];
const S=u?[['Власний склад','Фіксатори арматури та елементи опалубки нашого виробництва — у наявності та під замовлення, відвантаження з Львова й Києва.'],['Склади партнерів','Супутні будівельні матеріали відвантажуємо напряму зі складів перевірених партнерів на ваш об’єкт — без проміжних перевантажень і переплат.']]
:[['Our warehouse','Rebar spacers and formwork parts we manufacture — in stock and to order, shipped from Lviv and Kyiv.'],['Partner warehouses','Related building materials shipped directly from trusted partners’ warehouses to your site — no extra handling or markups.']];
return `<section class="sr2"><div class="s5-top"><div>${secLab(u?'Асортимент':'Range')}<h2 class="s5-h">${u?'Все для об’єкта<br>в одного постачальника':'Everything for the site<br>from one supplier'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${G.length}</b>${u?'груп':'groups'}</span></div></div>
<p class="sr2-l">${u?'Звертайтеся до нас як до постачальника матеріалів на будь-якому етапі: від фіксаторів для закладки фундаменту й опалубки до клеїв, фарб і всього, що потрібно для завершення робіт. Надішліть специфікацію або кошторис — укомплектуємо об’єкт власними силами.':'Come to us as your materials supplier at any stage: from spacers for foundations and formwork to adhesives, paints and everything needed to finish the job. Send a specification or estimate — we’ll supply the site ourselves.'}</p>
<ol class="sr2-g">${G.map(g=>`<li><span class="num">${g[0]}</span><h3>${g[1]}</h3><ul>${g[2].split(/,\s*/).map(x=>`<li>${x}</li>`).join('')}</ul></li>`).join('')}</ol>
<div class="sr2-s">${S.map((x,k)=>`<div class="sr2-c${k?'':' sr2-hi'}"><span class="sr2-k">${k?(u?'Пряме відвантаження':'Direct shipping'):(u?'Від виробника':'From the maker')}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div></section>`}
const _soon10=soon;soon=function(){let h=_soon10();if(String(R.a)==='2'){const k=h.indexOf('<section class="sp6">');if(k>-1)h=h.slice(0,k)+supplyRange()+h.slice(k)}return h};

const _soon11=soon;soon=function(){let h=_soon11();const k=h.indexOf('<div id="sp5-lf">');if(k>-1)h=h.slice(0,k)+'<div class="sp-tk">'+tickerH()+'</div>'+h.slice(k);return h};

supplyRange=function(){const u=lang==='uk';
const C=u?[['01','Власний склад','Відвантаження зі складу','Окрім фіксаторів арматури та елементів опалубки власного виробництва, тримаємо на складі будівельні матеріали для всіх етапів робіт — від фундаменту до оздоблення.',['Фіксатори та опалубка','Гідроізоляція й геотекстиль','Кладкові суміші та клеї','Фарби, ґрунтовки, шпаклівки']],
['02','Склади партнерів','Пряме відвантаження','Позиції, яких немає на нашому складі, відвантажуємо напряму зі складів перевірених партнерів на ваш об’єкт — без проміжних перевантажень і переплат.',['Будь-які позиції зі специфікації','Великі обсяги під етапи робіт','Доставка на об’єкт','Один рахунок і пакет документів']]]
:[['01','Our warehouse','Shipped from stock','Besides our own rebar spacers and formwork parts, we stock building materials for every stage — from foundations to finishing.',['Spacers and formwork','Waterproofing & geotextile','Masonry mixes & adhesives','Paints, primers, fillers']],['02','Partner warehouses','Direct shipping','Items we don’t stock ship directly from trusted partners’ warehouses to your site — no extra handling or markups.',['Any item from your spec','Large volumes per stage','Delivery to site','One invoice and paperwork']]];
return `<section class="sr3"><div class="s5-top"><div>${secLab(u?'Асортимент':'Range')}<h2 class="s5-h">${u?'Все для об’єкта<br>в одного постачальника':'Everything for the site<br>from one supplier'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">02</b>${u?'склади':'sources'}</span></div></div>
<p class="sr2-l">${u?'Постачаємо будь-які будівельні матеріали, а не лише фіксатори нашого виробництва: від закладки фундаменту й опалубки до клеїв, фарб і всього, що потрібно для завершення робіт. Надішліть специфікацію або кошторис — укомплектуємо об’єкт власними силами.':'We supply any building materials, not only the spacers we make: from foundations and formwork to adhesives, paints and everything needed to finish the job. Send a spec or estimate — we’ll supply the site ourselves.'}</p>
<div class="sr3-g">${C.map(c=>`<article class="sr3-c"><div class="sr3-h"><span class="sr3-k">${c[2]}</span></div><h3>${c[1]}</h3><p>${c[3]}</p><ul>${c[4].map(x=>`<li>${x}</li>`).join('')}</ul></article>`).join('')}
<form class="sr3-c sr3-f" novalidate><div class="sr3-h"><span class="sr3-k">${u?'Відповідь у робочий час':'Reply in working hours'}</span></div><h3>${u?'Обговорити постачання':'Discuss supply'}</h3><p>${u?'Залиште контакти — менеджер передзвонить і порахує комплектацію вашого об’єкта.':'Leave your contacts — a manager will call back and price your site supply.'}</p>
<input name="name" required placeholder="${u?'Ім’я або компанія':'Name or company'}" aria-label="${u?'Ім’я або компанія':'Name or company'}" autocomplete="name"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${u?'Замовити дзвінок':'Request a call'}</button><p class="lf-err" role="alert" hidden></p></form></div></section>`};
document.addEventListener('submit',e=>{const f=e.target.closest('.sr3-f');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');
if(!d.get('name')||!d.get('phone')){er.textContent=lang==='uk'?'Вкажіть ім’я та телефон.':'Enter your name and phone.';er.hidden=false;return}er.hidden=true;
pushLead({name:d.get('name'),phone:d.get('phone'),contact:'call',type:'callback',source:leadSource('site-supply'),okText:t('qfok')});f.reset()});

/*MOLDIMG*/const MOLD2="/assets/img/sections/injection-mold-exploded.webp";/*/MOLDIMG*/
function mxPar(){const hd=document.querySelector('#view .sp5-hd.mh');if(!hd)return;const img=hd.querySelector('.mh-im img');if(!img)return;const r=hd.getBoundingClientRect(),vh=innerHeight,p=Math.min(1,Math.max(0,scrollY/Math.max(1,r.top+scrollY+r.height)));
const box=img.parentElement,ov=Math.max(0,img.offsetHeight-box.clientHeight);const cr=hd.querySelector('.crumb'),off=innerWidth>900&&cr?Math.max(0,cr.getBoundingClientRect().top-box.getBoundingClientRect().top):14;img.style.transform=`translate3d(-50%,${(off-ov*.38*p).toFixed(1)}px,0)`}
addEventListener('scroll',()=>requestAnimationFrame(mxPar),{passive:true});addEventListener('resize',mxPar);
new MutationObserver(()=>requestAnimationFrame(mxPar)).observe(document.getElementById('view'),{childList:true});
const _soon12=soon;soon=function(){let h=_soon12();if(String(R.a)==='1'){{const c0=h.indexOf('<div class="crumb"'),c1=h.indexOf('</div>',c0)+6;const crumb=h.slice(c0,c1);h=h.slice(0,c0)+h.slice(c1);const m=h.match(/<div class="sp5-meta">[\s\S]*?<\/div>/);if(m)h=h.replace(m[0],'');h=h.replace('<header class="sp5-hd">','<header class="sp5-hd mh"><div class="mh-l">'+crumb.replace('style="padding-top:28px"','')+(m?m[0]:''));h=h.replace('<div class="sp5-r">','');}const k=h.indexOf('</header>');if(k>-1)h=h.slice(0,k)+`<div class="mh-im" aria-hidden="true"><img src="${MOLD2}" alt="" draggable="false"></div>`+h.slice(k)}return h};

const _catalog12=catalog;catalog=function(){let h=_catalog12();const u=lang==='uk';const a=h.indexOf('<div class="ct1">'),b=h.indexOf('</p>',h.indexOf('<p class="cs">'))+4;if(a<0||b<4)return h;
const n=typeof VARS==='function'?VARS().length:P.length;
const top=`<section class="cth">${crumbs([[t('home'),'home'],[u?'Каталог':'Catalog']])}<div class="s5-top cth-top"><div>${secLab(u?'Продукція':'Products')}<h1 class="s5-h">${u?'Фіксатори арматури<br>та елементи опалубки':'Rebar spacers<br>and formwork parts'}</h1></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${n}</b>${u?'позицій':'items'}</span><button class="tlink" data-pdf>${u?'Каталог PDF':'PDF catalog'}<i aria-hidden="true">↓</i></button></div></div><p class="cth-p">${t('cs')}</p></section>`;
return h.slice(0,a)+top+h.slice(b)};
/* ===== PDF catalog v2: site style + services, payment, delivery ===== */
const _pdfPage1=pdfPage;pdfPage=function(){const mob=R.a==='mob',u=lang==='uk';let h=_pdfPage1();
const a=h.indexOf('<div class="pdf-doc">');if(a<0)return h;const bar=h.slice(0,a);const sw=`<div class="pq-sw no-print"><div class="pq-seg" role="group" aria-label="${u?'Формат':'Format'}"><button type="button" data-go="pdf" data-a="desk" aria-pressed="${!mob}">${u?'ПК<span class="pq-tab"> / планшет</span>':'Desktop'}</button><button type="button" data-go="pdf" data-a="mob" aria-pressed="${mob}">${u?'Мобільна':'Mobile'}</button></div><div class="pq-seg" role="group" aria-label="${u?'Мова каталогу':'Catalog language'}"><button type="button" data-pl="uk" aria-pressed="${(pdfLang||lang)==='uk'}">UA</button><button type="button" data-pl="en" aria-pressed="${(pdfLang||lang)==='en'}">EN</button></div></div>`;
const bar2=bar.replace(/<button class="btn g" data-go="pdf"[^>]*>[\s\S]*?<\/button>/,'').replace('<div class="row">','<div class="row">'+sw);
const L=(x)=>`<span class="pq-lab">${x}</span>`;
const nV=P.reduce((n,p)=>n+p.v.length,0);
const cover=`<section class="pq-cv"><div class="pq-cv-t"><span class="pq-lg">PLASTIZA</span><span class="pq-yr">${u?'Каталог':'Catalog'} · ${new Date().getFullYear()}</span></div>
<div class="pq-cv-m">${L(u?'Каталог продукції':'Product catalog')}<h1>${u?'Фіксатори арматури<br>та елементи опалубки':'Rebar spacers<br>and formwork parts'}</h1><p>${u?'ТОВ «Пластіза» — український виробник. Власне виробництво повного циклу, ціни від виробника, доставка по Україні та в ЄС.':'PLASTIZA LLC — Ukrainian manufacturer. Full-cycle in-house production, factory prices, delivery across Ukraine and the EU.'}</p></div>
<div class="pq-cv-k"><div><b>${P.length}</b><span>${u?'видів виробів':'product lines'}</span></div><div><b>${nV}</b><span>${u?'розмірів у каталозі':'sizes in stock range'}</span></div><div><b>${u?'від 100':'100+'}</b><span>${u?'шт. в упаковці':'pcs per pack'}</span></div><div><b>UA+EU</b><span>${u?'доставка в Україні та ЄС':'delivery to Ukraine & EU'}</span></div></div>
<div class="pq-cv-c"><span>${PH.map(x=>`<a href="tel:${x.replace(/[^+\d]/g,'')}">${x}</a>`).join('<br>')}</span><span><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a><br>${['WhatsApp','Telegram','Viber'].map(n=>{const m=MSGR.find(x=>x[0]===n);return `<a href="${m[1]}" target="_blank" rel="noopener">${n}</a>`}).join(' · ')}</span><span>${AD.map(x=>x[u?0:1].replace(/^\d{5},?\s*/,'')).join('<br>')}</span></div></section>`;
const toc=`<nav class="pq-toc" id="pdf-toc"><div class="pq-hd">${L(u?'Зміст':'Contents')}<h2>${u?'Зміст каталогу':'Catalog contents'}</h2></div><div class="pq-toc-g">${CATS.map(c=>`<div><h3>${c[lang]}</h3><ol>${P.filter(p=>p.cat===c.id).map(p=>`<li><a href="#pdf-p${p.id}">${title(p)}</a><i></i><span>${p.v.length} ${u?'розм.':'sizes'}</span></li>`).join('')}</ol></div>`).join('')}<div><h3>${u?'Додатково':'More'}</h3><ol><li><a href="#pdf-srv">${u?'Послуги виробництва':'Services'}</a><i></i><span>03</span></li><li><a href="#pdf-pay">${u?'Оплата':'Payment'}</a><i></i><span>02</span></li><li><a href="#pdf-dlv">${u?'Доставка':'Delivery'}</a><i></i><span>04</span></li></ol></div></div></nav>`;
const prods=P.map((p,i)=>`<section class="pq-p" id="pdf-p${p.id}"><div class="pq-im"><span class="pq-n">${String(i+1).padStart(2,'0')}</span><img src="${IMGS[p.id]}" alt=""></div><div class="pq-tx">${L(CATS.find(c=>c.id===p.cat)[lang])}<h2>${title(p)}</h2><p>${p.d[lang]}</p><table><thead><tr><th>${t('size')}</th><th>${t('price')}</th><th>${t('pack')}</th></tr></thead><tbody>${p.v.map(v=>`<tr><td>${sz(v)}</td><td><b>${fp(v[1])}</b> ${cur()}/${un(p)}</td><td>${v[2]?v[2]+' '+un(p):'—'}</td></tr>`).join('')}</tbody></table><div class="pq-ln"><a href="#pdf-toc">↑ ${u?'До змісту':'Contents'}</a><a href="${rtAbsP(p.id)}" target="_blank" rel="noopener">${u?'На сайті':'On the website'} ↗</a></div></div></section>`).join('');
const SV=[0,1,2].map(k=>[SRV[k][lang],SRV[k].s[lang],(SV5[lang].s[k]||{meta:['','']}).meta.join(' ')]);
const srv=`<section class="pq-x" id="pdf-srv"><div class="pq-hd">${L(u?'Послуги':'Services')}<h2>${u?'Послуги виробництва':'Manufacturing services'}</h2><p>${u?'Окрім власної продукції, виготовляємо вироби та пресформи під замовлення й комплектуємо будівельні об’єкти.':'Besides our own range, we mold parts and build molds to order and supply construction sites.'}</p></div><div class="pq-3">${SV.map((x,k)=>`<div class="pq-c"><span class="pq-cn">${String(k+1).padStart(2,'0')}</span><h3>${x[0]}</h3><p>${x[1]}</p><small>${x[2]}</small></div>`).join('')}</div></section>`;
const PY=u?[['Безготівковий розрахунок','Для компаній і ФОП: рахунок на ТОВ «Пластіза», відвантаження після оплати.',['Рахунок-фактура','Видаткова накладна','Звітні документи']],['Готівкою','При самовивозі зі складу у Львові або Києві за попередньою домовленістю.',['При самовивозі','Львів · Київ']]]:[['Bank transfer','For companies and sole traders: invoice from PLASTIZA LLC, shipped after payment.',['Invoice','Delivery note','Reporting docs']],['Cash','On pickup from our Lviv or Kyiv warehouse by appointment.',['On pickup','Lviv · Kyiv']]];
const pay=`<section class="pq-x" id="pdf-pay"><div class="pq-hd">${L(u?'Оплата':'Payment')}<h2>${u?'Способи оплати':'Payment options'}</h2></div><div class="pq-2">${PY.map((x,k)=>`<div class="pq-c"><span class="pq-cn">0${k+1}</span><h3>${x[0]}</h3><p>${x[1]}</p><ul>${x[2].map(y=>`<li>${y}</li>`).join('')}</ul></div>`).join('')}</div><p class="pq-note">${u?'Умови оплати для великих і регулярних партій обговорюємо індивідуально.':'Terms for large and recurring batches are agreed individually.'}</p></section>`;
const DL=u?[['Нова пошта','По всій Україні, до відділення, поштомату або на адресу.'],['Вантажні перевізники','Палетні й великі партії — до складу або на об’єкт.'],['Самовивіз','Зі складів у Львові та Києві за домовленістю з менеджером.'],['Країни ЄС','Міжнародна доставка партій за попереднім погодженням.']]:[['Nova Poshta','Across Ukraine to a branch, locker or address.'],['Freight carriers','Pallets and large batches to a warehouse or site.'],['Pickup','From Lviv and Kyiv warehouses by appointment.'],['EU countries','International batch delivery on agreement.']];
const dlv=`<section class="pq-x" id="pdf-dlv"><div class="pq-hd">${L(u?'Доставка':'Delivery')}<h2>${u?'Доставка та відвантаження':'Delivery & shipping'}</h2></div><div class="pq-4">${DL.map((x,k)=>`<div class="pq-c"><span class="pq-cn">0${k+1}</span><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>
<ol class="pq-st">${(u?['Заявка','Рахунок','Комплектація','Відвантаження','Документи']:['Request','Invoice','Packing','Shipment','Documents']).map((x,k)=>`<li><span>${String(k+1).padStart(2,'0')}</span>${x}</li>`).join('')}</ol></section>`;
const end=`<section class="pq-end"><div>${L(u?'Контакти':'Contacts')}<h2>${u?'Розрахуємо<br>ваше замовлення':'Get a quote<br>for your order'}</h2></div><div class="pq-end-c"><div><span>${u?'Телефони':'Phones'}</span>${PH.map(x=>`<b><a href="tel:${x.replace(/[^+\d]/g,'')}">${x}</a></b>`).join('')}</div><div><span>Email</span><b><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a></b><span style="margin-top:14px">${u?'Месенджери':'Messengers'}</span><b>${['WhatsApp','Telegram','Viber'].map(n=>{const m=MSGR.find(x=>x[0]===n);return `<a href="${m[1]}" target="_blank" rel="noopener">${n}</a>`}).join(' · ')}</b></div><div><span>${u?'Адреси':'Offices'}</span>${AD.map(x=>`<b>${x[u?0:1]}</b>`).join('')}<span style="margin-top:14px">${u?'Графік':'Hours'}</span><b>${HOURS.map(x=>x[u?0:1]).join(' · ')}</b></div></div></section>`;
return bar2+`<div class="pdf-doc pq">${cover}${toc}${prods}${srv}${pay}${dlv}${end}</div></div>`};


/* ===== product: "Застосування" schematic per product ===== */
function apSvg(p,vi){const u=lang==='uk',v=p.v[vi]||p.v[0],vs=String(Array.isArray(v[0])?v[0][u?0:1]:v[0]);
const nums=vs.match(/\d+/g)||[];const mm=u?'мм':'mm';
const W=640,H=300,T=(x,y,t,a='start',c='ap-t')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${t}</text>`;
const dimV=(x,y1,y2,lab,side=1)=>`<path class="ap-d" d="M${x} ${y1}V${y2}M${x-5} ${y1+7}L${x} ${y1}L${x+5} ${y1+7}M${x-5} ${y2-7}L${x} ${y2}L${x+5} ${y2-7}M${x-12} ${y1}H${x+12}M${x-12} ${y2}H${x+12}"/>`+T(x+16*side,(y1+y2)/2+4,lab,side>0?'start':'end','ap-t ap-tb');
const dimH=(y,x1,x2,lab)=>`<path class="ap-d" d="M${x1} ${y}H${x2}M${x1+7} ${y-5}L${x1} ${y}L${x1+7} ${y+5}M${x2-7} ${y-5}L${x2} ${y}L${x2-7} ${y+5}M${x1} ${y-10}V${y+10}M${x2} ${y-10}V${y+10}"/>`+T((x1+x2)/2,y-14,lab,'middle','ap-t ap-tb');
const hatch=(x,y,w,h,id)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="ap-b"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#${id})"/>`;
const defs=`<defs><pattern id="aph" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V10" class="ap-hl"/></pattern><pattern id="apc" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="4" cy="6" r="1" class="ap-dot"/><circle cx="15" cy="15" r="1.3" class="ap-dot"/><circle cx="17" cy="4" r=".8" class="ap-dot"/></pattern></defs>`;
let g='',cap='';const id=p.id;
const rng=vs.split('/')[0].replace(/-/g,'–');const cover=nums.length?(id===2?nums.join(' / '):rng)+' '+mm:'';const bar=vs.includes('/')?(u?'арматура Ø ':'bar Ø ')+vs.split('/')[1].replace('-','–')+' '+mm:'';
if([1,2,4,5].includes(id)){
 // slab section
 const base=225,ry=base-62;
 g+=`<rect x="30" y="70" width="580" height="${base-70}" class="ap-c"/><rect x="30" y="70" width="580" height="${base-70}" fill="url(#apc)"/>`;
 if(id===1){g+=`<path d="M30 ${base}H610" class="ap-l ap-mem"/>`;for(let i=0;i<46;i++){const x=34+i*12.6,y=base+10+((i*37)%24);g+=`<ellipse cx="${x}" cy="${y}" rx="${4+(i%3)}" ry="${3+(i%2)}" class="ap-l"/>`}g+=T(36,base+58,u?'Сипка основа: ґрунт, щебінь, пісок · плівка':'Loose base: soil, gravel, sand · membrane')}
 else{g+=hatch(30,base,580,26,'aph')+T(36,base+46,u?'Тверда основа: бетон або опалубка':'Hard base: concrete or formwork deck')}
 g+=`<path d="M30 ${ry-14}H610" class="ap-r ap-rl"/>`;for(let x=70;x<=590;x+=52)g+=`<circle cx="${x}" cy="${ry}" r="8" class="ap-r"/>`;
 g+=`<path d="M30 ${ry-48}H610" class="ap-r ap-rl"/>`;for(let x=96;x<=590;x+=52)g+=`<circle cx="${x}" cy="${ry-34}" r="7" class="ap-r"/>`;
 const cx=330;
 if(id===1)g+=`<path class="ap-h" d="M${cx-58} ${base}L${cx-30} ${base-14}H${cx+30}L${cx+58} ${base}Z"/><path class="ap-h" d="M${cx-11} ${base-14}V${ry-6}H${cx-6}V${ry+4}M${cx+11} ${base-14}V${ry-6}H${cx+6}V${ry+4}"/>`;
 if(id===2)g+=`<path class="ap-h" d="M${cx-26} ${base}L${cx-18} ${ry+2}H${cx-8}A8 8 0 0 0 ${cx+8} ${ry+2}H${cx+18}L${cx+26} ${base}Z"/><path class="ap-hl2" d="M${cx-10} ${base-14}a10 10 0 0 1 20 0"/>`;
 if(id===4)g+=`<path class="ap-h" d="M${cx-20} ${base}L${cx-12} ${ry+4}C${cx-10} ${ry-12} ${cx+10} ${ry-12} ${cx+12} ${ry+4}L${cx+20} ${base}Z"/>`;
 if(id===5)g+=`<path class="ap-h" d="M${cx-36} ${base}H${cx+36}L${cx+24} ${ry+10}H${cx+12}V${ry-10}H${cx-12}V${ry+10}H${cx-24}Z"/>`;
 g+=`<circle cx="${cx}" cy="${ry}" r="8" class="ap-r ap-rf"/>`;
 g+=dimV(560,ry+8,base,(u?'захисний шар ':'cover ')+cover,-1);if(bar)g+=T(604,base+(id===1?58:46),bar,'end','ap-t ap-tb');
 g+=T(36,58,u?'Плита / стяжка (переріз)':'Slab / screed (section)','start','ap-t ap-tc');
 cap={1:u?`«Настил» стоїть на сипкій основі: широка опора не дає йому занурюватися, а стійка тримає нижню сітку на висоті ${cover} — це і є захисний шар бетону під арматурою.`:`The chair sits on a loose base; its wide foot prevents sinking and keeps the bottom mesh ${cover} above the base — the concrete cover.`,
 2:u?`«Стійка» ставиться на тверду основу під нижню сітку плити. Ступінчаста висота (${cover}) дозволяє одним виробом отримати кілька варіантів захисного шару.`:`The chair stands on a hard base under the bottom mesh; stepped heights (${cover}) give several cover options with one part.`,
 4:u?`«Защіпка» защіпається на стрижень нижньої сітки й тримає його на висоті ${cover} над бетонною основою.`:`The clip snaps onto the bottom bar and holds it ${cover} above the base.`,
 5:u?`«Засувка» фіксує стрижень у пазу й тримає нижню сітку на висоті ${cover}; широка основа розподіляє навантаження каркаса.`:`The slider locks the bar in its slot and holds the mesh ${cover} above the base; the wide foot spreads the load.`}[id];
}
else if(id===3){
 const bx=120,rx=bx+70;
 g+=hatch(bx-30,40,30,230,'aph')+hatch(560,40,30,230,'aph');g+=`<rect x="${bx}" y="40" width="440" height="230" class="ap-c"/><rect x="${bx}" y="40" width="440" height="230" fill="url(#apc)"/>`;
 g+=`<path d="M${rx} 30V280" class="ap-r ap-rl"/><path d="M${rx+60} 30V280" class="ap-r ap-rl"/>`;for(let y=70;y<=250;y+=60)g+=`<circle cx="${rx+30}" cy="${y}" r="6" class="ap-r"/>`;
 const R=70,cy=155;g+=`<circle cx="${rx}" cy="${cy}" r="${R}" class="ap-h ap-hw"/><circle cx="${rx}" cy="${cy}" r="${R-12}" class="ap-hl2"/><circle cx="${rx}" cy="${cy}" r="12" class="ap-h"/>`;for(let a=0;a<12;a++){const t=a*Math.PI/6;g+=`<path class="ap-hl2" d="M${(rx+12*Math.cos(t)).toFixed(1)} ${(cy+12*Math.sin(t)).toFixed(1)}L${(rx+(R-12)*Math.cos(t)).toFixed(1)} ${(cy+(R-12)*Math.sin(t)).toFixed(1)}"/>`}
 g+=`<path d="M${rx} 30V280" class="ap-r ap-rf2"/>`;
 g+=dimH(26,bx,rx-3,(u?'захисний шар ':'cover ')+cover);if(bar)g+=T(rx+70,26,bar,'start','ap-t');
 g+=T(bx-30,292,u?'Щит опалубки':'Formwork panel')+T(560,292,u?'Щит':'Panel')+T(rx+70,292,u?'Стіна / колона (вертикальний переріз)':'Wall / column (vertical section)');
 cap=u?`«Зірочка» защіпається на вертикальний стрижень і впирається ободом у щит опалубки. Радіус колеса задає захисний шар ${cover} до поверхні стіни чи колони.`:`The wheel spacer clips onto a vertical bar and rolls against the formwork; its radius sets a ${cover} cover to the wall face.`;
}
else{
 const x1=150,x2=490,y=150;
 if(id===6||id===9){
  g+=hatch(x1-26,40,26,220,'aph')+hatch(x2,40,26,220,'aph')+`<rect x="${x1}" y="40" width="${x2-x1}" height="220" class="ap-c"/><rect x="${x1}" y="40" width="${x2-x1}" height="220" fill="url(#apc)"/>`;
  g+=`<path d="M60 ${y}H580" class="ap-r"/><path class="ap-l" d="M70 ${y-22}h22v44h-22zM548 ${y-22}h22v44h-22z"/><path class="ap-l" d="M${x1-26} ${y-30}h-18v60h18M${x2+26} ${y-30}h18v60h-18"/>`;
  g+=`<rect x="${x1+20}" y="${y-9}" width="${x2-x1-40}" height="18" class="${id===9?'ap-h':'ap-l ap-tube'}"/>`;
  g+=`<path class="${id===6?'ap-h':'ap-l ap-tube'}" d="M${x1} ${y-20}L${x1+22} ${y-11}V${y+11}L${x1} ${y+20}Z M${x2} ${y-20}L${x2-22} ${y-11}V${y+11}L${x2} ${y+20}Z"/>`;
  g+=dimH(28,x1,x2,u?'товщина стіни = довжина труби':'wall thickness = tube length');
  g+=T(x1-26,282,u?'Щит':'Panel')+T(x2+26,282,u?'Щит':'Panel','end')+T(320,282,u?'Стяжний гвинт у трубі (горизонтальний переріз)':'Tie rod inside the tube (plan section)','middle');
  cap=id===9?(u?'«Труба» надягається на стяжний гвинт між щитами: тримає відстань між ними (товщину стіни) і не дає бетону схопити гвинт — після заливки його легко витягнути.':'The spacer tube slides over the tie rod between panels, keeping their spacing and protecting the rod so it can be pulled out after pouring.')
   :(u?'«Конус» надягається на кінці труби Ø 22 мм біля щита: збільшує площу опори, не пускає бетон у трубу й формує акуратний вхід отвору.':'The cone fits on the ends of the Ø22 tube at the panel, widening the bearing area, keeping concrete out and forming a neat hole entry.');
 } else {
  g+=`<rect x="${x1}" y="40" width="${x2-x1}" height="220" class="ap-c"/><rect x="${x1}" y="40" width="${x2-x1}" height="220" fill="url(#apc)"/>`;
  g+=`<rect x="${x1}" y="${y-9}" width="${x2-x1}" height="18" class="ap-l ap-tube"/>`;
  const plug=(x,dir)=>id===7?`<path class="ap-h" d="M${x} ${y-14}h${dir*8}v28h${-dir*8}z M${x+dir*8} ${y-11}l${dir*8} 3v16l${-dir*8} 3zM${x+dir*16} ${y-9}l${dir*8} 3v12l${-dir*8} 3zM${x+dir*24} ${y-7}l${dir*8} 3v8l${-dir*8} 3z"/>`:`<path class="ap-h" d="M${x} ${y-13}h${dir*26}v26h${-dir*26}z"/>`;
  g+=plug(x1,1)+plug(x2,-1);
  g+=T(x1,28,u?'Стіна після демонтажу опалубки':'Wall after stripping')+T(x1-12,y+4,u?'фасад':'face','end')+T(x2+12,y+4,u?'фасад':'face');
  g+=dimV(x1+(id===7?44:40),y-13,y+13,'Ø 24 '+mm);
  cap=id===7?(u?'«Корок-ялинка» щільно забивається в отвір Ø 24 мм — у невикористані отвори щитів опалубки або в отвори стін після зняття опалубки. Ребра-«ялинка» не дають йому випасти.':'The fir-tree plug is driven into Ø24 holes — unused formwork holes or tie holes in the wall after stripping; its ribs hold it in place.')
   :(u?'«Корок» закриває отвір Ø 24 мм від стяжного гвинта з обох боків стіни: не пускає вологу всередину й вирівнює поверхню під оздоблення.':'The plug seals the Ø24 tie hole on both faces of the wall, keeping moisture out and leaving a clean surface.');
 }
}
return `<figure class="apx"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${u?'Схема застосування':'Application diagram'}">${defs}${g}</svg><figcaption>${cap}</figcaption></figure>`}
const _product14=product;product=function(){let h=_product14();const {p,vi}=pvParse(R.a);if(!p)return h;const u=lang==='uk';
const acc=`<details class="pda-i"><summary><span>${u?'Застосування':'Application'}</span><i aria-hidden="true"></i></summary>${apSvg(p,vi)}</details>`;
const key=u?'Ціни та фасування':'Prices';let k=h.indexOf(key);if(k<0)k=h.indexOf(u?'Доставка та оплата</span>':'Delivery & payment</span>');if(k<0)return h;const d=h.lastIndexOf('<details',k);h=h.slice(0,d)+acc+h.slice(d);
const pi=h.indexOf(key);if(pi>-1){const ds=h.lastIndexOf('<details',pi);const tag=h.slice(ds,h.indexOf('>',ds)+1);h=h.slice(0,ds)+tag.replace(/\sopen(="[^"]*")?/,'')+h.slice(ds+tag.length)}return h};
/* PDF language independent of site language */
var pdfLang=null;
const _pdfPage3=pdfPage;pdfPage=function(){const site=lang,pl=pdfLang||site;const hs=_pdfPage3();if(pl===site)return hs;let hd;lang=pl;try{hd=_pdfPage3()}finally{lang=site}const a=hs.indexOf('<div class="pdf-doc'),b=hd.indexOf('<div class="pdf-doc');if(a<0||b<0)return hs;return hs.slice(0,a)+hd.slice(b).replace('<div class="pdf-doc','<div lang="'+pl+'" class="pdf-doc')};
document.addEventListener('click',e=>{const b=e.target.closest('[data-pl]');if(b){e.preventDefault();e.stopPropagation();if(b.dataset.pl!==(pdfLang||lang)){pdfLang=b.dataset.pl;const y=scrollY;render();scrollTo(0,y)}return}if(e.target.closest('[data-l]'))pdfLang=null},true);

/* ===== Hero v6: content left, looping production video right ===== */
const HV_SRC='/assets/hero/hero-loop.mp4',HV_POSTER='/assets/hero/poster.webp',HV_ANIM='/assets/hero/hero-m.webp';
const hvSmall=()=>false;
const _homeV6=home;home=function(){let h=_homeV6();const u=lang==='uk';
const ring=(u?'ЛИТТЯ ПЛАСТИКУ • ПРЕСФОРМИ • ФІКСАТОРИ • ':'INJECTION MOLDING • MOLDS • SPACERS • ').repeat(1);
const panel=`<div class="hv"><div class="hv-f">${hvSmall()?`<img class="hv-v hv-img" src="${HV_ANIM}" alt="" decoding="async" fetchpriority="high">`:`<img class="hv-v" src="${HV_POSTER}" alt="" fetchpriority="high" decoding="sync"><video class="hv-v" data-src="${HV_SRC}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="none" aria-label="${u?'Відео з виробничого цеху':'Production floor video'}"></video>`}<span class="hv-sh" aria-hidden="true"></span>
<span class="hv-lb">[ ${u?'Власний цех':'Own production'} ]</span>
<button class="hv-card" data-cap-go><span class="hv-ck">[ ${u?'Потужності':'Capacity'} ]</span><span class="hv-cn"><b><small>×</small>${CAP.n}</b><span class="hv-cl">${u?'термопласт&shy;автоматів<br>у нашому цеху':'injection molding<br>machines in our shop'}</span><span class="hv-cs">${u?'ТПА<br>у цеху':'IMMs<br>in our shop'}</span></span><img class="hv-ci" src="${String(CAP.img).replace('tpa-macropower-800.webp','tpa-macropower-340.webp')}" alt="" draggable="false"><i aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 14 14 6M7.5 6H14v6.5"/></svg></i></button></div>
<button class="hv-ring" data-go="about" aria-label="${u?'Про виробництво':'About production'}"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="hvr" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs><text><textPath href="#hvr" textLength="286" lengthAdjust="spacing">${ring}</textPath></text></svg><i class="hv-ra" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 14 14 6M7.5 6H14v6.5"/></svg></i></button></div>`;
h=h.replace(/([^\s>]{1,40}) <span class="nw">([\s\S]*?<span class="hx-bar"><\/span><\/span>)/g,'<span class="h1l2">$1 <span class="nw">$2</span>');h=h.replace('<section class="hx">','<section class="hx hx2"><div class="hx-tex" aria-hidden="true"><i class="hx-fd"></i></div>');const k=h.indexOf('<div class="hx-sp"');h=k>-1?h.slice(0,k)+panel+h.slice(k):h.replace('<div class="hqi">',panel+'<div class="hqi">');
const ms=`<div class="hqm"><span>${u?'або напишіть нам':'or message us'}</span><div>${[['WhatsApp','#25D366'],['Telegram','#229ED9'],['Viber','#7360F2']].map(([nm,cl])=>{const m=MSGR.find(x=>x[0]===nm);return `<a href="${m[1]}" target="_blank" rel="noopener" style="--mc:${cl}" aria-label="${nm}" title="${nm}">${m[2]}</a>`}).join('')}</div></div>`;
h=h.replace(/<input name="name"[^>]*>/,`<input name="name" type="hidden" value="${u?'Консультація з головної':'Hero consultation'}">`);return h};

/* PDF: one continuous page (electronic catalog, no page breaks) */
document.addEventListener('click',e=>{if(!e.target.closest('[data-print]'))return;if(pdfDl(e))return;const d=document.querySelector('#view .pdf-doc');if(!d)return;e.preventDefault();e.stopPropagation();
const r=d.getBoundingClientRect(),W=Math.ceil(r.width),H=Math.ceil(d.scrollHeight)+2;let ps=document.getElementById('pdfpage');if(!ps){ps=document.createElement('style');ps.id='pdfpage';document.head.appendChild(ps)}const old=ps.textContent;
ps.textContent=`@page{size:${W}px ${H}px;margin:0}@media print{html.pq-cont #view .pdf-doc{width:${W}px!important;min-width:${W}px!important;max-width:${W}px!important}}`;
document.documentElement.classList.add('pq-cont');const done=()=>{document.documentElement.classList.remove('pq-cont');ps.textContent=old;removeEventListener('afterprint',done)};addEventListener('afterprint',done);
try{window.print()}catch(_){done()}},true);

/* hero capacity card → about page, capacity section */
document.addEventListener('click',e=>{const b=e.target.closest('[data-cap-go]');if(!b)return;e.preventDefault();e.stopPropagation();go('about');
let n=0;const t=()=>{const c=document.querySelector('#view .cap');if(!c){if(++n<40)return setTimeout(t,50);return}const hh=(document.querySelector('.top')||{}).offsetHeight||64;setTimeout(()=>scrollTo({top:c.getBoundingClientRect().top+scrollY-hh-8,behavior:'smooth'}),120)};setTimeout(t,30)},true);

/* ===== Phone mask + email/phone validation for all forms ===== */
const isPh=el=>el&&el.tagName==='INPUT'&&(el.type==='tel'||el.name==='phone');
function fmtPh(v){let d=v.replace(/\D/g,'');const intl=/^\s*\+/.test(v)&&d&&!'380'.startsWith(d.slice(0,3))&&!d.startsWith('380');
if(intl){d=d.slice(0,15);return '+'+d}
if(!d)return /\+/.test(v)?'+':'';if(d.startsWith('80'))d='3'+d;else if(d.startsWith('0'))d='38'+d;else if(!'380'.startsWith(d.slice(0,Math.min(3,d.length))))d='380'+d;d=d.slice(0,12);
let o='+'+d.slice(0,3);if(d.length>3)o+=' ('+d.slice(3,5);if(d.length>5)o+=') '+d.slice(5,8);if(d.length>8)o+='-'+d.slice(8,10);if(d.length>10)o+='-'+d.slice(10,12);return o}
document.addEventListener('beforeinput',e=>{const el=e.target;if(!isPh(el)||!e.data)return;if(/[^\d+\s()\-]/.test(e.data))e.preventDefault()},true);
document.addEventListener('input',e=>{const el=e.target;if(!isPh(el))return;const prev=el.dataset.pv||'',pd=prev.replace(/\D/g,'');let v=el.value;
if(e.inputType&&e.inputType.startsWith('delete')&&v.replace(/\D/g,'')===pd&&pd){const c=el.selectionStart||v.length;let i=c-1;while(i>=0&&!/\d/.test(v[i]))i--;if(i>=0)v=v.slice(0,i)+v.slice(i+1)}
const f=el.dataset.cc?ccFmt(el,v):fmtPh(v);el.value=f;el.dataset.pv=f;el.removeAttribute('aria-invalid');try{el.setSelectionRange(f.length,f.length)}catch(_){}},true);
document.addEventListener('focusin',e=>{const el=e.target;if(isPh(el)){el.setAttribute('inputmode','tel');if(!el.getAttribute('maxlength'))el.setAttribute('maxlength','20')}},true);
const EMRE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
window.addEventListener('submit',e=>{const f=e.target;if(!(f instanceof HTMLFormElement))return;const u=lang==='uk';let msg='',bad=null;
f.querySelectorAll('input').forEach(i=>{if(bad||i.type==='hidden'||i.hidden||i.offsetParent===null)return;const v=i.value.trim();if(!v)return;
if(isPh(i)){const d=v.replace(/\D/g,'');const ok=i.dataset.cc?ccOk(i):(v.startsWith('+380')?d.length===12:d.length>=10&&d.length<=15);if(!ok){bad=i;const ex=i.dataset.cc?ccEx(i):'+380 (67) 123-45-67';msg=u?'Вкажіть повний номер телефону, наприклад '+ex+'.':'Enter a full phone number, e.g. '+ex+'.'}}
else if(i.type==='email'&&!EMRE.test(v)){bad=i;msg=u?'Вкажіть коректний email, наприклад name@company.com.':'Enter a valid email, e.g. name@company.com.'}});
if(!bad){ccPrefix(f);return}e.preventDefault();e.stopImmediatePropagation();bad.setAttribute('aria-invalid','true');const er=f.querySelector('.lf-err');if(er){er.textContent=msg;er.hidden=false}else{bad.setCustomValidity(msg);bad.reportValidity();bad.addEventListener('input',()=>bad.setCustomValidity(''),{once:true})}bad.focus()},true);
/* ===== Application diagrams v2: technical drawing style ===== */
function apSvg(p,vi){const u=lang==='uk',v=p.v[vi]||p.v[0],vs=String(Array.isArray(v[0])?v[0][u?0:1]:v[0]);
const nums=vs.match(/\d+/g)||[],mm=u?'мм':'mm',id=p.id,nm=title(p);
const W=640,H=330;
const T=(x,y,t,a='start',c='aq-t')=>`<text x="${x}" y="${y}" text-anchor="${a}" class="${c}">${t}</text>`;
const arrow=(x,y,dx,dy)=>{const L=7,w=3.2,n=Math.hypot(dx,dy)||1,ux=dx/n,uy=dy/n;return `<path class="aq-ar" d="M${x} ${y}L${(x-ux*L-uy*w).toFixed(1)} ${(y-uy*L+ux*w).toFixed(1)}L${(x-ux*L+uy*w).toFixed(1)} ${(y-uy*L-ux*w).toFixed(1)}Z"/>`};
const dimV=(x,y1,y2,lab,side=1,key=1)=>{const c=key?'aq-dk':'aq-d';return `<g class="${c}"><path d="M${x} ${y1}V${y2}M${x-14} ${y1}H${x+6}M${x-14} ${y2}H${x+6}"/>${arrow(x,y1,0,-1)}${arrow(x,y2,0,1)}</g>`+T(x+12*side,(y1+y2)/2+5,lab,side>0?'start':'end',key?'aq-t aq-tk':'aq-t')};
const dimH=(y,x1,x2,lab,key=1)=>{const c=key?'aq-dk':'aq-d';return `<g class="${c}"><path d="M${x1} ${y}H${x2}M${x1} ${y-12}V${y+6}M${x2} ${y-12}V${y+6}"/>${arrow(x1,y,-1,0)}${arrow(x2,y,1,0)}</g>`+T((x1+x2)/2,y-9,lab,'middle',key?'aq-t aq-tk':'aq-t')};
const co=(n,x,y,lx,ly)=>`<path class="aq-ld" d="M${x} ${y}L${lx} ${ly}"/><circle cx="${x}" cy="${y}" r="2.6" class="aq-ldd"/><circle cx="${lx}" cy="${ly}" r="11" class="aq-co${n===1?' aq-co1':''}"/>`+T(lx,ly+4.2,n,'middle','aq-con'+(n===1?' aq-con1':''));
const brk=(x,y1,y2)=>{const m=(y1+y2)/2;return `<path class="aq-brk" d="M${x} ${y1-8}V${m-12}L${x-7} ${m-4}L${x+7} ${m+4}L${x} ${m+12}V${y2+8}"/>`};
const defs=`<defs>
<pattern id="aqc" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="4" cy="5" r="1.1" class="aq-ag"/><circle cx="16" cy="17" r="1.4" class="aq-ag"/><circle cx="21" cy="6" r=".8" class="aq-ag"/><path d="M9 18l3.2-5.4 3.2 5.4z" class="aq-agt"/><path d="M19 23l2-3.4 2 3.4z" class="aq-agt"/></pattern>
<pattern id="aqw" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V7" class="aq-hl"/></pattern>
<pattern id="aqe" width="30" height="16" patternUnits="userSpaceOnUse"><path d="M2 14l6-6M6 14l6-6M10 14l6-6" class="aq-hl"/><ellipse cx="23" cy="6" rx="3.5" ry="2.4" class="aq-pb"/></pattern>
<pattern id="aqg" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" class="aq-gr"/></pattern></defs>`;
const conc=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="aq-cf"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#aqc)"/>`;
const ply=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" class="aq-pf"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#aqw)"/><rect x="${x}" y="${y}" width="${w}" height="${h}" class="aq-po"/>`;
let g=`<rect width="${W}" height="${H}" fill="url(#aqg)"/>`,cap='',ttl='',L=[];const cover=nums.length?(id===2?nums.join(' / '):vs.split('/')[0].replace(/-/g,'–'))+' '+mm:'';const bar=vs.includes('/')?vs.split('/')[1].replace('-','–'):'';
const LG={fix:['fix',nm],bar:['bar',u?'Арматура (переріз / вздовж)':'Rebar (section / along)'],con:['con',u?'Бетон':'Concrete'],ply:['ply',u?'Щит опалубки':'Formwork panel'],soil:['soil',u?'Сипка основа + плівка':'Loose base + membrane'],deck:['ply',u?'Тверда основа / настил опалубки':'Hard base / formwork deck'],tie:['tie',u?'Стяжний гвинт і шайба':'Tie rod and waler plate'],tube:['tube',u?'Дистанційна труба':'Spacer tube'],hole:['tube',u?'Отвір від стяжки':'Tie hole']};
if([1,2,4,5].includes(id)){
 ttl=u?'Переріз плити':'Slab section';const base=252,top=86,ry=base-62,cx=320;
 g+=conc(30,top,580,base-top)+`<path class="aq-edge" d="M30 ${top}H610M30 ${base}H610"/>`+brk(30,top,base)+brk(610,top,base);
 if(id===1){g+=`<rect x="30" y="${base}" width="580" height="44" fill="url(#aqe)"/><path class="aq-mem" d="M30 ${base+2}H610"/>`}
 else g+=ply(30,base,580,22);
 // top mesh
 g+=`<rect x="30" y="${top+30}" width="580" height="7" rx="3.5" class="aq-rb"/>`;for(let x=58;x<=600;x+=48)g+=`<circle cx="${x}" cy="${top+24}" r="6.5" class="aq-rs"/>`;
 // bottom mesh
 g+=`<rect x="30" y="${ry-4}" width="580" height="8" rx="4" class="aq-rb"/>`;for(let x=82;x<=600;x+=48)if(Math.abs(x-cx)>30)g+=`<circle cx="${x}" cy="${ry-11}" r="7" class="aq-rs"/>`;
 // fixator
 if(id===1)g+=`<path class="aq-fx" d="M${cx-64} ${base}L${cx-34} ${base-15}H${cx+34}L${cx+64} ${base}Z"/><path class="aq-fx" d="M${cx-13} ${base-15}V${ry+4}H${cx-17}V${ry-9}L${cx-8} ${ry-9}V${ry+4}H${cx+8}V${ry-9}L${cx+17} ${ry-9}V${ry+4}H${cx+13}V${base-15}Z"/><path class="aq-fxl" d="M${cx-30} ${base-7}H${cx+30}"/>`;
 if(id===2)g+=`<path class="aq-fx" d="M${cx-30} ${base}L${cx-20} ${ry+5}H${cx-10}A10 10 0 0 0 ${cx+10} ${ry+5}H${cx+20}L${cx+30} ${base}Z"/><path class="aq-fxl" d="M${cx-24} ${base-16}H${cx+24}M${cx-22} ${base-32}H${cx+22}"/>`;
 if(id===4)g+=`<path class="aq-fx" d="M${cx-24} ${base}L${cx-14} ${ry+6}C${cx-14} ${ry-14} ${cx+14} ${ry-14} ${cx+14} ${ry+6}L${cx+24} ${base}Z"/><path class="aq-fxl" d="M${cx} ${ry+14}V${base-8}"/>`;
 if(id===5)g+=`<path class="aq-fx" d="M${cx-40} ${base}H${cx+40}L${cx+27} ${ry+12}H${cx+13}V${ry-12}H${cx-13}V${ry+12}H${cx-27}Z"/><path class="aq-fxl" d="M${cx-30} ${base-10}H${cx+30}"/>`;
 g+=`<circle cx="${cx}" cy="${ry-11}" r="7" class="aq-rs"/>`;
 g+=dimV(560,ry+4,base,(u?'захисний шар ':'cover ')+cover,-1,1);
 if(bar)g+=T(82+48*6+14,ry-26,'Ø '+bar+' '+mm,'start','aq-t');
 g+=co(1,cx-(id===1?44:id===5?30:22),base-8,cx-120,base-30)+co(2,130,ry-11,130,top+64)+co(3,470,top+60,470,top+60)+co(4,200,base+(id===1?24:11),200,base+(id===1?24:11));
 L=[LG.fix,LG.bar,LG.con,id===1?LG.soil:LG.deck];
 cap={1:u?`«Настил» стоїть на сипкій основі: широка опора не дає йому занурюватися, а стійка тримає нижню сітку на висоті ${cover} — це і є захисний шар бетону під арматурою.`:`The chair sits on a loose base; its wide foot prevents sinking and keeps the bottom mesh ${cover} above the base — the concrete cover.`,
 2:u?`«Стійка» ставиться на тверду основу під нижню сітку плити. Ступінчаста висота (${cover}) дозволяє одним виробом отримати кілька варіантів захисного шару.`:`The chair stands on a hard base under the bottom mesh; stepped heights (${cover}) give several cover options with one part.`,
 4:u?`«Защіпка» защіпається на стрижень нижньої сітки й тримає його на висоті ${cover} над основою.`:`The clip snaps onto the bottom bar and holds it ${cover} above the base.`,
 5:u?`«Засувка» фіксує стрижень у пазу й тримає нижню сітку на висоті ${cover}; широка основа розподіляє навантаження каркаса.`:`The slider locks the bar in its slot and holds the mesh ${cover} above the base; the wide foot spreads the load.`}[id];
}
else if(id===3){
 ttl=u?'Вертикальний переріз стіни':'Wall vertical section';const px=70,pw=26,x2=570,top=40,bot=300,bx=px+pw+64,R=64,cy=170;
 g+=ply(px,top,pw,bot-top)+ply(x2,top,pw,bot-top)+conc(px+pw,top,x2-px-pw,bot-top)+`<path class="aq-edge" d="M${px+pw} ${top}H${x2}M${px+pw} ${bot}H${x2}"/>`;
 g+=`<rect x="${bx-4}" y="${top}" width="8" height="${bot-top}" rx="4" class="aq-rb"/><rect x="${bx+56}" y="${top}" width="8" height="${bot-top}" rx="4" class="aq-rb"/>`;for(let y=70;y<=280;y+=52)g+=`<circle cx="${bx+30}" cy="${y}" r="6.5" class="aq-rs"/>`;
 g+=`<circle cx="${bx}" cy="${cy}" r="${R}" class="aq-fx"/><circle cx="${bx}" cy="${cy}" r="${R-10}" class="aq-con-bg"/>`;for(let a=0;a<12;a++){const t=a*Math.PI/6;g+=`<path class="aq-fxs" d="M${(bx+14*Math.cos(t)).toFixed(1)} ${(cy+14*Math.sin(t)).toFixed(1)}L${(bx+(R-10)*Math.cos(t)).toFixed(1)} ${(cy+(R-10)*Math.sin(t)).toFixed(1)}"/>`}
 g+=`<circle cx="${bx}" cy="${cy}" r="15" class="aq-fx"/><rect x="${bx-4}" y="${cy-30}" width="8" height="60" rx="4" class="aq-rb"/>`;
 g+=dimH(26,px+pw,bx-4,(u?'захисний шар ':'cover ')+cover,1);
 if(bar)g+=T(bx+74,26,'Ø '+bar+' '+mm,'start','aq-t');
 g+=co(1,bx+R*.71,cy-R*.71,bx+R+58,cy-R-4)+co(2,bx+60,276,bx+150,276)+co(3,470,120,470,120)+co(4,px+13,92,px+13,92);
 L=[LG.fix,LG.bar,LG.con,LG.ply];
 cap=u?`«Зірочка» защіпається на вертикальний стрижень і впирається ободом у щит опалубки. Радіус колеса задає захисний шар ${cover} до поверхні стіни чи колони.`:`The wheel spacer clips onto a vertical bar and rolls against the formwork; its radius sets a ${cover} cover to the wall face.`;
}
else{
 const x1=160,x2=480,y=170,top=60,bot=280;
 if(id===6||id===9){
  ttl=u?'Горизонтальний переріз стіни':'Wall plan section';
  g+=ply(x1-24,top,24,bot-top)+ply(x2,top,24,bot-top)+conc(x1,top,x2-x1,bot-top)+`<path class="aq-edge" d="M${x1} ${top}H${x2}M${x1} ${bot}H${x2}"/>`;
  g+=`<rect x="${x1+20}" y="${y-10}" width="${x2-x1-40}" height="20" class="${id===9?'aq-fx':'aq-tb'}"/>`;
  g+=`<path class="${id===6?'aq-fx':'aq-tb'}" d="M${x1} ${y-22}L${x1+22} ${y-12}V${y+12}L${x1} ${y+22}Z M${x2} ${y-22}L${x2-22} ${y-12}V${y+12}L${x2} ${y+22}Z"/>`;
  g+=`<rect x="56" y="${y-3}" width="528" height="6" rx="3" class="aq-rb"/><path class="aq-tie" d="M${x1-24} ${y-32}h-14v64h14ZM${x2+24} ${y-32}h14v64h-14ZM${x1-38} ${y-14}h-22v28h22ZM${x2+38} ${y-14}h22v28h-22Z"/>`;
  g+=dimH(36,x1,x2,u?'товщина стіни = довжина труби':'wall thickness = tube length',1);
  g+=co(1,id===6?x1+10:320,id===6?y+16:y+8,id===6?x1+60:320,id===6?y+66:y+66)+co(2,id===6?320:x1+10,id===6?y+8:y+16,id===6?320:x1+60,y+66)+co(3,x2-60,bot-30,x2-60,bot-30)+co(4,x1-12,top+24,x1-12,top+24)+co(5,x1-49,y,x1-49,y+64);
  L=id===6?[LG.fix,LG.tube,LG.con,LG.ply,LG.tie]:[LG.fix,['fix2',u?'Конус':'Cone'],LG.con,LG.ply,LG.tie];
  if(id===6)L[1]=LG.tube;
  cap=id===9?(u?'«Труба» надягається на стяжний гвинт між щитами: тримає відстань між ними (товщину стіни) і не дає бетону схопити гвинт — після заливки його легко витягнути.':'The spacer tube slides over the tie rod between panels, keeping their spacing and protecting the rod so it can be pulled out after pouring.')
   :(u?'«Конус» надягається на кінці труби Ø 22 мм біля щита: збільшує площу опори, не пускає бетон у трубу й формує акуратний вхід отвору.':'The cone fits on the ends of the Ø22 tube at the panel, widening the bearing area, keeping concrete out and forming a neat hole entry.');
 } else {
  ttl=u?'Стіна після зняття опалубки':'Wall after stripping';
  g+=conc(x1,top,x2-x1,bot-top)+`<path class="aq-edge" d="M${x1} ${top}V${bot}M${x2} ${top}V${bot}"/>`;
  g+=`<rect x="${x1}" y="${y-12}" width="${x2-x1}" height="24" class="aq-tb"/>`;
  const plug=(x,dir)=>id===7?`<path class="aq-fx" d="M${x-dir*6} ${y-17}h${dir*10}v34h${-dir*10}z M${x+dir*4} ${y-12}l${dir*9} 3v18l${-dir*9} 3zM${x+dir*13} ${y-11}l${dir*9} 3v16l${-dir*9} 3zM${x+dir*22} ${y-10}l${dir*9} 3v14l${-dir*9} 3z"/>`:`<path class="aq-fx" d="M${x-dir*4} ${y-16}h${dir*4}v4h${dir*26}v24h${-dir*26}v4h${-dir*4}z"/>`;
  g+=plug(x1,1)+plug(x2,-1);
  g+=T(x1-16,y+5,u?'фасад':'face','end','aq-t')+T(x2+16,y+5,u?'фасад':'face','start','aq-t');
  g+=dimV(x1+60,y-12,y+12,'Ø 24 '+mm,1,1);
  g+=co(1,x2-14,y+14,x2-60,y+70)+co(2,320,y+6,320,y+70)+co(3,400,top+36,400,top+36);
  L=[LG.fix,LG.hole,LG.con];
  cap=id===7?(u?'«Корок-ялинка» щільно забивається в отвір Ø 24 мм — у невикористані отвори щитів опалубки або в отвори стін після зняття опалубки. Ребра-«ялинка» не дають йому випасти.':'The fir-tree plug is driven into Ø24 holes — unused formwork holes or tie holes in the wall after stripping; its ribs hold it in place.')
   :(u?'«Корок» закриває отвір Ø 24 мм від стяжного гвинта з обох боків стіни: не пускає вологу всередину й вирівнює поверхню під оздоблення.':'The plug seals the Ø24 tie hole on both faces of the wall, keeping moisture out and leaving a clean surface.');
 }
}
const sw={fix:'<i class="aq-s aq-s-fix"></i>',fix2:'<i class="aq-s aq-s-fix"></i>',bar:'<i class="aq-s aq-s-bar"></i>',con:'<i class="aq-s aq-s-con"></i>',ply:'<i class="aq-s aq-s-ply"></i>',soil:'<i class="aq-s aq-s-soil"></i>',tie:'<i class="aq-s aq-s-tie"></i>',tube:'<i class="aq-s aq-s-tube"></i>'};
const leg=`<ol class="aq-lg">${L.map((x,i)=>`<li><span class="aq-n${i===0?' aq-n1':''}">${i+1}</span>${sw[x[0]]||''}<span>${x[1]}</span></li>`).join('')}</ol>`;
return `<figure class="apx aq"><div class="aq-hd"><span>${u?'Схема':'Diagram'} · ${ttl}</span><span>${u?'без масштабу':'not to scale'}</span></div><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${(u?'Схема застосування: ':'Application diagram: ')+ttl}">${defs}${g}</svg>${leg}<figcaption>${cap}</figcaption></figure>`}


/* UA headings: Unbounded is wider — tag headings and scale them to fit */
const UH_SEL='#view h1:not(.sr),#view h2';
function uhFit(){const on=false;document.querySelectorAll(UH_SEL).forEach(h=>{if(h.closest('.pdf-doc,.pa-b,.aq'))return;h.style.removeProperty('font-size');h.classList.remove('uh');if(!on)return;
const fs=parseFloat(getComputedStyle(h).fontSize);if(fs<24)return;h.classList.add('uh');let k=.8;h.style.setProperty('font-size',(fs*k).toFixed(1)+'px','important');
let n=0;while(n++<12&&h.scrollWidth>h.clientWidth+1&&k>.5){k-=.03;h.style.setProperty('font-size',(fs*k).toFixed(1)+'px','important')}})}
new MutationObserver(()=>requestAnimationFrame(uhFit)).observe(document.getElementById('view'),{childList:true});
let uhT;addEventListener('resize',()=>{clearTimeout(uhT);uhT=setTimeout(uhFit,120)});document.fonts&&document.fonts.ready.then(uhFit);

/* hero H1 (desktop): shrink to fit the left column, never overlap the video */
function hxFit(){const h=document.querySelector('#view .hx.hx2 #hxh');if(!h)return;h.style.removeProperty('font-size');if(innerWidth<1101)return;
const col=h.closest('.hx-in'),cs=getComputedStyle(col),lim=col.getBoundingClientRect().left+col.clientWidth-parseFloat(cs.paddingRight);
const right=()=>{const g=h.querySelector('.hxg-b')||h,w=document.createTreeWalker(g,NodeFilter.SHOW_TEXT);let m=0,t;while(t=w.nextNode()){if(t.parentElement.closest('.hx-dyn,.sr'))continue;const r=document.createRange();r.selectNodeContents(t);for(const b of r.getClientRects())if(b.width)m=Math.max(m,b.right)}return m};
const L=h.getBoundingClientRect().left,R0=right(),fs=parseFloat(getComputedStyle(h).fontSize),room=lim-36-L;if(R0-L>room){h.style.setProperty('font-size',(fs*room/(R0-L)).toFixed(1)+'px','important')}}
new MutationObserver(()=>requestAnimationFrame(hxFit)).observe(document.getElementById('view'),{childList:true});
let hxT;addEventListener('resize',()=>{clearTimeout(hxT);hxT=setTimeout(hxFit,100)});document.fonts&&document.fonts.ready.then(hxFit);

/* product page accordions: only one open at a time */
document.addEventListener('toggle',e=>{const d=e.target;if(!(d instanceof HTMLDetailsElement)||!d.open)return;const g=d.closest('.pda');if(!g)return;g.querySelectorAll('details[open]').forEach(x=>{if(x!==d&&x.closest('.pda')===g)x.open=false})},true);

/* ===== About hero v2: statement left, 3x2 grid right with video ===== */
const _aboutHV=about;about=function(){let h=_aboutHV();const u=lang==='uk';
const v=`<div class="pri-v">${hvSmall()?`<img class="pri-img" src="${HV_ANIM}" alt="" decoding="async">`:`<video data-src="${HV_SRC}" poster="${HV_POSTER}" autoplay muted loop playsinline webkit-playsinline disablepictureinpicture disableremoteplayback preload="none" aria-label="${u?'Відео з виробничого цеху':'Production floor video'}"></video>`}<span class="pri-vl">[ ${u?'Власний цех':'Own production'} ]</span></div>`;
h=h.replace('<section class="pri pri-1">','<section class="pri pri-1 pri-hv">');const dsc=u?'Проєктуємо та виготовляємо пресформи, ллємо пластикові вироби під тиском і випускаємо власну лінійку фіксаторів арматури. Беремося за деталі будь-якої складності — від пробної партії до серійного виробництва — і доставляємо їх у будь-яку точку України та Європи.':'We design and build injection molds, mold plastic parts and produce our own line of rebar spacers. We take on parts of any complexity — from a trial batch to serial production — and deliver them anywhere in Ukraine and Europe.';
const qf=`<div class="pri-q"><form class="hqf" novalidate aria-label="${u?'Отримати консультацію':'Request a call'}"><input name="name" type="hidden" value="${u?'Консультація зі сторінки виробництва':'Production page consultation'}"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${u?'Телефон':'Phone'}" autocomplete="tel"><button class="btn" type="submit">${u?'Отримати консультацію':'Request a call'}</button><p class="lf-err" role="alert" hidden></p></form></div>`;
h=h.replace(/(<div class="pri-l">[\s\S]*?<\/p>)(<\/div>)/,'$1'+qf+'<p class="pri-d">'+dsc+'</p>$2');
h=h.replace(/(<div class="pri-r pri-row">[\s\S]*?)(<\/div><\/section>)/,'$1'+v+'$2');return h};

/* background videos: behave like a looping animated image (force muted autoplay, no play button) */
function bgVideos(){document.querySelectorAll('#view .hv-v, #view .pri-v video').forEach(v=>{v.muted=true;v.defaultMuted=true;v.playsInline=true;v.setAttribute('muted','');v.controls=false;v.removeAttribute('controls');
if(!v.dataset.bg){v.dataset.bg=1;v.addEventListener('pause',()=>{if(!document.hidden)setTimeout(()=>v.play().catch(()=>{}),50)})}
if(v.paused){const p=v.play();p&&p.catch(()=>{})}})}
new MutationObserver(()=>requestAnimationFrame(bgVideos)).observe(document.getElementById('view'),{childList:true});
['touchstart','pointerdown','scroll','visibilitychange'].forEach(ev=>addEventListener(ev,()=>{if(!document.hidden)bgVideos()},{passive:true}));

/* header icons: support headset + labelled menu */
const ICO_HS='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 13.5V12a7.5 7.5 0 0 1 15 0v1.5"/><rect x="3.5" y="13" width="4" height="6" rx="1.6"/><rect x="16.5" y="13" width="4" height="6" rx="1.6"/><path d="M18.5 19v.3c0 1.5-1.4 2.2-3.6 2.2H13"/><circle cx="12.2" cy="21.5" r=".9" fill="currentColor" stroke="none"/></svg>';
const ICO_MENU='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M4 7.5h16M4 12h16M4 16.5h10"/></svg>';
function hdrIcons(){const q=document.getElementById('qcb'),m=document.getElementById('burger'),u=lang==='uk';
if(q&&!q.dataset.hs){q.innerHTML=ICO_HS;q.dataset.hs=1}if(q)q.setAttribute('aria-label',u?'Зв’язатися з нами':'Contact us');
if(m){m.classList.add('bm');m.innerHTML=ICO_MENU+`<span class="bm-t">${u?'Меню':'Menu'}</span>`;m.setAttribute('aria-label',u?'Меню':'Menu')}}
hdrIcons();new MutationObserver(()=>hdrIcons()).observe(document.getElementById('view'),{childList:true});

/* ===== Phone: country picker (iOS-style) + per-country mask ===== */
const PCC=[["AD","376","### ###",6,9,0],["AE","971","## ### ####",9,9,1],["AF","93","## ### ####",9,9,2],["AG","1","##########",10,10,3],["AI","1","##########",10,10,4],["AL","355","## ### ####",9,9,5],["AM","374","## ######",8,8,6],["AO","244","### ### ###",9,9,7],["AR","54","# ## ####-####",10,11,8],["AS","1","##########",10,10,9],["AT","43","### ######",7,13,10],["AU","61","### ### ###",9,9,11],["AW","297","### ####",7,7,12],["AX","358","#########",6,10,13],["AZ","994","## ### ## ##",9,9,14],["BA","387","## ### ###",8,9,15],["BB","1","##########",10,10,16],["BD","880","####-######",10,10,17],["BE","32","### ## ## ##",9,9,18],["BF","226","## ## ## ##",8,8,19],["BG","359","## ### ###",8,9,20],["BH","973","#### ####",8,8,21],["BI","257","## ## ## ##",8,8,22],["BJ","229","## ## ## ## ##",10,10,23],["BL","590","#########",9,9,24],["BM","1","##########",10,10,25],["BN","673","### ####",7,7,26],["BO","591","########",8,8,27],["BR","55","## #####-####",10,11,28],["BS","1","##########",10,10,29],["BT","975","## ## ## ##",8,8,30],["BW","267","## ### ###",8,8,31],["BZ","501","###-####",7,7,32],["CA","1","(###) ###-####",10,10,33],["CC","61","#########",9,9,34],["CD","243","### ### ###",7,9,35],["CF","236","## ## ## ##",8,8,36],["CG","242","## ### ####",9,9,37],["CH","41","## ### ## ##",9,9,38],["CI","225","## ## ## ####",10,10,39],["CK","682","## ###",5,5,40],["CL","56","# #### ####",9,9,41],["CM","237","# ## ## ## ##",9,9,42],["CN","86","### #### ####",11,11,43],["CO","57","### #######",10,10,44],["CR","506","#### ####",8,8,45],["CU","53","# #######",8,8,46],["CV","238","### ## ##",7,7,47],["CW","599","# ### ####",7,8,48],["CX","61","#########",9,9,49],["CY","357","## ######",8,8,50],["CZ","420","### ### ###",9,9,51],["DE","49","#### #######",10,11,52],["DJ","253","## ## ## ##",8,8,53],["DK","45","## ## ## ##",8,8,54],["DM","1","##########",10,10,55],["DO","1","##########",10,10,56],["DZ","213","### ## ## ##",9,9,57],["EC","593","## ### ####",9,9,58],["EE","372","#### ####",7,8,59],["EG","20","## ########",10,10,60],["EH","212","#########",9,9,61],["ER","291","# ### ###",7,7,62],["ES","34","### ## ## ##",9,9,63],["ET","251","## ### ####",9,9,64],["FI","358","## #######",6,10,65],["FJ","679","### ####",7,7,66],["FK","500","#####",5,5,67],["FM","691","### ####",7,7,68],["FO","298","######",6,6,69],["FR","33","# ## ## ## ##",9,9,70],["GA","241","## ## ## ##",7,8,71],["GB","44","#### ######",10,10,72],["GD","1","##########",10,10,73],["GE","995","### ## ## ##",9,9,74],["GF","594","### ## ## ##",9,9,75],["GG","44","##########",10,10,76],["GH","233","## ### ####",9,9,77],["GI","350","########",8,8,78],["GL","299","## ## ##",6,6,79],["GM","220","### ####",7,7,80],["GN","224","### ## ## ##",9,9,81],["GP","590","### ## ## ##",9,9,82],["GQ","240","### ### ###",9,9,83],["GR","30","### ### ####",10,10,84],["GT","502","#### ####",8,8,85],["GU","1","##########",10,10,86],["GW","245","### ### ###",9,9,87],["GY","592","### ####",7,7,88],["HK","852","#### ####",8,8,89],["HN","504","####-####",8,8,90],["HR","385","## ### ####",8,9,91],["HT","509","## ## ####",8,8,92],["HU","36","## ### ####",9,9,93],["ID","62","###-###-###",9,12,94],["IE","353","## ### ####",9,9,95],["IL","972","##-###-####",9,9,96],["IM","44","##########",10,10,97],["IN","91","##### #####",10,10,98],["IO","246","### ####",7,7,99],["IQ","964","### ### ####",10,10,100],["IR","98","### ### ####",10,10,101],["IS","354","### ####",7,9,102],["IT","39","### ### ####",9,10,103],["JE","44","##########",10,10,104],["JM","1","##########",10,10,105],["JO","962","# #### ####",9,9,106],["JP","81","##-####-####",10,10,107],["KE","254","### ######",9,9,108],["KG","996","### ### ###",9,9,109],["KH","855","## ### ###",8,9,110],["KI","686","########",8,8,111],["KM","269","### ## ##",7,7,112],["KN","1","##########",10,10,113],["KP","850","### ### ####",10,10,114],["KR","82","##-####-####",9,10,115],["KW","965","### #####",8,8,116],["KY","1","##########",10,10,117],["KZ","7","##########",10,10,118],["LA","856","## ## ### ###",9,10,119],["LB","961","## ### ###",7,8,120],["LC","1","##########",10,10,121],["LI","423","### ### ###",7,9,122],["LK","94","## ### ####",9,9,123],["LR","231","## ### ####",7,9,124],["LS","266","#### ####",8,8,125],["LT","370","### #####",8,8,126],["LU","352","### ### ###",9,9,127],["LV","371","## ### ###",8,8,128],["LY","218","##-#######",9,9,129],["MA","212","# ## ## ## ##",9,9,130],["MC","377","# ## ## ## ##",8,9,131],["MD","373","### ## ###",8,8,132],["ME","382","## ### ###",8,8,133],["MF","590","#########",9,9,134],["MG","261","## ## ### ##",9,9,135],["MH","692","###-####",7,7,136],["MK","389","## ### ###",8,8,137],["ML","223","## ## ## ##",8,8,138],["MM","95","# ### ####",7,10,139],["MN","976","#### ####",8,8,140],["MO","853","#### ####",8,8,141],["MP","1","##########",10,10,142],["MQ","596","### ## ## ##",9,9,143],["MR","222","## ## ## ##",8,8,144],["MS","1","##########",10,10,145],["MT","356","#### ####",8,8,146],["MU","230","#### ####",8,8,147],["MV","960","###-####",7,7,148],["MW","265","### ## ## ##",9,9,149],["MX","52","### ### ####",10,10,150],["MY","60","##-### ####",9,10,151],["MZ","258","## ### ####",9,9,152],["NA","264","## ### ####",9,9,153],["NC","687","##.##.##",6,6,154],["NE","227","## ## ## ##",8,8,155],["NF","672","# #####",6,6,156],["NG","234","### ### ####",10,10,157],["NI","505","#### ####",8,8,158],["NL","31","# ########",9,11,159],["NO","47","## ## ## ##",8,8,160],["NP","977","###-#######",10,10,161],["NR","674","### ####",7,7,162],["NU","683","### ####",4,7,163],["NZ","64","## ### ####",8,10,164],["OM","968","#### ####",8,8,165],["PA","507","####-####",7,8,166],["PE","51","### ### ###",9,9,167],["PF","689","## ## ## ##",8,8,168],["PG","675","#### ####",8,8,169],["PH","63","### ### ####",10,10,170],["PK","92","### #######",10,10,171],["PL","48","### ### ###",9,9,172],["PM","508","## ## ##",6,9,173],["PR","1","##########",10,10,174],["PS","970","### ### ###",9,9,175],["PT","351","### ### ###",9,9,176],["PW","680","### ####",7,7,177],["PY","595","### ######",9,9,178],["QA","974","#### ####",8,8,179],["RE","262","### ## ## ##",9,9,180],["RO","40","### ### ###",9,9,181],["RS","381","## #######",8,10,182],["RW","250","### ### ###",9,9,183],["SA","966","## ### ####",9,9,184],["SB","677","## #####",5,7,185],["SC","248","# ### ###",7,7,186],["SD","249","## ### ####",9,9,187],["SE","46","## ### ## ##",9,9,188],["SG","65","#### ####",8,8,189],["SI","386","## ### ###",8,8,190],["SK","421","### ### ###",9,9,191],["SL","232","## ######",8,8,192],["SM","378","## ## ## ##",8,8,193],["SN","221","## ### ## ##",9,9,194],["SO","252","# #######",7,9,195],["SR","597","###-####",7,7,196],["SS","211","### ### ###",9,9,197],["ST","239","### ####",7,7,198],["SV","503","#### ####",8,8,199],["SX","1","##########",10,10,200],["SY","963","### ### ###",9,9,201],["SZ","268","#### ####",8,8,202],["TC","1","##########",10,10,203],["TD","235","## ## ## ##",8,8,204],["TG","228","## ## ## ##",8,8,205],["TH","66","## ### ####",9,9,206],["TJ","992","## ### ####",9,9,207],["TK","690","####",4,7,208],["TL","670","#### ####",8,8,209],["TM","993","## ######",8,8,210],["TN","216","## ### ###",8,8,211],["TO","676","### ####",7,7,212],["TR","90","### ### ## ##",10,10,213],["TT","1","##########",10,10,214],["TV","688","## ####",6,7,215],["TW","886","### ### ###",9,9,216],["TZ","255","### ### ###",9,9,217],["UA","380","(##) ###-##-##",9,9,218],["UG","256","### ######",9,9,219],["US","1","(###) ###-####",10,10,220],["UY","598","## ### ###",8,8,221],["UZ","998","## ### ## ##",9,9,222],["VA","39","##########",9,10,223],["VC","1","##########",10,10,224],["VE","58","###-#######",10,10,225],["VG","1","##########",10,10,226],["VI","1","##########",10,10,227],["VN","84","### ### ###",9,9,228],["VU","678","### ####",7,7,229],["WF","681","## ## ##",6,6,230],["WS","685","## #####",7,10,231],["XK","383","## ### ###",8,8,232],["YE","967","### ### ###",9,9,233],["YT","262","#########",9,9,234],["ZA","27","## ### ####",5,9,235],["ZM","260","## #######",9,9,236],["ZW","263","## ### ####",9,9,237]];
const PRIO=['UA','PL','DE','IT','FR','ES','GB','US','CZ','SK','RO','MD','HU','AT','NL','BE','LT','LV','EE','CA','IL','TR','GE'];
const prioIx=i=>{const k=PRIO.indexOf(i);return k<0?99:k};
const ccOf=el=>PCC.find(c=>c[0]===el.dataset.cc)||PCC.find(c=>c[0]==='UA');
const ccMax=c=>(c[2].match(/#/g)||[]).length;
const ccLim=c=>Math.max(c[4],ccMax(c));
let _dn={};const ccName=iso=>{const l=lang==='uk'?'uk':'en';try{_dn[l]=_dn[l]||new Intl.DisplayNames([l],{type:'region'});return _dn[l].of(iso)||iso}catch(_){return iso}};
const ccFlag=c=>`<i class="phf" style="background-position:${(c[5]%16)*100/(16-1)}% ${Math.floor(c[5]/16)*100/(15-1)}%"></i>`;

/* country search in any language */
const ccNorm=v=>v.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[’'`ʼ]/g,'');
let _ccIx=null;
function ccIndex(){if(_ccIx)return _ccIx;_ccIx={};const L=['uk','en','ru','pl','de','fr','es','it','pt','nl','cs','sk','ro','hu','bg','sr','hr','sl','lt','lv','et','fi','sv','da','no','el','tr','he','ar','fa','hi','zh','zh-Hant','ja','ko','ka','hy','az','kk','uz','be','vi','th','id','ms'];
const dn=L.map(l=>{try{return new Intl.DisplayNames([l],{type:'region'})}catch(_){return null}}).filter(Boolean);
const extra={US:'usa america сша америка',GB:'uk britain england великобританія англія британія',AE:'uae емірати оае',CZ:'czech republic чехія',KR:'korea корея',KP:'north korea',NL:'holland голландія',MD:'молдавія',CI:'ivory coast',TR:'turkey турція турция',MK:'macedonia македонія',SZ:'swaziland',CV:'cape verde',MM:'burma бірма',CD:'congo конго',CG:'congo конго'};
PCC.forEach(c=>{const names=new Set();dn.forEach(d=>{try{const n=d.of(c[0]);if(n&&n!==c[0])names.add(n)}catch(_){}});if(extra[c[0]])names.add(extra[c[0]]);_ccIx[c[0]]=ccNorm([...names].join(' | '))});return _ccIx}
function ccList(){const pr=PRIO.map(i=>PCC.find(c=>c[0]===i)).filter(Boolean);const loc=lang==='uk'?'uk':'en';const rest=PCC.filter(c=>!PRIO.includes(c[0])).sort((a,b)=>ccName(a[0]).localeCompare(ccName(b[0]),loc));return [pr,rest]}
function ccFmt(el,v){
if(/^\s*\+/.test(v)){const dd=v.replace(/\D/g,'');const cands=PCC.filter(x=>dd.startsWith(x[1])).sort((a,b)=>b[1].length-a[1].length||prioIx(a[0])-prioIx(b[0]));const m=cands[0];const amb=PCC.some(x=>x[1].startsWith(dd)&&x[1].length>dd.length);if(!m||amb)return '+'+dd.slice(0,4);if(m[1]!==ccOf(el)[1])ccSet(el,m[0])}
const c=ccOf(el);let d=v.replace(/\D/g,'');const code=c[1];
if(/^\s*\+/.test(v)&&d.startsWith(code))d=d.slice(code.length);else if(d.length>ccLim(c)&&d.startsWith(code))d=d.slice(code.length);
if(c[0]==='UA'&&d.startsWith('0'))d=d.slice(1);
d=d.slice(0,ccLim(c));let o='',k=0;for(const ch of c[2]){if(k>=d.length)break;if(ch==='#')o+=d[k++];else o+=ch}if(k<d.length)o+=d.slice(k);return o.replace(/[\s(\-]+$/,'')}
function ccOk(el){const c=ccOf(el),n=el.value.replace(/\D/g,'').length;return n>=c[3]&&n<=ccLim(c)}
function ccEx(el){const c=ccOf(el);let k=0;const ex='671234567890123';return '+'+c[1]+' '+c[2].replace(/#/g,()=>ex[k++%ex.length])}
function ccPrefix(f){f.querySelectorAll('input[data-cc]').forEach(i=>{const v=i.value.trim();if(!v||v.startsWith('+'))return;const full='+'+ccOf(i)[1]+' '+v;i.value=full;setTimeout(()=>{if(i.value===full)i.value=v},0)})}
function ccSet(el,iso){el.dataset.cc=iso;const w=el.closest('.phw');if(w)ccUpd(w)}
function ccUpd(w){const el=w.querySelector('input'),b=w.querySelector('.phc'),c=ccOf(el);
b.innerHTML=`${ccFlag(c)}<span>+${c[1]}</span><svg viewBox="0 0 10 6" width="9" height="6" aria-hidden="true"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`;
b.setAttribute('aria-label',(lang==='uk'?'Код країни: ':'Country code: ')+ccName(c[0])+' +'+c[1]);
el.placeholder=c[2].replace(/#/g,'0');el.setAttribute('maxlength',c[2].length+4);
const pad=()=>{if(!b.offsetWidth)return;if(innerWidth<=760&&typeof phCentre==='function'){phCentre(el);return}const p=(b.offsetWidth+16)+'px';el.style.setProperty('padding-left',p,'important');el.style.setProperty('padding-right','16px','important')};pad();requestAnimationFrame(pad)}
function ccEnhance(root){(root||document).querySelectorAll('input[type=tel]:not([data-cc]),input[name=phone]:not([type=hidden]):not([data-cc])').forEach(el=>{
el.dataset.cc='UA';el.classList.add('phw-i');if(el.value)el.value=ccFmt(el,el.value);
const w=document.createElement('span');w.className='phw';el.parentNode.insertBefore(w,el);w.appendChild(el);
const b=document.createElement('button');b.type='button';b.className='phc';b.setAttribute('aria-haspopup','listbox');b.setAttribute('aria-expanded','false');w.insertBefore(b,el);ccUpd(w)})}
function ccRepad(){document.querySelectorAll('.phw').forEach(w=>{const el=w.querySelector('input'),b=w.querySelector('.phc');if(b&&b.offsetWidth){if(innerWidth<=760&&typeof phCentre==='function'){phCentre(el);return}const p=(b.offsetWidth+16)+'px';el.style.setProperty('padding-left',p,'important');el.style.setProperty('padding-right','16px','important')}})}
let ccOpenEl=null;
function ccClose(){const d=document.getElementById('phdd');if(d)d.remove();const sc=document.getElementById('phdscrim');if(sc)sc.remove();document.documentElement.classList.remove('phd-lock');if(ccOpenEl){ccOpenEl.setAttribute('aria-expanded','false');ccOpenEl=null}}
function ccOpen(btn){ccClose();const w=btn.closest('.phw'),el=w.querySelector('input'),cur=ccOf(el),u=lang==='uk';ccOpenEl=btn;btn.setAttribute('aria-expanded','true');
const [pr,rest]=ccList();
const item=c=>`<li role="option" data-iso="${c[0]}" aria-selected="${c[0]===cur[0]}" tabindex="-1">${ccFlag(c)}<b>${c[0]}</b><span class="phd-n">${ccName(c[0])}</span><span class="phd-c">+${c[1]}</span></li>`;
const d=document.createElement('div');d.id='phdd';d.className='phd';
d.innerHTML=`<div class="phd-s"><svg viewBox="0 0 20 20" width="15" height="15" aria-hidden="true"><circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M13.5 13.5 17 17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><input type="search" placeholder="${u?'Пошук країни або коду':'Search country or code'}" aria-label="${u?'Пошук країни':'Search country'}" autocomplete="off"></div><ul role="listbox">${pr.map(item).join('')}<li class="phd-sep" role="presentation"></li>${rest.map(item).join('')}</ul>`;
(btn.closest('dialog[open]')||document.body).appendChild(d);
const sheet=false;if(sheet&&window.visualViewport){const vv=visualViewport;const fitVV=()=>{if(!document.body.contains(d)){vv.removeEventListener('resize',fitVV);vv.removeEventListener('scroll',fitVV);return}const kb=Math.max(0,innerHeight-vv.height-vv.offsetTop);d.style.setProperty('bottom',kb+'px','important');d.style.setProperty('max-height',Math.min(560,vv.height*.85)+'px','important')};vv.addEventListener('resize',fitVV);vv.addEventListener('scroll',fitVV)}if(sheet){d.classList.add('phd-sheet');const sc=document.createElement('div');sc.className='phd-scrim';sc.id='phdscrim';document.body.insertBefore(sc,d);document.documentElement.classList.add('phd-lock')}
const pos=()=>{if(sheet)return;const r=w.getBoundingClientRect(),vh=innerHeight,below=vh-r.bottom-16,above=r.top-16,up=below<240&&above>below+40;const H=Math.round(Math.min(380,Math.max(200,up?above:below)));
d.style.width=Math.min(Math.max(r.width,320),innerWidth-24)+'px';d.style.maxHeight=H+'px';d.style.left=Math.min(Math.max(12,r.left),innerWidth-12-d.offsetWidth)+'px';
d.style.top=(up?r.top-8-d.offsetHeight:r.bottom+8)+'px';d.classList.toggle('up',up)};
pos();
const sel=d.querySelector('[aria-selected=true]');const ul=d.querySelector('ul');if(sel)ul.scrollTop=Math.max(0,sel.offsetTop-ul.clientHeight/2);
const q=d.querySelector('input');if(matchMedia('(hover:hover)').matches)q.focus({preventScroll:true});
q.addEventListener('input',()=>{const t=ccNorm(q.value.trim()).replace(/^\+/,'');const ix=ccIndex();d.querySelectorAll('li[data-iso]').forEach(li=>{const c=PCC.find(x=>x[0]===li.dataset.iso);li.hidden=!!t&&!((ix[c[0]]||'').includes(t)||c[0].toLowerCase()===t||c[1].startsWith(t))});d.querySelector('.phd-sep').hidden=!!t;pos()});
d.addEventListener('click',e=>{const li=e.target.closest('li[data-iso]');if(!li)return;ccSet(el,li.dataset.iso);el.value=ccFmt(el,el.value);el.dataset.pv=el.value;ccClose();el.focus()});
d.addEventListener('keydown',e=>{const items=[...d.querySelectorAll('li[data-iso]:not([hidden])')];const i=items.indexOf(document.activeElement);
if(e.key==='ArrowDown'){e.preventDefault();(items[i+1]||items[0]).focus()}else if(e.key==='ArrowUp'){e.preventDefault();(i>0?items[i-1]:q).focus()}
else if(e.key==='Enter'&&document.activeElement.dataset&&document.activeElement.dataset.iso){e.preventDefault();document.activeElement.click()}
else if(e.key==='Escape'){ccClose();btn.focus()}});
d._pos=pos}
document.addEventListener('click',e=>{const b=e.target.closest('.phc');if(b){e.preventDefault();e.stopPropagation();ccOpenEl===b?ccClose():ccOpen(b);return}if(!e.target.closest('#phdd'))ccClose()},true);
addEventListener('resize',()=>{const d=document.getElementById('phdd');if(d&&d._pos)d._pos();ccRepad()});
addEventListener('scroll',e=>{const d=document.getElementById('phdd');if(d&&!d.contains(e.target)&&d._pos)d._pos()},true);
ccEnhance();new MutationObserver(()=>{ccEnhance();requestAnimationFrame(ccRepad)}).observe(document.body,{childList:true,subtree:true});
document.addEventListener('reset',e=>setTimeout(()=>e.target.querySelectorAll&&e.target.querySelectorAll('.phw input').forEach(el=>ccSet(el,'UA')),0),true);

/* mobile: optically centre the phone number in the whole field without touching the country chip */
const _phCv=document.createElement('canvas').getContext('2d');
function phCentre(el){if(!el||!el.classList.contains('phw-i'))return;const w=el.closest('.phw'),b=w&&w.querySelector('.phc');if(!b||!b.offsetWidth)return;
if(innerWidth>760){el.style.setProperty('text-align','left','important');return}
const cs=getComputedStyle(el);_phCv.font=`${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const ls=parseFloat(cs.letterSpacing)||0;const txt=el.value||el.placeholder||'';const tw=_phCv.measureText(txt).width+ls*txt.length;
const W=el.offsetWidth,minL=b.offsetLeft+b.offsetWidth+12;const L=Math.max(minL,(W-tw)/2);
el.style.setProperty('text-align','left','important');el.style.setProperty('padding-left',Math.round(L)+'px','important');el.style.setProperty('padding-right','12px','important')}
function phCentreAll(){document.querySelectorAll('.phw-i').forEach(phCentre)}
document.addEventListener('input',e=>{if(e.target.classList&&e.target.classList.contains('phw-i'))phCentre(e.target)});
addEventListener('resize',()=>requestAnimationFrame(phCentreAll));
new MutationObserver(()=>requestAnimationFrame(phCentreAll)).observe(document.body,{childList:true,subtree:true});
document.fonts&&document.fonts.ready.then(phCentreAll);

/* one-row phone forms: stack input over button when the number would not fit */
function phStack(){document.querySelectorAll('#view .hx.hx2 .hqf, #view .pri-q .hqf, #view .cfb .s5-cf').forEach(f=>{const w=f.querySelector('.phw'),b=f.querySelector('.phc'),i=w&&w.querySelector('input'),btn=f.querySelector('.btn');if(!w||!b||!i||!btn)return;
if(innerWidth<=760){f.classList.remove('ph-stk');return}
const cs=getComputedStyle(i);_phCv.font=`${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;const need=b.offsetWidth+16+_phCv.measureText(i.placeholder||'(00) 000-00-00').width+28;
const avail=(f.classList.contains('ph-stk')?f.parentElement.clientWidth:f.clientWidth)-btn.offsetWidth-8;f.classList.toggle('ph-stk',avail<Math.max(need,280))})}
addEventListener('resize',()=>requestAnimationFrame(phStack));new MutationObserver(()=>requestAnimationFrame(phStack)).observe(document.getElementById('view'),{childList:true});document.fonts&&document.fonts.ready.then(phStack);

/* lead form messengers: brand-coloured round icons */
const MSG_ICO={"WhatsApp": "<svg viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle class=\"mi-bg\" cx=\"16\" cy=\"16\" r=\"16\" fill=\"#25D366\"/><g transform=\"translate(7 7) scale(.75)\"><path class=\"mi-g\" fill=\"#fff\" d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\"/></g></svg>", "Telegram": "<svg viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle class=\"mi-u\" cx=\"16\" cy=\"16\" r=\"14\" fill=\"#fff\"/><g transform=\"scale(1.3333)\"><path class=\"mi-t\" fill=\"#229ED9\" d=\"M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z\"/></g></svg>", "Viber": "<svg viewBox=\"0 0 32 32\" aria-hidden=\"true\"><circle class=\"mi-bg\" cx=\"16\" cy=\"16\" r=\"16\" fill=\"#7360F2\"/><g transform=\"translate(7.2 7) scale(.75)\"><path class=\"mi-g\" fill=\"#fff\" d=\"M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z\"/></g></svg>"};
function msgIcons(){document.querySelectorAll('.lf .mc[data-mc] .dd-i, .lf .dd [data-dv] .dd-i, .lf .dd-b .dd-i').forEach(i=>{const host=i.closest('[data-mc],[data-dv]');const n=host?(host.dataset.mc||host.dataset.dv):(i.closest('.dd').querySelector('input[name=msgr]')||{}).value;if(MSG_ICO[n]&&i.dataset.ic!==n+'2'){i.innerHTML=MSG_ICO[n];i.dataset.ic=n+'2';i.classList.add('mi')}})}
new MutationObserver(()=>requestAnimationFrame(msgIcons)).observe(document.body,{childList:true,subtree:true,characterData:true});
document.addEventListener('click',()=>setTimeout(msgIcons,0),true);

/* direct-contact buttons: crisp brand glyphs */
const DC_GL={"WhatsApp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z", "Telegram": "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", "Viber": "M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.696 6.7.633 9.817.57 12.933.488 18.776 6.12 20.36h.003l-.004 2.416s-.037.977.61 1.177c.777.242 1.234-.5 1.98-1.302.407-.44.972-1.084 1.397-1.58 3.85.326 6.812-.416 7.15-.525.776-.252 5.176-.816 5.892-6.657.74-6.02-.36-9.83-2.34-11.546-.596-.55-3.006-2.3-8.375-2.323 0 0-.395-.025-1.037-.017zm.058 1.693c.545-.004.88.017.88.017 4.542.02 6.717 1.388 7.222 1.846 1.675 1.435 2.53 4.868 1.906 9.897v.002c-.604 4.878-4.174 5.184-4.832 5.395-.28.09-2.882.737-6.153.524 0 0-2.436 2.94-3.197 3.704-.12.12-.26.167-.352.144-.13-.033-.166-.188-.165-.414l.02-4.018c-4.762-1.32-4.485-6.292-4.43-8.895.054-2.604.543-4.738 1.996-6.173 1.96-1.773 5.474-2.018 7.11-2.03zm.38 2.602c-.167 0-.303.135-.304.302 0 .167.133.303.3.305 1.624.01 2.946.537 4.028 1.592 1.073 1.046 1.62 2.468 1.633 4.334.002.167.14.3.307.3.166-.002.3-.138.3-.304-.014-1.984-.618-3.596-1.816-4.764-1.19-1.16-2.692-1.753-4.447-1.765zm-3.96.695c-.19-.032-.4.005-.616.117l-.01.002c-.43.247-.816.562-1.146.932-.002.004-.006.004-.008.008-.267.323-.42.638-.46.948-.008.046-.01.093-.007.14 0 .136.022.27.065.4l.013.01c.135.48.473 1.276 1.205 2.604.42.768.903 1.5 1.446 2.186.27.344.56.673.87.984l.132.132c.31.308.64.6.984.87.686.543 1.418 1.027 2.186 1.447 1.328.733 2.126 1.07 2.604 1.206l.01.014c.13.042.265.064.402.063.046.002.092 0 .138-.008.31-.036.627-.19.948-.46.004 0 .003-.002.008-.005.37-.33.683-.72.93-1.148l.003-.01c.225-.432.15-.842-.18-1.12-.004 0-.698-.58-1.037-.83-.36-.255-.73-.492-1.113-.71-.51-.285-1.032-.106-1.248.174l-.447.564c-.23.283-.657.246-.657.246-3.12-.796-3.955-3.955-3.955-3.955s-.037-.426.248-.656l.563-.448c.277-.215.456-.737.17-1.248-.217-.383-.454-.756-.71-1.115-.25-.34-.826-1.033-.83-1.035-.137-.165-.31-.265-.502-.297zm4.49.88c-.158.002-.29.124-.3.282-.01.167.115.312.282.324 1.16.085 2.017.466 2.645 1.15.63.688.93 1.524.906 2.57-.002.168.13.306.3.31.166.003.305-.13.31-.297.025-1.175-.334-2.193-1.067-2.994-.74-.81-1.777-1.253-3.05-1.346h-.024zm.463 1.63c-.16.002-.29.127-.3.287-.008.167.12.31.288.32.523.028.875.175 1.113.422.24.245.388.62.416 1.164.01.167.15.295.318.287.167-.008.295-.15.287-.317-.03-.644-.215-1.178-.58-1.557-.367-.378-.893-.574-1.52-.607h-.018z"};
function smIcons(){document.querySelectorAll('.sm-m').forEach(a=>{if(a.dataset.gl)return;const n=a.getAttribute('aria-label');const sv=a.querySelector('svg');if(!DC_GL[n]||!sv)return;sv.outerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+DC_GL[n]+'"/></svg>';a.dataset.gl=1})}
function dcIcons(){smIcons();document.querySelectorAll('.dc-m').forEach(a=>{if(a.dataset.gl)return;const n=Object.keys(DC_GL).find(k=>a.textContent.includes(k));if(!n)return;const sv=a.querySelector('svg');if(!sv)return;sv.outerHTML='<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="'+DC_GL[n]+'"/></svg>';a.dataset.gl=1})}
new MutationObserver(()=>requestAnimationFrame(dcIcons)).observe(document.body,{childList:true,subtree:true});

/* quick-contact: brand icons + mobile call sheet */
const QC_COL={WhatsApp:'#25D366',Telegram:'#229ED9',Viber:'#7360F2'};
function qcIcons(){document.querySelectorAll('#qcp .qcp-m a').forEach(a=>{if(a.dataset.gl)return;const n=Object.keys(DC_GL).find(k=>a.textContent.includes(k));const sv=a.querySelector('svg');if(!n||!sv)return;sv.outerHTML=`<svg viewBox="0 0 24 24" width="26" height="26" fill="${QC_COL[n]}" aria-hidden="true"><path d="${DC_GL[n]}"/></svg>`;a.style.setProperty('--mc',QC_COL[n]);a.dataset.gl=1})}
new MutationObserver(()=>qcIcons()).observe(document.getElementById('qcp')||document.body,{childList:true,subtree:true});
function phSheet(){const u=lang==='uk';const d=document.createElement('div');d.id='phs';d.className='phs';
d.innerHTML=`<div class="phs-b"><div class="phs-g"><p class="phs-t">${u?'Оберіть номер':'Choose a number'}</p>${PH.map(x=>`<a class="phs-i" href="tel:${x.replace(/[^+\d]/g,'')}">${ICO.phone}<span>${x}</span></a>`).join('')}</div><button type="button" class="phs-c">${u?'Скасувати':'Cancel'}</button></div>`;
document.body.appendChild(d);requestAnimationFrame(()=>d.classList.add('on'));
const close=()=>{d.classList.remove('on');setTimeout(()=>d.remove(),260)};
d.addEventListener('click',e=>{e.stopPropagation();if(e.target===d||e.target.closest('.phs-c'))close();else if(e.target.closest('.phs-i'))setTimeout(close,150)})}
document.addEventListener('click',e=>{const c=e.target.closest('#qcp .qcp-call');if(!c||innerWidth>760)return;e.preventDefault();e.stopPropagation();phSheet()},true);

/* mobile: dark blurred scrim behind quick-contact panel */
(function(){const sc=document.createElement('div');sc.id='qcscrim';sc.className='qc-scrim';document.body.appendChild(sc);
const sync=()=>{const p=document.getElementById('qcp');const on=!!(p&&!p.hidden&&p.classList.contains('on'));sc.classList.toggle('on',on);document.documentElement.classList.toggle('qc-lock',on&&innerWidth<=760)};
const p=document.getElementById('qcp');if(p)new MutationObserver(sync).observe(p,{attributes:true,attributeFilter:['class','hidden']});
sc.addEventListener('click',()=>{if(typeof qc==='function')qc(false)})})();

/* catalog page: add complete-supply band + supply process before FAQ */
const _catalogSP=catalog;catalog=function(){let h=_catalogSP();const fq=bd('w',secFaq()),i=h.indexOf(fq);const add=supplyBand()+bd('sp7-bd',supplyProc());return i>-1?h.slice(0,i)+add+h.slice(i):h+add};

/* delivery hero v2: calm logistics map — pin + looping dashed routes */
dvRoutes=function(){const W=1440,H=640,o=innerWidth<=760?[60,40]:[1270,210];
const T=innerWidth<=760?[[700,20],[620,640],[20,620],[380,630],[760,330],[260,10]]:[[40,90],[30,560],[260,630],[620,10],[980,20],[1420,40],[1430,420],[1200,630],[820,640],[520,640]];
const ps=T.map(([x,y],i)=>{const dx=x-o[0],dy=y-o[1],k=(i%2?.22:-.22);const mx=(x+o[0])/2-dy*k,my=(y+o[1])/2+dx*k;return `M${o[0]} ${o[1]}Q${mx.toFixed(0)} ${my.toFixed(0)} ${x} ${y}`});
const pin=`<g class="rt-pin" transform="translate(${o[0]-11} ${o[1]-28})"><path d="M11 0C5 0 0 4.7 0 10.6 0 18 11 28 11 28s11-10 11-17.4C22 4.7 17 0 11 0z"/><circle cx="11" cy="10.5" r="4" class="rt-pin-c"/></g>`;
return `<svg class="dv-rt dv-rt2" viewBox="0 0 ${W} ${H}" preserveAspectRatio="${innerWidth<=760?'xMinYMid':'xMidYMid'} slice" aria-hidden="true">${ps.map((d,i)=>`<path class="rt-l" d="${d}" style="--t:${(14+i%3*4)}s"/>`).join('')}${T.map(([x,y])=>`<circle class="rt-d" cx="${x}" cy="${y}" r="2.4"/>`).join('')}<circle class="rt-halo" cx="${o[0]}" cy="${o[1]}" r="16"/>${pin}</svg>`};

/* ===== Step trackers: all step sections (row = auto-play on view, column = scroll-linked) ===== */
const STK_SEL='#view .dv-steps,#view .st2,#view .sp6-st,#view .sp7-st,#view .s5-st,#view .hi3';
function stkNum(li){if(li.querySelector('.stk-n'))return;const c=[...li.querySelectorAll('i,b,span,em,small,div')].find(e=>!e.children.length&&/^(\d{1,2}|\d{4})$/.test(e.textContent.trim()));if(c)c.classList.add('stk-n')}
function stkY(li){const n=li.querySelector('.stk-n');const r=li.getBoundingClientRect();if(!n)return r.top+8;const b=n.getBoundingClientRect();return b.top+b.height/2}
function stkMode(ol){const it=[...ol.children].filter(x=>x.tagName==='LI'&&x.offsetParent);if(it.length<2)return null;return Math.abs(it[0].getBoundingClientRect().top-it[1].getBoundingClientRect().top)<4?'row':'col'}
function stkSetup(){document.querySelectorAll(STK_SEL).forEach(ol=>{if(!ol.offsetParent)return;const items=[...ol.children].filter(x=>x.tagName==='LI');if(items.length<2)return;items.forEach(stkNum);
 if(!ol.querySelector(':scope>.stk-t')){const t=document.createElement('i');t.className='stk-t';t.setAttribute('aria-hidden','true');t.innerHTML='<i class="stk-f"></i>';ol.appendChild(t);ol.classList.add('stk')}
 const m=stkMode(ol);ol.classList.toggle('stk-row',m==='row');ol.classList.toggle('stk-col',m==='col');stkGeom(ol);
 if(!ol._io){ol._io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&e.intersectionRatio>.3){if(ol.classList.contains('stk-row'))stkPlay(ol)}else if(!e.isIntersecting){stkReset(ol)}}),{threshold:[0,.3,.6]});ol._io.observe(ol)}})}
function stkGeom(ol){const it=[...ol.children].filter(x=>x.tagName==='LI'&&x.offsetParent);if(!it.length)return;const o=ol.getBoundingClientRect(),a=it[0].getBoundingClientRect(),z=it[it.length-1].getBoundingClientRect();const t=ol.querySelector(':scope>.stk-t');
 if(ol.classList.contains('stk-row')){t.style.cssText=`left:${a.left-o.left}px;width:${z.right-a.left}px;top:0;height:2px`}else{const ya=stkY(it[0]),yz=stkY(it[it.length-1]);t.style.cssText=`left:0;top:${ya-o.top}px;height:${Math.max(0,yz-ya)}px;width:2px`;it.forEach(li=>li.style.setProperty('--stk-dy',(stkY(li)-li.getBoundingClientRect().top-4).toFixed(1)+'px'))}}
function stkReset(ol){clearTimeout(ol._tm);ol._run=false;ol.style.setProperty('--stk','0');[...ol.children].forEach(li=>li.classList&&li.classList.remove('stk-on'))}
function stkPlay(ol){if(ol._run)return;stkReset(ol);ol._run=true;const it=[...ol.children].filter(x=>x.tagName==='LI');const n=it.length;let k=0;
 const step=()=>{if(!ol._run)return;it[k].classList.add('stk-on');ol.style.setProperty('--stk',ol.classList.contains('hi3')?(n>1?(k/(n-1)).toFixed(4):'1'):((k+1)/n).toFixed(4));k++;if(k<n)ol._tm=setTimeout(step,700)};ol._tm=setTimeout(step,250)}
function stkScroll(){const mark=innerHeight*.62;document.querySelectorAll('#view .stk.stk-col').forEach(ol=>{const it=[...ol.children].filter(x=>x.tagName==='LI');if(!it.length)return;const a=stkY(it[0]),z=stkY(it[it.length-1]);const p=Math.min(1,Math.max(0,(mark-a)/Math.max(1,z-a)));ol.style.setProperty('--stk',p.toFixed(4));it.forEach(li=>li.classList.toggle('stk-on',stkY(li)<=mark+.5))})}
let _stkT;const stkAll=()=>{clearTimeout(_stkT);_stkT=setTimeout(()=>{stkSetup();stkScroll()},120)};
new MutationObserver(stkAll).observe(document.getElementById('view'),{childList:true});addEventListener('resize',stkAll);addEventListener('scroll',()=>requestAnimationFrame(stkScroll),{passive:true});document.fonts&&document.fonts.ready.then(stkAll);setTimeout(stkAll,400);

/* delivery tiles: pickup title + micro-description for "your option" */
const _dvP2=deliveryP;deliveryP=function(){let h=_dvP2();const u=lang==='uk';
h=h.replace(/(<div class="dv-t dv-pk"[^>]*>[\s\S]*?<b>)([^<]*)(<\/b>)/,(m,a,b,c)=>a+(u?'Самовивіз<br>зі складу':'Pickup<br>from warehouse')+c);
h=h.replace(/(<div class="dv-t dv-hi">[\s\S]*?<b>[^<]*<\/b>)/,`$1<span class="dv-hi-d">${u?'Підберемо спосіб під ваш об’єкт':'We’ll match delivery to your site'}</span>`);return h};

/* ===== Request-a-quote mini-quiz ===== */
const RQ={items:[]};
const rqT=()=>lang==='uk'?{
 h:'Запит на розрахунок',sub:'Залиште контакти та оберіть продукцію — менеджер розрахує вартість і зв’яжеться з вами в робочий час.',
 nm:'Ім’я або компанія',list:'Сформуйте перелік продукції',add:'Додати продукцію',or:'або',
 file:'Прикріпіть специфікацію чи кошторис',fileh:'PDF, Excel, Word або фото — до 4 МБ',
 send:'Надіслати запит',cancel:'Скасувати',packs:'уп.',pack:(n,u)=>`${n} ${u} в упаковці`,rm:'Прибрати',
 pick:'Оберіть продукцію',pickh:'Позначте потрібні розміри та вкажіть кількість упаковок.',apply:'Додати обране',back:'Назад',
 empty:'Перелік поки порожній',sel:n=>`Обрано: ${n}`,
 errN:'Вкажіть ім’я або назву компанії.',errP:'Вкажіть номер телефону.',errL:'Додайте продукцію до переліку або прикріпіть файл.',ok:'Дякуємо! Запит надіслано — менеджер зв’яжеться з вами в робочий час.',
 total:(n,p)=>`${n} поз. · ${p} уп.`}:{
 h:'Request a quote',sub:'Leave your contacts and pick the products — a manager will price your order and get back to you during working hours.',
 nm:'Name or company',list:'Build your product list',add:'Add products',or:'or',
 file:'Attach a specification or bill of quantities',fileh:'PDF, Excel, Word or photo — up to 4 MB',
 send:'Send request',cancel:'Cancel',packs:'packs',pack:(n,u)=>`${n} ${u} per pack`,rm:'Remove',
 pick:'Choose products',pickh:'Tick the sizes you need and set the number of packs.',apply:'Add selected',back:'Back',
 empty:'Your list is empty',sel:n=>`Selected: ${n}`,
 errN:'Enter your name or company.',errP:'Enter your phone number.',errL:'Add products to the list or attach a file.',ok:'Thank you! Your request has been sent — a manager will contact you during working hours.',
 total:(n,p)=>`${n} items · ${p} packs`};
const rqKey=(id,vi)=>id+'-'+vi;
function rqItemsHtml(){const T=rqT();if(!RQ.items.length)return `<p class="rq-empty">${T.empty}</p>`;
 const ids=[...new Set(RQ.items.map(x=>x.id))];
 return ids.map(id=>{const p=P.find(x=>x.id===id);return `<div class="rq-pp"><div class="rq-pp-h"><img src="${IMGS[id]}" alt=""><b>${title(p)}</b></div><div class="rq-pp-v">${RQ.items.map((it,i)=>[it,i]).filter(([it])=>it.id===id).map(([it,i])=>{const v=p.v[it.vi];return `<div class="rq-ch rq-sel" data-i="${i}"><div class="rq-cl"><span class="rq-sz">${sz(v)}</span><small>${T.pack(v[2],un(p))}</small><button type="button" class="rq-x" data-rq-rm aria-label="${T.rm}"><svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div><span class="rq-q rq-ps"><button type="button" data-rq-d="-1" aria-label="−">−</button><input type="number" inputmode="numeric" min="1" value="${it.q}" aria-label="${T.packs}"><button type="button" data-rq-d="1" aria-label="+">+</button><span>${T.packs}</span></span></div>`}).join('')}</div></div>`}).join('')+
 `<p class="rq-sum">${T.total(RQ.items.length,RQ.items.reduce((a,b)=>a+(+b.q||0),0))}</p>`}
function rqPickHtml(){const T=rqT(),have=new Set(RQ.items.map(x=>rqKey(x.id,x.vi)));
 return `<div class="rq-pk-h"><button type="button" class="rq-back" data-rq-back>← ${T.back}</button><b>${T.pick}</b><p>${T.pickh}</p></div><div class="rq-pk-l">${P.map(p=>`<div class="rq-pp"><div class="rq-pp-h"><img src="${IMGS[p.id]}" alt=""><b>${title(p)}</b></div><div class="rq-pp-v">${p.v.map((v,vi)=>`<div class="rq-ch"><label class="rq-cl"><input type="checkbox" value="${rqKey(p.id,vi)}" ${have.has(rqKey(p.id,vi))?'checked':''}><span class="rq-cb"></span><span class="rq-sz">${sz(v)}</span><small>${T.pack(v[2],un(p))}</small></label><span class="rq-q rq-ps"><button type="button" data-rq-pd="-1" aria-label="−">−</button><input type="number" inputmode="numeric" min="1" value="${(RQ.items.find(x=>rqKey(x.id,x.vi)===rqKey(p.id,vi))||{q:1}).q}" aria-label="${T.packs}"><button type="button" data-rq-pd="1" aria-label="+">+</button><span>${T.packs}</span></span></div>`).join('')}</div></div>`).join('')}</div><div class="rq-pk-f"><span class="rq-cnt"></span><button type="button" class="btn" data-rq-apply>${T.apply}</button></div>`}
function rqHtml(){const T=rqT();return `<form class="rq" novalidate><div class="rq-main"><div class="rq-h"><h3>${T.h}</h3><button type="button" class="ic x" data-rq-close aria-label="${T.cancel}">✕</button></div>
<div class="rq-ct"><input name="name" required placeholder="${T.nm}" aria-label="${T.nm}" autocomplete="name">
<input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lang==='uk'?'Телефон':'Phone'}" autocomplete="tel"></div>
<div class="rq-div"><span>${T.list}</span></div>
<div class="rq-items">${rqItemsHtml()}</div>
<button type="button" class="rq-add" data-rq-open><i>+</i>${T.add}</button>
<div class="rq-div"><span>${T.or}</span></div>
<label class="rq-file"><input type="file" name="files" multiple accept=".pdf,.xls,.xlsx,.csv,.doc,.docx,.jpg,.jpeg,.png,.heic" hidden><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.5l-8.2 8.2a5.3 5.3 0 0 1-7.5-7.5l8.6-8.6a3.5 3.5 0 0 1 5 5l-8.6 8.6a1.8 1.8 0 0 1-2.5-2.5l7.9-7.9"/></svg><span><b>${T.file}</b><small class="rq-fn">${T.fileh}</small></span></label>
<p class="lf-err" role="alert" hidden></p>
<div class="rq-b"><button class="btn" type="submit">${T.send}</button></div></div>
<div class="rq-pick" hidden></div></form>`}
function rqOpen(subj,src){let d=document.getElementById('rqd');if(!d){d=document.createElement('dialog');d.id='rqd';d.className='rqd';document.body.appendChild(d);
 d.addEventListener('click',e=>{if(e.target===d)d.close()});d.addEventListener('close',()=>{ccClose&&ccClose()})}
 RQ.items=[];if(R.p==='product'&&src&&!src.closest('header,#side,#qcp')){try{const {p,vi}=pvParse(R.a);if(p)RQ.items.push({id:p.id,vi:vi||0,q:1})}catch(_){}}
 d.innerHTML=rqHtml();d.showModal();if(typeof ccEnhance==='function')ccEnhance(d)}
function rqRefresh(){const d=document.getElementById('rqd');if(!d)return;d.querySelector('.rq-items').innerHTML=rqItemsHtml()}
function rqCount(){const d=document.getElementById('rqd'),n=d.querySelectorAll('.rq-pick input[type=checkbox]:checked').length;d.querySelector('.rq-cnt').textContent=rqT().sel(n)}
document.addEventListener('click',e=>{const r=e.target.closest('[data-rfq]');if(!r)return;e.preventDefault();e.stopImmediatePropagation();rqOpen(r.dataset.rfq,r)},true);
document.addEventListener('click',e=>{const d=e.target.closest('#rqd');if(!d)return;
 if(e.target.closest('[data-rq-close]')){d.close();return}
 if(e.target.closest('[data-rq-open]')){const pk=d.querySelector('.rq-pick');pk.innerHTML=rqPickHtml();pk.hidden=false;d.querySelector('.rq-main').hidden=true;rqCount();d.scrollTop=0;return}
 if(e.target.closest('[data-rq-back]')){d.querySelector('.rq-pick').hidden=true;d.querySelector('.rq-main').hidden=false;return}
 const pd=e.target.closest('[data-rq-pd]');if(pd){const c=pd.closest('.rq-ch'),i=c.querySelector('.rq-ps input'),cb=c.querySelector('input[type=checkbox]');i.value=Math.max(1,(parseInt(i.value)||1)+(+pd.dataset.rqPd));if(!cb.checked){cb.checked=true;rqCount()}return}
 if(e.target.closest('[data-rq-apply]')){const sel=[...d.querySelectorAll('.rq-pick input[type=checkbox]:checked')];const prev=RQ.items;RQ.items=sel.map(cb=>{const [id,vi]=cb.value.split('-').map(Number),q=Math.max(1,parseInt(cb.closest('.rq-ch').querySelector('.rq-ps input').value)||1);return {id,vi,q}});RQ.items.sort((a,b)=>{const ia=prev.findIndex(x=>x.id===a.id&&x.vi===a.vi),ib=prev.findIndex(x=>x.id===b.id&&x.vi===b.vi);return (ia<0?1e3:ia)-(ib<0?1e3:ib)});d.querySelector('.rq-pick').hidden=true;d.querySelector('.rq-main').hidden=false;rqRefresh();return}
 const q=e.target.closest('[data-rq-d]');if(q){const t=q.closest('[data-i]'),i=+t.dataset.i,inp=t.querySelector('.rq-q input');RQ.items[i].q=Math.max(1,(parseInt(inp.value)||+RQ.items[i].q||1)+(+q.dataset.rqD));inp.value=RQ.items[i].q;rqSum();return}
 if(e.target.closest('[data-rq-rm]')){const i=+e.target.closest('[data-i]').dataset.i;RQ.items.splice(i,1);rqRefresh();return}});
document.addEventListener('change',e=>{const d=e.target.closest('#rqd');if(!d)return;if(e.target.matches('.rq-pick .rq-ps input')){e.target.value=Math.max(1,parseInt(e.target.value)||1);const cb=e.target.closest('.rq-ch').querySelector('input[type=checkbox]');cb.checked=true}if(e.target.closest('.rq-pick'))rqCount();
 if(e.target.matches('.rq-sel .rq-q input')){const i=+e.target.closest('[data-i]').dataset.i;RQ.items[i].q=Math.max(1,parseInt(e.target.value)||1);e.target.value=RQ.items[i].q;rqSum()}
 if(e.target.name==='files'){const fs=[...e.target.files];d.querySelector('.rq-fn').textContent=fs.length?fs.map(f=>f.name).join(', '):rqT().fileh;d.querySelector('.rq-file').classList.toggle('on',!!fs.length)}});
document.addEventListener('submit',e=>{const f=e.target.closest('#rqd .rq');if(!f)return;e.preventDefault();const T=rqT(),er=f.querySelector('.lf-err');const nm=f.name.value.trim(),files=[...f.files.files];
 if(!nm){er.textContent=T.errN;er.hidden=false;f.name.setAttribute('aria-invalid','true');f.name.focus();return}
 if(!f.phone.value.trim()){er.textContent=T.errP;er.hidden=false;f.phone.setAttribute('aria-invalid','true');f.phone.focus();return}
 if(!RQ.items.length&&!files.length){er.textContent=T.errL;er.hidden=false;return}er.hidden=true;
 const ph=f.phone.value.trim(),full=ph.startsWith('+')?ph:('+'+(typeof ccOf==='function'?ccOf(f.phone)[1]:'380')+' '+ph);
 pushLead({name:nm,phone:full,type:'quote',items:RQ.items.map(it=>{const p=P.find(x=>x.id===it.id),v=p.v[it.vi];return {product:title(p),size:sz(v),packs:+it.q,perPack:v[2]+' '+un(p)}}),files:files.map(x=>x.name),source:leadSource('quote-modal'),okText:T.ok});
 document.getElementById('rqd').close()});


/* step tracker: finish filling while the section is held, before FAQ overlaps */
const _stkS=stkScroll;stkScroll=function(){_stkS();const mark=innerHeight*.62;
 document.querySelectorAll('#view .ov-under .stk.stk-col').forEach(ol=>{const u=ol.closest('.ov-under'),t=u.nextElementSibling;if(!t)return;
  const hold=parseFloat(getComputedStyle(t).marginTop)||0;if(hold<40)return;
  const gap=t.getBoundingClientRect().top-u.getBoundingClientRect().bottom,f=Math.min(1,Math.max(0,(hold-gap-4)/(hold*.8)));if(!f)return;
  const it=[...ol.children].filter(x=>x.tagName==='LI');const a=stkY(it[0]),z=stkY(it[it.length-1]);
  const p0=Math.min(1,Math.max(0,(mark-a)/Math.max(1,z-a))),p=p0+(1-p0)*f;ol.style.setProperty('--stk',p.toFixed(4));
  it.forEach(li=>li.classList.toggle('stk-on',(stkY(li)-a)/Math.max(1,z-a)<=p+.001))})};
/* keep sticky offset right when the held section changes height */
if(window.ResizeObserver){const _ovRO=new ResizeObserver(()=>requestAnimationFrame(()=>{ovPos();stkScroll()}));new MutationObserver(()=>requestAnimationFrame(()=>document.querySelectorAll('#view .ov-under').forEach(u=>{if(!u._ro){u._ro=1;_ovRO.observe(u)}}))).observe(document.getElementById('view'),{childList:true,subtree:true})}


/* mobile header: quote button next to quick contact */
const ICO_CALC='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 3.5h14v17l-2.33-1.4-2.33 1.4-2.34-1.4-2.33 1.4-2.34-1.4L5 20.5z"/><path d="M8.75 8.5h6.5M8.75 12h6.5M8.75 15.5h3.5"/></svg>';
function rqHdr(){const q=document.getElementById('qcb');if(!q)return;let b=document.getElementById('rqb');if(!b){b=document.createElement('button');b.id='rqb';b.className='ic qc-b';b.dataset.rfq='PLASTIZA';b.innerHTML=ICO_CALC;q.parentNode.insertBefore(b,q)}b.setAttribute('aria-label',lang==='uk'?'Запит на розрахунок':'Request a quote')}
/* header quote icon disabled: on mobile the quote option lives on product pages only */


function rqSum(){const d=document.getElementById('rqd');const e=d&&d.querySelector('.rq-sum');if(e)e.textContent=rqT().total(RQ.items.length,RQ.items.reduce((a,b)=>a+(+b.q||0),0))}
document.addEventListener('input',e=>{if(!e.target.matches('#rqd .rq-sel .rq-q input'))return;const i=+e.target.closest('[data-i]').dataset.i,v=parseInt(e.target.value);if(v>0){RQ.items[i].q=v;rqSum()}});


/* supply band: centre «Про комплектацію» link on the button line */
function spbAlign(){document.querySelectorAll('#view .spb-g').forEach(g=>{const l=g.querySelector(':scope>div:first-child .tlink'),b=g.querySelector('.spb-f .btn');if(!l||!b)return;g.style.setProperty('--spb-lk','0px');if(innerWidth<701)return;const lr=l.getBoundingClientRect(),br=b.getBoundingClientRect();if(Math.abs(lr.bottom-br.bottom)>3)return;g.style.setProperty('--spb-lk',Math.max(0,Math.round((br.height-lr.height)/2))+'px')})}
new MutationObserver(()=>requestAnimationFrame(spbAlign)).observe(document.getElementById('view'),{childList:true});addEventListener('resize',()=>requestAnimationFrame(spbAlign));setTimeout(spbAlign,400);document.fonts&&document.fonts.ready.then(spbAlign);
/* related products (mobile): dots left + arrows right, like the blog slider */
function rlCtl(){document.querySelectorAll('#view .rl').forEach(r=>{if(r.querySelector('.rl-ctl'))return;const d=r.querySelector('.rl-dots'),sl=r.querySelector('.rl-s');if(!d||!sl)return;const u=lang==='uk';
 const c=document.createElement('div');c.className='bg-ctl rl-ctl';d.before(c);c.appendChild(d);
 const ar=document.createElement('div');ar.className='bg-ar rl-ar';ar.innerHTML=`<button type="button" data-rlm="-1" aria-label="${u?'Попередній товар':'Previous'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" data-rlm="1" aria-label="${u?'Наступний товар':'Next'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>`;c.appendChild(ar);
 const [pv,nx]=ar.querySelectorAll('button'),f=()=>{pv.disabled=sl.scrollLeft<4;nx.disabled=sl.scrollLeft+sl.clientWidth>=sl.scrollWidth-4};sl.addEventListener('scroll',()=>requestAnimationFrame(f),{passive:true});f()})}
document.addEventListener('click',e=>{const b=e.target.closest('[data-rlm]');if(!b)return;const s=b.closest('.rl').querySelector('.rl-s'),c=s.firstElementChild;s.scrollBy({left:+b.dataset.rlm*(c?c.getBoundingClientRect().width+8:300),behavior:'smooth'})});
new MutationObserver(()=>requestAnimationFrame(rlCtl)).observe(document.getElementById('view'),{childList:true});requestAnimationFrame(rlCtl);


/* PDF catalog: real pre-built PDF files (one continuous page) — download / share instead of print */
const PDF_V='202610271850';
function pdfFile(){const L=(typeof pdfLang!=='undefined'&&pdfLang)||lang;return `plastiza-catalog-${L==='uk'?'ua':'en'}-${R.a==='mob'?'mobile':'desktop'}.pdf`}
const _pdfBlobs={};
const PDF_BASE=location.protocol==='file:'||/^(localhost|127\.)/.test(location.hostname)||!/claude/.test(location.hostname)?'/assets/pdf/':'https://plastiza.org/assets/pdf/';
const pdfUrl=n=>PDF_BASE+n+'?v='+PDF_V;
function pdfPre(){if(R.p!=='pdf')return;const n=pdfFile();if(_pdfBlobs[n])return;_pdfBlobs[n]=fetch(pdfUrl(n),{mode:'cors'}).then(r=>{if(!r.ok)throw 0;return r.blob()}).then(b=>(_pdfBlobs[n]=new File([b],n,{type:'application/pdf'}))).catch(()=>{delete _pdfBlobs[n];return null})}
function pdfAbs(n){return new URL(pdfUrl(n),location.href).href}
function pdfSameOrigin(){try{return new URL(PDF_BASE,location.href).origin===location.origin}catch(_){return false}}
function pdfToast(m){const el=$('#toast');el.textContent=m;el.classList.add('on');setTimeout(()=>el.classList.remove('on'),2600)}
function pdfDl(e){e.preventDefault();e.stopPropagation();const n=pdfFile(),url=pdfAbs(n),f=_pdfBlobs[n];
 const aClick=(href)=>{const a=document.createElement('a');a.href=href;a.download=n;a.rel='noopener';document.body.appendChild(a);a.click();setTimeout(()=>a.remove(),4000)};
 if(pdfSameOrigin()){aClick(url);return true}
 if(f instanceof File&&!matchMedia('(hover:none)').matches){const h=URL.createObjectURL(f);aClick(h);setTimeout(()=>URL.revokeObjectURL(h),8000);return true}
 const w=window.open(url,'_blank','noopener');if(!w)location.href=url;return true}
/* share menu: system share sheet with the PDF file + link options */
const ICO_SHARE='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 14.5V3.5M8 7.5l4-4 4 4"/><path d="M8.5 10.5H7A2 2 0 0 0 5 12.5v6A2 2 0 0 0 7 20.5h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1.5"/></svg>';
const pdfCanShareFile=()=>{try{return !!(navigator.canShare&&navigator.canShare({files:[new File(['x'],'x.pdf',{type:'application/pdf'})]}))}catch(_){return false}};
function pdfShareUi(){const b=document.querySelector('#view .pdf-bar [data-print]');if(!b||b.parentElement.classList.contains('pdf-act'))return;const u=lang==='uk';
 const w=document.createElement('div');w.className='pdf-act';b.before(w);w.appendChild(b);
 const s=document.createElement('button');s.type='button';s.className='pdf-sh';s.dataset.pdfSh='';s.setAttribute('aria-haspopup','menu');s.setAttribute('aria-expanded','false');s.setAttribute('aria-label',u?'Поділитися каталогом':'Share catalog');s.title=u?'Поділитися':'Share';s.innerHTML=ICO_SHARE;w.appendChild(s)}
function pdfShClose(){const m=document.getElementById('pdfshm');if(m)m.remove();const b=document.querySelector('[data-pdf-sh][aria-expanded=true]');if(b)b.setAttribute('aria-expanded','false')}
function pdfShOpen(btn){pdfShClose();const u=lang==='uk',n=pdfFile(),url=pdfAbs(n),txt=(u?'Каталог PLASTIZA (PDF): ':'PLASTIZA catalog (PDF): ')+url;btn.setAttribute('aria-expanded','true');
 const gl=k=>`<svg viewBox="0 0 24 24" width="20" height="20" fill="${QC_COL[k]}" aria-hidden="true"><path d="${DC_GL[k]}"/></svg>`;
 const it=(act,ic,lab,sub)=>`<button type="button" role="menuitem" data-psh="${act}"><span class="psh-i">${ic}</span><span class="psh-t"><b>${lab}</b>${sub?`<small>${sub}</small>`:''}</span></button>`;
 const m=document.createElement('div');m.id='pdfshm';m.className='pdf-shm';m.setAttribute('role','menu');
 m.innerHTML=(pdfCanShareFile()?it('file',ICO_SHARE,u?'Надіслати PDF-файл':'Send PDF file',u?'Telegram, Viber, WhatsApp, «Файли»…':'Telegram, Viber, WhatsApp, Files…')+'<i class="psh-sep"></i>':'')+
  `<p class="psh-h">${u?'Надіслати посилання на файл':'Send a link to the file'}</p>`+
  it('tg',gl('Telegram'),'Telegram')+it('vb',gl('Viber'),'Viber')+it('wa',gl('WhatsApp'),'WhatsApp')+
  it('copy','<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',u?'Копіювати посилання':'Copy link');
 btn.parentElement.appendChild(m);m._url=url;m._txt=txt;m._n=n}
async function pdfShareFile(n){let f=_pdfBlobs[n];const u=lang==='uk';
 if(!(f instanceof File)){pdfPre();try{f=await _pdfBlobs[n]}catch(_){f=null}}
 if(!(f instanceof File)){pdfToast(u?'Не вдалося підготувати файл. Спробуйте ще раз.':'Could not prepare the file. Please try again.');return}
 try{await navigator.share({files:[f]})}catch(err){if(err&&err.name==='NotAllowedError')pdfToast(u?'Файл готовий — натисніть ще раз.':'File ready — tap again.')}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-pdf-sh]');if(b){e.preventDefault();b.getAttribute('aria-expanded')==='true'?pdfShClose():pdfShOpen(b);return}
 const a=e.target.closest('[data-psh]');if(a){const m=a.closest('#pdfshm'),k=a.dataset.psh,url=m._url,txt=m._txt,u=lang==='uk';
  if(k==='file')pdfShareFile(m._n);
  else if(k==='tg')window.open('https://t.me/share/url?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(u?'Каталог PLASTIZA (PDF)':'PLASTIZA catalog (PDF)'),'_blank','noopener');
  else if(k==='vb')location.href='viber://forward?text='+encodeURIComponent(txt);
  else if(k==='wa')window.open('https://wa.me/?text='+encodeURIComponent(txt),'_blank','noopener');
  else if(k==='copy'){const done=()=>pdfToast(u?'Посилання скопійовано':'Link copied');if(navigator.clipboard)navigator.clipboard.writeText(url).then(done,()=>{prompt('',url)});else prompt('',url)}
  pdfShClose();return}
 if(!e.target.closest('#pdfshm'))pdfShClose()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')pdfShClose()});
new MutationObserver(()=>requestAnimationFrame(()=>{pdfShClose();pdfShareUi()})).observe(document.getElementById('view'),{childList:true});setTimeout(pdfShareUi,400);
new MutationObserver(()=>requestAnimationFrame(pdfPre)).observe(document.getElementById('view'),{childList:true,subtree:false});
document.addEventListener('click',e=>{if(e.target.closest('[data-pl],[data-go="pdf"]'))setTimeout(pdfPre,300)});setTimeout(pdfPre,500);


/* ===== Leads → server → Telegram bot ===== */
const LEAD_API=/claude|^$/.test(location.hostname)||location.protocol==='file:'?'https://plastiza.org/api/lead':'/api/lead';
let _leadForm=null;window.addEventListener('submit',e=>{_leadForm=e.target instanceof HTMLFormElement?e.target:null},true);
const _pushLead0=pushLead;
pushLead=function(data){_pushLead0(data);if(/^file:/.test(location.href))return;
 const u=lang==='uk',files=[];if(_leadForm)_leadForm.querySelectorAll('input[type=file]').forEach(i=>[...(i.files||[])].forEach(f=>files.push(f)));_leadForm=null;
 const body=new FormData(),d={...data};delete d.okText;if(!d.files||!d.files.length)d.files=files.map(f=>f.name);
 body.append('data',JSON.stringify(d));let tot=0;files.slice(0,5).forEach(f=>{tot+=f.size;if(tot<=4*1024*1024)body.append('files',f,f.name)});
 fetch(LEAD_API,{method:'POST',body}).then(r=>r.ok?r.json():Promise.reject(r.status)).catch(()=>{const el=$('#toast');el.textContent=u?'Не вдалося надіслати заявку. Зателефонуйте нам: +380 (96) 682-14-63':'Could not send the request. Please call +380 96 682 14 63';el.classList.add('on');setTimeout(()=>el.classList.remove('on'),6000)})};

