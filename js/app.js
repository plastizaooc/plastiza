/* PLASTIZA — логіка сайту (маршрутизація, рендер сторінок, дані каталогу, форми, анімації).
   Шляхи до зображень — відносні, з папки assets/img/. */
const $=s=>document.querySelector(s),root=document.documentElement;
const ls={g(k){try{return localStorage.getItem(k)}catch(e){return null}},s(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
const T={uk:{f_pur:'Призначення',qfn:'Ваше ім’я',swipe:'Гортайте',qfh:'Потрібна консультація?',qfp:'Залиште номер — менеджер передзвонить у робочий час.',qfb:'Отримати консультацію',qfok:'Дякуємо! Менеджер передзвонить найближчим часом.',hrs:'Режим роботи',islh:'Продукція виробництва',isls:'Фіксатори арматури та елементи для опалубки власного виробництва.',islall:'Весь каталог',hxtag:'ТОВ «Пластіза»',edr:'ЄДРПОУ',h1a:'Виробництво пластикових деталей',h1b:'фіксатори арматури та вироби для будівництва',faq:'Питання-відповіді',blog:'Блог',wip:'Розділ наповнюємо, він з’явиться найближчим часом.',fnav:'Навігація',fprod:'Виробництво',motA:'PLASTIZA — український виробник',motB:'фіксаторів арматури та пластикових виробів для будівництва.',llc:'ТОВ «Пластіза»',pelcap:'Лиття з різних видів пластику',clab:'Каталог продукції виробництва',tohome:'На головну',ch:'Фіксатори арматури: пластикові деталі для опалубки та будівництва',cs:'Оберіть виріб у швидкій навігації або скористайтеся фільтрами: за формою, положенням, розміром і ціною.',f_form:'Форма',f_pos:'Положення',f_size:'Розміри',f_price:'Ціна, грн',hor:'Горизонтальне',ver:'Вертикальне',view:'Переглянути продукт',cat_l:'Категорія',srch:'Пошук',to:'До',home:'Головна',catalog:'Каталог',about:'Про компанію',oem:'Послуги',contacts:'Контакти',prod:'Продукція',serv:'Послуги',theme:'Тема',all:'Усі',search:'Пошук за назвою',quote:'Запросити розрахунок',drawing:'Надіслати креслення',h1:'Фіксатори арматури та пластикові вироби для будівництва',h1rot:['фіксатори арматури для будівництва','лиття виробів під ваше замовлення','індивідуальне виготовлення пресформ','комплектація будівельних об’єктів'],lead:'Виробництво повного циклу: випускаємо власну продукцію та виготовляємо вироби під замовлення. Розробимо пресформу під ваш виріб, відллємо партію й передамо її вам для реалізації.',cat_btn:'Дивитися каталог',s1:'задоволених клієнтів',s2:'років досвіду',s3:'виконаних замовлень',cats:'Категорії продукції',catsub:'Оберіть напрям і перейдіть до товарів.',pop:'Товари виробництва',popsub:'Фіксатори та закладні елементи з нашого каталогу.',abt:'Про компанію',abttxt:'ТОВ «Пластіза» — українське підприємство, яке виробляє фіксатори для арматури та закладні елементи для монолітного будівництва, а також широкий спектр пластикових виробів. На власному виробництві ми виконуємо лиття на замовлення за індивідуальними вимогами: від прототипів до великих серійних партій. Також виготовляємо пресформи для лиття, які клієнти використовують на власних підприємствах. Сучасні технології та досвідчена команда забезпечують високу точність і стабільну якість, а наш асортимент допомагає будівельним проєктам економити час і ресурси. Консультуємо та підтримуємо на кожному етапі співпраці.',more:'Докладніше',srvsub:'Лиття на замовлення та виготовлення пресформ на власному виробництві.',adv:'Переваги роботи з нами',band:'Маєте креслення або зразок?',bandd:'Підготуємо розрахунок вартості та термінів.',items:'позицій',from:'від',sizes:'Варіантів',size:'Розмір',price:'Ціна',pack:'В упаковці',pricecap:'Ціни та фасування',specs:'Характеристики',rel:'Схожі товари',back:'Каталог',photo:'Фото виробу буде додано.',none:'Нічого не знайдено. Змініть пошук або категорію.',catsub2:'Оберіть категорію або знайдіть товар за назвою.',phones:'Телефони',addr:'Адреси',name:'Ім’я або компанія',contact:'Телефон або email',qty:'Кількість',pcs:'упаковок',send:'Надіслати запит',cancel:'Скасувати',ok:'Запит надіслано. Менеджер зв’яжеться з вами.',foot:'Прототип.',req:'Запит',tag:'Український виробник фіксаторів арматури та пластикових виробів.'},
en:{f_pur:'Purpose',qfn:'Your name',swipe:'Swipe',qfh:'Need advice?',qfp:'Leave your number and a manager will call you back during working hours.',qfb:'Request a call',qfok:'Thank you! A manager will call you back shortly.',hrs:'Working hours',islh:'Our products',isls:'Rebar spacers and formwork parts made at our own plant.',islall:'Full catalog',hxtag:'PLASTIZA LLC',edr:'EDRPOU',h1a:'Full-cycle plastic parts manufacturing',h1b:'rebar spacers and products for construction',faq:'FAQ',blog:'Blog',wip:'This section is being prepared and will be available soon.',fnav:'Navigation',fprod:'Production',motA:'PLASTIZA — a Ukrainian manufacturer',motB:'of rebar spacers and plastic products for construction.',llc:'PLASTIZA LLC',pelcap:'Molding from a range of plastics',clab:'Production catalog',tohome:'Back to home',ch:'Rebar spacers: plastic parts for formwork and construction',cs:'Pick a product in the quick navigation or use the filters: shape, position, size and price.',f_form:'Shape',f_pos:'Position',f_size:'Sizes',f_price:'Price, UAH',hor:'Horizontal',ver:'Vertical',view:'View product',cat_l:'Category',srch:'Search',to:'To',home:'Home',catalog:'Catalog',about:'About us',oem:'Services',contacts:'Contacts',prod:'Products',serv:'Services',theme:'Theme',all:'All',search:'Search by name',quote:'Request a quote',drawing:'Send a drawing',h1:'Rebar spacers and plastic products for construction',h1rot:['rebar spacers for construction','custom plastic injection molding','bespoke injection mold making','construction site supply'],lead:'We make our own product line and manufacture parts to order. We’ll build a mold for your part, run the batch and hand it over to you for distribution.',cat_btn:'View catalog',s1:'satisfied clients',s2:'years of experience',s3:'orders completed',cats:'Product categories',catsub:'Pick a direction and open the products.',pop:'Our products',popsub:'Spacers and embedded parts from our catalog.',abt:'About the company',abttxt:'PLASTIZA LLC is a Ukrainian manufacturer of rebar spacers and embedded parts for monolithic construction, as well as a wide range of plastic products. At our own plant we mold custom parts to each client’s requirements, from prototypes to large production runs. We also make injection molds that clients use at their own facilities. Modern technology and an experienced team ensure high precision and consistent quality, while our range helps construction projects save time and resources. We advise and support you at every stage of cooperation.',more:'Learn more',srvsub:'Custom molding and mold making at our own plant.',adv:'Why work with us',band:'Have a drawing or a sample?',bandd:'We’ll prepare a cost and lead-time estimate.',items:'items',from:'from',sizes:'Options',size:'Size',price:'Price',pack:'Per pack',pricecap:'Prices and packing',specs:'Specifications',rel:'Related products',back:'Catalog',photo:'Product photo will be added.',none:'Nothing found. Change the search or category.',catsub2:'Pick a category or search by name.',phones:'Phones',addr:'Addresses',name:'Name or company',contact:'Phone or email',qty:'Quantity',pcs:'packs',send:'Send request',cancel:'Cancel',ok:'Request sent. A manager will contact you.',foot:'Prototype.',req:'Request',tag:'Ukrainian manufacturer of rebar spacers and plastic products.'}};
const CATS=[{id:'rebar',uk:'Фіксатори арматури',en:'Rebar spacers',d:{uk:'Настил, стійка, зірочка, защіпка, засувка',en:'Slab, chair, star, clip and slide spacers'}},{id:'form',uk:'Фіксатори для опалубки',en:'Formwork accessories',d:{uk:'Конус, корки, труба',en:'Cone, plugs, tube'}}];
const SRV=[{uk:'Лиття пластикових виробів',en:'Plastic injection molding',s:{uk:'Лиття на замовлення: від прототипів до великих серійних партій.',en:'Custom molding from prototypes to large production runs.'},d:{uk:'Виготовляємо пластикові вироби на замовлення за вашими вимогами. Сучасне обладнання дозволяє працювати з проєктами будь-якої складності: від прототипів, що допомагають оцінити виріб перед серійним випуском, до великих партій. Лиття під тиском гарантує точність і стабільність кожного виробу незалежно від тиражу. Працюємо з різними видами пластику, а на кожному етапі виробництва контролюємо якість.',en:'We mold plastic products to order, to your requirements. Modern equipment lets us handle projects of any complexity, from prototypes that help evaluate a part before series production to large batches. Injection molding ensures precision and consistency for every part regardless of volume. We work with different plastics and control quality at every production stage.'}},
{uk:'Виготовлення пресформ',en:'Mold making',s:{uk:'Індивідуальні пресформи для лиття пластикових виробів.',en:'Custom molds for plastic injection molding.'},d:{uk:'Виготовляємо пресформи для лиття пластикових виробів. Клієнти використовують їх на власних підприємствах для випуску кінцевої продукції. Забезпечуємо високу точність виготовлення та стабільну якість, а рішення підбираємо залежно від форми, розмірів і технічних вимог замовника.',en:'We make molds for plastic injection molding that clients use at their own facilities to produce finished goods. We ensure high manufacturing precision and consistent quality, and tailor each solution to the shape, size and technical requirements of the order.'}}];
const ADV=[['Надійне партнерство','Reliable partnership'],['Висока якість','High quality'],['Власне виробництво','In-house production'],['Міжнародна співпраця','International cooperation'],['Екологічність','Eco-friendliness'],['Конкурентна ціна','Competitive prices'],['Комплексне постачання','Complete supply'],['Український виробник','Ukrainian manufacturer']];
const PH=['+380 (96) 682-14-63','+380 (96) 79-78-007','+380 (98) 122-14-47'];
const AD=[['79042, м. Львів, вул. Шевченка, 154','79042 Lviv, 154 Shevchenka St.'],['03124, м. Київ, пров. Ю. Матущака, 18','03124 Kyiv, 18 Yu. Matushchaka Ln.']];
const MT=['Матеріал','Material','Пластик','Plastic'],TY=['Тип','Type','Стійка','Chair'],HZ=['Робоче положення','Working position','Горизонтальне','Horizontal'],RT=['Витрата','Consumption','4–6 шт/м²','4–6 pcs/m²'];
const P=[
[1,'rebar','Фіксатор «Настил»','Slab chair “Nastil”','Забезпечує проєктну висоту захисного шару бетону під горизонтальною арматурою на сипкій основі: ґрунті, щебені, піску, а також на мембрані чи плівці. Збільшена площа основи не дає виробу занурюватися.','Sets the design concrete cover under horizontal rebar on loose bases: soil, gravel, sand, membranes and films. The enlarged base keeps the part from sinking.','pc',[['25-30','1.728',300],['30-40','1.480',200],['50-60','1.728',200],['70-80','1.860',150],['90-100','1.980',150]],[['Призначення','Purpose','Сипуча основа','Loose base'],TY,MT,HZ]],
[2,'rebar','Фіксатор «Стійка»','Rebar chair “Stiika”','Тримає арматуру в горизонтальному положенні в плитах перекриття, стяжках і промислових підлогах на бетонній чи іншій твердій основі. Конструкція розподіляє навантаження по всій площі й витримує тиск арматурного каркаса.','Keeps rebar level in floor slabs, screeds and industrial floors on concrete or another solid base. The design spreads the load across the footprint and withstands the pressure of the rebar cage.','pc',[['20-25-30','1.728',300],['25-30','1.480',200],['35-40','1.728',200],['35-40-35','1.860',150]],[RT,TY,MT,HZ]],
[3,'rebar','Фіксатор «Зірочка»','Star spacer “Zirochka”','Створює захисний шар для вертикальної арматури діаметром 6–16 мм у стінах, колонах і стовпах, а також у кутових горизонтальних каркасах. Міцний еластичний замок дозволяє працювати з арматурою різного діаметра.','Creates the concrete cover for vertical rebar of 6–16 mm in walls, columns and pillars, and in corner horizontal cages. A strong elastic lock fits rebar of different diameters.','pc',[['15/6-12','1.728',2000],['25/6-12','0.504',1000],['25/4-20','0.630',500],['30/8-20','0.804',500],['35/6-12','0.960',500],['40/14-20','1.260',200],['50/12-20','1.608',200]],[['Арматура','Rebar','Ø 6–16 мм','Ø 6–16 mm'],['Застосування','Use','Вертикальні елементи','Vertical elements'],MT]],
[4,'rebar','Фіксатор «Защіпка»','Clip spacer “Zashchipka”','Фіксує арматуру в горизонтальному положенні при влаштуванні плит перекриття, стяжок і промислових підлог на бетонній поверхні.','Holds rebar horizontally in floor slabs, screeds and industrial floors on a concrete surface.','pc',[['15/10','0.456',1000],['20/10','0.480',1000],['25/10','0.528',1000]],[RT,MT,HZ]],
[5,'rebar','Фіксатор «Засувка»','Slide spacer “Zasuvka”','Фіксує арматуру на бетонній основі в плитах перекриття, стяжках і промислових підлогах. Конструкція розподіляє навантаження по площі виробу й надійно витримує тиск арматурного каркаса.','Holds rebar on a concrete base in slabs, screeds and industrial floors. The design spreads the load and reliably withstands the pressure of the rebar cage.','pc',[['50/8-24','1.98',250]],[TY,MT,HZ]],
[6,'form','Фіксатор «Конус»','Cone spacer “Konus”','Надягається на ПВХ- або поліетиленову трубку діаметром 22 мм і захищає елементи опалубки від впливу бетону, збільшуючи площу контакту зі щитом. Не допускає затікання бетону в трубку й потрапляння його на стяжний гвинт; стійкий до навантажень, агресивного середовища та перепаду температур.','Fits a 22 mm PVC or PE tube and protects formwork elements from concrete, increasing the contact area with the panel. Keeps concrete out of the tube and off the tie rod; resistant to loads, aggressive environments and temperature swings.','pc',[['22','0.444',1000]],[['Діаметр трубки','Tube diameter','22 мм','22 mm'],MT]],
[7,'form','Фіксатор «Корок-ялинка»','Fir-tree plug','Універсальний корок для закриття невикористаних отворів під анкерні стрижні в опалубці, а також отворів у стінах після демонтажу опалубки.','A universal plug that closes unused anchor-rod holes in formwork, as well as holes left in walls after the formwork is removed.','pc',[['24','0.84',1000]],[MT]],
[8,'form','Фіксатор «Корок»','Plug “Korok”','Пластикова заглушка циліндричної форми. Запобігає затіканню бетонної суміші в монтажні отвори опалубних щитів і герметизує отвори в монолітних конструкціях.','A cylindrical plastic plug. Keeps concrete mix out of the mounting holes in formwork panels and seals holes in monolithic structures.','pc',[['24','0.60',1000]],[MT]],
[9,'form','Фіксатор «Труба»','Spacer tube','Утримує відстань між опалубними щитами при влаштуванні колон і пілонів та не допускає потрапляння бетону на стяжний гвинт під час заливання. Гвинт легко виймається з конструкції. Доступна з поліетилену (П/Е) і ПВХ.','Keeps the distance between formwork panels when casting columns and pylons and prevents concrete from reaching the tie rod during pouring. The rod is easy to remove. Available in PE and PVC.','m',[[['П/Е','PE'],'10.60',100],[['ПВХ','PVC'],'13.50',100]],[['Матеріал','Material','П/Е, ПВХ','PE, PVC'],['Стійкість','Resistance','До навантажень, агресивного середовища, перепаду температур','Loads, aggressive environments, temperature swings']]],
].map(a=>({id:a[0],cat:a[1],n:{uk:a[2],en:a[3]},d:{uk:a[4],en:a[5]},u:a[6],v:a[7],sp:a[8]}));
const IMGD=["/assets/img/products/zasuvka-1.webp","/assets/img/products/konus-1.webp","/assets/img/products/korok-yalynka-1.webp","/assets/img/products/stiyka-4.webp","/assets/img/products/stiyka-3.webp","/assets/img/products/zashchipka-1.webp","/assets/img/products/zirochka-1.webp","/assets/img/products/zirochka-3.webp","/assets/img/products/zirochka-2.webp","/assets/img/products/zirochka-4.webp","/assets/img/products/zirochka-5.webp","/assets/img/products/zirochka-6.webp","/assets/img/products/zirochka-7.webp","/assets/img/products/korok-1.webp","/assets/img/products/nastyl-1.webp","/assets/img/products/nastyl-2.webp","/assets/img/products/nastyl-3.webp","/assets/img/products/nastyl-4.webp","/assets/img/products/nastyl-5.webp","/assets/img/products/stiyka-1.webp","/assets/img/products/stiyka-2.webp","/assets/img/products/truba-1.webp","/assets/img/products/truba-2.webp"];
const IMGV={'1-0':IMGD[14],'1-1':IMGD[15],'1-2':IMGD[16],'1-3':IMGD[17],'1-4':IMGD[18],'2-0':IMGD[19],'2-1':IMGD[20],'2-2':IMGD[4],'2-3':IMGD[3],'3-0':IMGD[6],'3-1':IMGD[8],'3-2':IMGD[7],'3-3':IMGD[9],'3-4':IMGD[10],'3-5':IMGD[11],'3-6':IMGD[12],'4-0':IMGD[5],'4-1':IMGD[5],'4-2':IMGD[5],'5-0':IMGD[0],'6-0':IMGD[1],'7-0':IMGD[2],'8-0':IMGD[13],'9-0':IMGD[21],'9-1':IMGD[22]};
const IMGS={1:IMGV['1-0'],2:IMGV['2-1'],3:IMGV['3-1'],4:IMGV['4-0'],5:IMGV['5-0'],6:IMGV['6-0'],7:IMGV['7-0'],8:IMGV['8-0'],9:IMGV['9-0']};
const COL=['#3B4BFF','#FF8A3D','#4B5563','#1FA971'];
let lang=ls.g('lang')||'uk',R={p:'home'},F={cat:'all',mat:'all',q:'',col:COL[0]},subj='';
if(ls.g('theme'))root.dataset.theme=ls.g('theme');
const t=k=>T[lang][k];
function go(p,a){const keep=p==='product'&&R.p==='product'&&String(R.a).split('-')[0]===String(a).split('-')[0];R={p,a};if(p==='catalog'&&a&&a.cat)F.cat=a.cat;if(p==='product')F.col=COL[0];menu(false);try{location.hash=p==='product'?'p-'+a:p==='post'?'b-'+a:p==='soon'?'soon-'+a:p==='pdf'?'pdf-'+a:p}catch(e){}render();if(!keep)scrollTo(0,0)}
function part(w,fill,dim){return `<svg viewBox="0 0 300 ${dim?240:190}" role="img" aria-label="part"><defs><linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".75"/><stop offset=".5" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient></defs><rect x="${150-w/2}" y="40" width="${w}" height="110" rx="32" fill="${fill}" style="transition:fill .4s"/><circle cx="${150-w/4}" cy="95" r="26" fill="var(--bg)"/><circle cx="${150+w/4}" cy="95" r="26" fill="var(--bg)"/><rect x="${150-w/2}" y="40" width="${w}" height="110" rx="32" fill="url(#gl)"/>${dim?`<g stroke="var(--mut)" stroke-width="1.5" fill="none"><path d="M${150-w/2} 178h${w}M${150-w/2} 170v16M${150+w/2} 170v16"/><path d="M${150+w/2+18} 40v110M${150+w/2+10} 40h16M${150+w/2+10} 150h16"/></g><text x="150" y="206" text-anchor="middle" fill="var(--mut)" font-size="13">L</text><text x="${150+w/2+34}" y="100" fill="var(--mut)" font-size="13">H</text>`:''}</svg>`}
function side(){const c=R.p,cc=R.p==='catalog'?F.cat:null;
let i=0;const n=(p,l,a,cur)=>`<button class="nav big" data-go="${p}" ${a?`data-a='${a}'`:''} ${cur?'aria-current="page"':''}><i>${String(++i).padStart(2,'0')}</i>${l}</button>`;
$('#side').innerHTML=`<div class="ash"><button class="logo" data-go="home">PLASTIZA</button><button class="ic x" id="close" aria-label="Close">✕</button></div>`+n('home',t('home'),'',c==='home')+n('catalog',t('catalog'),'all',c==='catalog'&&cc==='all')+n('about',t('about'),'',c==='about')+n('oem',t('oem'),'',c==='oem')+n('contacts',t('contacts'),'',c==='contacts')+n('faq',t('faq'),'',c==='faq')+n('blog',t('blog'),'',c==='blog')+`<div class="grp">${t('prod')}</div>`+CATS.map(k=>`<button class="nav" data-go="catalog" data-a="${k.id}" ${cc===k.id?'aria-current="page"':''}>${k[lang]}<small>${P.filter(p=>p.cat===k.id).length}</small></button>`).join('')+`<div class="grp">${t('serv')}</div>`+SRV.map((s,i)=>`<button class="nav" data-go="soon" data-a="${i}" ${c==='soon'&&R.a==i?'aria-current="page"':''}>${s[lang]}</button>`).join('')+`<div class="ct"><div class="grp" style="padding-left:0">${t('contacts')}</div><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a><p>${t('tag')}</p></div><div class="ctl"><div class="lg"><button data-l="uk" aria-pressed="${lang==='uk'}">ua</button><button data-l="en" aria-pressed="${lang==='en'}">en</button></div><button class="ic" id="th" style="flex:none">◐ ${t('theme')}</button></div>`}
const CC={rebar:'#3B4BFF',form:'#FF8A3D'};
const fp=x=>String(x).replace('.',lang==='uk'?',':'.'),cur=()=>lang==='uk'?'грн':'UAH',un=p=>p.u==='m'?(lang==='uk'?'м':'m'):(lang==='uk'?'шт':'pc'),lov=p=>p.v.reduce((a,b)=>+b[1]<+a[1]?b:a)[1],sz=v=>Array.isArray(v[0])?v[0][lang==='uk'?0:1]:v[0];
const card=p=>`<button class="card" data-go="product" data-a="${p.id}"><span class="ci"><img src="${IMGS[p.id]}" alt=""></span><h3 style="font-size:15px">${p.n[lang]}</h3><div class="meta"><span>${p.v.length>1?t('from')+' ':''}${fp(lov(p))} ${cur()}/${un(p)}</span><span>${t('sizes')}: ${p.v.length}</span></div></button>`;
const hd=s=>`<div class="head"><h1 style="font-size:clamp(24px,3vw,34px)">${s}</h1></div>`;
const secMq=()=>{const c=p=>`<button class="mqc" data-go="product" data-a="${p.id}"><span class="mqi"><img src="${IMGS[p.id]}" alt="" loading="lazy"></span><span class="mqn">${p.id===7?(lang==='uk'?'Ялинка':'Fir-tree'):short(p)}<i class="arw" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 17L17 3M7.5 3H17v9.5"/></svg></i></span></button>`;return `<section class="mq" aria-label="${t('islh')}"><div class="mq-t">${P.map(c).join('')}${P.map(c).join('').replace(/<button /g,'<button tabindex="-1" aria-hidden="true" ')}</div></section>`};
const secIsl=()=>`<section><div class="qn qsw" style="margin:0"><span class="swh" aria-hidden="true"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-.5V4.5a1.5 1.5 0 0 1 3 0v6m0-3a1.5 1.5 0 0 1 3 0v6.5a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-2.7L3.6 13a1.5 1.5 0 0 1 2.5-1.7L9 14"/></svg>${t('swipe')}</span><div class="qs">${P.map(qt).join('')}</div></div></section>`;
const secCats=()=>`<section><h2>${t('cats')}</h2><p class="sub">${t('catsub')}</p><div class="tiles">${CATS.map(k=>`<button class="tile" data-go="catalog" data-a="${k.id}"><h3 style="font-size:17px">${k[lang]}</h3><span>${k.d[lang]}</span><span>${P.filter(p=>p.cat===k.id).length} ${t('items')}</span></button>`).join('')}</div></section>`;
const secPop=()=>`<section><h2>${t('pop')}</h2><p class="sub">${t('popsub')}</p><div class="grid" style="padding-bottom:0">${P.filter(p=>[1,2,3,6].includes(p.id)).map(card).join('')}</div></section>`;
const secAbout=()=>`<section><h2>${t('abt')}</h2><p class="txt">${t('abttxt')}</p><button class="btn g" data-go="about" style="margin-top:18px">${t('more')}</button></section>`;
const SVX={uk:{lab:'Наші можливості',h:'Наш досвід — запорука вашої ефективності',p:'ТОВ «Пластіза» — український виробник фіксаторів арматури та закладних елементів для монолітного будівництва, а також широкого спектра пластикових виробів. На власному виробництві ми виконуємо лиття на замовлення та виготовляємо пресформи, тож продукцію створюємо відповідно до індивідуальних вимог клієнтів. Наші потужності дозволяють працювати із замовленнями будь-якої складності: від прототипів до великих серійних партій.',cl:'Консультація',ch:'Бажаєте обговорити умови співпраці?',cp:'Залиште номер — менеджер зв’яжеться з вами найближчим часом і відповість на всі питання.',cb:'Замовити дзвінок',more:'Детальніше про послугу',
k:[{tg:['Прототипи','Серійні партії','Контроль якості'],p:'Виготовляємо пластикові вироби на замовлення відповідно до ваших вимог. Сучасне обладнання дозволяє працювати з проєктами будь-якої складності: від прототипів, які допомагають оцінити виріб перед запуском серії, до великих серійних партій. Лиття під тиском забезпечує точність і стабільну якість кожного виробу незалежно від тиражу. Працюємо з різними видами пластику та підбираємо матеріал під умови експлуатації, а на кожному етапі виробництва проводимо контроль якості.'},
{tg:['Під ваш виріб','Висока точність','Лиття на нашому обладнанні'],p:'Виготовляємо пресформи для лиття пластикових виробів, які клієнти використовують на власних підприємствах для випуску кінцевої продукції. Пресформи відрізняються високою точністю та стабільністю, що забезпечує безперебійний виробничий процес. Рішення підбираємо залежно від форми, розмірів і технічних вимог замовника, а за потреби можемо одразу відлити партію на нашому обладнанні.'}]},
en:{lab:'Our capabilities',h:'Our experience drives your efficiency',p:'PLASTIZA LLC is a Ukrainian manufacturer of rebar spacers and embedded parts for monolithic construction, as well as a wide range of plastic products. At our own plant we provide custom molding and make injection molds, so every product is built to the client’s requirements. Our capacity covers orders of any complexity, from prototypes to large production runs.',cl:'Consultation',ch:'Want to discuss terms?',cp:'Leave your number and a manager will get back to you shortly to answer all your questions.',cb:'Request a call',more:'More about this service',
k:[{tg:['Prototypes','Production runs','Quality control'],p:'We mold plastic products to order, to your requirements. Modern equipment lets us handle projects of any complexity, from prototypes that help evaluate a part before series production to large production runs. Injection molding ensures precision and consistent quality for every part regardless of volume. We work with a range of plastics, match the material to operating conditions and check quality at every production stage.'},
{tg:['Built for your part','High precision','Molding on our equipment'],p:'We make injection molds that clients use at their own facilities to produce finished goods. Our molds deliver high precision and stability for an uninterrupted production process. We tailor each solution to the shape, size and technical requirements of the order and, if needed, can run the first batch on our equipment right away.'}]}};
const secServ2=()=>{const v=SVX[lang];return `<section><div class="sv-g"><div class="sv-l"><div class="sv-c"><span class="sv-lab">${v.lab}</span><h2>${v.h}</h2><p>${v.p}</p><button class="tlink" data-go="about">${t('about')}<i aria-hidden="true">→</i></button></div>
<form class="sv-c cbf" novalidate><span class="sv-lab">${v.cl}</span><h3>${v.ch}</h3><p>${v.cp}</p><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${v.cb}</button><p class="lf-err" role="alert" hidden></p></form></div>
<div class="sv-r">${SRV.map((x,i)=>`<article class="sv-k"><h3>${x[lang]}</h3><div class="sv-tg">${v.k[i].tg.map(g=>`<span>[${g}]</span>`).join('')}</div><p>${v.k[i].p}</p><button class="sv-b" data-go="soon" data-a="${i}">${v.more}<i>↗</i></button></article>`).join('')}</div></div></section>`};
const secServ=()=>`<section><h2>${t('serv')}</h2><p class="sub">${t('srvsub')}</p><div class="two">${SRV.map((s,i)=>`<button class="tile" data-go="soon" data-a="${i}"><h3 style="font-size:17px">${s[lang]}</h3><span>${s.s[lang]}</span></button>`).join('')}</div></section>`;
let secAdv=()=>`<section><h2>${t('adv')}</h2><br><ul class="adv">${ADV.map(a=>`<li><i>✓</i>${a[lang==='uk'?0:1]}</li>`).join('')}</ul></section>`;
const secCon=h=>`<section>${h?`<h2 style="margin-bottom:20px">${t('contacts')}</h2>`:''}<div class="cg"><div><h3>${t('phones')}</h3>${PH.map(x=>`<a href="tel:${x.replace(/[^+\d]/g,'')}">${x}</a>`).join('')}</div><div><h3>${t('addr')}</h3>${AD.map(a=>`<p>${a[lang==='uk'?0:1]}</p>`).join('')}</div><div><h3>Email</h3><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a><button class="btn" data-rfq="${t('contacts')}" style="margin-top:12px">${t('quote')}</button></div></div></section>`;
const band=()=>`<div class="band"><div><h2 style="margin:0 0 6px">${t('band')}</h2>${t('bandd')}</div><button class="btn" data-rfq="${t('drawing')}">${t('quote')}</button></div>`;
// TODO: вписати справжній код ЄДРПОУ ТОВ «Пластіза»
var EDRPOU='00000000',EDRPOU_URL='https://youcontrol.com.ua/catalog/company_details/'+EDRPOU+'/';
// TODO: уточнити режим роботи
const HOURS=[['Пн–Пт: 09:00–18:00','Mon–Fri: 09:00–18:00'],['Сб–Нд: вихідні','Sat–Sun: closed']];
const bd=(c,h)=>`<div class="bd ${c}"><div class="wrap">${h}</div></div>`;
function home(){return `<section class="hx"><div class="hx-glow" aria-hidden="true"></div><div class="hx-orb" aria-hidden="true"><i></i></div><div class="hx-grid" id="hxg" aria-hidden="true"></div><div class="wrap hx-in"><div class="hx-c"><div class="hx-tag"><span>${t('hxtag')}</span><i class="hx-dot" aria-hidden="true"></i><a href="${EDRPOU_URL}" target="_blank" rel="noopener">${t('edr')} ${EDRPOU}<span aria-hidden="true">↗</span></a></div><h1 class="hx-h" id="hxh"><span class="sr">${t('h1a')} — ${t('h1rot').join(', ')}</span><span class="hxg" aria-hidden="true">${(()=>{const st=t('h1a').replace(/\s(\S+)$/,' <span class="nw">$1<span class="hx-bar"></span></span>');return `<span class="hxg-a">${st} <span class="hx-dyn">${t('h1rot').reduce((a,b)=>b.length>a.length?b:a)}</span></span><span class="hxg-b">${st} <span class="hx-dyn"><span class="tw-l">${t('h1rot')[0]}</span></span></span>`})()}</span></h1><p class="hx-p">${t('lead').replace(/\.\s+/,'. <br class="hx-br">')}</p><div class="hx-chips"><button class="hx-chip" data-go="catalog" data-a="rebar">${CATS[0][lang]}<i>↗</i></button><button class="hx-chip" data-go="soon" data-a="0">${SRV[0][lang]}<i>↗</i></button><button class="hx-chip" data-go="soon" data-a="1">${SRV[1][lang]}<i>↗</i></button><button class="hx-chip" data-go="soon" data-a="2">${lang==='uk'?'Комплектація об’єктів':'Site supply'}<i>↗</i></button></div></div><div class="hx-sp" aria-hidden="true"></div><div class="hqi"><form class="hqf" novalidate aria-label="${t('qfb')}"><input name="name" required placeholder="${t('qfn')}" aria-label="${t('qfn')}" autocomplete="name"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${t('qfb')}</button><p class="lf-err" role="alert" hidden></p></form></div></div></section>`+bd('w hxn',stmtH(lang==='uk'?'**PLASTIZA — український виробник** фіксаторів арматури та пластикових виробів. Ллємо під тиском і виготовляємо пресформи на власному виробництві — **від прототипу до серійної партії.**':'**PLASTIZA is a Ukrainian manufacturer** of rebar spacers and plastic products. We injection-mold parts and build molds in-house — **from a prototype to a production run.**',bx('introLab'),`<button class="tlink" data-go="about">${t('about')}<i aria-hidden="true">→</i></button><dl class="st6-k">${[[450,'+','s1'],[12,'','s2'],[20000,'+','s3']].map(n=>`<div><dt class="num"><span class="cnt" data-n="${n[0]}" data-s="${n[1]}">${fmtN(n[0])}${n[1]}</span></dt><dd>${t(n[2])}</dd></div>`).join('')}</dl><div class="st6-g">${secGrid()}</div><div class="st6-bt"><button class="btn" data-go="catalog" data-a="all">${lang==='uk'?'Продукція виробництва':'Our products'} <span aria-hidden="true">→</span></button><button class="btn g" data-pdf>${lang==='uk'?'PDF-каталог':'PDF catalog'} <span aria-hidden="true">↓</span></button></div>`)+`<div style="margin-top:clamp(96px,11vw,170px)"></div>`+secServ5()+tickerH()+`<div>${secAdv()}</div>`+cfBand())+bd('',secBlog())+bd('w',secFaq())+bd('',leadForm('home'))+bd('w',secSeo())}
function quickForm(){return `<form class="qf" novalidate aria-label="${t('qfb')}"><div class="qf-f"><input name="name" required placeholder="${t('qfn')}" aria-label="${t('qfn')}" autocomplete="name"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${t('qfb')}</button></div><p class="lf-err" role="alert" hidden></p></form>`}
Object.assign(F,{fm:[],ps:[],pu:[],sz:[],pf:'',pt:'',o:{ps:1,fm:1}});
const PU=id=>(TAGS[id]||[[null]])[0];
const POS={1:'h',2:'h',4:'h',5:'h',3:'v'};
const short=p=>{const m=p.n[lang].match(lang==='uk'?/«(.+)»/:/“(.+)”/);return m?m[1]:p.n[lang]},title=p=>p.n[lang].replace(/[«»“”]/g,'');
const IC=['M12 7v5l3 2','M8 12l3 3 5-6','M7 4h8l3 3v13H7z','M4 8l8-4 8 4-8 4zM4 12l8 4 8-4M4 16l8 4 8-4'];
const ico=i=>`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${i%4<2?'<circle cx="12" cy="12" r="9"/>':''}<path d="${IC[i%4]}"/></svg>`;
const posL=p=>POS[p.id]==='h'?t('hor'):POS[p.id]==='v'?t('ver'):'';
function filt(){const q=F.q.toLowerCase(),a=F.pf===''?0:+F.pf,b=F.pt===''?Infinity:+F.pt;return P.filter(p=>(F.cat==='all'||p.cat===F.cat)&&p.n[lang].toLowerCase().includes(q)&&(!F.fm.length||F.fm.includes(p.id))&&(!F.ps.length||F.ps.includes(POS[p.id]))&&(!F.pu.length||F.pu.includes(PU(p.id)[0]))&&(!F.sz.length||p.v.some(v=>F.sz.includes(sz(v))))&&p.v.some(v=>+v[1]>=a&&+v[1]<=b))}
function chips(){const c=[],add=(k,l)=>c.push(`<button class="fc" data-x="${k}">${l}<i>✕</i></button>`);
if(F.cat!=='all')add('cat',t('cat_l')+': '+CATS.find(k=>k.id===F.cat)[lang]);if(F.q)add('q',t('srch')+': '+F.q);
F.fm.forEach(id=>add('fm:'+id,short(P.find(p=>p.id===id))));F.ps.forEach(v=>add('ps:'+v,v==='h'?t('hor'):t('ver')));F.pu.forEach(v=>{const r=Object.values(TAGS).find(x=>x[0][0]===v);add('pu:'+v,r?r[0][lang==='uk'?0:1]:v)});F.sz.forEach(v=>add('sz:'+v,v));return c.join('')}
const TAGS={1:[['Для сипучої основи','For loose bases'],['Горизонтальна фіксація','Horizontal fixing']],2:[['Для твердої основи','For solid bases'],['Горизонтальна фіксація','Horizontal fixing']],3:[['Для стін і колон','For walls and columns'],['Вертикальна фіксація','Vertical fixing']],4:[['Для бетонної основи','For concrete bases'],['Горизонтальна фіксація','Horizontal fixing']],5:[['Для бетонної основи','For concrete bases'],['Горизонтальна фіксація','Horizontal fixing']],6:[['Для опалубки','For formwork'],['Захист трубки','Tube protection']],7:[['Для опалубки','For formwork'],['Заглушка отворів','Hole plug']],8:[['Для опалубки','For formwork'],['Заглушка отворів','Hole plug']],9:[['Для опалубки','For formwork'],['Дистанційний елемент','Spacer element']]};
function pc(p){const I=lang==='uk'?0:1,z=p.v.map(sz),zs=z.length>1?z[0]+' … '+z[z.length-1]:z[0],tags=[...(TAGS[p.id]||[]).map(x=>x[I]),zs];
return `<article class="pc"><button class="pci" data-go="product" data-a="${p.id}" aria-label="${title(p)}"><span class="tg">${tags.map(x=>`<span>${x}</span>`).join('')}</span><img src="${IMGS[p.id]}" alt=""></button><div class="pcb"><h3>${title(p)}</h3><p class="pp"><small>${t('from')}</small> ${fp(lov(p))} ${cur()}/${un(p)}</p><button class="vb" data-go="product" data-a="${p.id}">${t('view')}</button></div></article>`}
let resHtml=()=>{const r=filt();return `<div class="chips">${chips()}</div>`+(r.length?`<div class="pgrid">${r.map(pc).join('')}</div>`:`<p class="none">${t('none')}</p>`)};
function fHtml(){const S=[...new Set(P.flatMap(p=>p.v.map(sz)))];
const g=(id,ti,b)=>`<div class="fg"><button class="fh" data-acc="${id}" aria-expanded="${!!F.o[id]}">${ti}<i>›</i></button>${F.o[id]?`<div class="fb2">${b}</div>`:''}</div>`;
const ck=(k,v,l,on)=>`<button class="ck" data-f="${k}" data-v="${v}" aria-pressed="${on}"><i>${on?'✓':''}</i>${l}</button>`;
return `<input id="q" type="search" value="${F.q}" placeholder="${t('search')}" aria-label="${t('search')}">`+'<div class="fbox">'+g('ps',t('f_pos'),[['h',t('hor')],['v',t('ver')]].map(x=>ck('ps',x[0],x[1],F.ps.includes(x[0]))).join(''))+g('fm',t('f_form'),`<div class="sc">${P.map(p=>ck('fm',p.id,short(p),F.fm.includes(p.id))).join('')}</div>`)+g('pu',t('f_pur'),[...new Map(P.map(p=>PU(p.id)).filter(x=>x[0]).map(x=>[x[0],x])).values()].map(x=>ck('pu',x[0],x[lang==='uk'?0:1],F.pu.includes(x[0]))).join(''))+g('sz',t('f_size'),`<div class="sc">${S.map(s=>ck('sz',s,s,F.sz.includes(s))).join('')}</div>`)+'</div>'}
const qt=p=>`<button class="qt" data-go="product" data-a="${p.id}"><span class="qi"><img src="${IMGS[p.id]}" alt=""></span><span class="qnm">${p.id===7?(lang==='uk'?'Ялинка':'Fir-tree'):short(p)}<i class="arw" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 17L17 3M7.5 3H17v9.5"/></svg></i></span></button>`;
function catalog(){return `<div class="wrap"><div class="ct1"><span class="lab">${t('clab')}</span><button class="lab r" data-go="home">${t('tohome')}</button></div><h1 class="ch">${t('ch')}</h1><p class="cs">${t('cs')}</p><div class="qn"><div class="qs">${P.map(qt).join('')}</div></div><div class="cl"><div class="fpn" id="fp">${fHtml()}</div><div id="res">${resHtml()}</div></div></div>`}
function updCat(){const q=$('#q'),v=q?q.value:'';$('#fp').innerHTML=fHtml();$('#q').value=F.q;$('#res').innerHTML=resHtml()}
function tog(k,v){const x=k==='fm'?+v:v,a=F[k],i=a.indexOf(x);i<0?a.push(x):a.splice(i,1)}
function clr(s){const[k,v]=s.split(':');if(k==='cat')F.cat='all';else if(k==='q')F.q='';else if(k==='pf'||k==='pt')F[k]='';else{const a=F[k],i=a.indexOf(k==='fm'?+v:v);if(i>=0)a.splice(i,1)}}
document.addEventListener('click',e=>{const ac=e.target.closest('[data-acc]');if(ac){F.o[ac.dataset.acc]=!F.o[ac.dataset.acc];updCat();return}
const fk=e.target.closest('[data-f]');if(fk){tog(fk.dataset.f,fk.dataset.v);updCat();return}
const xx=e.target.closest('[data-x]');if(xx){clr(xx.dataset.x);updCat()}});
const pvParse=a=>{const [id,vi]=String(a).split('-'),p=P.find(x=>x.id==id);return {p,vi:p?Math.min(Math.max(+vi||0,0),p.v.length-1):0}};
function product(){const {p,vi}=pvParse(R.a);if(!p)return page404();const k=CATS.find(c=>c.id===p.cat),L=lang==='uk'?0:1,v=p.v[vi],vn=sz(v),multi=p.v.length>1;
const vlab=Array.isArray(v[0])?(lang==='uk'?'Тип':'Type'):t('size');const name=`${p.n[lang]} ${vn}`;document.title=`${name} — PLASTIZA`;
const rel=P.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
return `<div class="wrap"><div class="crumb" style="padding-top:28px"><button data-go="catalog" data-a="all">${t('back')}</button> / <button data-go="catalog" data-a="${k.id}">${k[lang]}</button> / ${p.n[lang]}</div>
<div class="pd2"><div class="pd2-l"><div class="pimg"><img src="${IMGV[p.id+'-'+vi]||IMGS[p.id]}" alt="${name}"></div></div>
<div class="pd2-r"><h1 class="pd2-h">${p.n[lang]} <span>${vn}</span></h1><p class="pd2-d">${p.d[lang]}</p>
${multi?`<div class="vs"><span class="vs-l">${vlab}</span><div class="vs-p" role="list">${p.v.map((x,i)=>`<button class="vsp" role="listitem" data-go="product" data-a="${p.id}-${i}" aria-current="${i===vi?'page':'false'}">${sz(x)}</button>`).join('')}</div></div>`:''}
<div class="pd2-pr"><div><span class="pr-k">${t('price')}</span><b class="pr-v"><span class="pr-from">${t('from')}</span>${fp(v[1])} ${cur()}/${un(p)}</b></div><div><span class="pr-k">${t('pack')}</span><b>${v[2]?v[2]+' '+un(p):'—'}</b></div></div>
<button class="btn pd2-b" data-rfq="${name}">${t('quote')}</button>
<div class="pda pda-x"><details class="pda-i" open><summary><span>${t('specs')}</span><i aria-hidden="true"></i></summary><table><tr><td>${vlab}</td><td>${vn}</td></tr>${p.sp.map(s=>`<tr><td>${s[L]}</td><td>${s[2+L]}</td></tr>`).join('')}</table></details>
${multi?`<details class="pda-i" open><summary><span>${t('pricecap')}</span><i aria-hidden="true"></i></summary><table class="pt"><thead><tr><th>${vlab}</th><th>${t('price')}</th><th>${t('pack')}</th></tr></thead><tbody>${p.v.map((x,i)=>`<tr${i===vi?' class="cur"':''}><td><button class="ptl" data-go="product" data-a="${p.id}-${i}">${sz(x)}</button></td><td>${t('from')} ${fp(x[1])} ${cur()}/${un(p)}</td><td>${x[2]?x[2]+' '+un(p):'—'}</td></tr>`).join('')}</tbody></table></details>`:''}<!--pda--></div>
</div></div>
${rel.length?`<section style="padding-bottom:clamp(56px,7vw,96px)"><h2 class="x-h">${t('rel')}</h2><div class="pgrid">${rel.map(p=>{const i=p.v.indexOf(p.v.reduce((a,b)=>+b[1]<+a[1]?b:a));return pcV({p,i,v:p.v[i]})}).join('')}</div></section>`:''}</div>`}

const SOCS=`<a class="so" href="https://wa.me/380966821463" target="_blank" rel="noopener" aria-label="WhatsApp"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11.6a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-3.8A8.2 8.2 0 1 1 20 11.6z"/><path d="M9.2 8.4c.3-.3.7-.3 1 0l.8 1c.2.3.2.6 0 .9l-.4.5c.4.9 1 1.5 1.9 1.9l.5-.4c.3-.2.6-.2.9 0l1 .8c.3.3.3.7 0 1l-.5.5c-.4.4-1 .5-1.6.3-1.9-.7-3.4-2.2-4.1-4.1-.2-.6-.1-1.2.3-1.6z"/></svg></a><a class="so" href="https://t.me/+380966821463" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 4.5 3.5 11.2l5.6 1.9 2 6 3-3.6 4.6 3.4z"/><path d="m9.1 13.1 7.6-5.2"/></svg></a><a class="so" href="viber://chat?number=%2B380966821463" target="_blank" rel="noopener" aria-label="Viber"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3c4.6 0 8 1.4 8 7s-3.4 7-8 7c-.7 0-1.3 0-1.9-.1L7 19.5V16.2C5 15.2 4 13.2 4 10c0-5.6 3.4-7 8-7z"/><path d="M9.6 7.8c.3-.3.7-.3 1 0l.8 1c.2.3.2.6 0 .9l-.4.5c.4.9 1 1.5 1.9 1.9l.5-.4c.3-.2.6-.2.9 0l1 .8c.3.3.3.7 0 1l-.5.5c-.4.4-1 .5-1.6.3-1.9-.7-3.4-2.2-4.1-4.1-.2-.6-.1-1.2.3-1.6z"/><path d="M13 6.5a3.2 3.2 0 0 1 2.6 2.6"/></svg></a>`;
const IX={uk:{
aboutSt:'<b>ТОВ «Пластіза» — український виробник</b> фіксаторів арматури та пластикових виробів. Від <b>пресформи</b> до <b>серійної партії</b> на власному виробництві.',
aboutL:'Про компанію',aboutP:['Ми виготовляємо фіксатори арматури та закладні елементи для монолітного будівництва, а також пластикові вироби на замовлення.','Власні потужності дозволяють вести проєкт повністю: від розробки пресформи й прототипу до великих серійних партій зі стабільною якістю. Працюємо з будівельними компаніями, постачальниками та виробниками, яким потрібні точні деталі в потрібному обсязі.'],
numsL:'У цифрах',nums:[['450+','задоволених клієнтів'],['12','років досвіду'],['20 000+','виконаних замовлень']],
doL:'Що ми робимо',
advL:'Чому обирають нас',adv:[['Власне виробництво','Повний цикл без посередників'],['Висока якість','Контроль на кожному етапі'],['Конкурентна ціна','Ціни напряму від виробника'],['Комплексне постачання','Усі фіксатори для об’єкта в одному замовленні'],['Надійне партнерство','Консультації та супровід на кожному етапі'],['Міжнародна співпраця','Досвід роботи з закордонними партнерами'],['Екологічність','Відповідальний підхід до виробництва'],['Український виробник','Виробляємо в Україні']],
stepsL:'Етапи співпраці',steps:[['Заявка','Надсилаєте креслення, зразок або перелік позицій із потрібними обсягами.'],['Розрахунок','Оцінюємо вартість і терміни, а за потреби й виготовлення пресформи.'],['Узгодження','Погоджуємо комерційну пропозицію, зразок і умови постачання.'],['Виробництво','Відливаємо партію та перевіряємо якість на кожному етапі.'],['Відвантаження','Пакуємо й передаємо продукцію в погоджений термін.']],
ctaSt:'Маєте креслення або зразок? <b>Розрахуємо вартість і терміни.</b>',
srvSt:'<b>Лиття пластикових виробів</b> і <b>виготовлення пресформ</b> на власному виробництві. Від прототипу до серійної партії.',
apL:'Підхід',incL:'Що входить',more:'Детальніше про послугу',
th:[[['Прототипи','Допомагають оцінити виріб до запуску серії'],['Серійні партії','Від малих тиражів до великих обсягів'],['Різні види пластику','Підбираємо матеріал під завдання'],['Точна геометрія','Стабільні параметри кожного виробу'],['Контроль якості','На кожному етапі виробництва']],[['Під ваш виріб','Враховуємо форму, розміри й технічні вимоги'],['Висока точність','Стабільна якість лиття з кожного циклу'],['Для вашого виробництва','Пресформу використовуєте на власному підприємстві'],['Або лиття в нас','Можемо одразу відлити партію на нашому обладнанні']]],
conSt:'Зв’яжіться з нами, і ми <b>розрахуємо вартість</b> вашого замовлення.',msg:'Месенджери',write:'Написати нам'},
en:{
aboutSt:'<b>PLASTIZA LLC is a Ukrainian manufacturer</b> of rebar spacers and plastic products. From the <b>mold</b> to the <b>production run</b>, all at our own plant.',
aboutL:'About the company',aboutP:['We make rebar spacers and embedded parts for monolithic construction, as well as custom plastic products.','Our own capacity lets us run a project end to end: from mold design and a prototype to large production runs with consistent quality. We work with construction companies, distributors and manufacturers who need precise parts in the right volume.'],
numsL:'In numbers',nums:[['450+','satisfied clients'],['12','years of experience'],['20 000+','orders completed']],
doL:'What we do',
advL:'Why clients choose us',adv:[['In-house production','Full cycle, no middlemen'],['High quality','Checks at every stage'],['Competitive prices','Direct manufacturer pricing'],['Complete supply','Every spacer for a site in one order'],['Reliable partnership','Advice and support at every stage'],['International cooperation','Experience with partners abroad'],['Eco-friendliness','A responsible approach to production'],['Ukrainian manufacturer','Made in Ukraine']],
stepsL:'How we work together',steps:[['Request','Send a drawing, a sample or a list of items with the volumes you need.'],['Estimate','We assess cost and lead time, including a mold if one is needed.'],['Agreement','We confirm the quote, the sample and the delivery terms.'],['Production','We mold the batch and check quality at every stage.'],['Shipment','We pack and hand over the goods on the agreed date.']],
ctaSt:'Have a drawing or a sample? <b>We’ll estimate cost and lead time.</b>',
srvSt:'<b>Plastic injection molding</b> and <b>mold making</b> at our own plant. From a prototype to a production run.',
apL:'Approach',incL:'What’s included',more:'More about this service',
th:[[['Prototypes','Evaluate the part before series production'],['Production runs','From small batches to large volumes'],['Range of plastics','We match the material to the task'],['Precise geometry','Consistent parameters for every part'],['Quality control','At every production stage']],[['Built for your part','Shape, size and technical requirements'],['High precision','Consistent molding quality every cycle'],['For your plant','Use the mold at your own facility'],['Or mold with us','We can run the batch on our equipment right away']]],
conSt:'Get in touch and we’ll <b>estimate the cost</b> of your order.',msg:'Messengers',write:'Write to us'}};
const x=k=>IX[lang][k];
const xNums=()=>`<div class="x-s"><div class="x-lab">${x('numsL')}</div><div class="x-nums">${x('nums').map(n=>`<div><b class="num">${n[0]}</b><span>${n[1]}</span></div>`).join('')}</div></div>`;
let xSteps=()=>`<div class="x-s"><h2 class="x-h">${x('stepsL')}</h2><ol class="x-steps">${x('steps').map((s,i)=>`<li><span class="x-n num">${String(i+1).padStart(2,'0')}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol></div>`;
const xCta=()=>`<div class="x-s x-cta"><p class="x-st x-st2">${x('ctaSt')}</p><div class="row"><button class="btn" data-rfq="${t('drawing')}">${t('quote')}</button><button class="btn g" data-go="contacts">${t('contacts')}</button></div></div>`;
const xRow=(l,body)=>`<div class="x-row"><div class="x-lab">${l}</div><div>${body}</div></div>`;
const xKv=a=>`<ul class="x-kv">${a.map(r=>`<li><span>${r[0]}</span><span>${r[1]}</span></li>`).join('')}</ul>`;
const xLink=(n,l,go,a)=>`<button class="x-li" data-go="${go}"${a!=null?` data-a="${a}"`:''}><span class="x-n">${n}</span><span class="x-t">${l}</span><i>→</i></button>`;
function about(){const D=[[CATS[0][lang],'catalog','rebar'],[CATS[1][lang],'catalog','form'],[SRV[0][lang],'soon',0],[SRV[1][lang],'soon',1]];
return `<div class="wrap x"><div class="x-top"><p class="x-st">${x('aboutSt')}</p></div>
${xRow(x('aboutL'),x('aboutP').map(p=>`<p class="x-p">${p}</p>`).join(''))}
${xNums()}
<div class="x-s"><h2 class="x-h">${x('doL')}</h2><div class="x-links">${D.map((d,i)=>xLink(String(i+1).padStart(2,'0'),d[0],d[1],d[2])).join('')}</div></div>
<div class="x-s">${xRow(`<h2 class="x-h" style="margin:0">${x('advL')}</h2>`,xKv(x('adv')))}</div>
${xSteps()}${xCta()}</div>`}
function srvBlock(i,full){const s=SRV[i];return `<div class="x-s x-srv"><div class="x-sh"><h2 class="x-big">${s[lang]}</h2><span class="x-num num">${String(i+1).padStart(2,'0')}</span></div>
${xRow(x('apL'),`<p class="x-p">${s.d[lang]}</p>`)}${xRow(x('incL'),xKv(x('th')[i]))}
${full?'':`<div class="x-row"><div></div><div><button class="btn g" data-go="soon" data-a="${i}">${x('more')}</button></div></div>`}</div>`}
function oemP(){return `<div class="wrap x"><div class="x-top"><p class="x-st">${x('srvSt')}</p></div>${srvBlock(0)}${srvBlock(1)}${xSteps()}${leadForm('services')}</div>`}
function soon(){const i=SRV[R.a]?+R.a:0;return `<div class="wrap x"><div class="x-top x-top2"><button class="lab r" data-go="oem">${t('serv')}</button></div>${srvBlock(i,1).replace('x-s x-srv','x-srv')}${leadForm('service-'+i)}${xSteps()}</div>`}
function contactsP(){const I=lang==='uk'?0:1,u=!I,col=(k,v)=>`<div class="cx-c"><span class="s5-k">${k}</span>${v}</div>`;
return `<div class="wrap x"><header class="s5-top cx-top"><div>${secLab(t('contacts'))}<h1 class="s5-h">${u?'Зв’яжіться<br>з нами':'Get in<br>touch'}</h1></div><div class="s5-tr"><p class="cx-st">${x('conSt')}</p></div></header>
<div class="cx">${col(t('phones'),PH.map(p=>`<a class="cx-a" href="tel:${p.replace(/[^+\d]/g,'')}">${p}</a>`).join(''))}${col('Email','<a class="cx-a" href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a>')}${col(t('addr'),AD.map(a=>`<p class="cx-p">${a[I]}</p>`).join('')+`<p class="cx-p cx-m">${HOURS.map(h=>h[I]).join(' · ')}</p>`)}${col(x('msg'),`<div class="socs" style="margin:0">${SOCS}</div>`)}</div>
</div>${mapLviv()}<div class="wrap x"><div class="ct5">${leadForm('contacts')}</div></div>`}
function mapLviv(){const u=lang==='uk',q='Львів, вулиця Шевченка, 154',e=encodeURIComponent(q);
return `<section class="mp" aria-label="${u?'Мапа: офіс у Львові':'Map: Lviv office'}"><div class="mp-m"><svg class="mp-svg" viewBox="0 0 1600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-461 -40 L-321 460 M-418 -40 L-278 460 M-368 -40 L-228 460 M-318 -40 L-178 460 M-282 -40 L-142 460 M-235 -40 L-95 460 M-182 -40 L-42 460 M-143 -40 L-3 460 M-93 -40 L47 460 M-43 -40 L97 460 M-6 -40 L134 460 M48 -40 L188 460 M89 -40 L229 460 M132 -40 L272 460 M179 -40 L319 460 M230 -40 L370 460 M276 -40 L416 460 M317 -40 L457 460 M365 -40 L505 460 M409 -40 L549 460 M462 -40 L602 460 M506 -40 L646 460 M546 -40 L686 460 M601 -40 L741 460 M639 -40 L779 460 M687 -40 L827 460 M740 -40 L880 460 M786 -40 L926 460 M831 -40 L971 460 M868 -40 L1008 460 M923 -40 L1063 460 M969 -40 L1109 460 M1012 -40 L1152 460 M1052 -40 L1192 460 M1101 -40 L1241 460 M1144 -40 L1284 460 M1198 -40 L1338 460 M1238 -40 L1378 460 M1286 -40 L1426 460 M1334 -40 L1474 460 M1376 -40 L1516 460 M1428 -40 L1568 460 M1467 -40 L1607 460 M1521 -40 L1661 460 M1562 -40 L1702 460 M1612 -40 L1752 460 M1660 -40 L1800 460 M1698 -40 L1838 460 M1743 -40 L1883 460 M1797 -40 L1937 460 M1843 -40 L1983 460 M1890 -40 L2030 460 M-40 -90 L1640 -180 M-40 -44 L1640 -134 M-40 -4 L1640 -94 M-40 47 L1640 -43 M-40 84 L1640 -6 M-40 136 L1640 46 M-40 171 L1640 81 M-40 224 L1640 134 M-40 262 L1640 172 M-40 310 L1640 220 M-40 357 L1640 267 M-40 399 L1640 309 M-40 441 L1640 351 M-40 484 L1640 394" class="m-r2"/><path class="m-pk" d="M210 40 h170 l40 110 h-190 z"/><path class="m-pk" d="M1180 250 h150 l30 120 h-170 z"/><path class="m-pk" d="M760 330 h120 l20 70 h-130 z"/><path class="m-w" d="M-20 300 C 260 270 420 360 700 330 S 1100 270 1300 310 S 1560 360 1640 330 L1640 352 C 1560 382 1400 336 1300 334 S 1100 294 700 354 S 260 296 -20 324 Z"/><path d="M-40 120 L1640 -40 M-40 420 L1640 230 M300 -40 L520 460 M980 -40 L1180 460 M-40 250 C 400 210 900 200 1640 140" class="m-r1"/></svg><span class="mp-pin" aria-hidden="true"><i></i></span></div>
<div class="mp-c"><span class="sv-lab">${u?'Офіс і склад · Львів':'Office & warehouse · Lviv'}</span><p class="mp-a">${AD[0][u?0:1]}</p><p class="mp-h">${HOURS.map(h=>h[u?0:1]).join(' · ')}</p>
<div class="mp-b"><a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${e}" target="_blank" rel="noopener">${u?'Прокласти маршрут':'Get directions'} <span aria-hidden="true">↗</span></a><a class="btn g" href="https://www.google.com/maps/search/?api=1&query=${e}" target="_blank" rel="noopener">${u?'Відкрити в Google Maps':'Open in Google Maps'}</a></div></div></section>`}



function stub(){return `<div class="wrap">${hd(t(R.p))}<p class="txt">${t('wip')}</p><div class="row" style="margin:24px 0 60px"><button class="btn g" data-go="catalog" data-a="all">${t('cat_btn')}</button></div></div>`}


(function(){const H=(c)=>{c=c.trim();if(c[0]!=='#')return null;return [1,3,5].map(i=>parseInt(c.slice(i,i+2),16))},mix=(a,b,t)=>'rgb('+a.map((v,i)=>Math.round(v+(b[i]-v)*t)).join(',')+')';
let raf=0;function upd(){raf=0;const cs=getComputedStyle(root),c=[H(cs.getPropertyValue('--sb1')),H(cs.getPropertyValue('--sb2')),H(cs.getPropertyValue('--sb3'))];if(c.some(x=>!x))return;
const m=document.documentElement.scrollHeight-innerHeight,t=m>0?Math.min(1,Math.max(0,scrollY/m)):0,at=u=>u<.5?mix(c[0],c[1],u*2):mix(c[1],c[2],(u-.5)*2);
root.style.setProperty('--sba',at(Math.max(0,t-.25)));root.style.setProperty('--sbb',at(Math.min(1,t+.25)))}
const q=()=>{if(!raf)raf=requestAnimationFrame(upd)};addEventListener('scroll',q,{passive:true});addEventListener('resize',q);
try{matchMedia('(prefers-color-scheme:dark)').addEventListener('change',q)}catch(e){}new MutationObserver(q).observe(root,{attributes:true,attributeFilter:['data-theme']});setTimeout(upd,50);window.sbUpd=q})();
let pelStop=null;
function pellets(cv){if(pelStop){pelStop();pelStop=null}if(!cv)return;
const ctx=cv.getContext('2d'),COLS=[['#2F45FF','#9AA8FF'],['#2F45FF','#9AA8FF'],['#2F45FF','#9AA8FF'],['#FF7A1A','#FFC797'],['#FF7A1A','#FFC797'],['#FFB81A','#FFE6A0'],['#12A99A','#93F1E4']];
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;let W=0,H=0,ps=[],raf=0,vis=true,last=performance.now(),mx=0,my=0,tx=0,ty=0;
const hx=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),sh=(h,k)=>{const c=hx(h);return 'rgb('+c.map(v=>Math.round(k<0?v*(1+k):v+(255-v)*k)).join(',')+')'};
function mk(any){const z=Math.random(),u=W/420,s=(15+z*17)*u;return{x:Math.random()*W,y:any?Math.random()*H:-s*2,z,s,ar:.66+Math.random()*.14,a:Math.random()*6.283,va:(Math.random()-.5)*.5,vy:(5+z*16)*u,sw:Math.random()*6.283,c:COLS[Math.random()*COLS.length|0],cl:Math.random()<.16}}
function size(){const r=cv.getBoundingClientRect();if(!r.width)return;const d=Math.min(2,devicePixelRatio||1);W=r.width;H=r.height;cv.width=W*d;cv.height=H*d;ctx.setTransform(d,0,0,d,0,0);ps=Array.from({length:Math.round(W*H/1250)},()=>mk(true)).sort((a,b)=>a.z-b.z)}
function rr(x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function pel(p,t){const L=p.s,w=L*p.ar,ox=tx*(p.z-.5)*18,oy=ty*(p.z-.5)*18;ctx.save();ctx.translate(p.x+Math.sin(t*.0006+p.sw)*6*p.z+ox,p.y+oy);ctx.rotate(p.a);ctx.globalAlpha=.55+p.z*.45;
if(p.cl){const g=ctx.createLinearGradient(0,-w/2,0,w/2);g.addColorStop(0,'rgba(255,255,255,.25)');g.addColorStop(.3,'rgba(255,255,255,.85)');g.addColorStop(1,'rgba(200,210,230,.35)');rr(-L/2,-w/2,L,w,w*.3);ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='rgba(150,165,195,.45)';ctx.lineWidth=1;ctx.stroke()}
else{const [c0,c1]=p.c,g=ctx.createLinearGradient(0,-w/2,0,w/2);g.addColorStop(0,sh(c0,-.38));g.addColorStop(.28,c1);g.addColorStop(.55,c0);g.addColorStop(1,sh(c0,-.5));rr(-L/2,-w/2,L,w,w*.3);ctx.fillStyle=g;ctx.fill();
ctx.beginPath();ctx.ellipse(L/2-w*.16,0,w*.2,w*.47,0,0,6.283);const f=ctx.createRadialGradient(L/2-w*.2,-w*.12,0,L/2-w*.16,0,w*.5);f.addColorStop(0,c1);f.addColorStop(1,c0);ctx.fillStyle=f;ctx.fill()}
ctx.globalAlpha*=.75;rr(-L*.38,-w*.36,L*.62,w*.12,w*.06);ctx.fillStyle='rgba(255,255,255,.7)';ctx.fill();ctx.restore()}
function frame(t){raf=0;const dt=Math.min(.05,(t-last)/1000);last=t;tx+=(mx-tx)*.05;ty+=(my-ty)*.05;ctx.clearRect(0,0,W,H);
for(const p of ps){if(!rm){p.y+=p.vy*dt;p.a+=p.va*dt}if(p.y-p.s>H){Object.assign(p,mk(false),{z:p.z})}pel(p,t)}
if(!rm&&vis)raf=requestAnimationFrame(frame)}
size();const ro=new ResizeObserver(()=>{size();if(!raf)raf=requestAnimationFrame(frame)});ro.observe(cv);
const io=new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis&&!raf){last=performance.now();raf=requestAnimationFrame(frame)}});io.observe(cv);
const mv=e=>{const r=cv.getBoundingClientRect();mx=((e.clientX-r.left)/r.width-.5)*2;my=((e.clientY-r.top)/r.height-.5)*2};addEventListener('pointermove',mv,{passive:true});
raf=requestAnimationFrame(frame);pelStop=()=>{cancelAnimationFrame(raf);raf=0;ro.disconnect();io.disconnect();removeEventListener('pointermove',mv)}}
let hxStop=null;
function heroTiles(g){if(hxStop){hxStop();hxStop=null}if(!g)return;const hx=g.parentNode,gl=hx.querySelector('.hx-glow');
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches,PAL=['#7B3CFF','#6A45FF','#5246FF','#3B4BFF','#2F63FF','#3F86FF','#62A6FF'];
let T=[],W=0,H=0,S=0,G=0,timer=0,vis=true,t0=performance.now();
const hx2=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),mix=(a,b,k)=>{const x=hx2(a),y=hx2(b);return '#'+x.map((v,i)=>Math.round(v+(y[i]-v)*k).toString(16).padStart(2,'0')).join('')};
const pal=u=>{u=Math.min(.999,Math.max(0,u))*(PAL.length-1);const i=u|0;return mix(PAL[i],PAL[i+1],u-i)};
function build(){const r=hx.getBoundingClientRect();W=r.width;H=r.height;if(!W)return;S=W>=1200?92:W>=760?76:56;G=Math.round(S*.1);const st=S+G,cols=Math.ceil(W/st)+1,rows=Math.ceil(H/st)+1,x0=Math.round((W-cols*st+G)/2),y0=-Math.round(S*.35);
g.innerHTML='';T=[];const f=document.createDocumentFragment();for(let r2=0;r2<rows;r2++)for(let c=0;c<cols;c++){const d=document.createElement('div');d.className='tl';d.style.cssText=`left:${x0+c*st}px;top:${y0+r2*st}px;width:${S}px;height:${S}px`;const i=document.createElement('i');d.appendChild(i);f.appendChild(d);T.push({x:x0+c*st+S/2,y:y0+r2*st+S/2,i,k:.6+Math.random()*.4,off:false})}g.appendChild(f);tick(true)}
function tick(first){const t=(performance.now()-t0)/1000,mob=W<760,st=S+G,R=(mob?2.25:3.7)*st;
const sp=hx.querySelector('.hqf'),spy=(mob&&sp&&sp.offsetHeight)?(sp.getBoundingClientRect().top-hx.getBoundingClientRect().top+sp.offsetHeight/2):null;const cx=W*(mob?.5:.74)+Math.sin(t*.33)*W*(mob?.12:.065),cy=(spy!=null?spy:H*(mob?.19:(W<901?.3:.46)))+Math.cos(t*.27)*(spy!=null?28:H*(mob?.04:.1)),hs=Math.sin(t*.45)*.32+Math.sin(t*.19)*.12;
if(gl){gl.style.left=cx+'px';gl.style.top=cy+'px'}
for(const p of T){if(!first&&Math.random()<.5)p.k=.55+Math.random()*.45;if(!first)p.off=Math.random()<.06;
const dx=(p.x-cx)/R,dy=(p.y-cy)/R,d=(Math.abs(dx)+Math.abs(dy))*.55+Math.hypot(dx,dy)*.45,f=Math.max(0,1-d);
const o=p.off?0:Math.min(1,Math.pow(f,.75)*p.k*1.08);p.i.style.opacity=o.toFixed(3);p.i.style.setProperty('--c',pal(.5+dx*.5+dy*.18+hs+(Math.random()-.5)*.22))}}
function loop(){if(!vis)return;tick(false);timer=setTimeout(loop,950)}
build();const ro=new ResizeObserver(()=>build());ro.observe(hx);
const io=new IntersectionObserver(e=>{const v=e[0].isIntersecting;if(v&&!vis){vis=true;if(!rm)loop()}else if(!v){vis=false;clearTimeout(timer)}});io.observe(hx);
if(!rm)timer=setTimeout(loop,900);hxStop=()=>{clearTimeout(timer);ro.disconnect();io.disconnect()}}
(function(){let ly=scrollY,acc=0,raf=0;const B=document.body;function on(){raf=0;const y=Math.max(0,scrollY),d=y-ly;ly=y;
if(B.classList.contains('open')||y<90){B.classList.remove('hh');acc=0;return}
acc=(Math.sign(d)===Math.sign(acc)?acc:0)+d;if(acc>14)B.classList.add('hh');else if(acc<-10)B.classList.remove('hh')}
addEventListener('scroll',()=>{if(!raf)raf=requestAnimationFrame(on)},{passive:true});
document.addEventListener('focusin',e=>{if(e.target.closest&&e.target.closest('.top'))B.classList.remove('hh')})})();
const LF={uk:{fh:'Залишити заявку',fp:'Опишіть завдання та прикріпіть креслення або фото — менеджер підготує розрахунок і зв’яжеться з вами.',nm:'Ім’я або компанія',ph:'Телефон',em:'Email',msg:'Що потрібно виготовити, обсяги, терміни',file:'Прикріпити файл',fileh:'PDF, DWG, DXF, STEP, JPG, PNG · до 20 МБ',how:'Як з вами зв’язатися',call:'Дзвінок',mail:'Email',mess:'Месенджер',send:'Надіслати заявку',ok:'Заявку надіслано. Менеджер зв’яжеться з вами.',need:'Вкажіть телефон або email.'},
en:{fh:'Send a request',fp:'Describe the task and attach a drawing or photo — a manager will prepare an estimate and get back to you.',nm:'Name or company',ph:'Phone',em:'Email',msg:'What to make, volumes, timing',file:'Attach a file',fileh:'PDF, DWG, DXF, STEP, JPG, PNG · up to 20 MB',how:'How should we contact you',call:'Call',mail:'Email',mess:'Messenger',send:'Send request',ok:'Request sent. A manager will contact you.',need:'Enter a phone number or email.'}};
const lf=k=>LF[lang][k];
// Джерело заявки: з якої сторінки її надіслано (піде в адмінку та Telegram)
function leadSource(extra){const pg=R.p,a=R.a;let title;
if(pg==='soon')title=(SRV[a]||SRV[0])[lang];else if(pg==='product'){const {p,vi}=pvParse(a);title=p?p.n[lang]+' '+sz(p.v[vi]):''}else if(pg==='catalog')title=t('catalog');else title=t(pg)||pg;
let url='';try{url=location.href}catch(e){}
return {page:pg,id:a??null,title,url,form:extra||'page',lang,ts:new Date().toISOString()}}
const LEADS=[];
function pushLead(data){LEADS.push(data);try{console.info('PLASTIZA lead',data)}catch(e){}
const el=$('#toast');el.textContent=data.okText||t('ok');el.classList.add('on');setTimeout(()=>el.classList.remove('on'),3200)}
function leadForm(ctx){return `<div class="x-s x-lf"><div class="x-row"><div><h2 class="x-h" style="margin:0 0 14px">${lf('fh')}</h2><p class="x-pm">${lf('fp')}</p></div>
<form class="lf" data-ctx="${ctx}" novalidate><div class="lf-g"><input name="name" required placeholder="${lf('nm')}" aria-label="${lf('nm')}" autocomplete="name"><input name="phone" type="tel" placeholder="${lf('ph')}" aria-label="${lf('ph')}" autocomplete="tel"></div>
<input name="email" type="email" placeholder="${lf('em')}" aria-label="${lf('em')}" autocomplete="email"><textarea name="msg" rows="4" placeholder="${lf('msg')}" aria-label="${lf('msg')}"></textarea>
<label class="lf-file"><input type="file" name="files" multiple accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"><span class="lf-fb">${lf('file')}</span><span class="lf-fn">${lf('fileh')}</span></label>
<fieldset class="lf-how"><legend>${lf('how')}</legend><div class="lf-ch">${[['call',lf('call')],['email',lf('mail')],['messenger',lf('mess')]].map((m,i)=>`<label><input type="radio" name="how" value="${m[0]}"${i?'':' checked'}><span>${m[1]}</span></label>`).join('')}</div>
<div class="lf-ch lf-ms" hidden>${['WhatsApp','Telegram','Viber'].map((m,i)=>`<label><input type="radio" name="msgr" value="${m}"${i?'':' checked'}><span>${m}</span></label>`).join('')}</div></fieldset>
<p class="lf-err" role="alert" hidden></p><button class="btn" type="submit">${lf('send')}</button></form></div></div>`}
document.addEventListener('change',e=>{const f=e.target.closest('.lf:not([data-v3])');if(!f)return;
if(e.target.name==='how')f.querySelector('.lf-ms').hidden=e.target.value!=='messenger';
if(e.target.name==='files'){const n=[...e.target.files].map(x=>x.name);f.querySelector('.lf-fn').textContent=n.length?n.join(', '):lf('fileh');f.querySelector('.lf-file').classList.toggle('on',!!n.length)}});
document.addEventListener('submit',e=>{const f=e.target.closest('.lf:not([data-v3])');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');
if(!d.get('name')){er.textContent=lf('nm')+' — '+(lang==='uk'?'обов’язкове поле.':'required.');er.hidden=false;return}
if(!d.get('phone')&&!d.get('email')){er.textContent=lf('need');er.hidden=false;return}er.hidden=true;
pushLead({name:d.get('name'),phone:d.get('phone'),email:d.get('email'),message:d.get('msg'),files:[...f.querySelector('[type=file]').files].map(x=>x.name),contact:d.get('how'),messenger:d.get('how')==='messenger'?d.get('msgr'):null,source:leadSource(f.dataset.ctx),okText:lf('ok')});
f.reset();f.querySelector('.lf-ms').hidden=true;f.querySelector('.lf-fn').textContent=lf('fileh');f.querySelector('.lf-file').classList.remove('on')});
const fmtN=n=>String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g,'\u00a0');
function countUp(){const els=document.querySelectorAll('.cnt');if(!els.length)return;const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
els.forEach(el=>{el.style.setProperty('--w',el.getBoundingClientRect().width+'px')});if(rm)return;
const t0=performance.now(),D=1900,ease=x=>1-Math.pow(1-x,4);els.forEach(el=>el.textContent='0'+el.dataset.s);
(function f(t){const k=Math.min(1,(t-t0)/D);els.forEach((el,i)=>{const kk=Math.min(1,Math.max(0,(t-t0-i*120)/D));el.textContent=fmtN(+el.dataset.n*ease(kk))+el.dataset.s});if(k<1||(t-t0)<D+300)requestAnimationFrame(f)})(t0)}
document.addEventListener('submit',e=>{const f=e.target.closest('.qf,.hqf');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');f.querySelectorAll('input').forEach(i=>i.setAttribute('aria-invalid',i.required&&!i.value?'true':'false'));
if(!d.get('name')||!d.get('phone')){er.textContent=lang==='uk'?'Вкажіть ім’я та телефон.':'Enter your name and phone.';er.hidden=false;return}er.hidden=true;
pushLead({name:d.get('name'),phone:d.get('phone'),contact:'call',type:'consultation',source:leadSource('quick-consult'),okText:t('qfok')});f.reset()});
document.addEventListener('submit',e=>{const f=e.target.closest('.cbf');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');
if(!d.get('phone')){er.textContent=lang==='uk'?'Вкажіть номер телефону.':'Enter your phone number.';er.hidden=false;return}er.hidden=true;
pushLead({phone:d.get('phone'),contact:'call',type:'callback',source:leadSource('services-callback'),okText:t('qfok')});f.reset()});
function swHints(){document.querySelectorAll('.qsw').forEach(w=>{const q=w.querySelector('.qs');if(!q)return;const up=()=>w.classList.toggle('ov',q.scrollWidth>q.clientWidth+4);up();
if(!w.dataset.b){w.dataset.b=1;q.addEventListener('scroll',()=>{if(q.scrollLeft>20)w.classList.add('used')},{passive:true});new ResizeObserver(up).observe(q)}})}
let twStop=null;
function typer(root){if(twStop){twStop();twStop=null}const el=root&&root.querySelector('.tw-l');if(!el)return;
const L=t('h1rot'),rm=matchMedia('(prefers-reduced-motion: reduce)').matches;let i=0,n=0,del=false,tm=0;
el.innerHTML='<span class="tw-v"></span><i class="tw-c"></i><span class="tw-r"></span>';const v=el.firstChild,r=el.lastChild;
const show=(w,k)=>{v.textContent=w.slice(0,k);r.textContent=w.slice(k)};
if(rm){let k=0;show(L[0],L[0].length);const iv=setInterval(()=>{k=(k+1)%L.length;show(L[k],L[k].length)},4000);twStop=()=>clearInterval(iv);return}
show(L[0],0);
function step(){const w=L[i];if(!del){n++;show(w,n);if(n>=w.length){del=true;tm=setTimeout(step,2600);return}tm=setTimeout(step,38+Math.random()*40)}
else{n--;show(w,n);if(n<=0){del=false;i=(i+1)%L.length;show(L[i],0);tm=setTimeout(step,420);return}tm=setTimeout(step,20)}}
tm=setTimeout(step,500);twStop=()=>clearTimeout(tm)}
// keep the whole headline within 3 lines for every rotating phrase
function fitH1(){const h=document.getElementById('hxh');if(!h)return;h.style.fontSize='';return;const g=h.querySelector('.hxg-a .hx-dyn');if(!g)return;const L=t('h1rot');
h.style.fontSize='';let fs=parseFloat(getComputedStyle(h).fontSize);const lhr=parseFloat(getComputedStyle(h).lineHeight)/fs;const a=h.querySelector('.hxg-a');
const lines=()=>{let m=0,mi=0;L.forEach((w,k)=>{g.textContent=w;const n=Math.round(a.getBoundingClientRect().height/(fs*lhr));if(n>m){m=n;mi=k}});return [m,mi]};
let [m,mi]=lines();while(m>(innerWidth<=760?6:4)&&fs>20){fs-=1;h.style.fontSize=fs+'px';[m,mi]=lines()}g.textContent=L[mi]}
let fitT=0;addEventListener('resize',()=>{clearTimeout(fitT);fitT=setTimeout(fitH1,120)});try{document.fonts.ready.then(fitH1)}catch(e){}
function mqInit(){const m=document.querySelector('.mq-t');if(!m)return;const w=m.scrollWidth/2;m.style.setProperty('--mqd',Math.round(w/38)+'s')}
function qsDrag(){document.querySelectorAll('.qs').forEach(q=>{if(q.dataset.dg)return;q.dataset.dg=1;
q.addEventListener('wheel',e=>{if(q.scrollWidth<=q.clientWidth||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const max=q.scrollWidth-q.clientWidth;if((e.deltaY<0&&q.scrollLeft<=0)||(e.deltaY>0&&q.scrollLeft>=max))return;e.preventDefault();q.scrollLeft+=e.deltaY},{passive:false});
let sx=0,sl=0,down=false,moved=false;q.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;moved=false;sx=e.clientX;sl=q.scrollLeft});
addEventListener('pointermove',e=>{if(!down)return;const dx=e.clientX-sx;if(Math.abs(dx)>5){moved=true;q.classList.add('drag')}if(moved)q.scrollLeft=sl-dx});
addEventListener('pointerup',()=>{if(!down)return;down=false;setTimeout(()=>q.classList.remove('drag'),0)})})}
// ===== content: FAQ, blog, SEO =====
const CNT={uk:{
faqH:'Питання та відповіді',faqAll:'Усі питання',faqSt:'Відповіді на <b>часті питання</b> про замовлення, виробництво та доставку.',
faq:[
['Яка мінімальна партія замовлення?','Фіксатори постачаємо упаковками: від 100 до 2000 шт. залежно від виробу та розміру. Точне фасування вказане в картці кожного товару. Для нестандартних виробів обсяг партії погоджуємо індивідуально.'],
['Чи можна виготовити виріб за моїм кресленням?','Так. Надішліть креслення, 3D-модель або зразок — ми оцінимо технологічність, підготуємо розрахунок вартості пресформи й лиття та погодимо терміни. Можемо почати з прототипу, щоб перевірити виріб до запуску серії.'],
['Скільки коштує виготовлення пресформи?','Вартість залежить від розмірів і складності виробу, кількості гнізд та вимог до точності. Після аналізу креслення ми надаємо комерційну пропозицію з вартістю й термінами.'],
['Чи можете ви лити вироби в моїй пресформі або передати пресформу мені?','Так, обидва варіанти можливі. Пресформу, виготовлену під ваш виріб, можемо передати для використання на вашому підприємстві або відлити партію на нашому обладнанні й передати вам готову продукцію для реалізації.'],
['Як обрати потрібний фіксатор арматури?','Вибір залежить від основи та положення арматури: «Настил» — для сипучої основи, «Стійка», «Защіпка» й «Засувка» — для горизонтальної арматури на твердій основі, «Зірочка» — для вертикальних елементів. Менеджер допоможе підібрати розмір під проєктний захисний шар бетону.'],
['Як отримати розрахунок вартості?','Залиште заявку на сайті, напишіть на email або зателефонуйте. Вкажіть потрібні вироби та обсяги або прикріпіть креслення — менеджер зв’яжеться з вами в робочий час.']],
blogH:'Блог',blogAll:'Усі статті',blogSt:'Корисні матеріали про <b>фіксатори арматури</b>, лиття пластику та виготовлення пресформ.',read:'Читати',min:'хв читання',other:'Інші статті',
seoMore:'Читати повністю',seoLess:'Згорнути',
seo:`<h2>Виробник фіксаторів арматури та пластикових виробів для будівництва</h2>
<p>ТОВ «Пластіза» — український виробник пластикових фіксаторів арматури, елементів для опалубки та пластикових виробів на замовлення. Власне виробництво повного циклу дозволяє нам контролювати якість на кожному етапі та пропонувати ціни напряму від виробника — без посередників і зайвих націнок.</p>
<p>У каталозі — фіксатори «Настил», «Стійка», «Зірочка», «Защіпка», «Засувка», а також конуси, корки та дистанційні труби для опалубки. Ви можете купити фіксатори арматури оптом із фасуванням від 100 шт. в упаковці та отримати консультацію щодо вибору під ваш проєкт.</p>
<div class="seo-more"><h3>Пластикові фіксатори арматури: навіщо вони потрібні</h3>
<p>Фіксатори забезпечують проєктну товщину захисного шару бетону, утримують арматурний каркас у правильному положенні під час бетонування та запобігають корозії арматури. Правильно підібраний фіксатор — це міцність і довговічність монолітних конструкцій: плит перекриття, фундаментів, стін і колон.</p>
<h3>Фіксатори для опалубки</h3>
<p>Пластикові конуси, корки та дистанційні труби захищають стяжні гвинти від бетону, герметизують отвори та зберігають відстань між щитами опалубки. Такі елементи стійкі до навантажень, агресивного середовища й перепадів температур.</p>
<h3>Лиття пластикових виробів на замовлення</h3>
<p>Виконуємо лиття під тиском за кресленнями клієнтів — від прототипів до великих серійних партій. Підбираємо матеріал під умови експлуатації та гарантуємо стабільну геометрію кожного виробу незалежно від тиражу.</p>
<h3>Виготовлення пресформ</h3>
<p>Розробляємо та виготовляємо пресформи під індивідуальні вироби. Пресформу можна використовувати на власному виробництві або замовити в нас лиття партії й отримати готову продукцію для реалізації.</p>
<h3>Співпраця з PLASTIZA</h3>
<p>Ми працюємо з будівельними компаніями, постачальниками будматеріалів і виробниками. Офіси компанії — у Львові та Києві, доставку по Україні погоджуємо під час оформлення замовлення. Залиште заявку, щоб отримати розрахунок вартості фіксаторів, лиття або пресформи.</p></div>`},
en:{
faqH:'Questions and answers',faqAll:'All questions',faqSt:'Answers to <b>common questions</b> about orders, production and delivery.',
faq:[
['What is the minimum order?','Spacers ship in packs of 100 to 2,000 pcs depending on the item and size; the exact pack size is shown on each product card. For custom parts the batch size is agreed individually.'],
['Can you make a part from my drawing?','Yes. Send a drawing, a 3D model or a sample — we’ll assess manufacturability, estimate the cost of the mold and molding, and agree on lead times. We can start with a prototype to validate the part before series production.'],
['How much does a mold cost?','It depends on the part’s size and complexity, the number of cavities and precision requirements. After reviewing the drawing we send a quote with cost and lead time.'],
['Can you mold in my mold or hand the mold over to me?','Both are possible. We can hand over a mold built for your part for use at your facility, or run the batch on our equipment and deliver finished products for distribution.'],
['How do I choose the right rebar spacer?','It depends on the base and rebar position: “Nastil” for loose bases; “Stiika”, “Zashchipka” and “Zasuvka” for horizontal rebar on solid bases; “Zirochka” for vertical elements. A manager will help match the size to the design concrete cover.'],
['How do I get a quote?','Send a request on the website, email us or call. List the items and volumes or attach a drawing — a manager will get back to you during working hours.']],
blogH:'Blog',blogAll:'All articles',blogSt:'Useful reads on <b>rebar spacers</b>, plastic molding and mold making.',read:'Read',min:'min read',other:'More articles',
seoMore:'Read more',seoLess:'Show less',
seo:`<h2>Manufacturer of rebar spacers and plastic products for construction</h2>
<p>PLASTIZA LLC is a Ukrainian manufacturer of plastic rebar spacers, formwork accessories and custom plastic parts. Full-cycle in-house production lets us control quality at every stage and offer direct manufacturer pricing.</p>
<p>Our range includes “Nastil”, “Stiika”, “Zirochka”, “Zashchipka” and “Zasuvka” spacers plus cones, plugs and spacer tubes for formwork. Buy rebar spacers wholesale in packs from 100 pcs and get advice on choosing the right item for your project.</p>
<div class="seo-more"><h3>Why plastic rebar spacers matter</h3>
<p>Spacers maintain the design concrete cover, keep the rebar cage in place during pouring and protect reinforcement from corrosion — the basis of strong, durable slabs, foundations, walls and columns.</p>
<h3>Custom plastic injection molding</h3>
<p>We mold parts to client drawings, from prototypes to large production runs, matching the material to operating conditions.</p>
<h3>Mold making</h3>
<p>We design and build molds for custom parts. Use the mold at your facility or have us run the batch and deliver finished products.</p></div>`}};
const cx=k=>CNT[lang][k];
const POSTS=[
{id:5,img:7,date:'2026-10-20',min:4,tag:['Будівництво','Construction'],
t:['Корки та конуси для опалубки: як закрити отвори після стяжки','Formwork plugs and cones: how to seal tie holes'],
e:['Навіщо потрібні конуси, корки й дистанційні труби, як вони працюють разом і на що зважати під час вибору.','What cones, plugs and spacer tubes do, how they work together and what to consider when choosing them.'],
b:[[['p','Під час бетонування стін щити опалубки стягують гвинтами, які проходять крізь бетон. Щоб гвинти можна було витягнути, а отвори — акуратно закрити, використовують дистанційні труби, конуси та корки.'],['h2','Дистанційна труба і конус'],['p','Труба зберігає відстань між щитами й захищає стяжний гвинт від бетону. Конуси на її кінцях фіксують трубу та формують акуратний вхід отвору, який легко загерметизувати.'],['h2','Корок'],['p','Після демонтажу опалубки отвір закривають корком. Він запобігає проникненню вологи й покращує вигляд поверхні. Для різних діаметрів труби добирають відповідний розмір корка.'],['h2','На що зважати'],['p','Перевірте діаметр стяжного гвинта, товщину стіни та вимоги до водонепроникності. Якщо сумніваєтеся з комплектацією — напишіть нам, підберемо елементи під ваш проєкт.']],
[['p','When pouring walls, formwork panels are tied with rods that pass through the concrete. Spacer tubes, cones and plugs let you remove the rods and seal the holes neatly.'],['h2','Spacer tube and cone'],['p','The tube keeps the panels apart and protects the tie rod; cones at its ends fix the tube and form a clean hole entrance.'],['h2','Plug'],['p','After stripping, the hole is closed with a plug that keeps moisture out and improves the surface finish.']]]},
{id:1,img:1,date:'2026-10-14',min:5,tag:['Поради','Guides'],
t:['Як обрати фіксатор арматури: настил, стійка чи зірочка','How to choose a rebar spacer: slab chair, chair or star'],
e:['Розбираємо, який фіксатор підходить для плити перекриття, фундаменту на ґрунті та стін — і як підібрати розмір під захисний шар.','Which spacer suits a floor slab, a ground-bearing foundation or a wall — and how to size it for the concrete cover.'],
b:[[['h2','Від чого залежить вибір'],['p','Вибір фіксатора визначають три речі: тип основи, положення арматури та проєктна товщина захисного шару бетону. Помилка на цьому етапі може призвести до оголення арматури та корозії.'],['h2','Горизонтальна арматура'],['p','Для сипучої основи — ґрунту, щебеню, піску чи плівки — обирайте «Настил»: збільшена площа опори не дає виробу занурюватися. На бетонній або іншій твердій основі використовують «Стійку», «Защіпку» чи «Засувку».'],['h2','Вертикальні елементи'],['p','Для стін, колон і пілонів підходить «Зірочка»: вона надягається на стрижень діаметром 6–16 мм і забезпечує рівномірний захисний шар по колу.'],['p','Не впевнені у виборі? Надішліть специфікацію проєкту — менеджер підбере фіксатори та розрахує потрібну кількість.']],
[['p','The choice depends on the base, rebar position and the design concrete cover.'],['h2','Horizontal rebar'],['p','On loose bases use “Nastil”; its wide footprint keeps it from sinking. On concrete use “Stiika”, “Zashchipka” or “Zasuvka”.'],['h2','Vertical elements'],['p','For walls and columns use “Zirochka”, which fits 6–16 mm bars and keeps an even cover all around.']]]},
{id:2,img:6,date:'2026-10-02',min:4,tag:['Будівництво','Construction'],
t:['Захисний шар бетону: навіщо він потрібен і як його забезпечити','Concrete cover: why it matters and how to get it right'],
e:['Що таке захисний шар, чим загрожує його порушення та яку роль у цьому відіграють пластикові фіксатори.','What concrete cover is, what happens when it fails and how plastic spacers help.'],
b:[[['p','Захисний шар — це відстань від поверхні бетону до арматури. Він захищає метал від вологи, агресивного середовища та вогню й забезпечує спільну роботу арматури з бетоном.'],['h2','Чим загрожує порушення'],['p','Якщо арматура лежить надто близько до поверхні, з часом з’являються іржаві плями, тріщини та відшарування бетону. Ремонт таких дефектів значно дорожчий за правильний монтаж.'],['h2','Як забезпечити проєктний шар'],['p','Пластикові фіксатори тримають каркас на заданій висоті під час бетонування та не створюють містків для корозії. Кількість фіксаторів розраховують за кроком арматури та навантаженням — у середньому 4–6 шт. на м².']],
[['p','Concrete cover is the distance between the concrete surface and the rebar; it protects steel from moisture, chemicals and fire.'],['h2','Getting it right'],['p','Plastic spacers hold the cage at the set height during pouring and create no paths for corrosion — typically 4–6 pcs per m².']]]},
{id:3,img:3,date:'2026-09-18',min:6,tag:['Виробництво','Production'],
t:['Лиття під тиском: шлях від креслення до серійної партії','Injection molding: from drawing to production run'],
e:['Покроково про те, як народжується пластиковий виріб: аналіз креслення, пресформа, прототип і серійне виробництво.','Step by step: drawing review, mold, prototype and series production.'],
b:[[['p','Лиття під тиском — основна технологія виготовлення пластикових деталей серійно. Розплавлений полімер під тиском заповнює порожнину пресформи й набуває точної форми виробу.'],['h2','Етапи'],['p','Спочатку ми аналізуємо креслення та технологічність виробу, далі проєктуємо й виготовляємо пресформу. Після пробного лиття перевіряємо геометрію прототипу і, якщо все відповідає вимогам, запускаємо серію.'],['h2','Контроль якості'],['p','На кожному етапі контролюємо розміри та зовнішній вигляд виробів, щоб уся партія мала стабільні характеристики незалежно від тиражу.']],
[['p','Injection molding forces molten polymer into a mold cavity to form precise parts at scale.'],['h2','Stages'],['p','Drawing review, mold design and build, trial molding and prototype check, then series production with quality control at every step.']]]},
{id:4,img:9,date:'2026-09-05',min:4,tag:['Пресформи','Molds'],
t:['Пресформа під ваш виріб: що підготувати до звернення','Your custom mold: what to prepare before you reach out'],
e:['Які дані потрібні виробнику для розрахунку пресформи та як скоротити терміни запуску.','What a manufacturer needs to quote a mold and how to speed up the launch.'],
b:[[['p','Щоб швидко отримати розрахунок пресформи, підготуйте креслення або 3D-модель, плановий річний обсяг і вимоги до матеріалу та точності.'],['h2','Що впливає на вартість'],['p','Розміри та складність виробу, кількість гнізд, наявність рухомих елементів і вимоги до поверхні. Чим точніше технічне завдання, тим точніший розрахунок.'],['h2','Як скоротити терміни'],['p','Почніть із прототипу: він дозволяє перевірити конструкцію виробу до виготовлення фінальної пресформи та уникнути переробок.']],
[['p','Prepare a drawing or 3D model, expected annual volume and material and precision requirements.'],['h2','What drives cost'],['p','Part size and complexity, cavity count, moving elements and surface requirements.']]]}];
const fmtD=d=>{const [y,m,dd]=d.split('-');return lang==='uk'?`${dd}.${m}.${y}`:new Date(d).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})};
const LI=()=>lang==='uk'?0:1;
let faqList=n=>`<div class="fq">${cx('faq').slice(0,n).map((q,i)=>`<details class="fq-i"${i?'':' open'}><summary><span>${q[0]}</span><i aria-hidden="true"></i></summary><p>${q[1]}</p></details>`).join('')}</div>`;
const secFaq=()=>`<section class="hs2 ed"><div class="s5-top"><div>${secLab(lang==='uk'?'Питання':'FAQ')}<h2 class="s5-h">${lang==='uk'?'Питання<br>та відповіді':'Questions<br>and answers'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${String(FQ[lang].items.length).padStart(2,'0')}</b>${lang==='uk'?'питань':'questions'}</span><button class="tlink" data-go="faq">${cx('faqAll')}<i aria-hidden="true">↗</i></button></div></div>${faqList(6)}</section>`;
let postCard=p=>`<article class="bc"><button class="bc-c" data-go="post" data-a="${p.id}" aria-label="${p.t[LI()]}"><img src="${IMGS[p.img]}" alt="" loading="lazy"></button><div class="bc-m"><span>${p.tag[LI()]}</span><span>${fmtD(p.date)}</span><span>${p.min} ${cx('min')}</span></div><h3><button data-go="post" data-a="${p.id}">${p.t[LI()]}</button></h3><p>${p.e[LI()]}</p><button class="tlink" style="margin-top:auto" data-go="post" data-a="${p.id}">${cx('read')}<i aria-hidden="true">→</i></button></article>`;
let secBlog=()=>`<section class="hs2"><div class="hs2-h"><h2 class="x-h" style="margin:0">${cx('blogH')}</h2><button class="tlink" style="margin:0" data-go="blog">${cx('blogAll')}<i aria-hidden="true">→</i></button></div><div class="bg">${POSTS.map(postCard).join('')}</div></section>`;
let secSeo=()=>`<section class="seo" id="seo"><div class="seo-t">${cx('seo')}</div><button class="tlink seo-b" data-seo aria-expanded="false">${cx('seoMore')}<i aria-hidden="true">↓</i></button></section>`;
let secGrid=()=>`<section><div class="qn pgrid2"><div class="qs qs-g">${P.map(qt).join('')}</div></div></section>`;
function faqPage(){return `<div class="wrap x"><div class="x-top"><p class="x-st">${cx('faqSt')}</p></div>${faqList(99)}${leadForm('faq')}</div>`}
function blogPage(){return `<div class="wrap x"><div class="x-top"><p class="x-st">${cx('blogSt')}</p></div><div class="bg" style="padding-bottom:clamp(56px,7vw,96px)">${POSTS.map(postCard).join('')}</div></div>`}
function postPage(){if(!POSTS.find(x=>x.id==R.a))return page404();const p=POSTS.find(x=>x.id==R.a),L=LI();return `<div class="wrap x"><article class="pa"><div class="crumb" style="padding-top:36px"><button data-go="blog">${cx('blogH')}</button> / ${p.tag[L]}</div><h1 class="pa-h">${p.t[L]}</h1><div class="bc-m" style="margin-bottom:28px"><span>${fmtD(p.date)}</span><span>${p.min} ${cx('min')}</span></div><div class="pa-c"><img src="${IMGS[p.img]}" alt=""></div><div class="pa-b">${p.b[L].map(([tg,tx])=>`<${tg}>${tx}</${tg}>`).join('')}</div></article>
<div class="x-s"><h2 class="x-h">${cx('other')}</h2><div class="bg">${POSTS.filter(x=>x.id!==p.id).slice(0,3).map(postCard).join('')}</div></div>${xCta()}</div>`}
document.addEventListener('click',e=>{const b=e.target.closest('[data-seo]');if(!b)return;const s=b.closest('.seo,.seo2,.seo3'),o=s.classList.toggle('open');b.setAttribute('aria-expanded',o);b.firstChild.textContent=o?cx('seoLess'):cx('seoMore')});

