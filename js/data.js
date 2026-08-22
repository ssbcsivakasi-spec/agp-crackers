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

  /** Real product photos, keyed by S.No — falls back to a stock photo when absent. */
  const REAL_IMAGES = {
    // Products without a dedicated code-numbered photo yet — keep prior real photos.
    49: 'assets/products/chotta-bheem-tri-color.jpg',
    62: 'assets/products/sun-light.jpg',
    63: 'assets/products/moon-light.jpg',
    71: 'assets/products/mega-star-crackling-fountain.jpg',
    73: 'assets/products/mega-peacock.jpg',
    75: 'assets/products/bingo-mini-fancy.jpg',
    89: 'assets/products/honeybee-12-shots.jpg',
    90: 'assets/products/medowells-12-shots.jpg',
    91: 'assets/products/royal-strong-16-shots.jpg',
    92: 'assets/products/8pm-25-shots.jpg',
    93: 'assets/products/bacardi-30-shots.jpg',
    94: 'assets/products/johnnie-walker-60-shots.jpg',
    95: 'assets/products/signature-120-shots.jpg',
    96: 'assets/products/bombay-sapphire-200-shots.jpg',
    106: 'assets/products/minions-fountain.jpg',
    107: 'assets/products/jungle-series-fountain.jpg',

    // Code-numbered photos (background removed), keyed by product S.No.
    1: 'assets/background-remover/1.png',
    2: 'assets/background-remover/2.png',
    3: 'assets/background-remover/3.png',
    4: 'assets/background-remover/4.png',
    5: 'assets/background-remover/5.png',
    6: 'assets/background-remover/6.png',
    7: 'assets/background-remover/7.png',
    8: 'assets/background-remover/8.png',
    9: 'assets/background-remover/9.png',
    10: 'assets/background-remover/10.png',
    11: 'assets/background-remover/11.png',
    12: 'assets/background-remover/12.png',
    13: 'assets/background-remover/13.png',
    14: 'assets/background-remover/14.png',
    15: 'assets/background-remover/15.png',
    16: 'assets/background-remover/16.png',
    17: 'assets/background-remover/17.png',
    18: 'assets/background-remover/18.png',
    19: 'assets/background-remover/19.png',
    20: 'assets/background-remover/20.png',
    21: 'assets/background-remover/21.png',
    22: 'assets/background-remover/22.png',
    23: 'assets/background-remover/23.png',
    24: 'assets/background-remover/24.png',
    25: 'assets/background-remover/25.jpeg',
    26: 'assets/background-remover/26.png',
    27: 'assets/background-remover/27.jpeg',
    28: 'assets/background-remover/28.jpeg',
    29: 'assets/background-remover/29.jpeg',
    30: 'assets/background-remover/30.jpeg',
    31: 'assets/background-remover/31.webp',
    32: 'assets/background-remover/32.webp',
    33: 'assets/background-remover/33.webp',
    34: 'assets/background-remover/34.jpeg',
    35: 'assets/background-remover/35.webp',
    36: 'assets/background-remover/36.webp',
    37: 'assets/background-remover/37.png',
    38: 'assets/background-remover/38.png',
    39: 'assets/background-remover/39.png',
    40: 'assets/background-remover/40.png',
    41: 'assets/background-remover/41.png',
    42: 'assets/background-remover/42.png',
    43: 'assets/background-remover/43.png',
    44: 'assets/background-remover/44.png',
    45: 'assets/background-remover/45.png',
    46: 'assets/background-remover/46.png',
    47: 'assets/background-remover/47.png',
    48: 'assets/background-remover/48.png',
    50: 'assets/background-remover/50.png',
    51: 'assets/background-remover/51.png',
    52: 'assets/background-remover/52.png',
    53: 'assets/background-remover/53.jpeg',
    54: 'assets/background-remover/54.png',
    55: 'assets/background-remover/55.png',
    56: 'assets/background-remover/56.png',
    57: 'assets/background-remover/57.webp',
    58: 'assets/background-remover/58.jpg',
    59: 'assets/background-remover/59.jpeg',
    60: 'assets/background-remover/60.png',
    61: 'assets/background-remover/61.png',
    64: 'assets/background-remover/64.png',
    65: 'assets/background-remover/65.jpeg',
    66: 'assets/background-remover/66.png',
    67: 'assets/background-remover/67.jpeg',
    68: 'assets/background-remover/68.jpeg',
    69: 'assets/background-remover/69.png',
    70: 'assets/background-remover/70.png',
    72: 'assets/background-remover/72.png',
    74: 'assets/background-remover/74.jpeg',
    76: 'assets/background-remover/76.png',
    77: 'assets/background-remover/77.jpeg',
    78: 'assets/background-remover/78.png',
    79: 'assets/background-remover/79.webp',
    80: 'assets/background-remover/80.png',
    81: 'assets/background-remover/81.webp',
    82: 'assets/background-remover/82.png',
    83: 'assets/background-remover/83.png',
    84: 'assets/background-remover/84.png',
    85: 'assets/background-remover/85.webp',
    86: 'assets/background-remover/86.png',
    87: 'assets/background-remover/87.png',
    88: 'assets/background-remover/88.png',
    97: 'assets/background-remover/97.png',
    98: 'assets/background-remover/98.jpg',
    99: 'assets/background-remover/99.png',
    100: 'assets/background-remover/100.png',
    101: 'assets/background-remover/101.jpg',
    102: 'assets/background-remover/102.jpeg',
    103: 'assets/background-remover/103.jpeg',
    104: 'assets/background-remover/104.jpeg',
    105: 'assets/background-remover/105.png',
    108: 'assets/background-remover/108.webp',
    109: 'assets/background-remover/109.webp',
    110: 'assets/background-remover/110.webp',
  };

  /* Derived fields: real photos where available (else stock), category names, search text */
  PRODUCTS.forEach((p) => {
    const real = REAL_IMAGES[p.sno];
    p.images = real ? [real] : [photo(p.id + '-1'), photo(p.id + '-2')];
    p.image = p.images[0];
    p.categoryName = (CATEGORIES.find((c) => c.id === p.category) || {}).name || p.category;
    p.search = (p.name + ' ' + p.categoryName).toLowerCase();
    p.code = String(p.sno).padStart(3, '0');
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
