// Blog v6 — SEO polishing of all posts (one-time DB migration in page.js → 'site.blog6').
// ALT: cover alt text [uk, en]. META: meta description [uk, en] (120–160 chars, goes to site.seo.meta['b'+id]).
// UNLINK: link indices (in body order, same for uk/en) turned into plain text → 3–5 internal links per article.
// ADD: [lang 0|1, find, replace] — new internal links for articles that had fewer than 3.

export const ALT = {
  1: ['Жовті та сині пластикові фіксатори арматури на арматурній сітці перед бетонуванням', 'Yellow and blue plastic rebar spacers on a reinforcement mesh before concreting'],
  2: ['Пластиковий фіксатор «Настил» тримає арматурну сітку на заданій висоті захисного шару', 'Plastic slab chair holding the rebar mesh at the required concrete cover height'],
  3: ['Механічна обробка деталі пресформи на верстаті з ЧПК перед литтям пластмас під тиском', 'CNC machining of an injection mold component before plastic injection molding'],
  4: ['Сталеві плити пресформи для лиття пластику з формоутворними вставками', 'Steel injection mold plates with cavity and core inserts'],
  5: ['Металева щитова опалубка стіни зі стяжними гвинтами на будівельному майданчику', 'Steel wall formwork panels with tie rods on a construction site'],
  6: ['Фіксатор «Настил» під нижньою сіткою арматури фундаментної плити', 'Slab chair spacer under the bottom rebar mesh of a raft foundation'],
  7: ['Арматурний каркас монолітного перекриття, змонтований перед бетонуванням', 'Rebar cage of a cast-in-place floor slab installed before concreting'],
  8: ['Жовті й сині фіксатори «Зірочка» на арматурному стрижні для стін і колон', 'Yellow and blue wheel spacers on a rebar for walls and columns'],
  9: ['Фіксатори арматури, розкладені рядами на сітці, — приклад розрахунку кількості', 'Rebar spacers laid out in rows on the mesh — an example of spacer quantity calculation'],
  10: ['Різні типи пластикових фіксаторів арматури: стійки, настили й зірочки', 'Various plastic rebar spacers: chairs, slab spacers and wheel spacers'],
  11: ['Термопластавтомат і пластикові деталі, виготовлені методом контрактного лиття', 'Injection molding machine and plastic parts produced by contract molding'],
  12: ['Термопластавтомат із гранулами пластику та готовими виробами на столі', 'Injection molding machine with plastic pellets and finished parts on the table'],
  13: ['Розкрита пресформа для лиття пластику з формоутворними плитами', 'Open plastic injection mold showing the cavity plates'],
  14: ['Цех серійного виробництва пластикових виробів із лініями обладнання', 'Plastic product manufacturing shop with production lines'],
  15: ['Обладнання для виробництва пластикових деталей у цеху в Україні', 'Plastic parts production equipment in a manufacturing shop in Ukraine'],
  16: ['Дві половини пресформи після ремонту та відлита пластикова деталь', 'Two halves of a repaired injection mold and a molded plastic part'],
  17: ['Палети з будівельними матеріалами на складі, готові до відвантаження на об’єкт', 'Pallets of construction materials in a warehouse ready for site delivery'],
};

