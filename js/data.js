/* ==========================================================================
   AGP Crackers — product catalog
   Sourced from the AGP Crackers 2026 price list (Sivakasi). Prices are the
   dealer list rates; final pricing is confirmed by the shop on enquiry.
   ========================================================================== */

window.SZ_DATA = (function () {
  'use strict';

  /** Stable stock-photo URL for a given seed (picsum.photos, royalty-free). */
  const photo = (seed, w, h) => 'https://picsum.photos/seed/' + seed + '/' + (w || 700) + '/' + (h || 700);

  const CATEGORIES = [
    { id: 'sparklers', name: 'Sparklers', blurb: 'Electric, colour, green and red sparklers in every length.', image: photo('agp-sparklers', 640, 480) },
    { id: 'single-sound', name: 'Single Sound Crackers', blurb: 'Kuruvi, Lakshmi and classic single-shot bursts.', image: photo('agp-singlesound', 640, 480) },
    { id: 'bijili', name: 'Bijili Crackers', blurb: 'Bagged bijili in bulk counts, from 50 pieces to 5000.', image: photo('agp-bijili', 640, 480) },
    { id: 'chakkars', name: 'Chakkars', blurb: 'Ground-spinning chakkars from puppy to deluxe.', image: photo('agp-chakkars', 640, 480) },
    { id: 'flower-pots', name: 'Flower Pots', blurb: 'Classic and colour flower pots, including deluxe and tri-colour.', image: photo('agp-flowerpots', 640, 480) },
    { id: 'twinkling-star', name: 'Twinkling Star', blurb: 'Handheld twinkling star sticks in two sizes.', image: photo('agp-twinklingstar', 640, 480) },
    { id: 'pencil-torch', name: 'Pencil Torch', blurb: 'Double blast pencil torch guns.', image: photo('agp-penciltorch', 640, 480) },
    { id: 'bombs', name: 'Bombs', blurb: 'Deluxe, digital and paper bombs.', image: photo('agp-bombs', 640, 480) },
    { id: 'rockets', name: 'Rockets', blurb: 'Rocket bombs, Lunik and whistling rockets.', image: photo('agp-rockets', 640, 480) },
    { id: 'ariel-fountain', name: 'Ariel Fountain', blurb: 'Ground and ariel fountains — pops, showers, sirens and peacocks.', image: photo('agp-arielfountain', 640, 480) },
    { id: 'fancy-novelties', name: 'Fancy & Novelties', blurb: 'Ariel novelties and fancy single-shot shells, 1" to 3.5".', image: photo('agp-fancy', 640, 480) },
    { id: 'repeating-shots', name: 'Repeating Shots', blurb: 'Repeater shell cakes from 6 shots up to 200 shots.', image: photo('agp-repeating', 640, 480) },
    { id: 'children-crackers', name: 'Children Crackers', blurb: 'Bambaram, Jee Boom Baa and other kid-friendly novelties.', image: photo('agp-children', 640, 480) },
    { id: 'new-varieties', name: 'New Varieties', blurb: 'This season’s new items — fountains, cylinder bombs and more.', image: photo('agp-newvarieties', 640, 480) },
    { id: 'match-boxes', name: 'Match Boxes', blurb: 'Laptop-style match boxes, 100 pieces per box.', image: photo('agp-matchboxes', 640, 480) },
    { id: 'gift-boxes', name: 'Gift Boxes', blurb: 'Curated assortment gift boxes for festival gifting.', image: photo('agp-giftboxes', 640, 480) },
  ];

  const SAFETY_POINTS = [
    'Sold to adults aged 18 or over (or the minimum legal age where you live).',
    'Store in a cool, dry place away from heat sources and flammable materials.',
    'Read the manufacturer instructions printed on the item before any use.',
    'Use only where local laws and regulations permit, in an open outdoor area.',
    'Adult supervision is required at all times when children are present.',
    'Dispose of used items safely once fully cooled, following local guidance.',
  ];

  /* [S.No, Name, category, per, content, price] — transcribed from the price list. */
  const RAW = [
    [1, '7 cm Electric Sparklers', 'sparklers', '1 Box', '10 Pcs', 9],
    [2, '7 cm Colour Sparklers', 'sparklers', '1 Box', '10 Pcs', 11],
    [3, '7 cm Green Sparklers', 'sparklers', '1 Box', '10 Pcs', 13],
    [4, '7 cm Red Sparklers', 'sparklers', '1 Box', '10 Pcs', 15],
    [5, '10 cm Electric Sparklers', 'sparklers', '1 Box', '10 Pcs', 16],
    [6, '10 cm Colour Sparklers', 'sparklers', '1 Box', '10 Pcs', 18],
    [7, '10 cm Green Sparklers', 'sparklers', '1 Box', '10 Pcs', 20],
    [8, '10 cm Red Sparklers', 'sparklers', '1 Box', '10 Pcs', 22],
    [9, '12 cm Electric Sparklers', 'sparklers', '1 Box', '10 Pcs', 24],
    [10, '12 cm Colour Sparklers', 'sparklers', '1 Box', '10 Pcs', 26],
    [11, '12 cm Green Sparklers', 'sparklers', '1 Box', '10 Pcs', 29],
    [12, '12 cm Red Sparklers', 'sparklers', '1 Box', '10 Pcs', 33],
    [13, '15 cm Electric Sparklers', 'sparklers', '1 Box', '10 Pcs', 39],
    [14, '15 cm Colour Sparklers', 'sparklers', '1 Box', '10 Pcs', 43],
    [15, '15 cm Green Sparklers', 'sparklers', '1 Box', '10 Pcs', 46],
    [16, '15 cm Red Sparklers', 'sparklers', '1 Box', '10 Pcs', 50],
    [17, '30 cm Electric Sparklers', 'sparklers', '1 Box', '5 Pcs', 39],
    [18, '30 cm Colour Sparklers', 'sparklers', '1 Box', '5 Pcs', 43],
    [19, '30 cm Green Sparklers', 'sparklers', '1 Box', '5 Pcs', 46],
    [20, '30 cm Red Sparklers', 'sparklers', '1 Box', '5 Pcs', 50],
    [21, '50 cm Electric Sparklers', 'sparklers', '1 Box', '5 Pcs', 150],
    [22, '50 cm Colour Sparklers', 'sparklers', '1 Box', '5 Pcs', 170],
    [23, 'Rotating Red & Green Sparklers', 'sparklers', '1 Box', '—', 220],

    [24, '2 3/4" Kuruvi', 'single-sound', '1 Pkt', '5 Pcs', 10],
    [25, '3 1/2" Lakshmi', 'single-sound', '1 Pkt', '5 Pcs', 17],
    [26, '4" Lakshmi', 'single-sound', '1 Pkt', '5 Pcs', 20],
    [27, '4" Deluxe Lakshmi', 'single-sound', '1 Pkt', '5 Pcs', 32],
    [28, '4" Gold Lakshmi', 'single-sound', '1 Pkt', '5 Pcs', 35],
    [29, '5" Titoo / Lakshmi', 'single-sound', '1 Pkt', '5 Pcs', 55],
    [30, 'Two Sound', 'single-sound', '1 Pkt', '5 Pcs', 38],

    [31, 'Red Bijili (50 Pcs)', 'bijili', '1 Bag', '50 Pcs', 18],
    [32, 'Red Bijili (100 Pcs)', 'bijili', '1 Bag', '100 Pcs', 36],
    [33, 'Stripped Bijili', 'bijili', '1 Bag', '100 Pcs', 40],
    [34, 'Red Bijili Hundred', 'bijili', '1 Bag', '1 Pce', 50],
    [35, 'Red Bijili Thousand', 'bijili', '1 Bag', '1 Pce', 180],
    [36, 'Red Bijili Five Thousand', 'bijili', '1 Bag', '1 Pce', 900],

    [37, 'Ground Chakkar Puppy', 'chakkars', '1 Box', '10 Pcs', 47],
    [38, 'Ground Chakkar Special', 'chakkars', '1 Box', '10 Pcs', 70],
    [39, 'Ground Chakkar Deluxe', 'chakkars', '1 Box', '10 Pcs', 120],
    [40, 'Spinner Special', 'chakkars', '1 Box', '10 Pcs', 130],

    [41, 'Flower Pots Big', 'flower-pots', '1 Box', '10 Pcs', 70],
    [42, 'Flower Pots Special', 'flower-pots', '1 Box', '10 Pcs', 90],
    [43, 'Colour Kotti', 'flower-pots', '1 Box', '10 Pcs', 200],
    [44, 'Colour Kotti Deluxe / F P Deluxe', 'flower-pots', '1 Box', '10 Pcs', 330],
    [45, 'Red Flower Pots Big', 'flower-pots', '1 Box', '10 Pcs', 180],
    [46, 'Rangeela / Lucky Red & Green', 'flower-pots', '1 Box', '5 Pcs', 150],
    [47, 'Pancharanga', 'flower-pots', '1 Box', '5 Pcs', 100],
    [48, 'Flower Pots Ashoka', 'flower-pots', '1 Box', '10 Pcs', 200],
    [49, 'Chotta Bheem Tri Color', 'flower-pots', '1 Box', '10 Pcs', 100],
    [50, 'Tri Colour', 'flower-pots', '1 Box', '5 Pcs', 240],

    [51, '1.5 Feet Twinkling Star', 'twinkling-star', '1 Box', '10 Pcs', 30],
    [52, '4 Feet Twinkling Star', 'twinkling-star', '1 Box', '10 Pcs', 80],

    [53, 'Double Blast Gun', 'pencil-torch', '1 Box', '2 Pcs', 200],

    [54, 'Deluxe Bullet Bomb', 'bombs', '1 Box', '10 Pcs', 40],
    [55, 'King of King Green', 'bombs', '1 Box', '10 Pcs', 100],
    [56, 'Digital Bomb', 'bombs', '1 Box', '10 Pcs', 240],
    [57, 'Paper Bomb 250', 'bombs', '1 Box', '1 Pce', 50],

    [58, 'Rocket Bomb', 'rockets', '1 Box', '10 Pcs', 70],
    [59, 'Lunik Rocket', 'rockets', '1 Box', '10 Pcs', 130],
    [60, 'Whistling Rocket', 'rockets', '1 Box', '10 Pcs', 210],

    [61, '3D Pops', 'ariel-fountain', '1 Box', '3 Pcs', 60],
    [62, 'Sun Light', 'ariel-fountain', '1 Box', '5 Pcs', 80],
    [63, 'Moon Light', 'ariel-fountain', '1 Box', '5 Pcs', 80],
    [64, 'Tom & Jerry', 'ariel-fountain', '1 Box', '10 Pcs', 80],
    [65, 'Traffic Lights', 'ariel-fountain', '1 Box', '5 Pcs', 80],
    [66, 'Sizzler Red Green', 'ariel-fountain', '1 Box', '1 Pce', 80],
    [67, 'Disco Shower', 'ariel-fountain', '1 Box', '5 Pcs', 90],
    [68, 'Glittering Pops', 'ariel-fountain', '1 Box', '5 Pcs', 90],
    [69, 'Mini Siren / Bannsuri', 'ariel-fountain', '1 Box', '5 Pcs', 170],
    [70, 'Mega Siren', 'ariel-fountain', '1 Box', '2 Pcs', 190],
    [71, 'Mega Star / Cocktail', 'ariel-fountain', '1 Box', '3 Pcs', 260],
    [72, 'Utsaw Color Crackling Fountain', 'ariel-fountain', '1 Box', '3 Pcs', 370],
    [73, 'Mega Peacock', 'ariel-fountain', '1 Box', '1 Pce', 140],

    [74, '7 Shots / Spice Crackling', 'fancy-novelties', '1 Box', '5 Pcs', 130],
    [75, 'Bingo Mini Fancy', 'fancy-novelties', '1 Box', '5 Pcs', 180],
    [76, '1" Fancy', 'fancy-novelties', '1 Box', '1 Pce', 40],
    [77, '1 3/4" Fancy / 2" Fancy', 'fancy-novelties', '1 Box', '3 Pcs', 300],
    [78, '2" Fancy', 'fancy-novelties', '1 Box', '1 Pce', 100],
    [79, '2 1/4" Fancy', 'fancy-novelties', '1 Box', '3 Pcs', 380],
    [80, '3" Fancy', 'fancy-novelties', '1 Box', '1 Pce', 330],
    [81, '3 1/4" Fancy', 'fancy-novelties', '1 Box', '1 Pce', 350],
    [82, '3 1/4" Fancy Love Series', 'fancy-novelties', '1 Box', '1 Pce', 360],
    [83, '3 1/2" Fancy', 'fancy-novelties', '1 Box', '1 Pce', 450],
    [84, '3 1/2" Fancy (2 Pcs)', 'fancy-novelties', '1 Box', '2 Pcs', 700],
    [85, '2" Double Ball Fancy', 'fancy-novelties', '1 Box', '2 Pcs', 460],

    [86, '6 Shots Love Dose', 'repeating-shots', '1 Box', '1 Pce', 100],
    [87, '10 Shots', 'repeating-shots', '1 Box', '1 Pce', 200],
    [88, '12 Shots Rider', 'repeating-shots', '1 Box', '1 Pce', 180],
    [89, '12 Shots Honeybee', 'repeating-shots', '1 Box', '1 Pce', 230],
    [90, '12 Shots Medowells', 'repeating-shots', '1 Box', '1 Pce', 240],
    [91, '16 Shots Royal Strong', 'repeating-shots', '1 Box', '1 Pce', 300],
    [92, '25 Shots 8 PM', 'repeating-shots', '1 Box', '1 Pce', 400],
    [93, '30 Shots Bacardi', 'repeating-shots', '1 Box', '1 Pce', 570],
    [94, '60 Shots Johnnie Walker', 'repeating-shots', '1 Box', '1 Pce', 1140],
    [95, '120 Shots Signature', 'repeating-shots', '1 Box', '1 Pce', 2280],
    [96, '200 Shots Bombay Saphire', 'repeating-shots', '1 Box', '1 Pce', 3800],

    [97, 'Bambaram', 'children-crackers', '1 Box', '5 Pcs', 70],
    [98, 'Jee Boom Baa', 'children-crackers', '1 Box', '50 Pcs', 125],
    [99, 'Power Stone', 'children-crackers', '1 Box', '10 Pcs', 40],
    [100, 'Assorted Cartoons', 'children-crackers', '1 Box', '10 Pcs', 40],
    [101, 'Egg Serphant', 'children-crackers', '1 Box', '50 Pcs', 40],

    [102, 'Money In The Bank', 'new-varieties', '1 Box', '3 Pcs', 140],
    [103, 'Helicopter', 'new-varieties', '1 Box', '5 Pcs', 75],
    [104, 'Candy Crush', 'new-varieties', '1 Box', '25 Pcs', 140],
    [105, 'Cylinder Bomb', 'new-varieties', '1 Box', '2 Pcs', 250],
    [106, 'Minions Fountain', 'new-varieties', '1 Box', '5 Pcs', 120],
    [107, 'Jungle Series Fountain', 'new-varieties', '1 Box', '1 Pce', 180],

    [108, 'Match Box Laptop', 'match-boxes', '1 Box', '100 Pcs', 240],
    [109, 'Match Box Max Laptop', 'match-boxes', '1 Box', '100 Pcs', 180],

    [110, 'Day Night', 'gift-boxes', '1 Box', '35 Pcs', 1000],
  ];

  const slugify = (s) =>
    String(s).toLowerCase().replace(/&/g, 'and').replace(/["'“”]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const PRODUCTS = RAW.map((r) => ({
    id: 'p' + r[0] + '-' + slugify(r[1]),
    sno: r[0],
    name: r[1],
    category: r[2],
    per: r[3],
    content: r[4],
    price: r[5],
  }));

  /* Derived fields: stock photos, category names, search text */
  PRODUCTS.forEach((p) => {
    p.images = [photo(p.id + '-1'), photo(p.id + '-2')];
    p.image = p.images[0];
    p.categoryName = (CATEGORIES.find((c) => c.id === p.category) || {}).name || p.category;
    p.search = (p.name + ' ' + p.categoryName).toLowerCase();
  });

  const CATEGORY_COUNTS = CATEGORIES.map((c) => ({ ...c, count: PRODUCTS.filter((p) => p.category === c.id).length }));

  const FAQS = [
    { q: 'Who can place an order?', a: 'Purchases are restricted to adults aged 18 or over, or the minimum legal age in your area if it is higher.' },
    { q: 'Do you check local regulations for me?', a: 'No — rules vary by state, city and neighbourhood, including permitted dates, times and product categories. You are responsible for confirming what is allowed where you live before ordering.' },
    { q: 'How should I store fireworks after delivery?', a: 'Keep them sealed in their original packaging in a cool, dry place, away from heat sources, direct sunlight and anything flammable.' },
    { q: 'How do I place an order?', a: 'Add items to your cart, go to checkout, and enter your name, phone number and address. A bill (PDF) will be generated and downloaded automatically — send it to us on WhatsApp to confirm your order.' },
    { q: 'Do you do wholesale?', a: 'Yes — AGP Crackers is a wholesale and retail dealer. Contact us directly by phone or WhatsApp for bulk pricing.' },
    { q: 'Is this a real store?', a: 'The product catalog and prices reflect our real 2026 price list. This website itself is a demo storefront — orders are confirmed manually over WhatsApp, not processed online.' },
  ];

  return {
    CATEGORIES: CATEGORY_COUNTS,
    PRODUCTS,
    SAFETY_POINTS,
    FAQS,
    byId: (id) => PRODUCTS.find((p) => p.id === id),
    inCategory: (cat) => PRODUCTS.filter((p) => p.category === cat),
  };
})();