// ===== FAQ v2 + blog v2 =====
const FQ={uk:{cats:[['all','Усі питання'],['gen','Загальні'],['prod','Продукція'],['mfg','Виробництво'],['del','Доставка та оплата']],items:[
['gen','Як отримати розрахунок вартості?','Залиште заявку на сайті, напишіть на email або зателефонуйте. Вкажіть потрібні вироби та обсяги або прикріпіть креслення — менеджер зв’яжеться з вами в робочий час і підготує комерційну пропозицію.'],
['gen','Чи працюєте ви з компаніями та ФОП?','Так. Ми співпрацюємо з будівельними компаніями, постачальниками будматеріалів, виробниками та приватними замовниками. Усі закривальні документи надаємо разом із відвантаженням.'],
['gen','Де розташована компанія?','Офіси PLASTIZA працюють у Львові (вул. Шевченка, 154) та Києві (пров. Ю. Матущака, 18). Зустріч з менеджером радимо попередньо погодити телефоном.'],
['prod','Як обрати потрібний фіксатор арматури?','Вибір залежить від основи та положення арматури: «Настил» — для сипучої основи, «Стійка», «Защіпка» й «Засувка» — для горизонтальної арматури на твердій основі, «Зірочка» — для вертикальних елементів. Менеджер допоможе підібрати розмір під проєктний захисний шар бетону.'],
['prod','Яка мінімальна партія замовлення?','Фіксатори постачаємо упаковками: від 100 до 2000 шт. залежно від виробу та розміру. Точне фасування вказане в картці кожного товару. Для нестандартних виробів обсяг партії погоджуємо індивідуально.'],
['prod','Скільки фіксаторів потрібно на 1 м²?','Орієнтовна витрата горизонтальних фіксаторів — 4–6 шт. на м² залежно від кроку арматури та навантаження. Для точного розрахунку надішліть креслення або специфікацію.'],
['prod','Чи надаєте ви документи якості на продукцію?','Так, документи, що підтверджують якість продукції, надаємо на запит. Уточніть у менеджера, які саме документи потрібні для вашого об’єкта.'],
['mfg','Чи можна виготовити виріб за моїм кресленням?','Так. Надішліть креслення, 3D-модель або зразок — ми оцінимо технологічність, підготуємо розрахунок вартості пресформи й лиття та погодимо терміни. Можемо почати з прототипу, щоб перевірити виріб до запуску серії.'],
['mfg','Скільки коштує виготовлення пресформи?','Вартість залежить від розмірів і складності виробу, кількості гнізд та вимог до точності. Після аналізу креслення ми надаємо комерційну пропозицію з вартістю й термінами.'],
['mfg','Чи можете ви лити в моїй пресформі або передати пресформу мені?','Так, обидва варіанти можливі. Пресформу, виготовлену під ваш виріб, можемо передати для використання на вашому підприємстві або відлити партію на нашому обладнанні й передати вам готову продукцію для реалізації.'],
['mfg','Які терміни виготовлення?','Для виробів із каталогу терміни залежать від обсягу партії, для нових виробів — від складності пресформи та тиражу. Точні терміни фіксуємо в комерційній пропозиції.'],
['del','Як здійснюється доставка?','Доставляємо по всій Україні зручним для вас способом: службами доставки, транспортною компанією або транспортом за домовленістю. Умови та вартість доставки погоджуємо під час оформлення замовлення.'],
['del','Які умови оплати?','Пропонуємо гнучкі умови оплати, зручні для вашої компанії: безготівковий розрахунок на рахунок для юридичних осіб і ФОП. Для постійних клієнтів можливі індивідуальні умови.'],
['del','Чи можна забрати замовлення самостійно?','Так, самовивіз можливий за попереднім погодженням часу з менеджером.']]},
en:{cats:[['all','All questions'],['gen','General'],['prod','Products'],['mfg','Production'],['del','Delivery & payment']],items:[
['gen','How do I get a quote?','Send a request on the website, email us or call. List the items and volumes or attach a drawing — a manager will get back to you during working hours with a quote.'],
['gen','Do you work with companies and sole traders?','Yes. We work with construction companies, building-material suppliers, manufacturers and private clients, and provide all closing documents with the shipment.'],
['gen','Where are you located?','PLASTIZA has offices in Lviv (154 Shevchenka St.) and Kyiv (18 Yu. Matushchaka Ln.). Please arrange a meeting with a manager in advance.'],
['prod','How do I choose the right rebar spacer?','It depends on the base and rebar position: “Nastil” for loose bases; “Stiika”, “Zashchipka” and “Zasuvka” for horizontal rebar on solid bases; “Zirochka” for vertical elements.'],
['prod','What is the minimum order?','Spacers ship in packs of 100 to 2,000 pcs depending on the item and size; the exact pack size is shown on each product card.'],
['prod','How many spacers per m²?','Typical consumption of horizontal spacers is 4–6 pcs per m², depending on rebar spacing and load.'],
['prod','Do you provide quality documents?','Yes, documents confirming product quality are available on request.'],
['mfg','Can you make a part from my drawing?','Yes. Send a drawing, a 3D model or a sample — we’ll assess manufacturability, quote the mold and molding and agree on lead times.'],
['mfg','How much does a mold cost?','It depends on part size and complexity, cavity count and precision; we quote after reviewing the drawing.'],
['mfg','Can you mold in my mold or hand the mold over?','Both are possible: we can hand the mold over or run the batch and deliver finished products.'],
['mfg','What are the lead times?','For catalog items lead time depends on batch size; for new parts on mold complexity and volume. Exact dates are fixed in the quote.'],
['del','How is delivery handled?','We deliver across Ukraine by courier services, freight carriers or transport by arrangement; terms are agreed when you order.'],
['del','What are the payment terms?','Flexible terms that suit your company, including bank transfer for businesses; individual terms are available for regular clients.'],
['del','Can I collect the order myself?','Yes, pickup is possible by prior arrangement with a manager.']]}};
const UIF={fq:'all',bg:'all'};
const BGC={uk:[['all','Усі статті'],['Поради','Поради'],['Будівництво','Будівництво'],['Виробництво','Виробництво'],['Пресформи','Пресформи']],en:[['all','All articles'],['Поради','Guides'],['Будівництво','Construction'],['Виробництво','Production'],['Пресформи','Molds']]};
const tabs=(kind,list,cur)=>`<div class="tabs" role="tablist">${list.map(([k,l])=>`<button class="tab" role="tab" data-tab="${kind}" data-v="${k}" aria-selected="${k===cur}">${l}</button>`).join('')}</div>`;
const faqItems=n=>{const it=FQ[lang].items.filter(q=>UIF.fq==='all'||q[0]===UIF.fq).slice(0,n);return it.map((q,i)=>`<details class="fq-i" name="fq"${i?'':' open'}><summary><span>${q[1]}</span><small class="fq-k">${(FQ[lang].cats.find(c=>c[0]===q[0])||['',''])[1]}</small><b class="s5-a" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 7l10 10M17 9v8H9"/></svg></b></summary><p>${q[2]}</p><small class="fq-k fq-k2">${(FQ[lang].cats.find(c=>c[0]===q[0])||['',''])[1]}</small></details>`).join('')};
faqList=n=>`${tabs('fq',FQ[lang].cats,UIF.fq)}<div class="fq" data-n="${n}">${faqItems(n)}</div>`;
const bgItems=n=>POSTS.filter(p=>UIF.bg==='all'||p.tag[0]===UIF.bg).slice(0,n);
postCard=p=>`<button class="bc2" data-go="post" data-a="${p.id}"><span class="bc2-c"><img src="${IMGS[p.img]}" alt="" loading="lazy"></span><span class="bc2-b"><span class="bc2-m"><b>${p.tag[LI()]}</b><span>${fmtD(p.date)} · ${p.min} ${cx('min')}</span></span><span class="bc2-h">${p.t[LI()]}<i aria-hidden="true">↗</i></span><span class="bc2-e">${p.e[LI()]}</span></span></button>`;
const bgGrid=n=>{const r=bgItems(n);return r.length?r.map(postCard).join(''):`<p class="none">${lang==='uk'?'У цій темі поки немає статей.':'No articles in this topic yet.'}</p>`};
secBlog=()=>`<section class="hs2 ed"><div class="s5-top"><div>${secLab(lang==='uk'?'Блог':'Blog')}<h2 class="s5-h">${lang==='uk'?'Корисне<br>для будівництва':'Notes for<br>builders'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${String(POSTS.length).padStart(2,'0')}</b>${lang==='uk'?'статті':'articles'}</span><button class="tlink" data-go="blog">${cx('blogAll')}<i aria-hidden="true">↗</i></button></div></div>${tabs('bg',BGC[lang],UIF.bg)}<div class="bg bg-sl" data-n="8">${bgGrid(8)}</div><div class="bg-ctl"><div class="bg-dots" aria-hidden="true"></div><div class="bg-ar"><button type="button" data-bgp="-1" aria-label="${lang==='uk'?'Попередня стаття':'Previous'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" data-bgp="1" aria-label="${lang==='uk'?'Наступна стаття':'Next'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button></div></div></section>`;
blogPage=()=>`<div class="wrap x"><div class="x-top"><p class="x-st">${cx('blogSt')}</p></div>${tabs('bg',BGC[lang],UIF.bg)}<div class="bg" data-n="99" style="padding-bottom:clamp(56px,7vw,96px)">${bgGrid(99)}</div></div>`;
document.addEventListener('click',e=>{const b=e.target.closest('[data-tab]');if(!b)return;const k=b.dataset.tab;UIF[k]=b.dataset.v;
const wrap=b.closest('.tabs');wrap.querySelectorAll('.tab').forEach(x=>x.setAttribute('aria-selected',x===b));
const box=wrap.nextElementSibling,n=+box.dataset.n;box.classList.add('sw');setTimeout(()=>{box.innerHTML=k==='fq'?faqItems(n):bgGrid(n);box.classList.remove('sw')},140)});
document.addEventListener('toggle',e=>{const d=e.target;if(!d.classList||!d.classList.contains('fq-i')||!d.open)return;d.closest('.fq').querySelectorAll('.fq-i[open]').forEach(x=>{if(x!==d)x.open=false})},true);

