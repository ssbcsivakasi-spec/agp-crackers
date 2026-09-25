#!/usr/bin/env node
/* ==========================================================================
   AGP Crackers — static SEO build
   Run after any change to js/data.js:   node tools/build-seo.js

   Google indexes plain HTML far more reliably than JS-rendered content, so
   this pre-renders the catalog from js/data.js into static pages:
     - products.html              full catalog (all 110 items)
     - <category-id>.html         one landing page per category (16)
     - index.html                 category grid + featured products
     - faq.html                   FAQ list + FAQPage schema
     - sitemap.xml                every indexable URL
   The same js/app.js still runs in the browser on top (cart, qty, drawer).
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SITE = 'https://agpcrackers.in';
const TODAY = new Date().toISOString().slice(0, 10);
const read = (f) => fs.readFileSync(path.join(ROOT, f), 'utf8');
const write = (f, s) => { fs.writeFileSync(path.join(ROOT, f), s); console.log('  wrote ' + f); };

/* Load the same data + card renderer the browser uses. */
const ctx = { window: {}, document: { addEventListener() {} }, console };
ctx.window.document = ctx.document;
vm.createContext(ctx);
vm.runInContext(read('js/data.js'), ctx);
vm.runInContext('var SZ_DATA = window.SZ_DATA;' + read('js/app.js'), ctx);
const D = ctx.window.SZ_DATA;
const SZ = ctx.window.SZ;
const esc = SZ.escapeHtml;
const money = SZ.money;
const abs = (u) => (/^https?:/.test(u) ? u : SITE + '/' + u.replace(/^\//, ''));

const BASE_KEYWORDS = [
  'AGP Crackers', 'Sivakasi crackers', 'Sivakasi crackers online', 'buy crackers online', 'online crackers shopping',
  'Diwali crackers 2026', 'Deepavali crackers', 'crackers price list 2026', 'Sivakasi crackers price list',
  'wholesale crackers Sivakasi', 'retail crackers shop', 'pattasu', 'Sivakasi pattasu', 'பட்டாசு', 'சிவகாசி பட்டாசு',
  'fireworks Tamil Nadu', 'cracker shop Virudhunagar', 'order crackers on WhatsApp',
];

/* Hand-written copy + search terms per category (English, Tamil and common spellings). */
const CAT_SEO = {
  sparklers: {
    tamil: 'கம்பி மத்தாப்பு',
    keywords: ['sparklers online', 'sparklers price list', 'electric sparklers', 'colour sparklers', 'green sparklers', 'red sparklers', '7 cm sparklers', '10 cm sparklers', '12 cm sparklers', '15 cm sparklers', '30 cm sparklers', '50 cm sparklers', 'kambi mathappu', 'rotating sparklers'],
    intro: 'Sparklers (kambi mathappu) are the first thing every family buys for Diwali. We stock electric, colour, green and red sparklers in 7 cm, 10 cm, 12 cm, 15 cm, 30 cm and 50 cm lengths, plus rotating red & green sparklers — all at our 2026 Sivakasi price list rates.',
  },
  'single-sound': {
    tamil: 'லட்சுமி வெடி',
    keywords: ['single sound crackers', 'Lakshmi crackers', 'Lakshmi vedi', 'Kuruvi crackers', 'kuruvi vedi', 'Gold Lakshmi', 'Deluxe Lakshmi', 'two sound crackers', 'Titoo crackers'],
    intro: 'Classic single sound crackers — Kuruvi, Lakshmi (lakshmi vedi), Deluxe Lakshmi, Gold Lakshmi, 5" Titoo and Two Sound — packed 5 pieces per packet.',
  },
  bijili: {
    tamil: 'பிஜிலி வெடி',
    keywords: ['bijili crackers', 'red bijili', 'bijili vedi', 'stripped bijili', 'bijili 100 pcs', 'bijili 1000', 'bijili 5000', 'bijili bag'],
    intro: 'Red and stripped bijili crackers (bijili vedi) sold by the bag — from 50 and 100 piece bags up to Red Bijili Thousand and Five Thousand for big celebrations.',
  },
  chakkars: {
    tamil: 'தரைச்சக்கரம்',
    keywords: ['ground chakkar', 'chakkar crackers', 'tharai chakkaram', 'ground chakkar deluxe', 'ground chakkar special', 'spinner crackers'],
    intro: 'Ground chakkars (tharai chakkaram) spin on the ground in a ring of colour and sparks. Choose from Puppy, Special and Deluxe ground chakkars, or the Spinner Special.',
  },
  'flower-pots': {
    tamil: 'புஸ்வாணம்',
    keywords: ['flower pots crackers', 'flower pot price', 'pusvanam', 'colour kotti', 'colour kotti deluxe', 'tri colour flower pots', 'Ashoka flower pots', 'Rangeela flower pots', 'Pancharanga'],
    intro: 'Flower pots (pusvanam) throw up a tall fountain of sparks. We carry Big, Special, Red and Ashoka flower pots, Colour Kotti and Colour Kotti Deluxe, Rangeela, Pancharanga and tri-colour varieties.',
  },
  'twinkling-star': {
    tamil: 'மின்னும் நட்சத்திரம்',
    keywords: ['twinkling star crackers', '1.5 feet twinkling star', '4 feet twinkling star', 'twinkling star price'],
    intro: 'Handheld twinkling star sticks in 1.5 feet and 4 feet sizes — a long-burning favourite for children under adult supervision.',
  },
  'pencil-torch': {
    tamil: 'பென்சில் டார்ச்',
    keywords: ['pencil torch crackers', 'pencil crackers', 'double blast gun', 'pencil gun crackers'],
    intro: 'Pencil torch crackers including the Double Blast Gun — compact, handheld and easy to use.',
  },
  bombs: {
    tamil: 'பாம் வெடி',
    keywords: ['bomb crackers', 'bullet bomb', 'digital bomb crackers', 'paper bomb', 'King of King crackers', 'sound crackers'],
    intro: 'Loud sound crackers — Deluxe Bullet Bomb, King of King Green, Digital Bomb and Paper Bomb — for those who love the big bang.',
  },
  rockets: {
    tamil: 'ராக்கெட் வெடி',
    keywords: ['rocket crackers', 'rocket bomb', 'lunik rocket', 'whistling rocket', 'sky rockets', 'rocket price list'],
    intro: 'Sky rockets for Diwali night — Rocket Bomb, Lunik Rocket and Whistling Rocket, straight from Sivakasi.',
  },
  'ariel-fountain': {
    tamil: 'ஃபவுண்டன்',
    keywords: ['aerial fountain', 'ariel fountain', 'ground fountain crackers', 'fancy fountain', 'siren crackers', 'peacock crackers', 'crackling fountain', '3D pops', 'disco shower'],
    intro: 'Ground and aerial fountains in every style — 3D Pops, Sun Light, Moon Light, Tom & Jerry, Traffic Lights, Disco Shower, Mini and Mega Siren, Mega Peacock and the Utsaw Color Crackling Fountain.',
  },
  'fancy-novelties': {
    tamil: 'ஃபேன்சி வெடி',
    keywords: ['fancy crackers', 'aerial fancy shots', 'sky shots', 'fancy shell crackers', '2 inch fancy', '3 inch fancy', '3.5 inch fancy', 'double ball fancy', 'novelty crackers'],
    intro: 'Aerial novelties and single-shot fancy shells from 1" to 3½" — they burst high in the sky in colourful patterns. Includes Bingo Mini Fancy, Love Series and Double Ball Fancy.',
  },
  'repeating-shots': {
    tamil: 'மல்டி ஷாட்',
    keywords: ['repeating shots crackers', 'multi shot crackers', 'sky shot crackers', 'repeater cake', '12 shots', '30 shots', '60 shots', '120 shots', '200 shots', 'shot crackers price list'],
    intro: 'Repeating shot cakes that fire one sky shot after another — from 6 shots and 12 shots up to 60, 120 and 200 shots for the grand finale of your celebration.',
  },
  'children-crackers': {
    tamil: 'குழந்தைகள் பட்டாசு',
    keywords: ['children crackers', 'kids crackers', 'bambaram crackers', 'Jee Boom Baa', 'power stone crackers', 'cartoon crackers', 'crackers for kids'],
    intro: 'Kid-friendly novelties — Bambaram, Jee Boom Baa, Power Stone, Assorted Cartoons and Egg Serphant. Always use with adult supervision.',
  },
  'new-varieties': {
    tamil: 'புதிய வகை பட்டாசு',
    keywords: ['new crackers 2026', 'new varieties crackers', 'Money In The Bank crackers', 'helicopter crackers', 'Candy Crush crackers', 'cylinder bomb', 'Minions fountain', 'Jungle series fountain'],
    intro: 'This season’s new crackers for 2026 — Money In The Bank, Helicopter, Candy Crush, Cylinder Bomb, Minions Fountain and the Jungle Series Fountain.',
  },
  'match-boxes': {
    tamil: 'தீப்பெட்டி',
    keywords: ['match box', 'crackers match box', 'laptop match box', 'match box 100 pcs'],
    intro: 'Laptop-style match boxes for lighting crackers, 100 pieces per box.',
  },
  'gift-boxes': {
    tamil: 'பட்டாசு கிஃப்ட் பாக்ஸ்',
    keywords: ['crackers gift box', 'Diwali gift box', 'crackers combo box', 'family pack crackers', 'Deepavali gift box', 'crackers gift box price'],
    intro: 'Assorted crackers gift boxes packed for Diwali gifting to family, friends, staff and customers.',
  },
};

/* ------------------------------------------------------------------ helpers */
function jsonLd(obj) {
  return '<script type="application/ld+json">' + JSON.stringify(obj).replace(/</g, '\\u003c') + '</script>';
}

function replaceBlock(html, name, content) {
  const re = new RegExp('(<!-- build:' + name + ' -->)[\\s\\S]*?(<!-- /build:' + name + ' -->)');
  if (!re.test(html)) throw new Error('Missing build marker: ' + name);
  return html.replace(re, '$1' + content + '$2');
}

function priceRange(list) {
  const prices = list.map((p) => p.price);
  return { min: Math.min.apply(null, prices), max: Math.max.apply(null, prices) };
}

const productUrl = (p) => SITE + '/product.html?id=' + encodeURIComponent(p.id);

/* ------------------------------------------------------------------ catalog pages */
function catalogPage(cat) {
  const id = cat ? cat.id : 'all';
  const list = cat ? D.inCategory(cat.id) : D.PRODUCTS;
  const seo = cat ? CAT_SEO[cat.id] || { keywords: [], intro: cat.blurb } : null;
  const range = priceRange(list);
  const file = SZ.categoryUrl(id);
  const url = SITE + '/' + file;

  const title = cat
    ? cat.name + ' Price List 2026 — Buy Online | AGP Crackers Sivakasi'
    : 'Crackers Price List 2026 — Buy Sivakasi Crackers Online | AGP Crackers';
  const desc = cat
    ? 'Buy ' + cat.name + ' online from AGP Crackers, Sivakasi. ' + list.length + ' item' + (list.length === 1 ? '' : 's') + ' from ' + money(range.min) + (range.max !== range.min ? ' to ' + money(range.max) : '') + ' — ' + list.slice(0, 3).map((p) => p.name).join(', ') + '. 2026 price list, order on WhatsApp.'
    : 'Full Sivakasi crackers price list 2026 — ' + D.PRODUCTS.length + ' items: sparklers, flower pots, chakkars, rockets, fancy shots, repeating shots and gift boxes from ' + money(range.min) + '. Wholesale & retail, order on WhatsApp.';
  const keywords = (cat ? [cat.name, cat.name + ' price list 2026', 'buy ' + cat.name.toLowerCase() + ' online', cat.name + ' Sivakasi', seo.tamil].concat(seo.keywords) : [
    'crackers price list 2026', 'Sivakasi crackers price list', 'crackers online', 'full crackers catalog', 'sparklers', 'flower pots', 'ground chakkar', 'rockets', 'repeating shots', 'fancy crackers', 'gift box crackers', 'bijili crackers', 'single sound crackers',
  ]).concat(BASE_KEYWORDS).filter(Boolean);
  const h1 = cat ? cat.name + ' — Price List 2026' : 'Crackers Price List 2026 — All Products';
  const subtitle = cat
    ? cat.blurb + ' ' + list.length + ' item' + (list.length === 1 ? '' : 's') + ' from our 2026 wholesale & retail price list.'
    : D.PRODUCTS.length + ' items across ' + D.CATEGORIES.length + ' categories, priced from our 2026 wholesale & retail price list.';
  const image = abs(list[0] ? list[0].image : 'assets/hero-banner.jpg');

  const crumbs = [{ name: 'Home', url: SITE + '/' }, { name: 'Products', url: SITE + '/products.html' }];
  if (cat) crumbs.push({ name: cat.name, url });

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: h1,
      description: desc,
      url,
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', name: 'AGP Crackers', url: SITE + '/' },
      about: { '@type': 'Thing', name: cat ? cat.name : 'Sivakasi crackers and fireworks' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: list.length,
        itemListElement: list.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: productUrl(p), name: p.name })),
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: c.url })),
    },
  ];

  const others = D.CATEGORIES.filter((c) => c.id !== id);
  const copy = cat
    ? '<h2>Buy ' + esc(cat.name) + ' Online from Sivakasi</h2>' +
      '<p>' + esc(seo.intro) + (seo.tamil ? ' <span lang="ta">(' + esc(seo.tamil) + ')</span>' : '') + '</p>' +
      '<p>Our ' + esc(cat.name.toLowerCase()) + ' range has ' + list.length + ' item' + (list.length === 1 ? '' : 's') + ', priced from ' + money(range.min) + (range.max !== range.min ? ' to ' + money(range.max) : '') + ' per pack on the AGP Crackers 2026 price list. Pick your quantity on each product, add it to your cart, and send the order to us on WhatsApp — we confirm availability, final pricing and delivery with you directly.</p>' +
      '<h3>' + esc(cat.name) + ' prices at a glance</h3>' +
      '<ul>' + list.map((p) => '<li><a href="product.html?id=' + encodeURIComponent(p.id) + '">' + esc(p.name) + '</a> — ' + money(p.price) + ' per ' + esc(p.per) + (p.content && p.content !== '—' ? ' (' + esc(p.content) + ')' : '') + '</li>').join('') + '</ul>'
    : '<h2>Sivakasi Crackers Price List 2026 — Buy Crackers Online</h2>' +
      '<p>AGP Crackers is a wholesale and retail crackers dealer in Sivakasi, Tamil Nadu — the fireworks capital of India. This page lists our complete 2026 crackers price list: ' + D.PRODUCTS.length + ' items across ' + D.CATEGORIES.length + ' categories, from ' + money(range.min) + ' sparkler boxes to ' + money(range.max) + ' repeating shot cakes. <span lang="ta">சிவகாசி பட்டாசு விலை பட்டியல் 2026.</span></p>' +
      '<p>Choose a quantity on any product, add it to your cart and send your order on WhatsApp. For bulk and wholesale orders for shops, events and functions, call us for special pricing.</p>' +
      '<h3>Categories</h3>' +
      '<ul>' + D.CATEGORIES.map((c) => { const r = priceRange(D.inCategory(c.id)); return '<li><a href="' + SZ.categoryUrl(c.id) + '">' + esc(c.name) + '</a> — ' + c.count + ' item' + (c.count === 1 ? '' : 's') + ', from ' + money(r.min) + '</li>'; }).join('') + '</ul>';

  return `<!DOCTYPE html>
<!-- Generated by tools/build-seo.js from js/data.js — edit the template there, then re-run: node tools/build-seo.js -->
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <meta name="keywords" content="${esc(keywords.join(', '))}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#7a1f2b" />
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="Sivakasi" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="assets/logo-badge.jpg" type="image/jpeg" />
    <link rel="stylesheet" href="css/styles.css" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AGP Crackers" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(desc)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(desc)}" />
    <meta name="twitter:image" content="${image}" />
    ${schemas.map(jsonLd).join('\n    ')}
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to main content</a>
    <main id="main">
      <section class="page-hero">
        <div class="wrap">
          <nav aria-label="Breadcrumb"><ol class="crumbs">${crumbs.map((c, i) => i === crumbs.length - 1 ? '<li aria-current="page">' + esc(c.name) + '</li>' : '<li><a href="' + (i === 0 ? 'index.html' : 'products.html') + '">' + esc(c.name) + '</a></li>').join('')}</ol></nav>
          <h1>${esc(h1)}</h1>
          <p>${esc(subtitle)}</p>
        </div>
      </section>

      <section class="section">
        <div class="wrap">
          <nav class="filter-bar" id="filterBar" aria-label="Product categories">${SZ.filterBarHtml(id)}</nav>
          <div class="toolbar-row">
            <p class="muted small" id="resultCount">${list.length} product${list.length === 1 ? '' : 's'}</p>
            <div class="view-toggle" role="group" aria-label="Layout">
              <button class="view-btn active" id="gridBtn" aria-pressed="true"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg> Grid</button>
              <button class="view-btn" id="listBtn" aria-pressed="false"><svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true"><rect x="3" y="4" width="18" height="3" rx="1.5"/><rect x="3" y="10.5" width="18" height="3" rx="1.5"/><rect x="3" y="17" width="18" height="3" rx="1.5"/></svg> List</button>
            </div>
          </div>
          <div class="p-grid" id="productGrid">${list.map(SZ.productCard).join('')}</div>
        </div>
      </section>

      <section class="section bg-alt">
        <div class="wrap seo-copy">
          ${copy}
          <h3>Why buy from AGP Crackers?</h3>
          <ul>
            <li>Direct from Sivakasi — wholesale &amp; retail dealer at published 2026 price list rates.</li>
            <li>Clear pack sizes and quantities on every listing.</li>
            <li>No online payment needed — send your cart on WhatsApp and we confirm your order.</li>
            <li>Bulk orders welcome for shops, weddings, temple festivals and corporate Diwali gifting.</li>
          </ul>
          <h3>${cat ? 'More crackers categories' : 'Shop by category'}</h3>
          <div class="seo-links">${others.map((c) => '<a class="chip" href="' + SZ.categoryUrl(c.id) + '">' + esc(c.name) + '</a>').join('')}</div>
        </div>
      </section>
    </main>

    <script src="js/data.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/app.js"></script>
    <script>
${cat ? '' : `      /* Old ?category= links now live on their own static pages. */
      var legacyCat = new URLSearchParams(window.location.search).get('category');
      if (legacyCat && SZ_DATA.CATEGORIES.some(function (c) { return c.id === legacyCat; })) window.location.replace(SZ.categoryUrl(legacyCat));
