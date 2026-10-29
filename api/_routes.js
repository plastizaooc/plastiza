// Згенеровано build/post2.py з src/routes.js — спільний код адрес (сайт, сервер, адмінка).
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

export { rtPages, rtPageNames, rtProdSlugs, rtPostSlugs, rtSlugify, rtLi, rtPageSlug, rtProdBase, rtSizeSlug, rtProdSlug, rtPostSlug, rtKey, rtFromKey, rtPath, rtAll, rtIndex, rtParse, rtPrice, rtCut, rtMeta };