// ===== unified blocks v3 =====
const BX={uk:{lfLab:'Зворотний зв’язок',lfH:'Розрахуємо вартість вашого замовлення',lfP:'Опишіть завдання та прикріпіть креслення або фото — менеджер підготує пропозицію й зв’яжеться з вами в робочий час.',lfC:'Або зв’яжіться напряму',
advLab:'Переваги',stepsLab:'Як ми працюємо',doLab:'Напрями',doH:'Що ми робимо',introLab:'Про компанію',
doD:['Настил, стійка, зірочка, защіпка, засувка','Конус, корки, дистанційна труба','Від прототипу до серійної партії','Під ваш виріб і технічні вимоги']},
en:{lfLab:'Contact us',lfH:'Get a quote for your order',lfP:'Describe the task and attach a drawing or photo — a manager will prepare an offer and get back to you during working hours.',lfC:'Or contact us directly',
advLab:'Advantages',stepsLab:'How we work',doLab:'Directions',doH:'What we do',introLab:'About us',
doD:['Slab chairs, chairs, stars, clips, slides','Cones, plugs, spacer tubes','From prototype to production run','Built for your part and specs']}};
const bx=k=>BX[lang][k];
const secLab=l=>`<span class="sv-lab">${l}</span>`;
// advantages: island with numbered tiles
secAdv=()=>`<section><div class="hs2-h"><div>${secLab(bx('advLab'))}<h2 class="x-h" style="margin:0">${t('adv')}</h2></div></div><div class="isl adv2">${x('adv').map((a,i)=>`<div class="adv2-i"><span class="adv2-n num">${String(i+1).padStart(2,'0')}</span><h3>${a[0]}</h3><p>${a[1]}</p></div>`).join('')}</div></section>`;
// steps: island with cards
xSteps=()=>`<div class="x-s"><div class="hs2-h"><div>${secLab(bx('stepsLab'))}<h2 class="x-h" style="margin:0">${x('stepsL')}</h2></div></div><ol class="isl st2">${x('steps').map((s,i)=>`<li class="st2-i"><span class="st2-n num">${String(i+1).padStart(2,'0')}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol></div>`;
// lead form: island, info card + form card
leadForm=ctx=>`<div class="x-s x-lf"><div class="isl lf2"><div class="lfo" aria-hidden="true"><i></i></div><div class="lf2-a">${secLab(bx('lfLab'))}<h2>${bx('lfH')}</h2><p>${bx('lfP')}</p>
${dcBlock()}</div>
<form class="lf lf2-f" data-ctx="${ctx}" novalidate><div class="lf-g"><input name="name" required placeholder="${lf('nm')}" aria-label="${lf('nm')}" autocomplete="name"><input name="phone" type="tel" placeholder="${lf('ph')}" aria-label="${lf('ph')}" autocomplete="tel"></div>
<input name="email" type="email" placeholder="${lf('em')}" aria-label="${lf('em')}" autocomplete="email"><textarea name="msg" rows="4" placeholder="${lf('msg')}" aria-label="${lf('msg')}"></textarea>
<label class="lf-file"><input type="file" name="files" multiple accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"><span class="lf-fb">${lf('file')}</span><span class="lf-fn">${lf('fileh')}</span></label>
<fieldset class="lf-how"><legend>${lf('how')}</legend><div class="lf-ch">${[['call',lf('call')],['email',lf('mail')],['messenger',lf('mess')]].map((m,i)=>`<label><input type="radio" name="how" value="${m[0]}"${i?'':' checked'}><span>${m[1]}</span></label>`).join('')}</div>
<div class="lf-ch lf-ms" hidden>${['WhatsApp','Telegram','Viber'].map((m,i)=>`<label><input type="radio" name="msgr" value="${m}"${i?'':' checked'}><span>${m}</span></label>`).join('')}</div></fieldset>
<p class="lf-err" role="alert" hidden></p><button class="btn" type="submit">${lf('send')}</button></form></div></div>`;
// SEO v2
const SEOX={home:{uk:{lab:'Про виробництво',h:'Виробник фіксаторів арматури та пластикових виробів для будівництва',lead:'ТОВ «Пластіза» — український виробник пластикових фіксаторів арматури, елементів для опалубки та виробів на замовлення. Власне виробництво повного циклу, тому ціни — напряму від виробника, без посередників.',
keys:[['Фіксатори арматури','catalog','rebar'],['Фіксатори для опалубки','catalog','form'],['Фіксатор «Зірочка»','product','3'],['Фіксатор «Стійка»','product','2'],['Лиття під тиском','soon','0'],['Виготовлення пресформ','soon','1'],['Купити оптом','catalog','all']],
facts:[['100','шт. — мінімальне фасування в упаковці','від '],['4–6','фіксаторів на м² — орієнтовна витрата',''],['2','офіси в Україні: Львів і Київ','']],
parts:[['Пластикові фіксатори арматури','Фіксатори «Настил», «Стійка», «Зірочка», «Защіпка» та «Засувка» забезпечують проєктний захисний шар бетону й утримують каркас під час бетонування. Купити фіксатори арматури оптом можна з фасуванням від 100 шт. в упаковці.'],
['Елементи для опалубки','Конуси, корки та дистанційні труби захищають стяжні гвинти від бетону, герметизують отвори та зберігають відстань між щитами. Вони стійкі до навантажень, агресивного середовища й перепадів температур.'],
['Лиття пластикових виробів на замовлення','Відливаємо вироби під тиском за вашими кресленнями — від прототипу до серійної партії — і підбираємо матеріал під умови експлуатації.'],
['Виготовлення пресформ','Розробляємо пресформи під індивідуальні вироби: використовуйте їх на власному виробництві або замовте в нас лиття партії й отримайте готову продукцію для реалізації.'],
['Доставка по Україні','Офіси компанії — у Львові та Києві. Доставку по всій Україні погоджуємо під час оформлення замовлення. Залиште заявку, і ми розрахуємо вартість фіксаторів, лиття чи пресформи.']]},
en:{lab:'About production',h:'Manufacturer of rebar spacers and plastic products for construction',lead:'PLASTIZA LLC is a Ukrainian manufacturer of plastic rebar spacers, formwork accessories and custom parts. Full-cycle in-house production means direct manufacturer pricing.',
keys:[['Rebar spacers','catalog','rebar'],['Formwork accessories','catalog','form'],['Injection molding','soon','0'],['Mold making','soon','1'],['Buy wholesale','catalog','all']],
facts:[['100','pcs — minimum pack size','from '],['4–6','spacers per m² — typical use',''],['2','offices: Lviv and Kyiv','']],
parts:[['Plastic rebar spacers','Our spacers keep the design concrete cover and hold the rebar cage during pouring; wholesale packs start at 100 pcs.'],['Formwork accessories','Cones, plugs and spacer tubes protect tie rods, seal holes and keep panels apart.'],['Custom injection molding','We mold parts to your drawings, from prototypes to production runs.'],['Mold making','We build molds for custom parts — use them at your plant or have us run the batch.']]}},
about:{uk:{lab:'Компанія',h:'PLASTIZA — виробництво пластикових деталей повного циклу',lead:'Поєднуємо власну лінійку будівельних фіксаторів і контрактне виробництво: від розробки пресформи до лиття та відвантаження готової партії.',
keys:[['Український виробник','about',''],['Лиття пластику','soon','0'],['Пресформи на замовлення','soon','1'],['Фіксатори для монолітного будівництва','catalog','rebar'],['Елементи опалубки','catalog','form']],
facts:[['12','років на ринку',''],['450','клієнтів довіряють нам','+'],['20 000','виконаних замовлень','+']],
parts:[['Власне виробництво','Повний цикл на власних потужностях — це контроль якості на кожному етапі та стабільні терміни без залежності від підрядників.'],
['Будівельні фіксатори','Випускаємо фіксатори арматури та закладні елементи для монолітного будівництва: плит перекриття, фундаментів, стін і колон.'],
['Контрактне лиття','Виготовляємо пластикові вироби під замовлення — прототипи, малі й великі серійні партії з різних видів пластику.'],
['Пресформи','Проєктуємо та виготовляємо пресформи під ваш виріб і можемо одразу запустити лиття на нашому обладнанні.'],
['Партнерство','Працюємо з будівельними компаніями, постачальниками й виробниками в Україні та за кордоном і супроводжуємо клієнта на кожному етапі.']]},
en:{lab:'Company',h:'PLASTIZA — full-cycle plastic parts manufacturing',lead:'We combine our own line of construction spacers with contract manufacturing: from mold design to molding and shipment.',
keys:[['Ukrainian manufacturer','about',''],['Plastic molding','soon','0'],['Custom molds','soon','1'],['Rebar spacers','catalog','rebar']],
facts:[['12','years on the market',''],['450','clients trust us','+'],['20 000','orders completed','+']],
parts:[['In-house production','Full cycle at our own plant means quality control at every stage and reliable lead times.'],['Construction spacers','Rebar spacers and embedded parts for slabs, foundations, walls and columns.'],['Contract molding','Prototypes, small and large production runs from a range of plastics.'],['Molds','We design and build molds and can start molding right away.']]}}};
secSeo=(k='home')=>{const d=SEOX[k][lang];return `<section class="seo2" id="seo"><div class="seo2-g"><div class="seo2-a">${secLab(d.lab)}<h2>${d.h}</h2><p>${d.lead}</p><div class="seo2-k">${d.keys.map(([l,g,a])=>`<button class="seo2-c" data-go="${g}"${a!==''?` data-a="${a}"`:''}>${l}</button>`).join('')}</div></div>
<div class="seo2-m"><div class="seo2-f">${d.facts.map(f=>`<div><b class="num">${f[2]&&f[2]!=='+'?`<small>${f[2]}</small>`:''}${f[0]}${f[2]==='+'?'+':''}</b><span>${f[1]}</span></div>`).join('')}</div>
<div class="seo2-t">${d.parts.map((p,i)=>`<article class="seo2-p"><span class="num">${String(i+1).padStart(2,'0')}</span><div><h3>${p[0]}</h3><p>${p[1]}</p></div></article>`).join('')}</div>
<button class="tlink seo-b" data-seo aria-expanded="false">${cx('seoMore')}<i aria-hidden="true">↓</i></button></div></div></section>`};
// about page v3
about=()=>{const D=[[CATS[0][lang],'catalog','rebar',1,bx('doD')[0]],[CATS[1][lang],'catalog','form',6,bx('doD')[1]],[SRV[0][lang],'soon','0',3,bx('doD')[2]],[SRV[1][lang],'soon','1',9,bx('doD')[3]]];
const nums=[[450,'+','s1'],[12,'','s2'],[20000,'+','s3']];
return `<div class="wrap x"><div class="x-top"><p class="x-st">${x('aboutSt')}</p></div></div>`+
bd('w',stmtH(x('aboutP').join(' '),bx('introLab'),`<dl class="st6-k">${nums.map(n=>`<div><dt class="num"><span class="cnt" data-n="${n[0]}" data-s="${n[1]}">${fmtN(n[0])}${n[1]}</span></dt><dd>${t(n[2])}</dd></div>`).join('')}</dl>`))+
bd('',`<section><div class="hs2-h"><div>${secLab(bx('doLab'))}<h2 class="x-h" style="margin:0">${bx('doH')}</h2></div></div><div class="isl do2">${D.map(d=>`<button class="do2-i" data-go="${d[1]}" data-a="${d[2]}"><span class="do2-c"><img src="${IMGS[d[3]]}" alt="" loading="lazy"></span><span class="do2-b"><span class="do2-h">${d[0]}<i>↗</i></span><span class="do2-d">${d[4]}</span></span></button>`).join('')}</div></section>`)+
bd('w',secAdv())+bd('',xSteps().replace('class="x-s"','class=""'))+bd('w',secFaq())+bd('',leadForm('about'))+bd('w',secSeo('about'))};

// ================= v4: TZ implementation =================
const V4={uk:{menuProd:'Продукція',qcH:'Зв’яжіться з нами',qcCall:'Зателефонувати',qcMsg:'Месенджери',qcHrs:'Графік роботи',qcOpen:'Зараз працюємо · до 18:00',qcClosed:'Зараз зачинено · працюємо з 09:00',qcCbH:'Вам перетелефонувати?',qcCbP:'Залиште номер — передзвонимо в робочий час.',qcCbB:'Передзвоніть мені',qcCbOk:'Дякуємо! Менеджер передзвонить найближчим часом.',qcLab:'Швидкий зв’язок',
attB:'Прикріпити файли',attH:'до 3 файлів або посилань',fmH:'Прикріпити файли',fmS:'Креслення, 3D-моделі або фото — до 3 файлів і до 3 посилань. Великі файли зручніше додати посиланням на хмарне сховище.',fmLink:'Посилання на файл (Google Drive, Dropbox…)',fmAdd:'Додати',fmDev:'Обрати з пристрою',fmDone:'Готово',fmEmpty:'Ще нічого не додано',fmFull:'Додано максимум — 3 файли',msgPick:'Оберіть месенджер',
pdfB:'Каталог PDF',pdfH:'Завантажити каталог',pdfS:'Оберіть версію — каталог згенерується з актуальних даних сайту з клікабельним змістом.',pdfD:['ПК і планшет','A4, альбомна орієнтація, два товари на сторінці'],pdfM:['Мобільна версія','Вузький формат для зручного перегляду з телефона'],pdfSave:'Зберегти як PDF',pdfTip:'Файл одразу завантажиться на ваш пристрій.',pdfToc:'Зміст',pdfTop:'↑ До змісту',pdfOpen:'Відкрити на сайті',pdfCover:'Каталог продукції',pdfVar:'Варіанти та ціни',
items:'позицій',
prH:'Виробництво пластикових деталей повного циклу',prL:'Фіксатори арматури, елементи опалубки та вироби під замовлення — від розробки пресформи до відвантаження партії на власних потужностях.',prPh:'Фото цеху додамо після зйомки',prLab:'Виробництво',
mvLab:'Хто ми',mvH:'Місія, історія та цінності',mv:[['Місія','Забезпечувати будівництво та виробників надійними пластиковими деталями українського виробництва — точно, вчасно й за чесною ціною.'],['Історія','За 12 років ми виросли від виробника будівельних фіксаторів до підприємства повного циклу з власним виготовленням пресформ.'],['Цінності','Якість на кожному етапі, відповідальність за терміни та довгострокове партнерство з кожним клієнтом.']],
tpaLab:'Обладнання',tpaH:'Парк термопластавтоматів',tpaP:'Лиття виконуємо на термопластавтоматах (ТПА) — обладнанні для лиття пластмас під тиском, що забезпечує точну геометрію та стабільну якість кожного виробу.',tpa:[['Кількість ТПА','—','дані уточнюються'],['Зусилля змикання','—','дані уточнюються'],['Об’єм впорскування','—','дані уточнюються'],['Матеріали','П/Е, ПВХ','та інші види пластику']],
hiLab:'Історія',hiH:'Шлях компанії',hi:[['2014','Заснування компанії у Львові'],['2017','Запуск власної лінійки фіксаторів арматури'],['2020','Власне виготовлення пресформ'],['2023','Відкриття офісу в Києві'],['2025','20 000+ виконаних замовлень'],['2026','Новий сайт і онлайн-каталог']]},
en:{menuProd:'Products',qcH:'Get in touch',qcCall:'Call us',qcMsg:'Messengers',qcHrs:'Working hours',qcOpen:'Open now · until 18:00',qcClosed:'Closed now · open from 09:00',qcCbH:'Want us to call you back?',qcCbP:'Leave your number and we’ll call back during working hours.',qcCbB:'Call me back',qcCbOk:'Thank you! A manager will call you back shortly.',qcLab:'Quick contact',
attB:'Attach files',attH:'up to 3 files or links',fmH:'Attach files',fmS:'Drawings, 3D models or photos — up to 3 files and up to 3 links. Large files are easier to share as a cloud link.',fmLink:'Link to file (Google Drive, Dropbox…)',fmAdd:'Add',fmDev:'Choose from device',fmDone:'Done',fmEmpty:'Nothing added yet',fmFull:'Maximum of 3 files added',msgPick:'Choose a messenger',
pdfB:'PDF catalog',pdfH:'Download catalog',pdfS:'Pick a version — the catalog is generated from current site data with a clickable table of contents.',pdfD:['Desktop & tablet','A4 landscape, two products per page'],pdfM:['Mobile','Narrow format for comfortable phone reading'],pdfSave:'Save as PDF',pdfTip:'The file downloads straight to your device.',pdfToc:'Contents',pdfTop:'↑ Back to contents',pdfOpen:'Open on website',pdfCover:'Product catalog',pdfVar:'Options and prices',
items:'items',
prH:'Full-cycle plastic parts manufacturing',prL:'Rebar spacers, formwork parts and custom products — from mold design to shipment at our own plant.',prPh:'Plant photos coming soon',prLab:'Production',
mvLab:'Who we are',mvH:'Mission, history and values',mv:[['Mission','To supply construction and manufacturers with reliable Ukrainian-made plastic parts — precise, on time and fairly priced.'],['History','In 12 years we grew from a spacer maker into a full-cycle plant with in-house mold making.'],['Values','Quality at every stage, responsibility for lead times and long-term partnership.']],
tpaLab:'Equipment',tpaH:'Injection molding machines',tpaP:'We mold on injection molding machines that ensure precise geometry and consistent quality.',tpa:[['Machines','—','to be confirmed'],['Clamping force','—','to be confirmed'],['Shot volume','—','to be confirmed'],['Materials','PE, PVC','and other plastics']],
hiLab:'History',hiH:'Our journey',hi:[['2014','Company founded in Lviv'],['2017','Own rebar spacer line launched'],['2020','In-house mold making'],['2023','Kyiv office opened'],['2025','20,000+ orders completed'],['2026','New website and online catalog']]}};
const v4=k=>V4[lang][k];
for(const L of ['uk','en']){T[L].about=L==='uk'?'Виробництво':'Production';T[L].fprod=L==='uk'?'Продукція':'Products'}
CNT.uk.seoMore='Читати більше';CNT.en.seoMore='Read more';
const ICO={chat:'<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/></svg>',
phone:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></svg>',
clip:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21 11-8.6 8.6a5 5 0 0 1-7-7L14 4a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4L15.4 7"/></svg>',
file:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',
link:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
doc:'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0-4-4m4 4 4-4"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>'};
const SOCI=[...SOCS.matchAll(/<svg[\s\S]*?<\/svg>/g)].map(m=>m[0]);
const MSGR=[['WhatsApp','https://wa.me/380966821463',SOCI[0]],['Telegram','https://t.me/+380966821463',SOCI[1]],['Viber','viber://chat?number=%2B380966821463',SOCI[2]]];
function kyivOpen(){let d;try{d=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Kyiv'}))}catch(e){try{d=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Kiev'}))}catch(_){d=new Date()}}const w=d.getDay(),h=d.getHours()+d.getMinutes()/60;return w>=1&&w<=5&&h>=9&&h<18}

/* ---------- header: quick contact ---------- */
(function(){const tb=document.querySelector('.tb'),bg=document.getElementById('burger');const b=document.createElement('button');b.className='ic qc-b';b.id='qcb';b.setAttribute('aria-expanded','false');b.setAttribute('aria-controls','qcp');b.innerHTML=ICO.chat;{const ph=document.getElementById('qcb-ph');if(ph)ph.remove()}tb.insertBefore(b,bg);
const p=document.createElement('div');p.id='qcp';p.className='qcp';p.setAttribute('role','dialog');p.hidden=true;document.body.appendChild(p)})();
function qcHtml(){const o=kyivOpen(),I=LI();return `<div class="qcp-h"><span class="sv-lab" style="margin:0">${v4('qcLab')}</span><button class="ic x" data-qc-x aria-label="Close">✕</button></div>
<h3 class="qcp-t">${v4('qcH')}</h3><a class="btn qcp-call" href="tel:${PH[0].replace(/[^+\d]/g,'')}">${ICO.phone}${v4('qcCall')}</a>
<div class="qcp-ph">${PH.map(x=>`<a href="tel:${x.replace(/[^+\d]/g,'')}">${x}</a>`).join('')}</div>
<div class="qcp-s"><span class="qcp-k">${v4('qcMsg')}</span><div class="qcp-m">${MSGR.map(([n,h,i])=>`<a href="${h}" target="_blank" rel="noopener">${i}<span>${n}</span></a>`).join('')}</div></div>
<div class="qcp-s"><span class="qcp-k">${v4('qcHrs')}</span><p class="qcp-st ${o?'on':''}"><i></i>${o?v4('qcOpen'):v4('qcClosed')}</p>${HOURS.map(h=>`<p class="qcp-hr">${h[I]}</p>`).join('')}</div>
<form class="qcp-cb" novalidate><span class="qcp-k" style="color:var(--ink);font-weight:700;font-size:15px">${v4('qcCbH')}</span><p>${v4('qcCbP')}</p><div class="qcp-r"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${v4('qcCbB')}</button></div><p class="lf-err" role="alert" hidden></p></form>`}
let qcY=0;function qc(open){const p=$('#qcp'),b=$('#qcb');if(open){p.innerHTML=qcHtml();p.hidden=false;requestAnimationFrame(()=>p.classList.add('on'));qcY=scrollY}else{p.classList.remove('on');setTimeout(()=>{if(!p.classList.contains('on'))p.hidden=true},220)}b.setAttribute('aria-expanded',open)}
document.addEventListener('click',e=>{if(e.target.closest('#qcb')){qc($('#qcb').getAttribute('aria-expanded')!=='true');return}
if(e.target.closest('[data-qc-x]')||(!e.target.closest('#qcp')&&$('#qcb').getAttribute('aria-expanded')==='true'))qc(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#qcb').getAttribute('aria-expanded')==='true')qc(false)});
addEventListener('scroll',()=>{if($('#qcb').getAttribute('aria-expanded')==='true'&&Math.abs(scrollY-qcY)>60)qc(false)},{passive:true});
document.addEventListener('submit',e=>{const f=e.target.closest('.qcp-cb');if(!f)return;e.preventDefault();const ph=f.phone.value.trim(),er=f.querySelector('.lf-err');f.phone.setAttribute('aria-invalid',!ph);
if(!ph){er.textContent=lang==='uk'?'Вкажіть номер телефону.':'Enter your phone number.';er.hidden=false;return}er.hidden=true;
pushLead({phone:ph,contact:'call',type:'callback',source:leadSource('header-callback'),okText:v4('qcCbOk')});f.innerHTML=`<p class="qcp-ok">✓ ${v4('qcCbOk')}</p>`});

/* ---------- side menu ---------- */
side=function(){const c=R.p,cc=R.p==='catalog'?F.cat:null;let i=0;
const n=(p,l,a,cur)=>`<div class="nvi"><button class="nav big" data-go="${p}" ${a?`data-a='${a}'`:''} ${cur?'aria-current="page"':''}><i>${String(++i).padStart(2,'0')}</i>${l}</button></div>`;
$('#side').innerHTML=`<div class="ash"><button class="logo" data-go="home">PLASTIZA</button><button class="ic x" id="close" aria-label="Close">✕</button></div><nav class="nvl">`+n('home',t('home'),'',c==='home')+n('catalog',v4('menuProd'),'all',c==='catalog'||c==='product')+n('about',t('about'),'',c==='about')+n('oem',t('oem'),'',c==='oem'||c==='soon')+n('contacts',t('contacts'),'',c==='contacts')+n('faq',t('faq'),'',c==='faq')+n('blog',t('blog'),'',c==='blog'||c==='post')+`</nav><div class="ct"><div class="grp" style="padding-left:0">${t('contacts')}</div><a href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a><p>${t('tag')}</p></div><div class="ctl"><div class="lg"><button data-l="uk" aria-pressed="${lang==='uk'}">ua</button><button data-l="en" aria-pressed="${lang==='en'}">en</button></div><button class="ic" id="th" style="flex:none">◐ ${t('theme')}</button></div>`};

/* ---------- forms: iOS dropdown + attachments modal ---------- */
const ATT=new WeakMap();const att=f=>{if(!ATT.has(f))ATT.set(f,[]);return ATT.get(f)};
const fsz=b=>b>1048576?(b/1048576).toFixed(1)+' MB':Math.max(1,Math.round(b/1024))+' KB';
const attRow=(a,i,ctx)=>`<li class="att-r"><span class="att-i">${a.url?ICO.link:ICO.file}</span><span class="att-n">${a.name}</span>${a.size?`<span class="att-s">${fsz(a.size)}</span>`:''}<button type="button" class="att-x" data-att-x="${i}" data-ctx="${ctx}" aria-label="Remove">✕</button></li>`;
const ddHtml=()=>`<div class="mc-row" role="radiogroup" aria-label="${v4('msgPick')}">${MSGR.map(([m,,ic])=>`<button type="button" class="mc" data-mc="${m}" role="radio" aria-checked="${m==='WhatsApp'}"><span class="dd-i">${ic}</span>${m}</button>`).join('')}</div><div class="dd"><input type="hidden" name="msgr" value="WhatsApp"><button type="button" class="dd-b" aria-haspopup="listbox" aria-expanded="false"><span class="dd-i">${MSGR.find(x=>x[0]==='WhatsApp')[2]}</span><span class="dd-v">WhatsApp</span><i class="chv" aria-hidden="true"><svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="butt" stroke-linejoin="miter"><path d="M1 1.5l5 5 5-5"/></svg></i></button><div class="dd-m" role="listbox" aria-label="${v4('msgPick')}" hidden>${MSGR.map(([m,,ic],k)=>`<button type="button" role="option" data-dv="${m}" aria-selected="${m==='WhatsApp'}"><span class="dd-i">${ic}</span>${m}<i aria-hidden="true">✓</i></button>`).join('')}</div></div>`;
leadForm=ctx=>`<div class="x-s x-lf"><div class="isl lf2"><div class="lfo" aria-hidden="true"><i></i></div><div class="lf2-a">${secLab(bx('lfLab'))}<h2>${bx('lfH')}</h2><p>${bx('lfP')}</p>
${dcBlock()}</div>
<form class="lf lf2-f" data-v3 data-ctx="${ctx}" novalidate><input name="name" required placeholder="${lf('nm')}" aria-label="${lf('nm')}" autocomplete="name">
<fieldset class="lf-how"><legend>${lf('how')}</legend><div class="lf-ch">${[['call',lf('call')],['email',lf('mail')],['messenger',lf('mess')]].map((m,i)=>`<label><input type="radio" name="how" value="${m[0]}"${i?'':' checked'}><span>${m[1]}</span></label>`).join('')}</div></fieldset>
<div class="lf-ct"><input name="phone" type="tel" placeholder="${lf('ph')}" aria-label="${lf('ph')}" autocomplete="tel"><input name="email" type="email" placeholder="${lf('em')}" aria-label="${lf('em')}" autocomplete="email" hidden><div class="lf-ms" hidden>${ddHtml()}</div></div>
<textarea name="msg" rows="3" placeholder="${lf('msg')}" aria-label="${lf('msg')}"></textarea>
<button type="button" class="lf-att" data-att-open>${ICO.clip}<b>${v4('attB')}</b><span></span></button><ul class="att-l"></ul>
<p class="lf-err" role="alert" hidden></p><button class="btn" type="submit">${lf('send')}</button></form>${lfAlt()}</div></div>`;
(function(){const d=document.createElement('dialog');d.id='fmod';d.className='fmod';document.body.appendChild(d)})();
let fmForm=null;
function fmRender(){const d=$('#fmod'),a=att(fmForm),nf=a.filter(x=>!x.url).length,nl=a.length-nf,fullF=nf>=3,fullL=nl>=3,full=fullF&&fullL;d.innerHTML=`<div class="fm-h"><h3>${v4('fmH')}</h3><button type="button" class="ic x" data-fm-x aria-label="Close">✕</button></div><p class="fm-s">${v4('fmS')}</p>
<div class="fm-l"><input type="url" id="fml" placeholder="${v4('fmLink')}" ${fullL?'disabled':''}><button type="button" class="btn g" data-fm-link ${fullL?'disabled':''}>${v4('fmAdd')}</button></div>
<label class="btn fm-dev${fullF?' dis':''}">${ICO.file}${v4('fmDev')}<input type="file" id="fmf" multiple accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png" ${fullF?'disabled':''} hidden></label>
<ul class="fm-list">${a.length?a.map((x,i)=>attRow(x,i,'m')).join(''):`<li class="fm-e">${v4('fmEmpty')}</li>`}</ul>
<div class="fm-f"><span class="fm-c">${lang==='uk'?'Файли':'Files'} ${nf}/3 · ${lang==='uk'?'Посилання':'Links'} ${nl}/3</span><button type="button" class="btn" data-fm-x>${v4('fmDone')}</button></div>`}
function attSync(f){const ul=f.querySelector('.att-l'),a=att(f);ul.innerHTML=a.map((x,i)=>attRow(x,i,'f')).join('');const nf=a.filter(x=>!x.url).length,nl=a.length-nf;f.querySelector('.lf-att span').textContent=a.length?[nf?`${nf} ${lang==='uk'?(nf===1?'файл':'файли'):(nf===1?'file':'files')}`:'',nl?`${nl} ${lang==='uk'?'посилання':(nl===1?'link':'links')}`:''].filter(Boolean).join(' · '):''}
document.addEventListener('click',e=>{const t0=e.target;
const op=t0.closest('[data-att-open]');if(op){fmForm=op.closest('form');fmRender();$('#fmod').showModal();return}
if(t0.closest('[data-fm-x]')){$('#fmod').close();return}
if(t0===$('#fmod')){$('#fmod').close();return}
if(t0.closest('[data-fm-link]')){const i=$('#fml'),v=i.value.trim();if(!/^https?:\/\/\S+\.\S+/.test(v)){i.setAttribute('aria-invalid','true');i.focus();return}if(att(fmForm).filter(x=>x.url).length>=3)return;att(fmForm).push({url:v,name:v.replace(/^https?:\/\//,'').slice(0,60)});fmRender();attSync(fmForm);return}
const x=t0.closest('[data-att-x]');if(x){const f=x.dataset.ctx==='m'?fmForm:x.closest('form');att(f).splice(+x.dataset.attX,1);attSync(f);if(x.dataset.ctx==='m')fmRender();return}
const db=t0.closest('.dd-b');if(db){const m=db.nextElementSibling,o=m.hidden;document.querySelectorAll('.dd-m').forEach(z=>{z.hidden=true;z.previousElementSibling.setAttribute('aria-expanded','false')});m.hidden=!o;db.setAttribute('aria-expanded',o);if(o)m.querySelector('[aria-selected=true]').focus();return}
const dv=t0.closest('[data-dv]');if(dv){const dd=dv.closest('.dd'),v=dv.dataset.dv,mi=MSGR.find(m=>m[0]===v);dd.querySelector('input').value=v;dd.querySelector('.dd-v').textContent=v;dd.querySelector('.dd-b .dd-i').innerHTML=mi[2];dd.querySelectorAll('[data-dv]').forEach(o=>o.setAttribute('aria-selected',o===dv));const m=dd.querySelector('.dd-m');m.hidden=true;dd.querySelector('.dd-b').setAttribute('aria-expanded','false');dd.querySelector('.dd-b').focus();return}
if(!t0.closest('.dd'))document.querySelectorAll('.dd-m').forEach(z=>{if(!z.hidden){z.hidden=true;z.previousElementSibling.setAttribute('aria-expanded','false')}})});
document.addEventListener('keydown',e=>{const m=e.target.closest&&e.target.closest('.dd-m');if(!m)return;const o=[...m.querySelectorAll('[data-dv]')],i=o.indexOf(e.target);
if(e.key==='ArrowDown'){e.preventDefault();o[(i+1)%o.length].focus()}else if(e.key==='ArrowUp'){e.preventDefault();o[(i-1+o.length)%o.length].focus()}else if(e.key==='Escape'){m.hidden=true;m.previousElementSibling.setAttribute('aria-expanded','false');m.previousElementSibling.focus()}});
document.addEventListener('change',e=>{if(e.target.id==='fmf'){const a=att(fmForm);[...e.target.files].slice(0,Math.max(0,3-a.filter(x=>!x.url).length)).forEach(f=>a.push({name:f.name,size:f.size}));fmRender();attSync(fmForm);return}
const f=e.target.closest('form[data-v3]');if(f&&e.target.name==='how'){const v=e.target.value;f.querySelector('.lf-ms').hidden=v!=='messenger';f.phone.hidden=v==='email';f.email.hidden=v!=='email';(v==='email'?f.email:f.phone).focus({preventScroll:true});f.querySelector('.lf-err').hidden=true}});
document.addEventListener('submit',e=>{const f=e.target.closest('form[data-v3]');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err');
f.name.setAttribute('aria-invalid',!d.get('name'));
if(!d.get('name')){er.textContent=lf('nm')+' — '+(lang==='uk'?'обов’язкове поле.':'required.');er.hidden=false;return}
{const hw=d.get('how'),fld=hw==='email'?f.email:f.phone;fld.setAttribute('aria-invalid',!fld.value.trim());if(!fld.value.trim()){er.textContent=hw==='email'?(lang==='uk'?'Вкажіть email.':'Enter your email.'):(lang==='uk'?'Вкажіть номер телефону.':'Enter your phone number.');er.hidden=false;return}}er.hidden=true;
pushLead({name:d.get('name'),phone:d.get('how')==='email'?'':d.get('phone'),email:d.get('how')==='email'?d.get('email'):'',message:d.get('msg'),files:att(f).map(a=>a.url||a.name),contact:d.get('how'),messenger:d.get('how')==='messenger'?d.get('msgr'):null,source:leadSource(f.dataset.ctx),okText:lf('ok')});
f.reset();ATT.set(f,[]);attSync(f);f.querySelector('.lf-ms').hidden=true;f.phone.hidden=false;f.email.hidden=true;msgSet(f,'Telegram')});

/* ---------- catalog: every variant is its own card ---------- */
const VARS=()=>P.flatMap(p=>p.v.map((v,i)=>({p,i,v})));
const pcV=({p,i,v})=>{const nm=`${title(p)} ${sz(v)}`;
return `<article class="pc5"><button class="pc5-b" data-go="product" data-a="${p.id}-${i}" aria-label="${nm}"><span class="pc5-i"><img src="${IMGV[p.id+'-'+i]||IMGS[p.id]}" alt="" loading="lazy"></span><span class="pc5-f"><span class="pc5-n">${nm}</span><span class="pc5-p"><small>${t("from")}</small> ${fp(v[1])} ${cur()}</span></span></button></article>`};
resHtml=()=>{const ps=filt(),r=VARS().filter(o=>ps.includes(o.p)&&(!F.sz.length||F.sz.includes(sz(o.v))));return `<div class="chips">${chips()}</div><div class="cnt-r"><p class="cnt-l">${r.length} ${v4('items')}</p>${gdCtl()}</div>`+(r.length?`<div class="pgrid" ${gdAttr()}>${r.map(pcV).join('')}</div>`:`<p class="none">${t('none')}</p>`)};
catalog=()=>`<div class="wrap"><div class="ct1"><span class="lab">${t('clab')}</span><div class="ct1-r"><button class="tlink" style="margin:0" data-pdf>${ICO.doc}${v4('pdfB')}</button><button class="lab r" data-go="home">${t('tohome')}</button></div></div><h1 class="ch">${t('ch')}</h1><p class="cs">${t('cs')}</p><div class="qn"><div class="qs">${P.map(qt).join('')}</div></div><div class="cl"><div class="fpn" id="fp">${fHtml()}</div><div id="res">${resHtml()}</div></div></div>`;

/* ---------- home: product row ---------- */
secGrid=()=>{const c=p=>`<button class="mqc" data-go="product" data-a="${p.id}"><span class="mqi"><img src="${IMGS[p.id]}" alt="" loading="lazy"></span><span class="mqn">${p.id===7?(lang==='uk'?'Ялинка':'Fir-tree'):short(p)}<i class="arw" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 17L17 3M7.5 3H17v9.5"/></svg></i></span></button>`;
return `<section class="hrow qsw"><span class="swh" aria-hidden="true">${(secIsl().match(/<svg[\s\S]*?<\/svg>/)||[''])[0]}${t('swipe')}</span><div class="qs hr-s">${P.map(c).join('')}</div><button class="hr-a hr-p" data-hr="-1" aria-label="Back">←</button><button class="hr-a hr-n" data-hr="1" aria-label="Next">→</button></section>`};
document.addEventListener('click',e=>{const b=e.target.closest('[data-hr]');if(!b)return;const s=b.parentNode.querySelector('.hr-s');s.scrollBy({left:+b.dataset.hr*Math.max(240,s.clientWidth*.7),behavior:'smooth'})});