`}      SZ.renderLayout('products');
      SZ.renderCatalog(${JSON.stringify(id)});
    </script>
  </body>
</html>
`;
}

/* ------------------------------------------------------------------ home page blocks */
const FEATURED_IDS = ['p16-15-cm-red-sparklers', 'p39-ground-chakkar-deluxe', 'p44-colour-kotti-deluxe-f-p-deluxe', 'p59-lunik-rocket', 'p72-utsaw-color-crackling-fountain', 'p91-16-shots-royal-strong', 'p97-bambaram', 'p110-day-night'];

function catGridHtml() {
  return D.CATEGORIES.map((c) => {
    const first = D.inCategory(c.id)[0];
    const img = first ? first.image : c.image;
    return '<a class="cat-card" href="' + SZ.categoryUrl(c.id) + '">' +
      '<img src="' + img + '" alt="' + esc(c.name) + ' — Sivakasi crackers" width="320" height="240" loading="lazy">' +
      '<div class="overlay"><b>' + esc(c.name) + '</b><span>' + c.count + ' products</span></div></a>';
  }).join('');
}

/* ------------------------------------------------------------------ FAQ page blocks */
function faqListHtml() {
  return D.FAQS.map((f) => '<details class="faq-item"><summary>' + esc(f.q) + '</summary><p>' + esc(f.a) + '</p></details>').join('');
}
function faqSchemaHtml() {
  return jsonLd({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: D.FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });
}