export const META = {
  1: ['Як обрати фіксатор арматури: «Настил», «Стійка», «Зірочка», «Защіпка». Розміри під захисний шар, витрата на 1 м² і поради від виробника.',
      'How to choose a rebar spacer: slab chairs, rebar chairs, wheel and clip spacers. Sizes for concrete cover, quantity per m² and tips from the manufacturer.'],
  2: ['Захисний шар бетону: що це, мінімальні значення для плит, фундаментів і колон та як забезпечити його фіксаторами арматури на будмайданчику.',
      'Concrete cover explained: typical minimum values for slabs, foundations and columns, and how to keep it right on site with plastic rebar spacers.'],
  3: ['Лиття пластмас під тиском крок за кроком: креслення, пресформа, пробне лиття і серійна партія. Терміни, тираж і що впливає на ціну деталі.',
      'Plastic injection molding step by step: drawing, mold, trial shots and production run. Lead times, batch size and what drives the price per part.'],
  4: ['Пресформа на замовлення: що підготувати до звернення, від чого залежить вартість і терміни, одногніздна чи багатогніздна форма. Поради виробника.',
      'Custom injection mold: what to prepare before you ask for a quote, what drives cost and lead time, single or multi-cavity. Practical tips from a molder.'],
  5: ['Конуси, корки й дистанційні труби для опалубки: як закрити отвори від стяжних гвинтів, які розміри обрати і скільки потрібно на стіну.',
      'Formwork cones, plugs and spacer tubes: how to seal tie-rod holes in concrete walls, which sizes to choose and how many you need per wall.'],
  6: ['Фіксатори арматури для фундаментної плити: які обрати для нижньої і верхньої сітки, схема розкладки, крок і розрахунок кількості на 1 м².',
      'Rebar spacers for raft foundations: which to use for bottom and top mesh, layout pattern, spacing and how to calculate the quantity per m².'],
  7: ['Армування монолітного перекриття: як витримати захисний шар бетону, які фіксатори ставити під нижню і верхню сітку та як не зіпсувати каркас.',
      'Reinforcing a cast-in-place slab: how to keep the concrete cover, which spacers to use under the bottom and top mesh and how to protect the cage.'],
  8: ['Фіксатор «Зірочка» для стін і колон: які розміри під захисний шар, як правильно монтувати на арматуру і з яким кроком ставити. Ціни виробника.',
      'Wheel spacer “Zirochka” for walls and columns: sizes for concrete cover, how to fit it on rebar and what spacing to use. Prices from the manufacturer.'],
  9: ['Як розрахувати кількість фіксаторів арматури: формули для плит, стін і фундаментів, крок установки, запас і готові приклади розрахунку.',
      'How to calculate the number of rebar spacers: formulas for slabs, walls and foundations, spacing, a safety margin and worked examples for real projects.'],
  10: ['Пластикові фіксатори, цегла чи металеві підставки під арматуру: порівнюємо надійність, вплив на захисний шар, корозію бетону і реальну ціну.',
      'Plastic spacers, bricks or metal chairs under rebar: we compare reliability, effect on concrete cover, corrosion risk and the real cost per square metre.'],
  11: ['Контрактне лиття пластику в Україні: як обрати виробника, що перевірити до старту, кому належить пресформа і як не переплатити за деталь.',
      'Contract plastic injection molding in Ukraine: how to choose a manufacturer, what to check before you start, who owns the mold and how not to overpay.'],
  12: ['Лиття пластикових виробів на замовлення у Львові: від чого залежить ціна, терміни виготовлення і мінімальний тираж. Пресформа та серія під ключ.',
      'Custom plastic injection molding in Lviv: what affects the price, lead times and minimum run. Mold making and series production from one supplier.'],
  13: ['Виготовлення пресформ для лиття пластику: як проходимо шлях від креслення до першої партії, етапи, терміни і що впливає на вартість форми.',
      'Mold making for plastic injection: how we go from drawing to the first batch, project stages, lead times and what affects the cost of a mold.'],
  14: ['Як запустити власний пластиковий продукт без цеху: від ідеї та 3D-моделі до пресформи й серійної партії. Етапи, бюджет і типові помилки.',
      'How to launch your own plastic product without a factory: from idea and 3D model to the mold and a series batch. Stages, budget and common mistakes.'],
  15: ['Заміна імпортних пластикових деталей: як перенести виробництво з Китаю в Україну, порахувати повну вартість і отримати деталь за зразком.',
      'Replacing imported plastic parts: how to move production from China to Ukraine, compare the total landed cost and get parts made from a sample.'],
  16: ['Ремонт і модернізація пресформ: ознаки зносу, які роботи можливі і коли вигідніше відновити стару форму, ніж замовляти нову. Оцінка за фото.',
      'Mold repair and upgrade: signs of wear, what work is possible and when restoring an old injection mold pays off better than ordering a new one.'],
  17: ['Комплектація будівельного об’єкта від одного постачальника: фіксатори арматури, елементи опалубки й матеріали з доставкою за етапами робіт.',
      'Construction site supply from one supplier: rebar spacers, formwork accessories and materials delivered in stages to match your work schedule.'],
};