/* ---------- SEO: first paragraph + spoiler ---------- */
secSeo=(k='home')=>{const d=SEOX[k][lang];return `<section class="seo3" id="seo">${secLab(d.lab)}<h2>${d.h}</h2><p class="seo3-l">${d.lead}</p>
<div class="seo3-x" inert><div class="seo3-xi"><div class="seo2-f">${d.facts.map(f=>`<div><b class="num">${f[2]&&f[2]!=='+'?`<small>${f[2]}</small>`:''}${f[0]}${f[2]==='+'?'+':''}</b><span>${f[1]}</span></div>`).join('')}</div>
<div class="seo3-p">${d.parts.map((p,i)=>`<article class="seo2-p"><span class="num">${String(i+1).padStart(2,'0')}</span><div><h3>${p[0]}</h3><p>${p[1]}</p></div></article>`).join('')}</div>
<div class="seo2-k">${d.keys.map(([l,g,a])=>`<button class="seo2-c" data-go="${g}"${a!==''?` data-a="${a}"`:''}>${l}</button>`).join('')}</div></div></div>
<button class="tlink seo-b" data-seo aria-expanded="false">${cx('seoMore')}<i aria-hidden="true">↓</i></button></section>`};
document.addEventListener('click',e=>{const b=e.target.closest('.seo3 [data-seo]');if(!b)return;const x=b.closest('.seo3').querySelector('.seo3-x');if(x)x.toggleAttribute('inert',!b.closest('.seo3').classList.contains('open'))});