/* ------------------------------------------------------------------ sitemap */
function sitemapXml() {
  const urls = [
    { loc: SITE + '/', freq: 'weekly', pri: '1.0' },
    { loc: SITE + '/products.html', freq: 'weekly', pri: '0.9' },
  ]
    .concat(D.CATEGORIES.map((c) => ({ loc: SITE + '/' + SZ.categoryUrl(c.id), freq: 'weekly', pri: '0.8' })))
    .concat(['about.html', 'faq.html', 'contact.html', 'safety.html'].map((f) => ({ loc: SITE + '/' + f, freq: 'monthly', pri: '0.6' })))
    .concat([{ loc: SITE + '/terms.html', freq: 'yearly', pri: '0.3' }])
    .concat(D.PRODUCTS.map((p) => ({ loc: productUrl(p), freq: 'weekly', pri: '0.7', img: abs(p.image), title: p.name })));

  return '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n' +
    urls.map((u) =>
      '  <url>\n' +
      '    <loc>' + esc(u.loc) + '</loc>\n' +
      '    <lastmod>' + TODAY + '</lastmod>\n' +
      '    <changefreq>' + u.freq + '</changefreq>\n' +
      '    <priority>' + u.pri + '</priority>\n' +
      (u.img ? '    <image:image><image:loc>' + esc(u.img) + '</image:loc><image:title>' + esc(u.title) + '</image:title></image:image>\n' : '') +
      '  </url>\n'
    ).join('') +
    '</urlset>\n';
}

/* ------------------------------------------------------------------ run */
console.log('Building static SEO pages…');
write('products.html', catalogPage(null));
D.CATEGORIES.forEach((c) => write(SZ.categoryUrl(c.id), catalogPage(c)));

let home = read('index.html');
home = replaceBlock(home, 'home-cats', catGridHtml());
home = replaceBlock(home, 'home-featured', FEATURED_IDS.map((id) => D.byId(id)).filter(Boolean).map(SZ.productCard).join(''));
write('index.html', home);

let faq = read('faq.html');
faq = replaceBlock(faq, 'faq-list', faqListHtml());
faq = replaceBlock(faq, 'faq-schema', faqSchemaHtml());
write('faq.html', faq);

write('sitemap.xml', sitemapXml());
console.log('Done.');