export const UNLINK = {
  17: [3, 5, 6, 8],
  9: [4, 5, 6, 7],
  7: [3],
  6: [4, 5],
  5: [5],
  1: [4, 5, 7],
  2: [3],
};

export const ADD = {
  16: [
    [0, 'відновити форму чи замовити нову.', 'відновити форму чи замовити <a href="/vyhotovlennia-presform" data-go="soon" data-a="1">нову</a>.'],
    [0, 'ми обслуговуємо її між партіями', 'ми обслуговуємо її між партіями на нашому <a href="/vyrobnytstvo" data-go="about">виробництві</a>'],
    [1, 'restoring the mold or ordering a new one.', 'restoring the mold or ordering <a href="/en/mold-making" data-go="soon" data-a="1">a new one</a>.'],
    [1, 'we maintain it between batches', 'we maintain it between batches at our <a href="/en/production" data-go="about">production site</a>'],
  ],
  4: [
    [0, 'тоді ми відливатимемо партії на своєму обладнанні', 'тоді ми відливатимемо партії на своєму <a href="/vyrobnytstvo" data-go="about">обладнанні</a>'],
    [0, 'тому основні рішення краще погодити до початку виготовлення.', 'тому основні рішення краще погодити до початку виготовлення. Як доопрацьовують уже готові форми — у статті <a href="/blog/remont-i-modernizatsiia-presform" data-go="post" data-a="16">«Ремонт і модернізація пресформ»</a>.'],
    [1, 'we will mold batches on our equipment', 'we will mold batches on our <a href="/en/production" data-go="about">equipment</a>'],
    [1, 'so key decisions are best agreed before manufacturing.', 'so key decisions are best agreed before manufacturing. How existing molds are reworked: <a href="/en/blog/mold-repair-and-upgrade" data-go="post" data-a="16">“Mold repair and upgrade”</a>.'],
  ],
};

const A_RE = /<a\b[^>]*>([\s\S]*?)<\/a>/g;

/** Apply link edits + alt to one post (pure; returns a new object). */
export function blog6Post(p) {
  if (!p || p.id == null) return p;
  const id = Number(p.id), un = new Set(UNLINK[id] || []), add = ADD[id] || [];
  const n = { ...p };
  if (ALT[id]) n.alt = ALT[id].slice();
  if (Array.isArray(p.b) && (un.size || add.length)) {
    n.b = p.b.map((blocks, L) => {
      let k = 0;
      return (blocks || []).map(([tg, tx]) => {
        if (typeof tx !== 'string' || tg === 'cta') return [tg, tx];
        let s = un.size ? tx.replace(A_RE, (m, inner) => (un.has(k++) ? inner : m)) : tx;
        add.forEach(([l, f, r]) => { if (l === L && s.includes(f) && !s.includes(r)) s = s.replace(f, r); });
        return [tg, s];
      });
    });
  }
  return n;
}

/** Merge meta descriptions into site.seo ({meta, slugs}); keeps any title/description already set in the admin. */
export function blog6Seo(seo) {
  const o = seo && typeof seo === 'object' ? { ...seo } : {};
  o.meta = { ...(o.meta || {}) };
  for (const id in META) {
    const k = 'b' + id, m = { ...(o.meta[k] || {}) };
    ['uk', 'en'].forEach((L, i) => { const c = { ...(m[L] || {}) }; if (!String(c.d || '').trim()) c.d = META[id][i]; c.t = c.t || ''; m[L] = c; });
    o.meta[k] = m;
  }
  return o;
}