/* ---------- product page: related as 1.5-card scroller on mobile ---------- */
const _product=product;product=function(){const {p,vi}=pvParse(R.a);if(!p)return page404();
let h=_product();const i0=h.lastIndexOf('<section style="padding-bottom:clamp(56px,7vw,96px)"><h2 class="x-h">');if(i0>-1){const i1=h.indexOf('</section>',i0)+10;h=h.slice(0,i0)+h.slice(i1)}
return h+bd('w pr-rel',relRow(p,vi))+supplyBand()+bd('w',secFaq())+bd('',leadForm('product'))+bd('w',secSeo(prodSeoKey(p,vi)))};

/* ---------- «Виробництво» page ---------- */
about=()=>{const nums=[[450,'+','s1'],[12,'','s2'],[20000,'+','s3']];
return `<h1 class="sr">${v4('prH')}</h1>${prIntro()}`+
bd('w',stmtH(x('aboutP').join(' '),bx('introLab'),`<dl class="st6-k">${nums.map(n=>`<div><dt class="num"><span class="cnt" data-n="${n[0]}" data-s="${n[1]}">${fmtN(n[0])}${n[1]}</span></dt><dd>${t(n[2])}</dd></div>`).join('')}</dl>`))+
bd('',`<section><div class="hs2-h"><div>${secLab(v4('mvLab'))}<h2 class="x-h" style="margin:0">${v4('mvH')}</h2></div></div><div class="mv3 mv3n">${v4('mv').map((m,i)=>`<div class="mv3-i"><h3>${m[0]}</h3><p>${m[1]}</p></div>`).join('')}</div></section>`)+
bd('w',secCap())+
bd('',`<section><div class="hs2-h"><div>${secLab(v4('hiLab'))}<h2 class="x-h" style="margin:0">${v4('hiH')}</h2></div></div><ol class="isl hi3">${v4('hi').map(h=>`<li class="hi3-i"><span class="hi3-y num">${h[0]}</span><p>${h[1]}</p></li>`).join('')}</ol></section>`)+
bd('w',secAdv())+bd('',xSteps().replace('class="x-s"','class=""'))+bd('w',secFaq())+bd('',leadForm('about'))+bd('w',secSeo('about'))};

/* ---------- PDF catalog ---------- */
(function(){const d=document.createElement('dialog');d.id='pdfm';d.className='fmod';document.body.appendChild(d)})();
document.addEventListener('click',e=>{const b=e.target.closest('[data-pdf]');if(b){const d=$('#pdfm');d.innerHTML=`<div class="fm-h"><h3>${v4('pdfH')}</h3><button type="button" class="ic x" data-pdf-x aria-label="Close">✕</button></div><p class="fm-s">${v4('pdfS')}</p><div class="pdf-o">${[['desk',v4('pdfD'),'▭'],['mob',v4('pdfM'),'▯']].map(([k,[h,s],ic])=>`<button class="pdf-c" data-pdf-go="${k}"><span class="pdf-ic">${ic}</span><b>${h}</b><span>${s}</span></button>`).join('')}</div>`;d.showModal();return}
if(e.target.closest('[data-pdf-x]')||e.target===$('#pdfm')){$('#pdfm').close();return}
const g=e.target.closest('[data-pdf-go]');if(g){$('#pdfm').close();go('pdf',g.dataset.pdfGo);return}
if(e.target.closest('[data-print]')){try{window.print()}catch(_){const el=$('#toast');el.textContent=v4('pdfTip');el.classList.add('on');setTimeout(()=>el.classList.remove('on'),3000)}}});
function pdfPage(){const mob=R.a==='mob',I=LI();let ps=document.getElementById('pdfpage');if(!ps){ps=document.createElement('style');ps.id='pdfpage';document.head.appendChild(ps)}ps.textContent=`@page{size:${mob?'110mm 196mm':'A4 landscape'};margin:${mob?'8mm':'12mm'}}`;
return `<div class="wrap pdfv ${mob?'pdf-m':'pdf-d'}"><div class="pdf-bar no-print"><div><span class="sv-lab" style="margin:0 0 6px">${v4('pdfB')}</span><b>${mob?v4('pdfM')[0]:v4('pdfD')[0]}</b><small>${v4('pdfTip')}</small></div><div class="row"><button class="btn g" data-go="pdf" data-a="${mob?'desk':'mob'}">${mob?v4('pdfD')[0]:v4('pdfM')[0]}</button><button class="btn" data-print>${ICO.doc}${v4('pdfSave')}</button></div></div>
<div class="pdf-doc"><section class="pdf-cv"><span class="pdf-lg">PLASTIZA</span><h1>${v4('pdfCover')}</h1><p>${t('tag')}</p><div class="pdf-ct">${PH.join(' · ')}<br>plastiza.sale@gmail.com</div></section>
<nav class="pdf-toc" id="pdf-toc"><h2>${v4('pdfToc')}</h2>${CATS.map(c=>`<h3>${c[lang]}</h3><ol>${P.filter(p=>p.cat===c.id).map(p=>`<li><a href="#pdf-p${p.id}">${title(p)}</a><span>${p.v.length}</span></li>`).join('')}</ol>`).join('')}</nav>
${P.map(p=>`<section class="pdf-p" id="pdf-p${p.id}"><div class="pdf-im"><img src="${IMGS[p.id]}" alt=""></div><div class="pdf-tx"><span class="pdf-k">${CATS.find(c=>c.id===p.cat)[lang]}</span><h2>${title(p)}</h2><p>${p.d[lang]}</p><table><thead><tr><th>${t('size')}</th><th>${t('price')}</th><th>${t('pack')}</th></tr></thead><tbody>${p.v.map(v=>`<tr><td>${sz(v)}</td><td>${t('from')} ${fp(v[1])} ${cur()}/${un(p)}</td><td>${v[2]?v[2]+' '+un(p):'—'}</td></tr>`).join('')}</tbody></table><div class="pdf-ln"><a href="#pdf-toc">${v4('pdfTop')}</a><a href="${rtAbsP(p.id)}" target="_blank" rel="noopener">${v4('pdfOpen')} ↗</a></div></div></section>`).join('')}</div></div>`}

// ===== advantages v3 =====
const ADV3={uk:{cap:'Для надійних поставок<br>на кожному об’єкті',pill:'Переваги',it:[
['Власне виробництво','Повний цикл на власних потужностях: від пресформи до готової партії без посередників і зайвих націнок.'],
['Висока якість','Контролюємо геометрію та якість на кожному етапі, тож усі вироби в партії мають стабільні характеристики.'],
['Конкурентна ціна','Працюємо напряму як виробник, тому пропонуємо чесні ціни та гнучкі умови для оптових замовлень.'],
['Комплексне постачання','Усі фіксатори та елементи опалубки для об’єкта можна замовити в одному місці й одним відвантаженням.'],
['Надійне партнерство','Консультуємо щодо вибору виробів, супроводжуємо кожне замовлення й дотримуємося погоджених термінів.'],
['Міжнародна співпраця','Маємо досвід роботи із закордонними партнерами та виконуємо замовлення відповідно до їхніх вимог.'],
['Екологічність','Відповідально ставимося до сировини й виробничих процесів і дбаємо про довговічність кожного виробу.'],
['Український виробник','Виробляємо в Україні та підтримуємо вітчизняне будівництво надійними пластиковими деталями.']]},
en:{cap:'For reliable supply<br>on every site',pill:'Advantages',it:[
['In-house production','Full cycle at our own plant: from the mold to the finished batch, with no middlemen or extra markups.'],
['High quality','We check geometry and quality at every stage, so every part in the batch has consistent properties.'],
['Competitive prices','We sell directly as the manufacturer, offering fair prices and flexible terms for wholesale orders.'],
['Complete supply','Order every spacer and formwork part for your site in one place and receive it in one shipment.'],
['Reliable partnership','We advise on product choice, support every order and stick to the lead times we agree on.'],
['International cooperation','We have experience with partners abroad and fulfil orders to their specific requirements.'],
['Eco-friendliness','We treat raw materials and processes responsibly and care about the durability of every part.'],
['Ukrainian manufacturer','We manufacture in Ukraine and support domestic construction with reliable plastic parts.']]}};
secAdv=()=>{const d=ADV3[lang];return `<section class="av3"><div class="s5-top av3-top"><div>${secLab(d.pill)}<h2 class="s5-h">${lang==='uk'?'Переваги<br>роботи з нами':'Why work<br>with us'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${String(d.it.length).padStart(2,'0')}</b>${lang==='uk'?'переваг':'reasons'}</span><p class="av3-cap2">${d.cap}</p></div></div>
<div class="av3-g">${d.it.map((a,i)=>`<article class="av3-c"><span class="av3-ic" aria-hidden="true">${AVI[i%AVI.length]}</span><h3>${a[0]}</h3><p>${a[1]}</p></article>`).join('')}</div><div class="sl-dots av3-dots" aria-hidden="true"></div></section>`};

// ===== shared product row (home + catalog) =====
const prowCard=p=>`<button class="mqc" data-go="product" data-a="${p.id}"><span class="mqi"><img src="${IMGS[p.id]}" alt="" loading="lazy"></span><span class="mqn">${p.id===7?(lang==='uk'?'Ялинка':'Fir-tree'):short(p)}<i class="arw" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="butt" stroke-linejoin="miter"><path d="M3 17L17 3M7.5 3H17v9.5"/></svg></i></span></button>`;
const prow=()=>`<div class="prow qsw at-s"><span class="swh" aria-hidden="true">${(secIsl().match(/<svg[\s\S]*?<\/svg>/)||[''])[0]}${t('swipe')}</span><div class="qs prow-s">${P.map(prowCard).join('')}</div><button class="pr-a pr-p" data-pr="-1" aria-label="Back">←</button><button class="pr-a pr-n" data-pr="1" aria-label="Next">→</button></div>`;
secGrid=()=>`<section class="hrow2">${prow()}</section>`;
catalog=()=>`<div class="wrap"><div class="ct1"><span class="lab">${t('clab')}</span><div class="ct1-r"><button class="tlink" style="margin:0" data-pdf>${ICO.doc}${v4('pdfB')}</button><button class="lab r" data-go="home">${t('tohome')}</button></div></div><h1 class="ch">${t('ch')}</h1><p class="cs">${t('cs')}</p><div class="ct-row">${prow()}</div><div class="cl"><div class="fpn" id="fp">${fHtml()}</div><div id="res">${resHtml()}</div></div></div>`;
function prowInit(){document.querySelectorAll('.prow').forEach(w=>{const s=w.querySelector('.prow-s');const up=()=>{const m=s.scrollWidth-s.clientWidth;w.classList.toggle('at-s',s.scrollLeft<=4);w.classList.toggle('at-e',s.scrollLeft>=m-4);w.classList.toggle('nos',m<=4)};
if(!w.dataset.pi){w.dataset.pi=1;s.addEventListener('scroll',up,{passive:true});new ResizeObserver(up).observe(s)}up()})}
document.addEventListener('click',e=>{const b=e.target.closest('[data-pr]');if(!b)return;const s=b.parentNode.querySelector('.prow-s');s.scrollBy({left:+b.dataset.pr*Math.max(240,s.clientWidth*.7),behavior:'smooth'})});

let foldW=0;function heroFold(force){const hx=document.querySelector('.hx');if(!hx)return;const sp=hx.querySelector('.hx-sp'),f=hx.querySelector('.hqi')||hx.querySelector('.hqf'),hi=hx.querySelector('.hx-in'),ch=hx.querySelector('.hx-chips');if(!sp||!f)return;
{sp.style.height='';hi.style.removeProperty('padding-top');f.style.marginTop='';ch.style.marginTop='';return}if(!force&&foldW===innerWidth)return;foldW=innerWidth;
sp.style.height='0px';hi.style.removeProperty('padding-top');f.style.marginTop='';ch.style.marginTop='';
const head=document.querySelector('.top').getBoundingClientRect().height,fb=f.getBoundingClientRect().bottom-hx.getBoundingClientRect().top,avail=innerHeight-head,free=avail-32-fb;
if(free>0){const pt=Math.min(free*.4,64),cg=Math.min(free*.2,28),fm=free-pt-cg;hi.style.setProperty('padding-top',(16+pt)+'px','important');ch.style.setProperty('margin-top',(18+cg)+'px','important');f.style.setProperty('margin-top',(10+fm)+'px','important')}
sp.style.height='56px'}
addEventListener('resize',()=>heroFold(false));

function bgSl(){document.querySelectorAll('.bg-sl').forEach(g=>{const d=g.nextElementSibling;const up=()=>{const cs=[...g.children].filter(c=>c.classList.contains('bc2'));if(innerWidth>700||cs.length<2){d.innerHTML='';return}
const w=cs[0].getBoundingClientRect().width+12,i=Math.round(g.scrollLeft/w);if(d.childElementCount!==cs.length)d.innerHTML=cs.map(()=>'<i></i>').join('');[...d.children].forEach((x,k)=>x.classList.toggle('on',k===Math.min(i,cs.length-1)))};
if(!g.dataset.sl){g.dataset.sl=1;g.addEventListener('scroll',up,{passive:true});new MutationObserver(()=>{g.scrollLeft=0;up()}).observe(g,{childList:true});addEventListener('resize',up)}up()})}

// floating colour orb in the callback block (bounces off the edges)
function lfoInit(){document.querySelectorAll('.lfo').forEach(o=>{if(o.dataset.on)return;o.dataset.on=1;const wide=()=>innerWidth>760,box0=o.parentNode,box=o.closest('.lf3-r')||(wide()?(o.closest('.bd')||o.closest('.x-lf')||box0):box0),ball=o.firstChild,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
let x=0,y=0,vx=0,vy=0,last=0,raf=0,vis=false,W=0,H=0,S=0,L=0,Tp=0;
const size=()=>{W=box.clientWidth;H=box.clientHeight;const fm=box.querySelector('.lf2-f');L=0;Tp=fm&&innerWidth<=760?Math.max(0,fm.getBoundingClientRect().top-box.getBoundingClientRect().top+30):0;if(fm&&innerWidth>760){const br=box.getBoundingClientRect(),fr=fm.getBoundingClientRect();L=fr.left-br.left;Tp=fr.top-br.top;W=fr.right-br.left;H=fr.bottom-br.top}S=Math.round(Math.min(Math.max((W-L)*.42,220),Math.min(440,(H-(Tp||0))*.8)));ball.style.width=ball.style.height=S+'px'};
size();x=L+(W-L)*.5-S/2;y=Math.max(y,Tp);y=H*.18;const sp=W<700?26:38,a=Math.random()*Math.PI*2;vx=Math.cos(a)*sp;vy=Math.sin(a)*sp;if(Math.abs(vx)<sp*.4)vx=sp*.6*Math.sign(vx||1);
const place=()=>{ball.style.transform=`translate3d(${x}px,${y}px,0)`};place();
const m=S*.22;function f(t){raf=0;if(!o.isConnected)return;const dt=last?Math.min(.05,(t-last)/1000):0;last=t;x+=vx*dt;y+=vy*dt;
if(x<(L?L:-m)){x=L?L:-m;vx=Math.abs(vx)}if(x>W-S+m){x=W-S+m;vx=-Math.abs(vx)}if(y<(Tp?Tp:-m)){y=Tp?Tp:-m;vy=Math.abs(vy)}if(y>H-S+m){y=H-S+m;vy=-Math.abs(vy)}
place();if(vis)raf=requestAnimationFrame(f)}
new ResizeObserver(()=>{size();x=Math.max(L?L:-m,Math.min(x,W-S+m));y=Math.max(Tp?Tp:-m,y);y=Math.min(y,H-S+m);place()}).observe(box);
if(rm)return;new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis&&!raf){last=0;raf=requestAnimationFrame(f)}}).observe(box)})}

function msgSet(root,v){const dd=root.querySelector('.dd');if(!dd)return;const mi=MSGR.find(m=>m[0]===v);dd.querySelector('input').value=v;dd.querySelector('.dd-v').textContent=v;dd.querySelector('.dd-b .dd-i').innerHTML=mi[2];dd.querySelectorAll('[data-dv]').forEach(o=>o.setAttribute('aria-selected',o.dataset.dv===v));root.querySelectorAll('[data-mc]').forEach(c=>c.setAttribute('aria-checked',c.dataset.mc===v))}
document.addEventListener('click',e=>{const c=e.target.closest('[data-mc]');if(c){msgSet(c.closest('.lf-ms'),c.dataset.mc);return}const d=e.target.closest('[data-dv]');if(d)setTimeout(()=>msgSet(d.closest('.lf-ms'),d.dataset.dv),0)});

const ICO_MAIL='<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>';
const lfAlt=()=>`<div class="lf2-alt"><p class="or-l"><span>${lang==='uk'?'або зв’яжіться напряму':'or contact us directly'}</span></p><div class="alt-ph">${PH.map(p=>`<a href="tel:${p.replace(/[^+\d]/g,'')}">${p}</a>`).join('')}</div><div class="alt-ms">${MSGR.map(([n,h,i])=>`<a href="${h}" target="_blank" rel="noopener" aria-label="${n}">${i}</a>`).join('')}</div><a class="fpill alt-em" href="mailto:plastiza.sale@gmail.com">${ICO_MAIL}<span>plastiza.sale@gmail.com</span></a></div>`;

// ===== catalog v5: dropdown filters on top, 4 cards per row =====
F.o={};
fHtml=function(){const S=[...new Set(P.flatMap(p=>p.v.map(sz)))],I=LI();
const ck=(k,v,l,on)=>`<button class="ck" data-f="${k}" data-v="${v}" aria-pressed="${on}"><i>${on?'✓':''}</i>${l}</button>`;
const dd=(id,key,ti,items)=>{const n=F[key].length;return `<div class="fdd${F.o[id]?' open':''}"><button class="fdb${n?' on':''}" data-acc="${id}" aria-expanded="${!!F.o[id]}" aria-haspopup="true">${ti}${n?`<b>${n}</b>`:''}<i class="chv" aria-hidden="true"><svg viewBox="0 0 12 8" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="butt" stroke-linejoin="miter"><path d="M1 1.5l5 5 5-5"/></svg></i></button>${F.o[id]?`<div class="fpop"><div class="sc">${items}</div></div>`:''}</div>`};
const any=F.fm.length||F.ps.length||F.pu.length||F.sz.length;
return `<input id="q" type="search" value="${F.q}" placeholder="${t('search')}" aria-label="${t('search')}">`
+dd('ps','ps',t('f_pos'),[['h',t('hor')],['v',t('ver')]].map(x=>ck('ps',x[0],x[1],F.ps.includes(x[0]))).join(''))
+dd('fm','fm',t('f_form'),P.map(p=>ck('fm',p.id,short(p),F.fm.includes(p.id))).join(''))
+dd('pu','pu',t('f_pur'),[...new Map(P.map(p=>PU(p.id)).filter(x=>x[0]).map(x=>[x[0],x])).values()].map(x=>ck('pu',x[0],x[I],F.pu.includes(x[0]))).join(''))
+dd('sz','sz',t('f_size'),S.map(v=>ck('sz',v,v,F.sz.includes(v))).join(''))
+(any?`<button class="fclr" data-fclr>${lang==='uk'?'Скинути':'Reset'}</button>`:'')};
catalog=()=>`<div class="wrap"><div class="ct1"><span class="lab">${t('clab')}</span><div class="ct1-r"><button class="tlink" style="margin:0" data-pdf>${ICO.doc}${v4('pdfB')}</button><button class="lab r" data-go="home">${t('tohome')}</button></div></div><h1 class="ch">${t('ch')}</h1><p class="cs">${t('cs')}</p><div class="ct-row">${prow()}</div><div class="cl2"><div class="fbar" id="fp">${fHtml()}</div><div id="res">${resHtml()}</div></div></div>`;
document.addEventListener('click',e=>{const a=e.target.closest('[data-acc]');if(a){const id=a.dataset.acc;Object.keys(F.o).forEach(k=>{if(k!==id)F.o[k]=false});return}
if(e.target.closest('[data-fclr]')){F.fm=[];F.ps=[];F.pu=[];F.sz=[];F.o={};updCat();return}
if(R.p==='catalog'&&Object.values(F.o).some(Boolean)&&!e.target.closest('.fdd')&&!e.target.closest('[data-f]')){F.o={};updCat()}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&R.p==='catalog'&&Object.values(F.o).some(Boolean)){F.o={};updCat()}});

function fit(){document.querySelectorAll('.mega').forEach(m=>{const w=m.parentNode;if(!w||!w.clientWidth)return;const cs=getComputedStyle(w),W=w.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);
m.style.fontSize='100px';m.style.marginLeft='0px';const t=m.firstChild;if(!t)return;const r=document.createRange();r.selectNodeContents(m);const rb=r.getBoundingClientRect(),mb=m.getBoundingClientRect();
const c=document.createElement('canvas').getContext('2d');c.font=getComputedStyle(m).fontWeight+' 100px '+getComputedStyle(m).fontFamily;const x=c.measureText(m.textContent);const ink=(x.actualBoundingBoxLeft+x.actualBoundingBoxRight)||rb.width;
const k=(W-2)/ink;m.style.fontSize=(100*k).toFixed(2)+'px';m.style.marginLeft=(x.actualBoundingBoxLeft*k).toFixed(2)+'px'})}
addEventListener('resize',fit);try{document.fonts.load('600 100px Unbounded').then(fit);document.fonts.ready.then(fit)}catch(e){}setTimeout(fit,600);setTimeout(fit,2000);
function footH(){const L=(p,l,a)=>`<button class="fl" data-go="${p}"${a!=null?` data-a="${a}"`:''}>${l}</button>`,I=lang==='uk'?0:1;
return `<div class="wrap fw"><div class="fa2 f-mot"><p class="fmot"><b>${t('motA')}</b> ${t('motB')}</p></div>
<div class="f-nav"><h4>[ ${t('fnav')} ]</h4><div class="f-ls">${L('home',t('home'))}${L('about',t('about'))}${L('catalog',v4('menuProd'),'all')}${L('oem',t('serv'))}${SRV.map((x,i)=>`<button class="fl fl2" data-go="soon" data-a="${i}">${x[lang]}</button>`).join('')}${L('faq',t('faq'))}${L('delivery',lang==='uk'?'Доставка та оплата':'Delivery & payment')}${L('blog',t('blog'))}${L('contacts',t('contacts'))}<button class="fl fl-pdf" data-go="pdf" data-a="desk">${lang==='uk'?'Каталог PDF':'PDF catalog'}</button></div></div>
<div class="f-prod"><h4>[ ${t('fprod')} ]</h4><div class="f-ls">${P.map(p=>L('product',short(p),p.id)).join('')}</div></div>
<div class="f-side"><div class="f-con"><h4>[ ${t('contacts')} ]</h4>${PH.map(x=>`<a class="fl" href="tel:${x.replace(/[^+\d]/g,'')}">${x}</a>`).join('')}<a class="fl" href="mailto:plastiza.sale@gmail.com">plastiza.sale@gmail.com</a></div><div class="f-msg"><h4 class="fh4">[ ${lang==='uk'?'Месенджери':'Messengers'} ]</h4>${['WhatsApp','Telegram','Viber'].map(n=>{const m=MSGR.find(x=>x[0]===n);return m?`<a class="fl" href="${m[1]}" target="_blank" rel="noopener">${n}</a>`:''}).join('')}</div><div class="f-hrs"><h4 class="fh4">[ ${t('hrs')} ]</h4>${HOURS.map(h=>`<p class="fad">${h[I]}</p>`).join('')}</div></div><div class="f-adr"><div class="fpills">${AD.map(x=>`<a class="fpill" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(x[0])}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg><span>${x[I].replace(/^\d{5},?\s*/,'')}</span></a>`).join('')}</div></div></div>
<div class="wrap fb"><span>© 2026 PLASTIZA</span><span>${t('llc')}</span></div><div class="wrap"><div class="mega" aria-hidden="true">PLASTIZA</div></div>`}
function render(){root.lang=lang==='uk'?'uk':'en';document.title='PLASTIZA';side();const p=R.p;$('#view').innerHTML=p==='home'?home():p==='catalog'?catalog():p==='product'?product():p==='about'?about():p==='contacts'?contactsP():p==='oem'?oemP():p==='pdf'?pdfPage():p==='faq'?faqPage():p==='delivery'?deliveryP():p==='blog'?blogPage():p==='post'?postPage():p==='404'?page404():soon();document.body.classList.toggle('pg-cat',R.p==='catalog');$('#foot').innerHTML=footH();fit();pellets(document.getElementById('pel'));heroTiles(document.getElementById('hxg'));if(R.p==='home'){countUp();mqInit();requestAnimationFrame(()=>heroFold(true));try{document.fonts.ready.then(()=>heroFold(true))}catch(e){}}if(R.p==='about')countUp();swHints();qsDrag();prowInit();bgSl();lfoInit();fitH1();typer(document.getElementById('hxh'));window.sbUpd&&sbUpd();
$('#fn').placeholder=t('name');$('#fp').placeholder=t('contact');$('#fq').placeholder=t('qty')+', '+t('pcs');$('#fs').textContent=t('send');$('#fc').textContent=t('cancel');$('#tcta').innerHTML=`<span class="cta-l">${t('quote')}</span><span class="cta-s">${lang==='uk'?'Розрахунок':'Quote'}</span>`}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){go(g.dataset.go,g.dataset.a);return}
const l=e.target.closest('[data-l]');if(l){lang=l.dataset.l;ls.s('lang',lang);render();return}
if(e.target.closest('#th')){const d=root.dataset.theme?root.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;root.dataset.theme=d?'light':'dark';ls.s('theme',root.dataset.theme);return}
const c=e.target.closest('#cols .sw');if(c){F.col=c.dataset.c;render();return}
const r=e.target.closest('[data-rfq]');if(r){subj=r.dataset.rfq;$('#dt').textContent=t('req')+': '+subj;$('#dlg').showModal();return}
if(e.target.closest('#burger')){menu(true);return}if(e.target.closest('#close')||e.target.id==='scrim')menu(false)});
document.addEventListener('keydown',e=>{if(e.key==='Escape')menu(false)});
function menu(o){document.body.classList.toggle('open',o);$('#burger').setAttribute('aria-expanded',String(o));if(o)setTimeout(()=>{const x=$('#close');x&&x.focus()},60)}
document.addEventListener('input',e=>{const i=e.target.id;if(i==='q'||i==='pf'||i==='pt'){F[i]=e.target.value;$('#res').innerHTML=resHtml()}});
document.addEventListener('change',e=>{if(e.target.id==='mf'){F.mat=e.target.value;render()}});
$('#fc').onclick=()=>$('#dlg').close();
$('#f').onsubmit=e=>{pushLead({name:$('#fn').value,contact:$('#fp').value,qty:$('#fq').value,subject:subj,source:leadSource('modal')});e.target.reset()};
function fromHash(){let h='';try{h=decodeURIComponent(location.hash.slice(1))}catch(e){}
if(h.startsWith('p-'))return {p:'product',a:h.slice(2)};if(h.startsWith('b-'))return {p:'post',a:h.slice(2)};if(h.startsWith('soon-'))return {p:'soon',a:h.slice(5)};if(h.startsWith('pdf-'))return {p:'pdf',a:h.slice(4)};
if(['catalog','about','oem','contacts','faq','blog','delivery'].includes(h))return {p:h,a:h==='catalog'?'all':undefined};if(!h||h==='home'||h==='top')return {p:'home'};return {p:'404'}}

/* ===== services v5: big-type accordion + service pages ===== */
const SV5={uk:{lab:'Послуги',h:'Послуги<br>виробництва',all:'Усі послуги',open:'Детальніше',close:'Згорнути',more:'Детальніше про послугу',calc:'Розрахувати вартість',about:'Про послугу',inc:'Що входить',how:'Як це відбувається',need:'Що потрібно для розрахунку',other:'Інша послуга',num:'напрями',
notes:['Власне виробництво повного циклу','Від прототипу до серійної партії','Пресформи під ваш виріб'],
s:[{meta:['Прототипи','/ серійні партії'],tl:'Відливаємо пластикові вироби під тиском за вашими кресленнями — від пробної партії до великих тиражів.',
steps:[['Технічне завдання','Надсилаєте креслення, 3D-модель або зразок виробу та потрібні обсяги.'],['Підбір матеріалу','Радимо вид пластику під умови експлуатації та навантаження.'],['Пресформа','Використовуємо вашу пресформу або виготовляємо нову під виріб.'],['Пробна партія','Відливаємо зразки, погоджуємо з вами геометрію та якість.'],['Серійне лиття','Випускаємо партію з контролем якості, пакуємо й відвантажуємо.']],
need:['Креслення або 3D-модель (STEP, IGES, DWG, PDF)','Зразок виробу — якщо креслень немає','Орієнтовний тираж і терміни','Вимоги до матеріалу, кольору та умов експлуатації']},
{meta:['Проєктування','/ виготовлення'],tl:'Проєктуємо та виготовляємо пресформи під ваш виріб — для лиття на вашому підприємстві або на наших потужностях.',
steps:[['Аналіз виробу','Вивчаємо креслення чи зразок, вимоги до точності й тиражу.'],['Проєктування','Розробляємо конструкцію пресформи та погоджуємо її з вами.'],['Виготовлення','Виготовляємо деталі пресформи та збираємо її.'],['Випробування','Робимо пробне лиття й доводимо пресформу до потрібних параметрів.'],['Передача або лиття','Передаємо пресформу вам або одразу відливаємо партію в нас.']],
need:['Креслення або 3D-модель виробу','Зразок — якщо документації немає','Плановий тираж виробів','Де буде працювати пресформа: у вас чи в нас']}]},
en:{lab:'Services',h:'Manufacturing<br>services',all:'All services',open:'Details',close:'Collapse',more:'More about this service',calc:'Request a quote',about:'About the service',inc:'What’s included',how:'How it works',need:'What we need for a quote',other:'Other service',num:'areas',
notes:['Full-cycle in-house production','From prototype to production run','Molds built for your part'],
s:[{meta:['Prototypes','/ production runs'],tl:'We injection-mold plastic parts to your drawings — from a trial batch to large volumes.',
steps:[['Brief','Send a drawing, 3D model or sample and the volumes you need.'],['Material','We recommend a plastic for the operating conditions and loads.'],['Mold','We use your mold or make a new one for the part.'],['Trial batch','We mold samples and agree geometry and quality with you.'],['Production','We run the batch with quality control, pack and ship it.']],
need:['Drawing or 3D model (STEP, IGES, DWG, PDF)','A sample — if there are no drawings','Approximate volume and timing','Material, colour and operating requirements']},
{meta:['Design','/ manufacturing'],tl:'We design and build molds for your part — to run at your plant or with us.',
steps:[['Part review','We study the drawing or sample, precision and volume requirements.'],['Design','We design the mold and agree it with you.'],['Manufacturing','We machine the mold parts and assemble it.'],['Trials','We run trial shots and fine-tune the mold.'],['Hand-over or molding','We hand the mold over or mold the batch with us.']],
need:['Drawing or 3D model of the part','A sample — if there is no documentation','Planned production volume','Where the mold will run: at your plant or ours']}]}};
const s5=()=>SV5[lang];
const s5Row=(i,open,ctx)=>{const v=s5(),d=v.s[i],S=SRV[i],inc=x('th')[i];return `<div class="s5-i${open?' open':''}"><button class="s5-s" aria-expanded="${!!open}" aria-controls="s5b-${ctx}-${i}" id="s5h-${ctx}-${i}"><span class="s5-n">${String(i+1).padStart(2,'0')}</span><span class="s5-t">${S[lang]}</span><span class="s5-m">${d.meta.join('<br>')}</span><i class="s5-a" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 7l10 10M17 9v8H9"/></svg></i></button>
<div class="s5-b" id="s5b-${ctx}-${i}" role="region" aria-labelledby="s5h-${ctx}-${i}" ${open?'':'inert'}><div class="s5-bi"><div class="s5-g">
<div class="s5-c1"><p class="s5-tl">${d.tl}</p><p class="s5-p">${S.d[lang]}</p></div>
<div class="s5-c2"><span class="s5-k">${v.inc}</span><ul class="s5-inc">${inc.map(r=>`<li><b>${r[0]}</b><span>${r[1]}</span></li>`).join('')}</ul></div>
<div class="s5-c3"><span class="s5-k">${v.how}</span><ol class="s5-st">${d.steps.map((s,k)=>`<li><i>${String(k+1).padStart(2,'0')}</i>${s[0]}</li>`).join('')}</ol></div>
</div><div class="s5-ft"><button class="btn" data-go="soon" data-a="${i}">${v.more} <span aria-hidden="true">→</span></button></div></div></div></div>`};
const s5List=(ctx,openFirst)=>{const u=lang==='uk';return `<div class="s5-l">${SRV.map((_,i)=>s5Row(i,false,ctx)).join('')}</div>`};
const secServ5=()=>{const v=s5(),sv=SVX[lang];return `<section class="s5"><div class="s5-top"><div>${secLab(v.lab)}<h2 class="s5-h">${v.h}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${SRV.length}</b>${v.num}</span><button class="tlink" data-go="oem">${v.all}<i aria-hidden="true">↗</i></button></div></div>
<div class="s5-notes">${v.notes.map(n=>`<span>→ ${n}</span>`).join('')}</div>${s5List('home',false)}
</section>`};
document.addEventListener('click',e=>{const b=e.target.closest('.s5-s');if(!b)return;const it=b.parentNode,o=!it.classList.contains('open');if(o)it.parentNode.querySelectorAll('.s5-i.open').forEach(x=>{if(x===it)return;x.classList.remove('open');x.querySelector('.s5-s').setAttribute('aria-expanded','false');x.querySelector('.s5-b').setAttribute('inert','')});it.classList.toggle('open',o);b.setAttribute('aria-expanded',o);const r=it.querySelector('.s5-b');o?r.removeAttribute('inert'):r.setAttribute('inert','')});
/* service page */
soon=function(){const i=SRV[R.a]?+R.a:0,v=s5(),d=v.s[i],S=SRV[i],inc=x('th')[i],o=(i+1)%SRV.length;document.title=S[lang]+' — PLASTIZA';
return `<div class="wrap x sp5"><div class="crumb" style="padding-top:28px"><button data-go="home">${t('home')}</button> / <button data-go="oem">${v.all}</button> / ${S[lang]}</div>
<header class="sp5-hd"><span class="sp5-n num">${String(i+1).padStart(2,'0')}</span><h1 class="sp5-h">${S[lang]}</h1><div class="sp5-r"><p>${d.tl}</p><div class="sp5-meta">${d.meta.join(' ')}</div><div class="sp5-b"><button class="btn" data-scroll-lf>${v.calc}</button><button class="btn g" data-go="oem">${v.all}</button></div></div></header>
<section class="sp5-s"><span class="s5-k">${v.about}</span><p class="sp5-lead">${S.d[lang]}</p></section>
<section class="sp5-s"><span class="s5-k">${v.inc}</span><ul class="sp5-inc">${inc.map((r,k)=>`<li><i>${String(k+1).padStart(2,'0')}</i><b>${r[0]}</b><span>${r[1]}</span></li>`).join('')}</ul></section>
<section class="sp6"><div class="s5-top"><div>${secLab(v.how)}<h2 class="s5-h">${lang==='uk'?'Етапи<br>роботи':'How we<br>work'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${d.steps.length}</b>${lang==='uk'?'етапів':'steps'}</span></div></div><ol class="sp6-st">${d.steps.map((s,k)=>`<li><span class="num">${String(k+1).padStart(2,'0')}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol></section>
<section class="sp6 sp6-n"><div class="sp6-nh">${secLab(v.need)}<p>${lang==='uk'?'Чим повніша інформація — тим точніший і швидший розрахунок.':'The more complete the info, the faster and more accurate the quote.'}</p></div><ul class="sp6-l">${d.need.map((n,k)=>`<li><i aria-hidden="true">✓</i><span>${n}</span></li>`).join('')}</ul></section>
${svcFaq(i)}<div id="sp5-lf">${leadForm('service-'+i)}</div>
${svcOther(i)}<div class="svc-seo">${secSeo('svc'+i)}</div></div>`};
document.addEventListener('click',e=>{if(!e.target.closest('[data-scroll-lf]'))return;const t=document.getElementById('sp5-lf');t&&t.scrollIntoView({behavior:'smooth',block:'start'})});
/* services overview page */
oemP=function(){const v=s5();return `<div class="wrap x"><div class="x-top"><p class="x-st">${x('srvSt')}</p></div><section class="s5 s5p"><div class="s5-notes">${v.notes.map(n=>`<span>→ ${n}</span>`).join('')}</div>${s5List('oem',true)}</section>${leadForm('services')}<div class="svc-seo">${secSeo('oem')}</div></div>`};

/* catalog density toggle: PC 3/4, tablet 2/3, mobile 1/2 */
var GD=(()=>{let d={pc:3,tab:2,mob:2};try{const v=JSON.parse(ls.g('gd')||'{}');['pc','tab','mob'].forEach(k=>{if(v[k])d[k]=v[k]})}catch(_){}return d})();
function gdAttr(){return `data-pc="${GD.pc}" data-tab="${GD.tab}" data-mob="${GD.mob}"`}
function gdIco(n){const w=20,g=2,c=(w-g*(n-1))/n;let r='';for(let i=0;i<n;i++)r+=`<rect x="${(c+g)*i+2}" y="4" width="${c}" height="${n>2?7:16}" rx="1.5"/>`+(n>2?`<rect x="${(c+g)*i+2}" y="13" width="${c}" height="7" rx="1.5"/>`:'');return `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${r}</svg>`}
function gdCtl(){const u=lang==='uk',g=(bp,a,b)=>`<div class="gd gd-${bp}" role="group" aria-label="${u?'Карток у ряд':'Cards per row'}">${[a,b].map(n=>`<button type="button" data-gd="${bp}:${n}" aria-pressed="${GD[bp]===n}" aria-label="${n} ${u?'в ряд':'per row'}" title="${n} ${u?'в ряд':'per row'}">${gdIco(n)}</button>`).join('')}</div>`;return g('pc',3,4)+g('tab',2,3)+g('mob',1,2)}
document.addEventListener('click',e=>{const b=e.target.closest('[data-gd]');if(!b)return;const[bp,n]=b.dataset.gd.split(':');GD[bp]=+n;ls.s('gd',JSON.stringify(GD));document.querySelectorAll('.pgrid[data-pc]').forEach(g=>g.dataset[bp]=n);document.querySelectorAll(`[data-gd^="${bp}:"]`).forEach(x=>x.setAttribute('aria-pressed',x===b||x.dataset.gd===b.dataset.gd))});

/* news ticker (admin-managed: text + link) */
const TICK=[
{uk:'Ціни напряму від виробника',en:'Prices direct from the manufacturer',go:'catalog',a:'all'},
{uk:'+380 (96) 682-14-63',en:'+380 (96) 682-14-63',href:'tel:+380966821463'},
{uk:'Лиття пластикових виробів на замовлення',en:'Custom plastic injection molding',go:'soon',a:'0'},
{uk:'Каталог PDF — увесь асортимент',en:'PDF catalog — full range',go:'pdf',a:'desk'},
{uk:'Пресформи під ваш виріб',en:'Molds built for your part',go:'soon',a:'1'},
{uk:'Офіси у Львові та Києві',en:'Offices in Lviv and Kyiv',go:'contacts'},
{uk:'Доставка по всій Україні та в Європу',en:'Delivery across Ukraine and to Europe',go:'delivery'},
{uk:'Корисні статті в блозі',en:'Useful articles in the blog',go:'blog'}];
function tickerH(){const L=lang==='uk'?'uk':'en',it=TICK.filter(x=>x.on!==false).map(x=>(w=>x.href?`<a class="tk-i" href="${x.href}">${w}</a>`:`<button class="tk-i" data-go="${x.go}"${x.a!=null?` data-a="${x.a}"`:''}>${w}</button>`)(`<span class="tk-w"><span>${x[L]}</span><span aria-hidden="true">${x[L]} ↗</span></span>`)).join('<i class="tk-s" aria-hidden="true">✦</i>')+'<i class="tk-s" aria-hidden="true">✦</i>';
return `<div class="tk" role="region" aria-label="${L==='uk'?'Новини та пропозиції':'News and offers'}"><div class="tk-t"><div class="tk-r">${it}</div><div class="tk-r" aria-hidden="true">${it.replace(/<(a|button) /g,'<$1 tabindex="-1" ')}</div></div></div>`}

/* service #3: construction site supply */
SRV.push({uk:'Комплектація будівельних об’єктів',en:'Construction site supply',s:{uk:'Постачаємо будівельні матеріали для об’єкта за одним замовленням.',en:'Building materials for your site in a single order.'},d:{uk:'Комплектуємо будівельні об’єкти всім необхідним — від першого етапу монолітних робіт до оздоблення. Власні фіксатори арматури та елементи опалубки відвантажуємо з нашого складу, а супутні будівельні матеріали — зі складу або напряму зі складів партнерів, без зайвих перевантажень. Ви отримуєте одного постачальника на весь об’єкт: одне замовлення, один пакет документів і графік поставок під етапи робіт.',en:'We supply construction sites with everything they need. Besides our own rebar spacers and formwork parts, we source and deliver related building materials to your specification or estimate. One order, one supplier and a delivery schedule matched to the work stages — instead of sourcing every item separately.'}});
IX.uk.th.push([['За вашою специфікацією','Підбираємо позиції під проєкт або кошторис'],['Власна продукція','Фіксатори арматури та елементи опалубки від виробника'],['Супутні матеріали','Будівельні матеріали від перевірених постачальників'],['Один постачальник','Одне замовлення й один пакет документів'],['Доставка на об’єкт','Графік поставок під етапи робіт']]);
IX.en.th.push([['To your specification','Items matched to the project or estimate'],['Own products','Rebar spacers and formwork parts from the manufacturer'],['Related materials','Building materials from trusted suppliers'],['One supplier','One order and one set of documents'],['Delivery to site','Delivery schedule matched to work stages']]);
SV5.uk.s.push({meta:['Будматеріали','/ для об’єкта'],tl:'Збираємо все потрібне для об’єкта в одне замовлення — від фіксаторів до супутніх будівельних матеріалів.',
steps:[['Специфікація','Надсилаєте перелік матеріалів, кошторис або проєкт.'],['Підбір і розрахунок','Підбираємо позиції, пропонуємо аналоги й рахуємо вартість.'],['Узгодження','Погоджуємо склад замовлення, ціни та графік поставок.'],['Комплектація','Збираємо замовлення: власна продукція та матеріали партнерів.'],['Доставка','Привозимо на об’єкт партіями під етапи робіт.']],
need:['Специфікація, кошторис або перелік матеріалів','Адреса об’єкта','Терміни та етапи робіт','Вимоги до марок і виробників, якщо є']});
SV5.en.s.push({meta:['Materials','/ for your site'],tl:'Everything your site needs in one order — from spacers to related building materials.',
steps:[['Specification','Send a materials list, estimate or project.'],['Selection & quote','We match items, suggest alternatives and price the order.'],['Agreement','We agree the contents, prices and delivery schedule.'],['Picking','We assemble the order: our products plus partner materials.'],['Delivery','We deliver to site in batches matched to work stages.']],
need:['Specification, estimate or materials list','Site address','Timing and work stages','Brand or grade requirements, if any']});
TICK.splice(5,0,{uk:'Комплектація будівельних об’єктів',en:'Construction site supply',go:'soon',a:'2'});
SV5.uk.num='напрями';

/* capacity section: TPA showcase (numbers editable) */
const CAP={n:12,kgh:45,hours:16,days:22,model:'Wittmann Battenfeld MacroPower 800',kn:8000,img:"/assets/img/sections/tpa-macropower-800.webp"};
function secCap(){const u=lang==='uk',m=CAP.kgh*CAP.hours*CAP.days/1000,tot=m*CAP.n,f=v=>v.toLocaleString(u?'uk-UA':'en-US',{maximumFractionDigits:1});
return `<section class="cap"><div class="s5-top cap-top"><div>${secLab(u?'Потужності':'Capacity')}<h2 class="s5-h">${u?'Потужності<br>виробництва':'Production<br>capacity'}</h2></div><div class="s5-tr"><p class="cap-k">${u?'Термопластавтомати<br>для лиття під тиском':'Injection molding<br>machines'}</p></div></div>
<div class="cap-st"><span class="cap-bg" aria-hidden="true">MACROPOWER</span><img src="${CAP.img}" alt="${u?'Термопластавтомат':'Injection molding machine'} ${CAP.model}" loading="lazy"><span class="cap-tag cap-t1">${u?'Вузол змикання':'Clamping unit'}<br><span style="text-transform:none">${f(CAP.kn)} kN</span></span><span class="cap-tag cap-t2">${u?'Робот-маніпулятор':'Take-out robot'}</span><span class="cap-tag cap-t3">${u?'Вузол упорскування':'Injection unit'}</span></div>
<div class="cap-g"><div class="cap-d"><span class="s5-k">${u?'Обладнання':'Equipment'}</span><h3 class="cap-n">${CAP.model}</h3>
<p>${u?'Термопластавтомат (ТПА) — машина для лиття пластмас під тиском. Гранули полімеру розплавляються в матеріальному циліндрі, шнек під тиском упорскує розплав у пресформу, виріб охолоджується і робот-маніпулятор знімає його з форми. Так ми випускаємо фіксатори арматури, елементи опалубки та вироби на замовлення — з однаковою геометрією в кожному циклі.':'An injection molding machine melts polymer pellets in the barrel and the screw injects the melt into the mold under pressure; the part cools and a robot removes it. This is how we produce rebar spacers, formwork parts and custom parts — with the same geometry every cycle.'}</p>
<dl class="cap-sp"><div><dt>${u?'Зусилля змикання':'Clamping force'}</dt><dd>${f(CAP.kn)} kN · 800 ${u?'т':'t'}</dd></div><div><dt>${u?'Привід':'Drive'}</dt><dd>${u?'Гідравлічний, двоплитний':'Hydraulic, two-platen'}</dd></div><div><dt>${u?'Автоматизація':'Automation'}</dt><dd>${u?'Робот-маніпулятор':'Take-out robot'}</dd></div></dl></div>
<div class="cap-r"><div class="cap-x"><span class="num">×${CAP.n}</span><small>${u?'машин у цеху':'machines on site'}</small></div>
<div class="cap-m"><div><b class="num">${f(m)}</b><span>${u?'т пластику / міс.<br>одна машина':'t of plastic / mo<br>per machine'}</span></div><div><b class="num">${f(tot)}</b><span>${u?'т пластику / міс.<br>увесь парк':'t of plastic / mo<br>whole fleet'}</span></div></div>
<p class="cap-f">${u?`Орієнтовний розрахунок: ${CAP.kgh} кг/год переробки, ${CAP.hours} год/добу, ${CAP.days} робочі дні. Фактичний обсяг залежить від виробу та циклу.`:`Estimate: ${CAP.kgh} kg/h, ${CAP.hours} h/day, ${CAP.days} working days. Actual output depends on the part and cycle.`}</p></div></div></section>`}

/* statement section with scroll-revealed words */
function stmtH(txt,lab,extra){const u=lang==='uk',w=(()=>{let b=false;return txt.split(/\s+/).map(x=>{let o=x;const st=o.startsWith('**');if(st){b=true;o=o.slice(2)}const en=o.includes('**');o=o.replace('**','');const r=`<span${b?' class="b"':''}>${o}</span>`;if(en)b=false;return r}).join(' ')})();
return `<section class="st6"><div class="st6-bar"><span class="st6-l">${lab}</span><span class="st6-c">${u?'Гортайте':'Scroll down'}<i aria-hidden="true">↓</i></span><span class="st6-r">PLASTIZA</span></div><p class="st6-t">${w}</p>${extra?`<div class="st6-x">${extra}</div>`:''}</section>`}
function st6Upd(){document.querySelectorAll('.st6-t').forEach(p=>{const r=p.getBoundingClientRect(),vh=innerHeight,k=Math.min(1,Math.max(0,(vh*.9-r.top)/(vh*.9-vh*.2+r.height*.75))),ws=p.children,n=Math.round(ws.length*(.1+.9*k));for(let i=0;i<ws.length;i++)ws[i].classList.toggle('on',i<n)})}
addEventListener('scroll',st6Upd,{passive:true});addEventListener('resize',st6Upd);
new MutationObserver(()=>requestAnimationFrame(st6Upd)).observe(document.getElementById('view'),{childList:true});

/* generic swipe dots for horizontal card rows (mobile) */
function slDots(){document.querySelectorAll('.av3-g').forEach(g=>{const d=g.nextElementSibling;if(!d||!d.classList.contains('sl-dots'))return;const cs=[...g.children];
const up=()=>{if(getComputedStyle(g).display!=='flex'||cs.length<2){d.innerHTML='';return}if(d.children.length!==cs.length)d.innerHTML=cs.map((_,i)=>`<i data-sl="${i}"></i>`).join('');
const w=cs[0].getBoundingClientRect().width+parseFloat(getComputedStyle(g).columnGap||0),k=Math.min(cs.length-1,Math.round(g.scrollLeft/w));[...d.children].forEach((x,i)=>x.classList.toggle('on',i===k))};
if(!g.dataset.sl){g.dataset.sl=1;g.addEventListener('scroll',()=>requestAnimationFrame(up),{passive:true});addEventListener('resize',up)}up()})}
new MutationObserver(()=>requestAnimationFrame(slDots)).observe(document.getElementById('view'),{childList:true});

const AVI=(()=>{const P=['M3 21V10l6 4V10l6 4V5h6v16z M7 17h2 M12 17h2 M17 17h2','M12 3l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9L3.2 14.8l1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z M8.5 12l2.4 2.4 4.6-4.8','M20 12l-8 8-8-8V4h8z M8 8h.01','M3 7l9-4 9 4v10l-9 4-9-4z M3 7l9 4 9-4 M12 11v10','M8 11l3-3 3 3 2-2 5 5-4 4-2-2 M3 13l5-5 3 3 M5 15l3 3 M8 13l3 3','M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c3 3.3 3 14.7 0 18 M12 3c-3 3.3-3 14.7 0 18','M5 19c0-8 5-14 15-14 0 10-6 15-14 15 M5 19l7-7','M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z M12 7v5 M9.5 9.5h5'];
return P.map(d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`)})();

/* reveal cards on scroll (both directions) */
function rvUpd(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const vh=innerHeight;document.querySelectorAll('.av3-c').forEach((c,i)=>{const r=c.getBoundingClientRect();c.style.transitionDelay=((i%4)*70)+'ms';
const vis=r.top<vh*.94&&r.bottom>vh*.06;c.classList.toggle('rv-in',vis);if(!vis){c.classList.toggle('rv-up',r.top>=vh*.94);c.classList.toggle('rv-dn',r.bottom<=vh*.06)}})}
addEventListener('scroll',()=>requestAnimationFrame(rvUpd),{passive:true});addEventListener('resize',rvUpd);
new MutationObserver(()=>requestAnimationFrame(rvUpd)).observe(document.getElementById('view'),{childList:true});

/* mobile: tab groups -> iOS-style menu */
function tabSel(){if(innerWidth>700)return;document.querySelectorAll('#view .tabs[role=tablist]').forEach(tl=>{if(tl.previousElementSibling&&tl.previousElementSibling.classList.contains('tsel'))return;
const bs=[...tl.querySelectorAll('.tab')],kind=bs[0]&&bs[0].dataset.tab;
if(kind==='fq'){const g=bs.find(b=>b.dataset.v==='gen');if(g&&g.getAttribute('aria-selected')!=='true')g.click()}
const w=document.createElement('div');w.className='tsel';const cur=()=>bs.find(b=>b.getAttribute('aria-selected')==='true')||bs[0];
const ck='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const draw=()=>{const c=cur();w.innerHTML=`<button type="button" class="tsel-b" aria-haspopup="listbox" aria-expanded="false"><span>${c.textContent}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l4-4 4 4M8 15l4 4 4-4"/></svg></button><div class="tsel-m" role="listbox">${bs.map(b=>`<button type="button" role="option" data-tv="${b.dataset.v}" aria-selected="${b===c}"><i>${ck}</i><span>${b.textContent}</span></button>`).join('')}</div>`};
draw();tl.parentNode.insertBefore(w,tl);
w.addEventListener('click',e=>{const o=e.target.closest('[data-tv]');const bt=w.querySelector('.tsel-b');
if(o){const b=bs.find(x=>x.dataset.v===o.dataset.tv);b&&b.click();draw();return}
if(e.target.closest('.tsel-b')){const op=!w.classList.contains('open');document.querySelectorAll('.tsel.open').forEach(x=>x.classList.remove('open'));w.classList.toggle('open',op);bt.setAttribute('aria-expanded',op)}})})}
document.addEventListener('click',e=>{if(!e.target.closest('.tsel'))document.querySelectorAll('.tsel.open').forEach(x=>{x.classList.remove('open');x.querySelector('.tsel-b').setAttribute('aria-expanded','false')})});
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.tsel.open').forEach(x=>x.classList.remove('open'))});
new MutationObserver(()=>requestAnimationFrame(tabSel)).observe(document.getElementById('view'),{childList:true});addEventListener('resize',tabSel);

/* ===== Delivery & payment page ===== */
const DLV={uk:{lab:'Доставка та оплата',h1a:'Доставимо так,',h1b:'як зручно саме вам',l:'Спосіб, терміни й вартість доставки погоджуємо під кожне замовлення — без шаблонних тарифів.',r:'Відвантажуємо по всій Україні та в країни Європи. Працюємо з поштовими операторами й приватними перевізниками.',
m:[['Поштові служби','Нова пошта'],['Поштові служби','Укрпошта'],['Перевізники','Приватні перевізники'],['Європа','Міжнародна доставка'],['Львів · Київ','Самовивіз']],
hi:['Ваш варіант','Обговоримо індивідуально','Обговорити'],
band:'Без шаблонів —<br>все по домовленості',bandS:'Підлаштовуємося під графік вашого об’єкта, обсяги та зручний для вас спосіб отримання.',
st:'**Гнучкі умови** для кожного клієнта: від однієї упаковки до регулярних поставок на об’єкт. Відвантажуємо **по Україні та в Європу** — тим перевізником, який зручний вам.',
tlab:'Як це працює',steps:[['Заявка','Залишаєте заявку або телефонуєте — уточнюємо позиції та обсяги.'],['Узгодження доставки','Обираємо перевізника, терміни й адресу: склад, відділення чи об’єкт.'],['Рахунок','Виставляємо рахунок — оплата безготівково на рахунок компанії.'],['Відвантаження','Пакуємо, передаємо перевізнику та надсилаємо дані для відстеження.']],
geo:[['Україна','Нова пошта, Укрпошта, приватні перевізники або доставка на об’єкт.'],['Європа','Міжнародна доставка в країни ЄС — умови та терміни погоджуємо окремо.'],['Самовивіз','Зі складів у Львові та Києві за попередньою домовленістю.']],
pay:'Оплата',payT:'Безготівковий розрахунок на рахунок ТОВ «Пластіза» за виставленим рахунком. Разом із товаром передаємо супровідні документи.',
q:'Залишилися питання щодо доставки?',qa:'Питання та відповіді'},
en:{lab:'Delivery & payment',h1a:'We deliver',h1b:'the way that suits you',l:'Method, timing and cost are agreed for each order — no one-size-fits-all rates.',r:'We ship across Ukraine and to European countries, with postal operators and private carriers.',
m:[['Postal','Nova Poshta'],['Postal','Ukrposhta'],['Carriers','Private carriers'],['Europe','International shipping'],['Lviv · Kyiv','Pickup']],
hi:['Your option','Let’s discuss it','Discuss'],
band:'No templates —<br>everything by agreement',bandS:'We adapt to your site schedule, volumes and the way you want to receive goods.',
st:'**Flexible terms** for every client: from a single pack to regular site deliveries. We ship **across Ukraine and to Europe** — with the carrier that suits you.',
tlab:'How it works',steps:[['Request','Send a request or call — we confirm items and volumes.'],['Delivery terms','We agree the carrier, timing and address: warehouse, branch or site.'],['Invoice','We issue an invoice — payment by bank transfer to the company account.'],['Shipping','We pack, hand over to the carrier and send tracking details.']],
geo:[['Ukraine','Nova Poshta, Ukrposhta, private carriers or delivery to site.'],['Europe','International delivery to EU countries — terms agreed separately.'],['Pickup','From our warehouses in Lviv and Kyiv by appointment.']],
pay:'Payment',payT:'Bank transfer to PLASTIZA LLC against an invoice. Accompanying documents are provided with the goods.',
q:'Questions about delivery?',qa:'Questions & answers'}};
function dvRoutes(){const W=1440,H=640,o=[720,330],T=[[90,70],[250,560],[420,40],[110,330],[1010,30],[1330,110],[1380,420],[1180,600],[560,620],[880,610],[1240,260],[230,190]];
const ps=T.map(([x,y],i)=>{const dx=x-o[0],dy=y-o[1],mx=(x+o[0])/2-dy*.18,my=(y+o[1])/2+dx*.18;return `M${o[0]} ${o[1]}Q${mx.toFixed(0)} ${my.toFixed(0)} ${x} ${y}`});
return `<svg class="dv-rt" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${ps.map(d=>`<path d="${d}"/>`).join('')}${T.map(([x,y])=>`<circle class="rt-d" cx="${x}" cy="${y}" r="2.6"/>`).join('')}${ps.map((d,i)=>i%2?'':`<circle class="rt-m" r="3" style="offset-path:path('${d}');--t:${5+i%3*1.5}s;--dl:${(i*.7).toFixed(1)}s"/>`).join('')}<circle class="rt-o" cx="${o[0]}" cy="${o[1]}" r="4.5"/><circle class="rt-p" cx="${o[0]}" cy="${o[1]}" r="4.5"/></svg>`}
function deliveryP(){const d=DLV[lang],u=lang==='uk';document.title=d.lab+' — PLASTIZA';
const tile=(m,i)=>m[1]===(u?'Самовивіз':'Pickup')?`<div class="dv-t dv-pk" tabindex="0"><span class="dv-orb" aria-hidden="true"><i></i></span><span class="dv-pill">${m[0]}</span><b>${m[1]}</b><span class="dv-pk-x"><span>${u?'Зустріч на складі з менеджером':'Meet a manager at the warehouse'}</span><button class="btn" type="button" data-pickup>${u?'Домовитись':'Arrange'}</button></span></div>`:`<div class="dv-t"><span class="dv-pill">${m[0]}</span><b>${m[1]}</b></div>`;
return `<div class="wrap x dv"><section class="dv-hero">${dvRoutes()}<h1 class="dv-h"><span>${d.h1a}</span> <span class="dv-g">${d.h1b}</span></h1><p class="dv-l">${d.l}</p><p class="dv-r">${d.r}</p></section>
<div class="dv-ts">${d.m.slice(0,1).map(tile).join('')}<div class="dv-t dv-hi"><span class="dv-orb" aria-hidden="true"><i></i></span><span class="dv-pill">${d.hi[0]}</span><b>${d.hi[1]}</b><button class="btn" data-go="contacts">${d.hi[2]}</button></div>${d.m.slice(1).map(tile).join('')}</div></div>
<section class="dv-band"><span class="dv-orb dv-orb2" aria-hidden="true"><i></i></span><div class="wrap dv-bw"><div><h2>${d.band}</h2><p>${d.bandS}</p></div><button class="dv-cta" type="button" data-to-lf>${u?'Обговорити поставку':'Discuss delivery'}<i aria-hidden="true">↗</i></button></div></section>
${euMap()}<div class="dv-dark"><div class="wrap">${stmtH(d.st,d.lab,'')}</div></div>
<div class="wrap x"><section class="dv-sec"><div class="s5-top"><div>${secLab(d.tlab)}<h2 class="s5-h">${u?'Від заявки<br>до відвантаження':'From request<br>to shipping'}</h2></div></div><ol class="dv-steps">${d.steps.map((s,i)=>`<li><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('')}</ol></section>
<section class="dv-sec dv-geo">${d.geo.map(g=>`<div><span class="s5-k">${g[0]}</span><p>${g[1]}</p></div>`).join('')}</section>
${payBlock()}
<section class="dv-sec dv-q"><p>${d.q}</p><button class="tlink" data-go="faq">${d.qa}<i aria-hidden="true">↗</i></button></section>
${leadForm('delivery')}</div>`}

/* Europe delivery map */
var EUMAP=null;function __euLoad(){if(window.__euL)return;window.__euL=1;var s=document.createElement('script');s.src='/js/eumap.js?v=202610281355';s.onload=function(){if(document.querySelector('.eum-ld')){var y=scrollY;render();scrollTo(0,y)}};document.head.appendChild(s)}
const CNAME={uk:{ALB:'Албанія',AND:'Андорра',AUT:'Австрія',BEL:'Бельгія',BIH:'Боснія і Герцеговина',BGR:'Болгарія',HRV:'Хорватія',CYP:'Кіпр',CZE:'Чехія',DNK:'Данія',EST:'Естонія',FIN:'Фінляндія',FRA:'Франція',DEU:'Німеччина',GRC:'Греція',HUN:'Угорщина',ISL:'Ісландія',IRL:'Ірландія',ITA:'Італія',KOS:'Косово',LVA:'Латвія',LIE:'Ліхтенштейн',LTU:'Литва',LUX:'Люксембург',MLT:'Мальта',MDA:'Молдова',MCO:'Монако',MNE:'Чорногорія',NLD:'Нідерланди',MKD:'Північна Македонія',NOR:'Норвегія',POL:'Польща',PRT:'Португалія',ROU:'Румунія',SMR:'Сан-Марино',SRB:'Сербія',SVK:'Словаччина',SVN:'Словенія',ESP:'Іспанія',SWE:'Швеція',CHE:'Швейцарія',UKR:'Україна',GBR:'Велика Британія',VAT:'Ватикан'},
en:{ALB:'Albania',AND:'Andorra',AUT:'Austria',BEL:'Belgium',BIH:'Bosnia and Herzegovina',BGR:'Bulgaria',HRV:'Croatia',CYP:'Cyprus',CZE:'Czechia',DNK:'Denmark',EST:'Estonia',FIN:'Finland',FRA:'France',DEU:'Germany',GRC:'Greece',HUN:'Hungary',ISL:'Iceland',IRL:'Ireland',ITA:'Italy',KOS:'Kosovo',LVA:'Latvia',LIE:'Liechtenstein',LTU:'Lithuania',LUX:'Luxembourg',MLT:'Malta',MDA:'Moldova',MCO:'Monaco',MNE:'Montenegro',NLD:'Netherlands',MKD:'North Macedonia',NOR:'Norway',POL:'Poland',PRT:'Portugal',ROU:'Romania',SMR:'San Marino',SRB:'Serbia',SVK:'Slovakia',SVN:'Slovenia',ESP:'Spain',SWE:'Sweden',CHE:'Switzerland',UKR:'Ukraine',GBR:'United Kingdom',VAT:'Vatican'}};
const NPC=['POL','MDA','LTU','CZE','ROU','DEU','SVK','LVA','EST','HUN','ITA','GBR','ESP','FRA','AUT','NLD'];
function euMap(){if(!EUMAP){__euLoad();return '<section class="eum eum-ld" style="min-height:120vh"></section>'}const u=lang==='uk',N=CNAME[lang],ua=EUMAP.cap.UKR;
const arcs=NPC.map(c=>{const [x,y]=EUMAP.cap[c],mx=(x+ua[0])/2,my=(y+ua[1])/2-Math.hypot(x-ua[0],y-ua[1])*.22;return `<path class="mp-arc" d="M${ua[0]} ${ua[1]}Q${mx} ${my} ${x} ${y}"/>`}).join('');
const dots=NPC.map(c=>`<circle class="mp-dot" cx="${EUMAP.cap[c][0]}" cy="${EUMAP.cap[c][1]}" r="3.2"/>`).join('');
const cs=EUMAP.c.map(([c,d])=>`<path class="eu-c ${c==='UKR'?'is-ua':NPC.includes(c)?'is-np':'is-up'}" data-c="${c}" d="${d}" tabindex="-1"><title>${N[c]||c}</title></path>`).join('');
return `<section class="eum" aria-label="${u?'Мапа доставки':'Delivery map'}"><div class="wrap"><div class="s5-top eum-top"><div>${secLab(u?'Географія':'Coverage')}<h2 class="s5-h">${u?'Україна<br>та Європа':'Ukraine<br>and Europe'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${EUMAP.c.length-1}</b>${u?'країн Європи':'European countries'}</span></div></div>
<div class="eum-g"><div class="eum-m"><svg viewBox="0 0 ${EUMAP.w} ${EUMAP.h}" role="img" aria-label="${u?'Країни доставки':'Delivery countries'}">${cs}<g class="mp-arcs" aria-hidden="true">${arcs}${dots}<circle class="mp-ua" cx="${ua[0]}" cy="${ua[1]}" r="5"/><circle class="mp-ua-p" cx="${ua[0]}" cy="${ua[1]}" r="5"/></g></svg><div class="eum-tip" role="status" aria-live="polite" hidden></div></div>
<div class="eum-s"><div class="eum-lg"><span><i class="lg-np"></i>${u?'Нова пошта + Укрпошта + перевізники':'Nova Post + Ukrposhta + carriers'}</span><span><i class="lg-up"></i>${u?'Укрпошта, приватні перевізники':'Ukrposhta, private carriers'}</span></div>
<span class="s5-k">${u?'Нова пошта в Європі':'Nova Post in Europe'}</span><ul class="eum-l">${NPC.map(c=>`<li><button type="button" data-hl="${c}"><i aria-hidden="true">✓</i>${N[c]}</button></li>`).join('')}</ul>
<p class="eum-n">${u?'Відправляємо й в інші країни Європи — Укрпоштою або приватним перевізником. Умови та терміни погоджуємо під замовлення.':'We also ship to other European countries via Ukrposhta or private carriers. Terms are agreed per order.'}</p></div></div></div></section>`}
function euTip(c,ev){const m=document.querySelector('.eum-m');if(!m)return;const t=m.querySelector('.eum-tip'),u=lang==='uk';document.querySelectorAll('.eu-c.on').forEach(x=>x.classList.remove('on'));
if(!c){t.hidden=true;return}const p=m.querySelector(`.eu-c[data-c="${c}"]`);p&&p.classList.add('on');
const np=NPC.includes(c),ua=c==='UKR';t.innerHTML=`<b>${CNAME[lang][c]}</b><span>${ua?(u?'Нова пошта, Укрпошта, перевізники, доставка на об’єкт':'Nova Post, Ukrposhta, carriers, delivery to site'):np?(u?'✓ Нова пошта · Укрпошта · перевізники':'✓ Nova Post · Ukrposhta · carriers'):(u?'✓ Укрпошта · приватні перевізники':'✓ Ukrposhta · private carriers')}</span>`;t.hidden=false;
const r=m.getBoundingClientRect(),b=p.getBoundingClientRect();let x=ev&&ev.clientX?ev.clientX-r.left:b.left+b.width/2-r.left,y=ev&&ev.clientY?ev.clientY-r.top:b.top+b.height/2-r.top;
t.style.left=Math.min(Math.max(x,90),r.width-90)+'px';t.style.top=Math.max(y-14,40)+'px'}
document.addEventListener('mousemove',e=>{const p=e.target.closest&&e.target.closest('.eu-c');if(p)euTip(p.dataset.c,e);else if(e.target.closest&&e.target.closest('.eum-m'))euTip(null)});
document.addEventListener('click',e=>{const p=e.target.closest('.eu-c');if(p){euTip(p.dataset.c,e);return}const h=e.target.closest('[data-hl]');if(h){euTip(h.dataset.hl);document.querySelectorAll('[data-hl]').forEach(x=>x.classList.toggle('on',x===h))}});

/* pickup appointment modal */
(function(){const d=document.createElement('dialog');d.id='pkm';d.className='fmod';document.body.appendChild(d)})();
document.addEventListener('click',e=>{const u=lang==='uk';if(e.target.closest('[data-pickup]')){const d=document.getElementById('pkm');
d.innerHTML=`<form class="pkf" novalidate><div class="fm-h"><h3>${u?'Самовивіз зі складу':'Warehouse pickup'}</h3><button type="button" class="ic x" data-pkx aria-label="Close">✕</button></div><p class="fm-s">${u?'Залиште контакти — менеджер погодить час і зустріне вас на складі.':'Leave your details — a manager will agree the time and meet you at the warehouse.'}</p>
<div class="pk-w" role="radiogroup" aria-label="${u?'Склад':'Warehouse'}">${AD.map((a,i)=>`<label><input type="radio" name="wh" value="${i}" ${i?'':'checked'}><span><b>${i?(u?'Київ':'Kyiv'):(u?'Львів':'Lviv')}</b><small>${a[u?0:1]}</small></span></label>`).join('')}</div>
<input name="name" placeholder="${u?'Ім’я':'Name'}" autocomplete="name"><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" autocomplete="tel"><input name="when" placeholder="${u?'Зручний день і час (необов’язково)':'Preferred day and time (optional)'}">
<button class="btn" type="submit">${u?'Домовитись про зустріч':'Arrange a visit'}</button><p class="lf-err" role="alert" hidden></p></form>`;d.showModal();return}
if(e.target.closest('[data-pkx]')||e.target.id==='pkm')document.getElementById('pkm').close()});
document.addEventListener('submit',e=>{const f=e.target.closest('.pkf');if(!f)return;e.preventDefault();const d=new FormData(f),er=f.querySelector('.lf-err'),u=lang==='uk';
if(!d.get('phone')){er.textContent=u?'Вкажіть номер телефону.':'Enter your phone number.';er.hidden=false;return}
pushLead({name:d.get('name'),phone:d.get('phone'),contact:'call',type:'pickup',comment:(u?'Склад: ':'Warehouse: ')+AD[+d.get('wh')][0]+(d.get('when')?' · '+d.get('when'):''),source:leadSource('delivery-pickup'),okText:t('qfok')});document.getElementById('pkm').close()});

document.addEventListener('click',e=>{if(!e.target.closest('[data-to-lf]'))return;const f=document.querySelector('#view .x-lf');if(f)f.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>{const i=f&&f.querySelector('input');i&&i.focus({preventScroll:true})},700)});
const cfBand=()=>{const u=lang==='uk';return `<div class="cfb"><form class="cbf s5-cf" novalidate><div class="s5-cft"><b>${u?'Обговоримо умови доставки та відповімо на ваші запитання':'Let’s discuss delivery terms and answer your questions'}</b><span>${u?'Залиште номер — менеджер передзвонить і проконсультує.':'Leave your number and a manager will call you back.'}</span></div><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${u?'Отримати консультацію':'Get a consultation'}</button><p class="lf-err" role="alert" hidden></p></form></div>`};

/* product page: related slider, supply band, per-variant SEO */
function relRow(p,vi){const u=lang==='uk',out=[];p.v.forEach((v,i)=>{if(i!==vi)out.push({p,i,v})});
P.filter(x=>x.id!==p.id).sort((a,b)=>(b.cat===p.cat)-(a.cat===p.cat)).forEach(x=>{const i=x.v.indexOf(x.v.reduce((a,b)=>+b[1]<+a[1]?b:a));out.push({p:x,i,v:x.v[i]})});
return `<section class="rl"><div class="s5-top rl-top"><div>${secLab(u?'Каталог':'Catalog')}<h2 class="s5-h">${u?'Схожі<br>товари':'Related<br>products'}</h2></div><div class="s5-tr"><div class="rl-nav"><button type="button" class="rl-a" data-rl="-1" aria-label="${u?'Назад':'Back'}">←</button><button type="button" class="rl-a" data-rl="1" aria-label="${u?'Далі':'Next'}">→</button></div></div></div>
<div class="rl-s">${out.slice(0,12).map(pcV).join('')}</div><div class="sl-dots rl-dots" aria-hidden="true"></div></section>`}
document.addEventListener('click',e=>{const b=e.target.closest('[data-rl]');if(!b)return;const s=b.closest('.rl').querySelector('.rl-s'),c=s.firstElementChild;s.scrollBy({left:+b.dataset.rl*(c?c.getBoundingClientRect().width+8:300)*2,behavior:'smooth'})});
function rlUpd(){document.querySelectorAll('.rl').forEach(r=>{const s=r.querySelector('.rl-s'),[pv,nx]=r.querySelectorAll('.rl-a');if(!s||!pv)return;const d=r.querySelector('.rl-dots'),f=()=>{pv.disabled=s.scrollLeft<4;nx.disabled=s.scrollLeft+s.clientWidth>=s.scrollWidth-4;if(d){const c=s.firstElementChild,w=c?c.getBoundingClientRect().width+8:1,vis=Math.max(1,Math.round(s.clientWidth/w)),n=Math.max(1,s.children.length-vis+1);if(d.children.length!==n)d.innerHTML=Array.from({length:n},()=>'<i></i>').join('');const k=Math.min(n-1,Math.round(s.scrollLeft/w));[...d.children].forEach((x,i)=>x.classList.toggle('on',i===k))}};if(!s.dataset.on){s.dataset.on=1;s.addEventListener('scroll',()=>requestAnimationFrame(f),{passive:true})}f()})}
new MutationObserver(()=>requestAnimationFrame(rlUpd)).observe(document.getElementById('view'),{childList:true});addEventListener('resize',rlUpd);
function supplyBand(){const u=lang==='uk';return `<div class="spb"><div class="spb-ph" aria-hidden="true">${SPB_IMG}</div><span class="dv-orb dv-orb2" aria-hidden="true"><i></i></span><div class="wrap spb-g"><div>${secLab(u?'Комплексне постачання':'Complete supply')}<h2 class="spb-h">${u?'Потрібно більше,<br>ніж фіксатори?':'Need more<br>than spacers?'}</h2><p>${u?'Укомплектуємо ваш об’єкт: фіксатори, елементи опалубки та супутні будівельні матеріали — одним замовленням і одним рахунком.':'We supply your whole site: spacers, formwork parts and related building materials — one order, one invoice.'}</p><button class="tlink" data-go="soon" data-a="2">${u?'Про комплектацію об’єктів':'About site supply'}<i aria-hidden="true">↗</i></button></div>
<div class="spb-r"><ul class="spb-l">${(u?['Один постачальник','Один рахунок','Ціни виробника','Доставка на об’єкт','Графік під етапи робіт','Звітні документи']:['One supplier','One invoice','Manufacturer prices','Delivery to site','Schedule by work stages','Reporting documents']).map(x=>`<li><i aria-hidden="true">✓</i>${x}</li>`).join('')}</ul><form class="cbf spb-f" novalidate><input name="phone" type="tel" required placeholder="+380 (00) 000-00-00" aria-label="${lf('ph')}" autocomplete="tel"><button class="btn" type="submit">${u?'Обговорити постачання':'Discuss supply'}</button><p class="lf-err" role="alert" hidden></p></form></div></div></div>`}
function prodSeoKey(p,vi){const k='p'+p.id+'-'+vi;if(SEOX[k])return k;const mk=L=>{const u=L==='uk',I=u?0:1,v=p.v[vi],nm=p.n[L],szs=p.v.map(x=>Array.isArray(x[0])?x[0][I]:x[0]),s0=szs[vi],cat=CATS.find(c=>c.id===p.cat)[L],un=p.u==='m'?(u?'м':'m'):(u?'шт':'pc');
return {lab:u?'Про товар':'About the product',h:u?`${nm} ${s0} — купити від виробника`:`${nm} ${s0} — buy from the manufacturer`,
lead:u?`${nm} ${s0} виробництва ТОВ «Пластіза». ${p.d.uk} Відвантажуємо по Україні та в країни Європи, ціна — напряму від виробника.`:`${nm} ${s0} made by PLASTIZA. ${p.d.en} We ship across Ukraine and to Europe at manufacturer prices.`,
facts:[[String(v[1]).replace('.',u?',':'.'),u?`грн/${un} — ціна від`:`UAH/${un} — price from`,u?'від ':'from '],[String(v[2]||'—'),u?`${un} в упаковці`:`${un} per pack`,''],[String(p.v.length),u?(p.v.length>1?'розмірів у лінійці':'розмір у лінійці'):'sizes in the range','']],
parts:[[u?'Призначення':'Purpose',p.d[L]],[u?'Розміри та вибір':'Sizes and choice',u?`У лінійці «${nm}»: ${szs.join(', ')}. Розмір обирають за потрібною товщиною захисного шару бетону та діаметром арматури. Не впевнені — менеджер підбере під ваш проєкт.`:`The “${nm}” range: ${szs.join(', ')}. Pick the size by the required concrete cover and rebar diameter — or ask a manager to match it to your project.`],
[u?'Ціна та фасування':'Price and packaging',u?`Ціна ${nm} ${s0} — від ${String(v[1]).replace('.',',')} грн/${un}, фасування — ${v[2]||'—'} ${un} в упаковці. Для великих обсягів і регулярних поставок погоджуємо індивідуальні умови.`:`Price from ${v[1]} UAH/${un}, ${v[2]||'—'} ${un} per pack. Individual terms for large volumes and regular supply.`],
[u?'Доставка':'Delivery',u?'Відправляємо Новою поштою, Укрпоштою або приватним перевізником — по Україні та в країни Європи. Можливий самовивіз зі складів у Львові та Києві.':'We ship via Nova Post, Ukrposhta or private carriers across Ukraine and to Europe. Pickup from Lviv and Kyiv warehouses.']],
keys:[[cat,'catalog',p.cat],[u?'Усі фіксатори':'All products','catalog','all'],[u?'Доставка та оплата':'Delivery & payment','delivery',''],[u?'Комплектація об’єктів':'Site supply','soon','2']]}};
SEOX[k]={uk:mk('uk'),en:mk('en')};return k}
const SPB_IMG='<img src="/assets/img/sections/construction-site.webp" alt="">';

/* service pages: two other services + per-service FAQ */
const SVQ=[{uk:[['Які пластики ви використовуєте для лиття?','Працюємо з поліпропіленом, поліетиленом, ABS та іншими термопластами. Матеріал підбираємо під навантаження, температуру й умови експлуатації виробу.'],['Чи можна замовити невелику партію?','Так. Можемо відлити пробну партію для перевірки виробу, а потім перейти до серійного виробництва потрібного обсягу.'],['Що робити, якщо в мене немає креслення?','Надішліть зразок або фото з розмірами — ми підготуємо 3D-модель і погодимо її з вами перед виготовленням пресформи.'],['Скільки триває виготовлення партії?','Термін залежить від складності виробу, наявності пресформи та обсягу. Точні терміни називаємо разом із розрахунком вартості.'],['Чи можна використати мою пресформу?','Так, якщо вона сумісна з нашим обладнанням. Перед запуском перевіряємо пресформу й робимо пробне лиття.']],
en:[['Which plastics do you mold?','PP, PE, ABS and other thermoplastics — chosen for load, temperature and operating conditions.'],['Can I order a small batch?','Yes. We can mold a trial batch first and then move to series production.'],['I have no drawing — what now?','Send a sample or photos with dimensions; we’ll prepare a 3D model for your approval.'],['How long does a batch take?','It depends on complexity, mold availability and volume. We state timing with the quote.'],['Can you use my mold?','Yes, if it fits our machines. We check it and run trial shots first.']]},
{uk:[['Скільки коштує виготовлення пресформи?','Вартість залежить від розмірів і складності виробу, кількості гнізд і вимог до точності. Розраховуємо індивідуально за кресленням або зразком.'],['Скільки часу займає виготовлення?','Від проєктування до випробувань — зазвичай кілька тижнів. Точний термін погоджуємо після аналізу виробу.'],['Чи можна відлити партію одразу у вас?','Так. Після випробувань можемо одразу запустити серійне лиття на нашому обладнанні.'],['Кому належить пресформа після виготовлення?','Пресформа, оплачена замовником, належить йому: можете забрати її або зберігати й використовувати в нас.'],['Чи робите ремонт і доопрацювання пресформ?','Так, оцінюємо стан пресформи й пропонуємо ремонт або доопрацювання під нові вимоги.']],
en:[['How much does a mold cost?','It depends on part size and complexity, cavities and precision. We quote from a drawing or sample.'],['How long does it take?','Usually several weeks from design to trials; exact timing after part review.'],['Can you mold the batch too?','Yes — after trials we can start series molding on our machines.'],['Who owns the mold?','The client who paid for it — take it away or keep it with us.'],['Do you repair or modify molds?','Yes, we assess the mold and propose repair or modification.']]},
{uk:[['Які матеріали ви можете поставити?','Власні фіксатори арматури та елементи опалубки, а також супутні будівельні матеріали за вашою специфікацією — підбираємо через перевірених постачальників.'],['Чи є мінімальна сума замовлення?','Умови залежать від складу та обсягу. Надішліть специфікацію — запропонуємо оптимальний варіант.'],['Чи можна розбити поставку на етапи?','Так. Погоджуємо графік і привозимо матеріали партіями під етапи будівництва.'],['Як відбувається оплата?','Безготівково на рахунок компанії за виставленим рахунком; передаємо всі супровідні документи.'],['Ви доставляєте на об’єкт?','Так, по всій Україні — власною логістикою партнерів, перевізниками або поштою, як вам зручніше.']],
en:[['What materials can you supply?','Our spacers and formwork parts plus related building materials to your specification via trusted suppliers.'],['Is there a minimum order?','It depends on contents and volume — send your list and we’ll propose the best option.'],['Can delivery be split into stages?','Yes, we agree a schedule and deliver in batches by work stage.'],['How do I pay?','Bank transfer against an invoice; full paperwork is provided.'],['Do you deliver to site?','Yes, across Ukraine by carriers, partners or post — whichever suits you.']]}];
function svcFaq(i){const u=lang==='uk',q=(SVQ[i]||SVQ[0])[lang];
const ld={"@context":"https://schema.org","@type":"FAQPage","mainEntity":q.map(([a,b])=>({"@type":"Question","name":a,"acceptedAnswer":{"@type":"Answer","text":b}}))};
return `<section class="sp6 sp6-f"><div class="s5-top"><div>${secLab(u?'Питання':'FAQ')}<h2 class="s5-h">${u?'Питання<br>про послугу':'Questions<br>about the service'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${q.length}</b>${u?'питань':'questions'}</span><button class="tlink" data-go="faq">${u?'Усі питання':'All questions'}<i aria-hidden="true">↗</i></button></div></div>
<div class="fq">${q.map(([a,b],k)=>`<details class="fq-i" name="svq"><summary><span>${a}</span><small class="fq-k">${SRV[i][lang]}</small><b class="s5-a" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 7l10 10M17 9v8H9"/></svg></b></summary><p>${b}</p></details>`).join('')}</div><script type="application/ld+json">${JSON.stringify(ld).replace(/</g,'\\u003c')}<\/script></section>`}
function svcOther(i){const u=lang==='uk',os=SRV.map((_,k)=>k).filter(k=>k!==i),arr='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M7 17L17 7M9 7h8v8"/></svg>';
return `<section class="sp6 sp6-o"><div class="s5-top"><div>${secLab(u?'Інші послуги':'Other services')}<h2 class="s5-h">${u?'Також<br>пропонуємо':'We also<br>offer'}</h2></div><div class="s5-tr"><button class="tlink" data-go="oem">${u?'Усі послуги':'All services'}<i aria-hidden="true">↗</i></button></div></div>
<div class="sp6-og">${os.map(k=>`<button class="sp6-oc" data-go="soon" data-a="${k}"><span class="s5-n">${String(k+1).padStart(2,'0')}</span><span class="sp6-ot">${SRV[k][lang]}</span><span class="sp6-od">${SRV[k].s[lang]}</span><span class="sp6-om">${(SV5[lang].s[k]||{meta:['','']}).meta.join(' ')}</span><i class="s5-a" aria-hidden="true">${arr}</i></button>`).join('')}</div></section>`}

/* SEO for services */
Object.assign(SEOX,{
svc0:{uk:{lab:'Про послугу',h:'Лиття пластикових виробів під тиском на замовлення',lead:'ТОВ «Пластіза» виконує лиття пластикових виробів під тиском за кресленнями, 3D-моделями або зразками замовника — від пробної партії до великих серійних тиражів на власному виробництві у Львові.',
facts:[['800','т — зусилля змикання ТПА',''],['1','пробна партія перед серією',''],['PP · PE · ABS','термопласти під ваше завдання','']],
parts:[['Що ми відливаємо','Будівельні фіксатори, елементи опалубки, технічні деталі, корпуси, заглушки та інші вироби з термопластів — за вашими кресленнями або зразком.'],['Як підбираємо матеріал','Пластик обираємо під навантаження, температуру, хімічний вплив і вимоги до вигляду виробу. Радимо оптимальний варіант за ціною і характеристиками.'],['Пресформа','Використовуємо вашу пресформу або проєктуємо й виготовляємо нову — і одразу запускаємо лиття на нашому обладнанні.'],['Якість і терміни','Пробна партія, погодження геометрії, контроль якості на кожному етапі. Терміни називаємо разом із розрахунком.']],
keys:[['Виготовлення пресформ','soon','1'],['Комплектація об’єктів','soon','2'],['Усі послуги','oem',''],['Доставка та оплата','delivery','']]},
en:{lab:'About the service',h:'Custom plastic injection molding',lead:'PLASTIZA injection-molds plastic parts to your drawings, 3D models or samples — from a trial batch to large production runs at our own plant in Lviv.',
facts:[['800','t clamping force',''],['1','trial batch before series',''],['PP · PE · ABS','thermoplastics for your task','']],
parts:[['What we mold','Construction spacers, formwork parts, technical parts, housings, plugs and more — to your drawings or sample.'],['Material choice','We pick the plastic for load, temperature, chemicals and appearance.'],['Mold','We use your mold or design and build a new one, then mold right away.'],['Quality and timing','Trial batch, geometry approval and QC at each stage; timing comes with the quote.']],
keys:[['Mold making','soon','1'],['Site supply','soon','2'],['All services','oem',''],['Delivery & payment','delivery','']]}},
svc1:{uk:{lab:'Про послугу',h:'Виготовлення пресформ для лиття пластмас під тиском',lead:'Проєктуємо та виготовляємо пресформи для лиття пластикових виробів: під ваш виріб, тираж і обладнання. Пресформу можна забрати на власне підприємство або одразу запустити лиття в нас.',
facts:[['1–N','гнізд — під ваш тираж',''],['3D','модель і погодження перед виготовленням',''],['100%','пробне лиття перед здачею','']],
parts:[['Проєктування','Аналізуємо креслення чи зразок, розробляємо конструкцію пресформи й погоджуємо її з вами до початку виготовлення.'],['Виготовлення й випробування','Виготовляємо деталі, збираємо пресформу, робимо пробне лиття й доводимо її до потрібних параметрів.'],['Ваше підприємство чи наше','Передаємо пресформу вам або зберігаємо й використовуємо для серійного лиття на нашому обладнанні.'],['Ремонт і доопрацювання','Відновлюємо зношені пресформи та доопрацьовуємо їх під нові вимоги до виробу.']],
keys:[['Лиття пластикових виробів','soon','0'],['Комплектація об’єктів','soon','2'],['Усі послуги','oem',''],['Питання та відповіді','faq','']]},
en:{lab:'About the service',h:'Injection mold making',lead:'We design and build injection molds for your part, volume and equipment — take the mold to your plant or start molding with us right away.',
facts:[['1–N','cavities for your volume',''],['3D','model approved before build',''],['100%','trial shots before hand-over','']],
parts:[['Design','We review the drawing or sample and agree the mold design with you.'],['Build and trials','We machine and assemble the mold, run trials and fine-tune it.'],['Your plant or ours','Take the mold or keep it with us for series molding.'],['Repair and rework','We restore worn molds and modify them for new requirements.']],
keys:[['Injection molding','soon','0'],['Site supply','soon','2'],['All services','oem',''],['FAQ','faq','']]}},
svc2:{uk:{lab:'Про послугу',h:'Комплектація будівельних об’єктів матеріалами',lead:'Комплектуємо будівельні об’єкти фіксаторами арматури, елементами опалубки та супутніми будівельними матеріалами — за вашою специфікацією, одним замовленням і з доставкою під етапи робіт.',
facts:[['1','постачальник замість десятка',''],['1','рахунок і пакет документів',''],['UA + EU','доставка по Україні та в Європу','']],
parts:[['Власна продукція','Фіксатори арматури та елементи опалубки постачаємо напряму з власного виробництва — без посередників і націнок.'],['Супутні матеріали','Підбираємо інші будівельні матеріали за вашою специфікацією чи кошторисом у перевірених постачальників.'],['Графік поставок','Погоджуємо графік і привозимо матеріали партіями під етапи будівництва — без простоїв і зайвого складування.'],['Документи й оплата','Безготівковий розрахунок за рахунком і повний пакет супровідних документів.']],
keys:[['Фіксатори арматури','catalog','rebar'],['Доставка та оплата','delivery',''],['Лиття пластикових виробів','soon','0'],['Усі послуги','oem','']]},
en:{lab:'About the service',h:'Construction site supply',lead:'We supply sites with rebar spacers, formwork parts and related building materials — to your specification, in one order, delivered by work stage.',
facts:[['1','supplier instead of many',''],['1','invoice and document set',''],['UA + EU','delivery in Ukraine and Europe','']],
parts:[['Own products','Spacers and formwork parts direct from our plant.'],['Related materials','Other materials sourced to your specification from trusted suppliers.'],['Delivery schedule','Batches delivered by construction stage.'],['Paperwork and payment','Bank transfer against invoice with full documents.']],
keys:[['Rebar spacers','catalog','rebar'],['Delivery & payment','delivery',''],['Injection molding','soon','0'],['All services','oem','']]}},
oem:{uk:{lab:'Послуги',h:'Послуги виробництва: лиття, пресформи, комплектація об’єктів',lead:'ТОВ «Пластіза» — це не лише каталог фіксаторів. Ми відливаємо пластикові вироби на замовлення, виготовляємо пресформи та комплектуємо будівельні об’єкти — усе на базі власного виробництва.',
facts:[['3','напрями послуг',''],['12','років досвіду',''],['450','задоволених клієнтів','+']],
parts:[['Лиття пластикових виробів','Від пробної партії до серійних тиражів за вашими кресленнями чи зразком.'],['Виготовлення пресформ','Проєктування, виготовлення, випробування та ремонт пресформ під ваш виріб.'],['Комплектація будівельних об’єктів','Фіксатори, елементи опалубки й супутні матеріали одним замовленням з доставкою під етапи робіт.'],['Як замовити','Залиште заявку з описом завдання й файлами — менеджер підготує розрахунок і запропонує варіанти.']],
keys:[['Лиття пластикових виробів','soon','0'],['Виготовлення пресформ','soon','1'],['Комплектація об’єктів','soon','2'],['Каталог продукції','catalog','all']]},
en:{lab:'Services',h:'Manufacturing services: molding, molds, site supply',lead:'PLASTIZA is more than a spacer catalog: we mold plastic parts to order, build molds and supply construction sites — all from our own plant.',
facts:[['3','service areas',''],['12','years of experience',''],['450','happy clients','+']],
parts:[['Injection molding','From trial batch to series, to your drawings or sample.'],['Mold making','Design, build, trials and repair of molds.'],['Site supply','Spacers, formwork parts and related materials in one order.'],['How to order','Send a request with files — we’ll prepare a quote.']],
keys:[['Injection molding','soon','0'],['Mold making','soon','1'],['Site supply','soon','2'],['Product catalog','catalog','all']]}}});

/* FAQ section slides over the previous section */
function ovSetup(){document.querySelectorAll('#view>.bd').forEach(b=>{if(b.parentElement.classList.contains('ov-wrap')||!b.querySelector(':scope .fq')||b.classList.contains('ov-top'))return;const prev=b.previousElementSibling;if(!prev)return;b.classList.add('ov-top');prev.classList.add('ov-under');const w=document.createElement('div');w.className='ov-wrap';prev.before(w);w.append(prev,b)});ovPos()}
function ovPos(){document.querySelectorAll('.ov-under').forEach(u=>{u.style.top=Math.min(0,innerHeight-u.offsetHeight)+'px'});ovFx()}
function ovFx(){document.querySelectorAll('.ov-top').forEach(t=>{const u=t.previousElementSibling;if(!u)return;const r=t.getBoundingClientRect(),ub=u.getBoundingClientRect().bottom,k=Math.min(1,Math.max(0,(ub-r.top)/innerHeight));u.style.setProperty('--ov',k.toFixed(3));u.classList.toggle('ov-on',k>0)})}
addEventListener('scroll',()=>requestAnimationFrame(ovFx),{passive:true});addEventListener('resize',ovPos);
new MutationObserver(()=>requestAnimationFrame(ovSetup)).observe(document.getElementById('view'),{childList:true});

function prIntro(){const u=lang==='uk',ar='<i aria-hidden="true">↗</i>';
const tiles=u?[['Повний цикл','Пресформа → партія'],['ТПА','до 800 т змикання'],['Львів','власне виробництво'],['UA + EU','доставка партій']]:[['Full cycle','Mold → batch'],['Machines','up to 800 t'],['Lviv','own plant'],['UA + EU','batch delivery']];
return `<div class="wrap"><section class="pri"><div class="pri-l">${secLab(u?'Виробництво':'Production')}<p class="pri-t">${x('aboutSt')}</p>
<div class="hx-chips pri-ch"><button class="hx-chip" data-go="soon" data-a="0">${SRV[0][lang]}${ar}</button><button class="hx-chip" data-go="soon" data-a="1">${SRV[1][lang]}${ar}</button><button class="hx-chip" data-go="soon" data-a="2">${u?'Комплектація об’єктів':'Site supply'}${ar}</button><button class="hx-chip" data-go="catalog" data-a="all">${u?'Каталог продукції':'Product catalog'}${ar}</button><button class="hx-chip pri-pdf" data-pdf>${u?'PDF-каталог':'PDF catalog'}<i aria-hidden="true">↓</i></button></div>
</div>
<div class="pri-r">${tiles.map((t,i)=>`<div class="pri-c${i===0?' pri-hi':''}">${i===0?'<span class="dv-orb" aria-hidden="true"><i></i></span>':''}<span>${t[0]}</span><b>${t[1]}</b></div>`).join('')}</div></section></div>`}

leadForm=ctx=>{const u=lang==='uk',ST=u?[['Заявка','Опишіть, що потрібно: позиції з каталогу, виріб за кресленням, пресформу чи комплектацію об’єкта.'],['Розрахунок','Менеджер уточнює деталі й рахує вартість, терміни та доставку.'],['Пропозиція','Надсилаємо комерційну пропозицію зручним для вас способом.'],['Виконання','Після погодження відвантажуємо зі складу або запускаємо у виробництво.']]:[['Request','Tell us what you need: catalog items, a part to drawing, a mold or site supply.'],['Estimate','A manager clarifies details and prices cost, lead time and delivery.'],['Offer','We send a quote by your preferred channel.'],['Delivery','Once approved, we ship from stock or start production.']];
const ms=[['WhatsApp','#25D366'],['Telegram','#229ED9'],['Viber','#7360F2']].map(([n,c])=>{const m=MSGR.find(x=>x[0]===n);return `<a class="dc-m" href="${m[1]}" target="_blank" rel="noopener" style="--mc:${c}">${m[2]}<span>${n}</span></a>`}).join('');
const cp=u?'Копіювати':'Copy',em='plastiza.sale@gmail.com';
return `<div class="x-s x-lf lf3"><div class="s5-top"><div>${secLab(bx('lfLab'))}<h2 class="s5-h">${u?'Розрахуємо<br>ваше замовлення':'Get a quote<br>for your order'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${ST.length}</b>${u?'кроки':'steps'}</span></div></div>
<div class="lf3-g"><div class="lf3-l"><p class="lf3-p">${bx('lfP')}<button type="button" class="lf3-i" data-lf-steps aria-label="${u?'Як ми працюємо з заявкою':'How we handle your request'}" title="${u?'Етапи':'Steps'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg></button></p><ol class="lf3-row">${ST.map((x,k)=>`<li tabindex="0" aria-describedby="lfr${k}"><span class="num">${String(k+1).padStart(2,'0')}</span><b>${x[0]}</b><svg class="lf3-rq" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg><span class="lf3-pl" role="tooltip" id="lfr${k}">${x[1]}</span></li>`).join('')}</ol>
<ol class="lf3-st">${ST.map((x,i)=>`<li><span class="num">${String(i+1).padStart(2,'0')}</span><b>${x[0]}</b><p>${x[1]}</p></li>`).join('')}</ol>
<div class="lf3-cw"><p class="lf3-or"><span>${u?'або зв’яжіться напряму':'or contact us directly'}</span></p><dl class="lf3-c"><div><dt>${u?'Месенджери':'Messengers'}</dt><dd class="dc-ms">${ms}</dd></div>
<div><dt>Email</dt><dd><a href="mailto:${em}">${em}</a><button type="button" class="dc-cp" data-cp="${em}" aria-label="${cp} ${em}" title="${cp}">${window.ICO_CP||'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="12" height="12" rx="3"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>'}</button></dd></div>
<div><dt>${u?'Телефони':'Phones'}</dt><dd class="lf3-ph">${PH.map(p=>`<a href="tel:${p.replace(/[^+\d]/g,'')}">${p}</a>`).join('')}</dd></div></dl>${lfAcc(ms,em,cp)}</div></div>
<div class="lf3-r"><div class="lfo" aria-hidden="true"><i></i></div>
<form class="lf lf2-f lf3-f" data-v3 data-ctx="${ctx}" novalidate><p class="lf3-fh"><span>${u?'Нова заявка':'New request'}</span><span>${u?'Відповідь у робочий час':'Reply in working hours'}</span></p>
<input name="name" required placeholder="${lf('nm')}" aria-label="${lf('nm')}" autocomplete="name">
<fieldset class="lf-how"><legend>${lf('how')}</legend><div class="lf-ch">${[['call',lf('call')],['email',lf('mail')],['messenger',lf('mess')]].map((m,i)=>`<label><input type="radio" name="how" value="${m[0]}"${i?'':' checked'}><span>${m[1]}</span></label>`).join('')}</div></fieldset>
<div class="lf-ct"><input name="phone" type="tel" placeholder="${lf('ph')}" aria-label="${lf('ph')}" autocomplete="tel"><input name="email" type="email" placeholder="${lf('em')}" aria-label="${lf('em')}" autocomplete="email" hidden><div class="lf-ms" hidden>${ddHtml()}</div></div>
<textarea name="msg" rows="3" placeholder="${lf('msg')}" aria-label="${lf('msg')}"></textarea>
<button type="button" class="lf-att" data-att-open>${ICO.clip}<b>${v4('attB')}</b><span></span></button><ul class="att-l"></ul>
<p class="lf-err" role="alert" hidden></p><button class="btn lf3-sb" type="submit">${lf('send')} <i aria-hidden="true">↗</i></button></form></div></div></div>`};

secSeo=(k='home')=>{const d=SEOX[k][lang],u=lang==='uk',n=d.parts.length;
return `<section class="seo3 seo4" id="seo"><div class="s5-top seo4-top"><div>${secLab(d.lab)}<h2>${d.h}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${String(n).padStart(2,'0')}</b>${u?(n<5?'розділи':'розділів'):'sections'}</span></div></div>
<div class="seo4-g"><p class="seo4-l">${d.lead}</p><dl class="seo4-f">${d.facts.map(f=>`<div><dt class="num">${f[2]&&f[2]!=='+'?`<small>${f[2].trim()}</small>`:''}${f[0]}${f[2]==='+'?'+':''}</dt><dd>${f[1]}</dd></div>`).join('')}</dl></div>
<div class="seo3-x" inert><div class="seo3-xi"><div class="seo4-p">${d.parts.map((p,i)=>`<article><span class="num">${String(i+1).padStart(2,'0')}</span><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div>
<div class="seo4-k"><span>${u?'Популярні запити':'Popular searches'}</span><div>${d.keys.map(([l,g,a])=>`<button class="seo2-c" data-go="${g}"${a!==''?` data-a="${a}"`:''}>${l}</button>`).join('')}</div></div></div></div>
<div class="seo4-tg"><button class="seo4-b" data-seo aria-expanded="false">${cx('seoMore')}<i aria-hidden="true"></i></button></div></section>`};

function priSec(lab,txt,tiles){const u=lang==='uk',ar='<i aria-hidden="true">↗</i>';
return `<section class="pri"><div class="pri-l">${secLab(lab)}<p class="pri-t">${txt}</p>
<div class="hx-chips pri-ch"><button class="hx-chip" data-go="soon" data-a="0">${SRV[0][lang]}${ar}</button><button class="hx-chip" data-go="soon" data-a="1">${SRV[1][lang]}${ar}</button><button class="hx-chip" data-go="soon" data-a="2">${u?'Комплектація об’єктів':'Site supply'}${ar}</button><button class="hx-chip" data-go="catalog" data-a="all">${u?'Каталог продукції':'Product catalog'}${ar}</button><button class="hx-chip pri-pdf" data-pdf>${u?'PDF-каталог':'PDF catalog'}<i aria-hidden="true">↓</i></button></div></div>
<div class="pri-r">${tiles.map((t,i)=>`<div class="pri-c${i===0?' pri-hi':''}">${i===0?'<span class="dv-orb" aria-hidden="true"><i></i></span>':''}<span>${t[0]}</span><b>${t[1]}</b></div>`).join('')}</div></section>`}
const _oemP5=oemP;oemP=function(){const u=lang==='uk',T=u?[['3 напрями','Лиття → поставка'],['Старт','креслення або зразок'],['Масштаб','прототип → серія'],['UA + EU','доставка партій']]:[['3 services','Molding → delivery'],['Start','drawing or sample'],['Scale','prototype → series'],['UA + EU','batch delivery']];
return _oemP5().replace(/<div class="x-top"><p class="x-st">[\s\S]*?<\/p><\/div>/,`<h1 class="sr">${u?'Послуги виробництва PLASTIZA':'PLASTIZA manufacturing services'}</h1>`+priSec(u?'Послуги':'Services',x('srvSt'),T))};

blogPage=()=>{const u=lang==='uk',ar='<i aria-hidden="true">↗</i>',L=LI(),ps=[...POSTS].sort((a,b)=>b.date<a.date?-1:1),nw=ps[0],avg=Math.round(POSTS.reduce((a,p)=>a+p.min,0)/POSTS.length),nt=BGC[lang].length-1;
const tile=(cls,a,lab,val,orb)=>`<button type="button" class="pri-c pri-bt${cls}" ${a}>${orb?'<span class="dv-orb" aria-hidden="true"><i></i></span>':''}<span>${lab}</span><b>${val}</b></button>`;
return `<h1 class="sr">${u?'Блог PLASTIZA':'PLASTIZA blog'}</h1><div class="wrap x"><section class="pri pri-blog"><div class="pri-l">${secLab(u?'Блог':'Blog')}<p class="pri-t">${cx('blogSt')}</p>
<div class="hx-chips pri-ch"><button class="hx-chip" data-go="faq">${u?'Питання та відповіді':'FAQ'}${ar}</button><button class="hx-chip" data-go="catalog" data-a="all">${u?'Каталог продукції':'Product catalog'}${ar}</button><button class="hx-chip" data-go="oem">${u?'Послуги виробництва':'Services'}${ar}</button><button class="hx-chip pri-pdf" data-pdf>${u?'PDF-каталог':'PDF catalog'}<i aria-hidden="true">↓</i></button></div></div>
<div class="pri-r">${tile(' pri-hi pri-new',`data-go="post" data-a="${nw.id}"`,u?'Нова стаття':'Latest',`${nw.t[L]}<em>${fmtD(nw.date)} · ${nw.min} ${cx('min')} ↗</em>`,1)}
${tile('','data-scroll-bg',u?'Статей':'Articles',`${POSTS.length} ${u?'матеріалів':'pieces'}`)}
${tile('','data-scroll-bg',u?'Теми':'Topics',`${nt} ${u?'рубрики':'categories'}`)}
${tile('','data-scroll-bg',u?'Читання':'Reading',`≈ ${avg} ${u?'хв на статтю':'min each'}`)}</div></section>
<div id="bg-list">${tabs('bg',BGC[lang],UIF.bg)}<div class="bg" data-n="99" style="padding-bottom:clamp(56px,7vw,96px)">${bgGrid(99)}</div></div></div>`};
document.addEventListener('click',e=>{const b=e.target.closest('[data-scroll-bg]');if(!b)return;const t=document.getElementById('bg-list');if(t)t.scrollIntoView({behavior:'smooth',block:'start'})});

/* production intro v2: statement + 4 tiles in one row */
prIntro=function(){const u=lang==='uk';
const tiles=u?[['Повний цикл','Пресформа → партія'],['ТПА','до 800 т змикання'],['Львів','власне виробництво'],['UA + EU','доставка партій']]:[['Full cycle','Mold → batch'],['Machines','up to 800 t'],['Lviv','own plant'],['UA + EU','batch delivery']];
return `<div class="wrap"><section class="pri pri-1"><div class="pri-l">${secLab(u?'Виробництво':'Production')}<p class="pri-t">${x('aboutSt')}</p></div>
<div class="pri-r pri-row">${tiles.map((t,i)=>`<div class="pri-c${i===0?' pri-hi':''}">${i===0?'<span class="dv-orb" aria-hidden="true"><i></i></span>':''}<span>${t[0]}</span><b>${t[1]}</b></div>`).join('')}</div></section></div>`};

/* count-up only when the numbers come into view */
countUp=function(){const els=[...document.querySelectorAll('#view .cnt')];if(!els.length)return;const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
els.forEach(el=>{el.style.setProperty('--w',el.getBoundingClientRect().width+'px')});if(rm)return;
const ease=x=>1-Math.pow(1-x,4),D=1900;const groups=new Map();els.forEach(el=>{const g=el.closest('dl,.st6-k,section')||el.parentNode;if(!groups.has(g))groups.set(g,[]);groups.get(g).push(el)});
groups.forEach((list,g)=>{list.forEach(el=>el.textContent='0'+el.dataset.s);const io=new IntersectionObserver(es=>{if(!es.some(e=>e.isIntersecting))return;io.disconnect();const t0=performance.now();
(function f(t){let done=true;list.forEach((el,i)=>{const kk=Math.min(1,Math.max(0,(t-t0-i*120)/D));if(kk<1)done=false;el.textContent=fmtN(+el.dataset.n*ease(kk))+el.dataset.s});if(!done)requestAnimationFrame(f)})(t0)},{threshold:.35});io.observe(g)})};

/* timeline progress (mobile) */
function hiProg(){const vh=innerHeight,mark=vh*.62;document.querySelectorAll('#view .hi3').forEach(o=>{const r=o.getBoundingClientRect();const k=Math.min(1,Math.max(0,(mark-r.top)/r.height));o.style.setProperty('--hp',(k*100).toFixed(1)+'%');
o.querySelectorAll('.hi3-i').forEach(li=>{li.classList.toggle('on',li.getBoundingClientRect().top+6<mark)})})}
addEventListener('scroll',()=>requestAnimationFrame(hiProg),{passive:true});addEventListener('resize',hiProg);
new MutationObserver(()=>requestAnimationFrame(hiProg)).observe(document.getElementById('view'),{childList:true});

/* lead form: steps in a modal on mobile */
(function(){const d=document.createElement('dialog');d.id='lfsm';d.className='lfsm';document.body.appendChild(d);
d.addEventListener('click',e=>{if(e.target===d||e.target.closest('[data-lfsm-x]'))d.close()})})();
document.addEventListener('click',e=>{const b=e.target.closest('[data-lf-steps]');if(!b)return;const sec=b.closest('.lf3'),st=sec&&sec.querySelector('.lf3-st');if(!st)return;const u=lang==='uk',d=document.getElementById('lfsm');
d.innerHTML=`<div class="lfsm-h"><b>${u?'Як ми працюємо з заявкою':'How we handle your request'}</b><button type="button" class="lfsm-x" data-lfsm-x aria-label="${u?'Закрити':'Close'}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><ol class="lf3-st lfsm-st">${st.innerHTML}</ol><button type="button" class="btn lfsm-ok" data-lfsm-x>${u?'Зрозуміло':'Got it'}</button>`;d.showModal()});

bgSl=function(){document.querySelectorAll('.bg-sl').forEach(g=>{const sec=g.parentNode,d=sec.querySelector('.bg-dots'),ar=sec.querySelector('.bg-ar');
const up=()=>{const cs=[...g.children].filter(c=>c.classList.contains('bc2'));if(!cs.length){d.innerHTML='';return}const w=cs[0].getBoundingClientRect().width+12,vis=Math.max(1,Math.round((g.clientWidth+12)/w)),n=Math.max(1,cs.length-vis+1);
const i=Math.min(n-1,Math.round(g.scrollLeft/w));if(d.childElementCount!==n)d.innerHTML=n>1?Array.from({length:n},()=>'<i></i>').join(''):'';[...d.children].forEach((x,k)=>x.classList.toggle('on',k===i));
if(ar){ar.hidden=n<2;ar.children[0].disabled=g.scrollLeft<4;ar.children[1].disabled=g.scrollLeft>g.scrollWidth-g.clientWidth-4}};
if(!g.dataset.sl2){g.dataset.sl2=1;g.addEventListener('scroll',()=>requestAnimationFrame(up),{passive:true});new MutationObserver(()=>{g.scrollLeft=0;up()}).observe(g,{childList:true});addEventListener('resize',up)}up()})};
document.addEventListener('click',e=>{const b=e.target.closest('[data-bgp]');if(!b)return;const g=b.closest('section').querySelector('.bg-sl'),c=g&&g.querySelector('.bc2');if(!c)return;g.scrollBy({left:(+b.dataset.bgp)*(c.getBoundingClientRect().width+12),behavior:'smooth'})});

function priRow(lab,txt,tiles){return `<section class="pri pri-1"><div class="pri-l">${secLab(lab)}<p class="pri-t">${txt}</p></div>
<div class="pri-r pri-row">${tiles.map((t,i)=>`<div class="pri-c${i===0?' pri-key':''}"><span>${t[0]}</span><b>${t[1]}</b></div>`).join('')}</div></section>`}
prIntro=function(){const u=lang==='uk';
return `<div class="wrap">${priRow(u?'Виробництво':'Production',x('aboutSt'),u?[['Повний цикл','Пресформа → партія'],['ТПА','до 800 т змикання'],['Львів','власне виробництво'],['UA + EU','доставка партій']]:[['Full cycle','Mold → batch'],['Machines','up to 800 t'],['Lviv','own plant'],['UA + EU','batch delivery']])}</div>`};
oemP=function(){const u=lang==='uk',T=u?[['3 напрями','Лиття → поставка'],['Старт','креслення або зразок'],['Масштаб','прототип → серія'],['UA + EU','доставка партій']]:[['3 services','Molding → delivery'],['Start','drawing or sample'],['Scale','prototype → series'],['UA + EU','batch delivery']];
return _oemP5().replace(/<div class="x-top"><p class="x-st">[\s\S]*?<\/p><\/div>/,`<h1 class="sr">${u?'Послуги виробництва PLASTIZA':'PLASTIZA manufacturing services'}</h1>`+priRow(u?'Послуги':'Services',x('srvSt'),T))};

SEOX.catalog={uk:{lab:'Каталог',h:'Фіксатори арматури та елементи опалубки від виробника',lead:'Каталог ТОВ «Пластіза» — пластикові фіксатори арматури та елементи для опалубки власного виробництва. Ціни напряму від виробника, фасування від 100 шт., відвантаження по Україні та в країни Європи.',
facts:[[String(P.length),'позицій у каталозі',''],['100','шт. — мінімальне фасування','від '],['2','категорії: арматура й опалубка','']],
parts:[['Фіксатори арматури','«Настил», «Стійка», «Зірочка», «Защіпка» та «Засувка» формують проєктний захисний шар бетону й утримують каркас під час бетонування плит, фундаментів, стін і колон.'],['Елементи опалубки','Конуси, корки та дистанційні труби захищають стяжні гвинти, зберігають відстань між щитами й герметизують отвори після демонтажу опалубки.'],['Як обрати розмір','Розмір фіксатора залежить від товщини захисного шару та діаметра арматури. Кожна позиція має кілька типорозмірів — у картці товару є таблиця з цінами за штуку та кількістю в упаковці.'],['Оптові замовлення','Працюємо з будівельними компаніями та постачальниками. Залиште заявку — розрахуємо вартість партії, терміни та доставку.']],
keys:[['Фіксатори арматури','catalog','rebar'],['Елементи опалубки','catalog','form'],['Фіксатор «Зірочка»','product','3'],['Фіксатор «Стійка»','product','2'],['PDF-каталог','pdf','desk'],['Доставка та оплата','delivery','']]},
en:{lab:'Catalog',h:'Rebar spacers and formwork parts from the manufacturer',lead:'PLASTIZA catalog: plastic rebar spacers and formwork parts from our own plant. Factory prices, packs from 100 pcs, shipping across Ukraine and to Europe.',
facts:[[String(P.length),'catalog items',''],['100','pcs minimum pack','from '],['2','categories','']],
parts:[['Rebar spacers','Slab chairs, chairs, wheel spacers and clips keep the specified concrete cover and hold the cage while pouring.'],['Formwork parts','Cones, plugs and spacer tubes protect tie rods, keep panel spacing and seal holes after stripping.'],['Choosing a size','Spacer size depends on cover depth and bar diameter; each product page lists sizes, unit prices and pack quantities.'],['Wholesale','We work with contractors and distributors — send a request for a batch quote.']],
keys:[['Rebar spacers','catalog','rebar'],['Formwork parts','catalog','form'],['Wheel spacer','product','3'],['Chair','product','2'],['PDF catalog','pdf','desk'],['Delivery & payment','delivery','']]}};
const _catalog7=catalog;catalog=()=>_catalog7()+bd('w',secFaq())+bd('',leadForm('catalog'))+bd('w',secSeo('catalog'));

SEOX.delivery={uk:{lab:'Доставка',h:'Доставка фіксаторів арматури по Україні та в Європу',lead:'Відвантажуємо фіксатори арматури, елементи опалубки та пластикові вироби на замовлення зі складу у Львові. Доставляємо по всій Україні та в країни Європи — партіями будь-якого обсягу, з усіма документами для безготівкового розрахунку.',
facts:[['UA + EU','доставка по Україні та в Європу',''],['2','офіси: Львів і Київ',''],['100','шт. — мінімальне фасування','від ']],
parts:[['Доставка по Україні','Відправляємо замовлення службами доставки та вантажними перевізниками до відділення, складу або безпосередньо на будівельний об’єкт. Термін і вартість доставки погоджуємо під час оформлення.'],['Доставка в Європу','Відвантажуємо партії в країни Європи міжнародними службами доставки. Підготуємо супровідні документи та допоможемо обрати оптимальний спосіб відправлення.'],['Оплата','Працюємо з компаніями та ФОП: безготівковий розрахунок на рахунок ТОВ «Пластіза» з видачею повного пакета документів. Умови оплати для великих партій обговорюємо індивідуально.'],['Самовивіз','Готове замовлення можна забрати з виробництва у Львові — попередньо погодьте дату й час з менеджером.']],
keys:[['Каталог продукції','catalog','all'],['Фіксатори арматури','catalog','rebar'],['Елементи опалубки','catalog','form'],['Комплектація об’єктів','soon','2'],['Питання та відповіді','faq',''],['Контакти','contacts','']]},
en:{lab:'Delivery',h:'Rebar spacer delivery across Ukraine and to Europe',lead:'We ship rebar spacers, formwork parts and custom plastic parts from our Lviv warehouse across Ukraine and to Europe — any batch size, with full paperwork for bank transfer.',
facts:[['UA + EU','Ukraine and Europe',''],['2','offices: Lviv and Kyiv',''],['100','pcs minimum pack','from ']],
parts:[['Across Ukraine','By courier or freight carrier to a branch, warehouse or straight to the site; timing and cost agreed when ordering.'],['To Europe','International carriers with export paperwork prepared by us.'],['Payment','Bank transfer to PLASTIZA LLC with full documents; terms for large batches agreed individually.'],['Pickup','Collect your order at our Lviv plant by appointment.']],
keys:[['Product catalog','catalog','all'],['Rebar spacers','catalog','rebar'],['Formwork parts','catalog','form'],['Site supply','soon','2'],['FAQ','faq',''],['Contacts','contacts','']]}};
const _deliveryP7=deliveryP;deliveryP=()=>_deliveryP7()+bd('w',secSeo('delivery'));

const PAYX={uk:{lab:'Оплата',h:'Способи<br>оплати',items:[['01','Безготівковий розрахунок','Для компаній і ФОП. Виставляємо рахунок на ТОВ «Пластіза», після оплати відвантажуємо замовлення.',['Рахунок-фактура','Видаткова накладна','Супровідні документи']],['02','Готівкою','Оплата готівкою при самовивозі зі складу у Львові або Києві — за попередньою домовленістю з менеджером.',['При самовивозі','Львів · Київ']]],note:'Умови оплати для великих і регулярних партій обговорюємо індивідуально.'},
en:{lab:'Payment',h:'Payment<br>options',items:[['01','Bank transfer','For companies and sole traders. We issue an invoice from PLASTIZA LLC and ship after payment.',['Invoice','Delivery note','Shipping documents']],['02','Cash','Pay in cash when collecting from our Lviv or Kyiv warehouse — by appointment with a manager.',['On pickup','Lviv · Kyiv']]],note:'Terms for large and recurring batches are agreed individually.'}};
function payBlock(){const d=PAYX[lang];return `<section class="dv-sec pay2"><div class="s5-top"><div>${secLab(d.lab)}<h2 class="s5-h">${d.h}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">0${d.items.length}</b>${lang==='uk'?'способи':'options'}</span></div></div>
<div class="pay2-g">${d.items.map(([n,t,x,tags])=>`<article class="pay2-c"><span class="pay2-n num">${n}</span><h3>${t}</h3><p>${x}</p><ul>${tags.map(g=>`<li>${g}</li>`).join('')}</ul></article>`).join('')}</div><p class="pay2-note">${d.note}</p></section>`}
function pdAcc(){const u=lang==='uk',L=u?[['Доставка','По Україні — Нова пошта, Укрпошта, вантажні перевізники або напряму на об’єкт; у країни ЄС — за погодженням.'],['Оплата','Безготівково на рахунок ТОВ «Пластіза» з повним пакетом документів або готівкою при самовивозі.'],['Самовивіз','Зі складів у Львові та Києві за попередньою домовленістю.']]:[['Delivery','Across Ukraine by Nova Poshta, Ukrposhta, freight carriers or straight to site; to the EU on agreement.'],['Payment','Bank transfer to PLASTIZA LLC with full paperwork, or cash on pickup.'],['Pickup','From our Lviv and Kyiv warehouses by appointment.']];
return `<details class="pda-i"><summary><span>${u?'Доставка та оплата':'Delivery & payment'}</span><i aria-hidden="true"></i></summary><dl class="pda-d">${L.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl><button class="tlink pda-l" data-go="delivery">${u?'Детальніше про доставку та оплату':'More about delivery & payment'}<i aria-hidden="true">↗</i></button></details>`}
const _product8=product;product=function(){return _product8().replace('<!--pda-->',pdAcc())};

function crumbs(list){return `<nav class="bc3" aria-label="${lang==='uk'?'Хлібні крихти':'Breadcrumbs'}"><ol>${list.map((c,i)=>i<list.length-1?`<li><button data-go="${c[1]}">${c[0]}</button><svg viewBox="0 0 14 10" aria-hidden="true"><path d="M1 5h11M8.5 1.5L12 5 8.5 8.5" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="butt" stroke-linejoin="miter"/></svg></li>`:`<li aria-current="page"><span>${c[0]}</span></li>`).join('')}</ol></nav>`}
faqPage=function(){const u=lang==='uk',n=FQ[lang].items.length,nc=FQ[lang].cats.length-1;
return `<div class="wrap x"><section class="pri pri-1 fqi">${crumbs([[t('home'),'home'],[u?'Питання та відповіді':'FAQ']])}<div class="pri-l"><h1 class="pri-t">${cx('faqSt')}</h1>
<p class="fqi-m"><span><b class="num">${n}</b> ${u?'питань':'questions'}</span><span><b class="num">${nc}</b> ${u?'рубрики':'topics'}</span><span>${u?'Не знайшли відповідь — напишіть у формі нижче':'Can’t find an answer? Use the form below'}</span></p></div></section>${faqList(99)}${leadForm('faq')}</div>`};

/* ===== mold-making process (service 1) ===== */
const MPI={
dfm:`<rect x="22" y="14" width="64" height="76" rx="2"/><path d="M30 28h30M30 34h22"/><path class="a" d="M36 50h28v22H36z"/><path class="a" d="M44 50v-6h12v6"/><path d="M32 78h36M32 75v6M68 75v6M30 50v22M27 50h6M27 72h6"/><circle cx="84" cy="70" r="11"/><path d="M92 78l10 10"/>`,
cad:`<path d="M28 40l32-14 32 14-32 14z"/><path d="M28 40v10l32 14 32-14V40"/><path d="M60 54v10"/><path class="a" d="M48 42l12-5 12 5-12 5z"/><path d="M28 64l32 14 32-14v10l-32 14-32-14z" stroke-dasharray="0"/><path d="M60 78v10"/><path class="d" d="M28 50v14M92 50v14M60 64v14"/><circle cx="100" cy="22" r="1.6" class="f"/><circle cx="20" cy="22" r="1.6" class="f"/>`,
sim:`<path d="M24 30h56l12 12v38H24z"/><path class="a" d="M14 55h10"/><path class="a" d="M10 51l4 4-4 4"/><path class="a" d="M30 55c10-14 22-14 30 0s20 14 26 0"/><path class="a o1" d="M30 55c10-6 22-6 30 0s20 6 26 0"/><path class="a o2" d="M30 55c10 6 22 6 30 0s20-6 26 0"/><path d="M30 40h8M30 70h8M74 40h8M74 70h8" class="d"/><circle cx="92" cy="24" r="5" class="d"/><path d="M92 19v-6" class="d"/>`,
cnc:`<path d="M48 10h24v18H48z"/><path d="M56 28h8v10h-8z"/><path class="a" d="M58 38h4v16h-4z"/><path d="M58 50h4"/><path d="M24 66h72v20H24z"/><path class="a" d="M44 66v-6c0-4 8-6 16-6s16 2 16 6v6"/><path d="M30 92h60"/><path class="d" d="M72 54l8-4M76 58l9-1M70 50l5-7"/>`,
edm:`<path d="M34 18h20v40H34z"/><path class="a" d="M38 58h12l-2 8h-8z"/><path d="M22 74h76v14H22z"/><path class="a" d="M42 74v-4h14v4"/><path class="a" d="M44 66l-3-4M48 67l0-5M52 66l3-4"/><path d="M80 18v56M80 18h10M80 74"/><path class="d" d="M70 28c6 0 6 8 0 8s-6 8 0 8"/>`,
fin:`<path d="M26 44h56v40H26z"/><path class="a" d="M38 56h32v16H38z"/><path class="d" d="M34 36c0-6 6-6 6-12M46 36c0-6 6-6 6-12M58 36c0-6 6-6 6-12M70 36c0-6 6-6 6-12"/><path d="M90 30l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" class="a"/>`,
asm:`<path d="M20 30h34v50H20z"/><path d="M66 30h34v50H66z"/><path class="a" d="M54 46h-8v18h8M66 46h8v18h-8"/><path d="M28 36v8M28 66v8M92 36v8M92 66v8"/><path class="d" d="M20 24h80M20 86h80"/><path class="a" d="M54 18l6-6 6 6M54 92l6 6 6-6"/>`,
t1:`<path d="M10 48h22v14H10z"/><path d="M32 52h10v6H32z"/><path class="a" d="M42 54h8"/><path d="M50 38h16v34H50zM66 38h16v34H66z"/><path class="a" d="M60 50h12v10H60z"/><path class="d" d="M74 80v8M70 84h8"/><path class="a" d="M88 82h14v8H88z"/><path d="M96 70l0 6M93 73l3 3 3-3"/><path class="a" d="M86 28l5 5 10-10"/>`};
const MPX={uk:{lab:'Процес',h1:'Як ми виготовляємо пресформи.',h2:'Від креслення до перших відливок.',cta:'Обговорити пресформу',frame:'Інструментальна дільниця',
s:[['Аналіз','dfm','Креслення або зразок, перевірка технологічності (DFM): ухили, товщини стінок, місце впуску.'],['3D-модель','cad','Модель виробу та конструкція пресформи: роз’єм, гнізда, виштовхувачі, охолодження.'],['Симуляція','sim','Аналіз заповнення форми розплавом: усадка, повітряні пастки, лінії спаю.'],['Фрезерування','cnc','Обробка плит і формоутворюючих деталей на верстатах з ЧПК.'],['Електроерозія','edm','Глибокі ребра, гострі кути й дрібні елементи — електродом і дротом.'],['Доводка','fin','Термообробка сталі, полірування або текстура поверхні.'],['Складання','asm','Збирання пакета, перевірка рухомих вузлів, каналів охолодження.'],['Пробне лиття','t1','Перші відливки на ТПА, вимірювання, доводка й погодження зразків.']]},
en:{lab:'Process',h1:'How we build injection molds.',h2:'From drawing to first shots.',cta:'Discuss a mold',frame:'Tool shop',
s:[['Review','dfm','Drawing or sample, design-for-manufacturing check: draft, wall thickness, gate location.'],['3D model','cad','Part model and mold design: parting line, cavities, ejection, cooling.'],['Simulation','sim','Mold-fill analysis: shrinkage, air traps, weld lines.'],['Milling','cnc','CNC machining of plates and cavity inserts.'],['EDM','edm','Deep ribs, sharp corners and fine details by sinker and wire EDM.'],['Finishing','fin','Heat treatment, polishing or texture.'],['Assembly','asm','Fitting the stack, checking moving parts and cooling circuits.'],['Trial','t1','First shots on the press, measurement, tuning and sample approval.']]}};

Object.assign(MPI,{
dfm:`<rect x="22" y="14" width="64" height="76" rx="2"/><path d="M30 28h30M30 34h22"/><path class="a" d="M36 50h28v22H36z"/><path class="a" d="M44 50v-6h12v6"/><path d="M32 78h36M32 75v6M68 75v6M30 50v22M27 50h6M27 72h6"/><g class="mv mv-mag"><circle cx="84" cy="70" r="11"/><path d="M92 78l10 10"/></g>`,
cad:`<path d="M28 40l32-14 32 14-32 14z"/><path d="M28 40v10l32 14 32-14V40"/><path d="M60 54v10"/><g class="mv mv-fl"><path class="a" d="M48 42l12-5 12 5-12 5z"/></g><path d="M28 64l32 14 32-14v10l-32 14-32-14z"/><path d="M60 78v10"/><path class="d" d="M28 50v14M92 50v14M60 64v14"/><circle cx="100" cy="22" r="1.6" class="f mv mv-bl"/><circle cx="20" cy="22" r="1.6" class="f mv mv-bl2"/>`,
sim:`<path d="M24 30h56l12 12v38H24z"/><path class="a" d="M14 55h10"/><path class="a" d="M10 51l4 4-4 4"/><path class="a mv-flow" d="M30 55c10-14 22-14 30 0s20 14 26 0"/><path class="a o1 mv-flow" d="M30 55c10-6 22-6 30 0s20 6 26 0"/><path class="a o2 mv-flow" d="M30 55c10 6 22 6 30 0s20-6 26 0"/><path d="M30 40h8M30 70h8M74 40h8M74 70h8" class="d"/><g class="mv mv-spin"><circle cx="92" cy="24" r="5" class="d"/></g><path d="M92 19v-6" class="d"/>`,
cnc:`<path d="M48 10h24v18H48z"/><g class="mv mv-sp"><path d="M56 28h8v10h-8z"/><path class="a" d="M58 38h4v16h-4z"/></g><path d="M24 66h72v20H24z"/><path class="a" d="M44 66v-6c0-4 8-6 16-6s16 2 16 6v6"/><path d="M30 92h60"/><g class="mv mv-chip"><path class="d" d="M72 54l8-4M76 58l9-1M70 50l5-7"/></g>`,
edm:`<path d="M34 18h20v40H34z"/><path class="a" d="M38 58h12l-2 8h-8z"/><path d="M22 74h76v14H22z"/><path class="a" d="M42 74v-4h14v4"/><g class="mv mv-spark"><path class="a" d="M44 66l-3-4M48 67l0-5M52 66l3-4"/></g><path d="M80 18v56M80 18h10"/><path class="d mv-flow" d="M70 28c6 0 6 8 0 8s-6 8 0 8"/>`,
fin:`<path d="M26 44h56v40H26z"/><path class="a" d="M38 56h32v16H38z"/><g class="mv mv-heat"><path class="d" d="M34 36c0-6 6-6 6-12M46 36c0-6 6-6 6-12M58 36c0-6 6-6 6-12M70 36c0-6 6-6 6-12"/></g><g class="mv mv-star"><path d="M90 30l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" class="a"/></g>`,
asm:`<g class="mv mv-l"><path d="M20 30h34v50H20z"/><path class="a" d="M54 46h-8v18h8"/><path d="M28 36v8M28 66v8"/></g><g class="mv mv-r"><path d="M66 30h34v50H66z"/><path class="a" d="M66 46h8v18h-8"/><path d="M92 36v8M92 66v8"/></g><path class="d" d="M20 24h80M20 86h80"/><path class="a" d="M54 18l6-6 6 6M54 92l6 6 6-6"/>`,
t1:`<path d="M10 48h22v14H10z"/><path d="M32 52h10v6H32z"/><path class="a mv-flow" d="M42 55h8"/><path d="M50 38h16v34H50zM66 38h16v34H66z"/><path class="a" d="M60 50h12v10H60z"/><g class="mv mv-drop"><path class="a" d="M88 70h14v8H88z"/></g><path d="M86 92h20"/><g class="mv mv-ok"><path class="a" d="M86 28l5 5 10-10"/></g>`});
function moldProc(){const d=MPX[lang],n=d.s.length;
return `<section class="mp2"><div class="mp2-in"><div class="s5-top mp2-top"><div>${secLab(d.lab)}<h2 class="s5-h">${lang==='uk'?'Як ми робимо<br>пресформи':'How we build<br>molds'}</h2></div><div class="s5-tr"><span class="s5-cnt"><b class="num">${String(n).padStart(2,'0')}</b>${lang==='uk'?'етапів':'stages'}</span><button class="mp2-cta" type="button" data-to-lf>${d.cta}<svg viewBox="0 0 16 10" aria-hidden="true"><path d="M1 5h13M10 1.5L14 5l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="miter" stroke-linecap="butt"/></svg></button></div></div>
<div class="mp2-rail" role="list">${d.s.map((x,i)=>`<div class="mp2-s${i>=3&&i<=6?' in':''}${i===3?' fs':''}${i===6?' fe':''}" role="listitem"><span class="mp2-k"><b class="num">${String(i+1).padStart(2,'0')}</b>${x[0]}</span><svg class="mp2-ic" viewBox="0 0 120 100" aria-hidden="true">${MPI[x[1]]}</svg><p>${x[2]}</p></div>`).join('')}</div><div class="mp2-ft"><span class="mp2-lg"><i></i>${lang==='uk'?'04–07 — етапи на інструментальній дільниці':'04–07 — tool shop stages'}</span><div class="mp2-dots" aria-hidden="true">${d.s.map(()=>'<i></i>').join('')}</div></div></div></section>`}
const _soon9=soon;soon=function(){let h=_soon9();if(String(R.a)==='1'){const i=h.indexOf('<section class="sp6">');if(i>-1){const j=h.indexOf('</section>',i)+10;h=h.slice(0,i)+moldProc()+h.slice(j)}}return h};

function mp2Init(){document.querySelectorAll('.mp2:not([data-i])').forEach(sec=>{sec.dataset.i=1;sec.querySelectorAll('.mp2-ic :is(path,rect,circle)').forEach(e=>{try{e.style.setProperty('--len',Math.ceil(e.getTotalLength()+2))}catch(_){}});
if(matchMedia('(prefers-reduced-motion: reduce)').matches){sec.classList.add('on');return}
sec.querySelectorAll('.mp2-s').forEach((s,i)=>s.querySelectorAll('.mp2-ic *').forEach(e=>e.style.transitionDelay=(i*.12)+'s'));
const io=new IntersectionObserver(es=>{if(es.some(e=>e.isIntersecting)){sec.classList.add('on');io.disconnect()}},{threshold:.25});io.observe(sec)})}
new MutationObserver(()=>requestAnimationFrame(mp2Init)).observe(document.getElementById('view'),{childList:true});

function mp2Slide(){document.querySelectorAll('.mp2:not([data-sl])').forEach(sec=>{sec.dataset.sl=1;const r=sec.querySelector('.mp2-rail'),dots=[...sec.querySelectorAll('.mp2-dots i')],items=[...r.querySelectorAll('.mp2-s')];let t=0,hold=0;
const idx=()=>{const w=items[0].getBoundingClientRect().width;return Math.min(items.length-1,Math.round(r.scrollLeft/w))};
const up=()=>{const i=idx();dots.forEach((d,k)=>d.classList.toggle('on',k===i))};
r.addEventListener('scroll',()=>requestAnimationFrame(up),{passive:true});
const go=()=>{if(innerWidth>640||hold>Date.now()||!sec.isConnected)return;const i=idx(),n=(i+1)%items.length;r.scrollTo({left:items[n].offsetLeft-items[0].offsetLeft,behavior:'smooth'})};
['touchstart','touchmove','pointerdown','wheel'].forEach(ev=>r.addEventListener(ev,()=>{hold=Date.now()+7000},{passive:true}));
const io=new IntersectionObserver(es=>{const v=es[0].isIntersecting;clearInterval(t);if(v&&!matchMedia('(prefers-reduced-motion: reduce)').matches)t=setInterval(go,3200)},{threshold:.4});io.observe(r);up()})}
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
 start()})();
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
function rtFromKey(k){const m={home:{p:'home'},catalog:{p:'catalog',a:'all'},cat_rebar:{p:'catalog',a:'rebar'},cat_form:{p:'catalog',a:'form'},pdf:{p:'pdf',a:'desk'},pdfm:{p:'pdf',a:'mob'}};
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
