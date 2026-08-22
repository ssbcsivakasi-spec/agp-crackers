/* ==========================================================================
   AGP Crackers — shared layout (header, footer, mobile menu, product cards)
   Simple catalog site with a lightweight cart (see js/cart.js).
   ========================================================================== */

window.SZ = (function () {
  'use strict';

  const D = window.SZ_DATA;
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));
  const money = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  const escapeHtml = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const BRAND = 'AGP Crackers';
  const PHONE = '97886 76576';
  const PHONE2 = '89409 89788';
  const WHATSAPP = 'https://wa.me/919788676576';
  const ADDRESS = '4/255, M. Meenatchipuram, Anaikootam Stop, Virudhunagar Main Road, Sivakasi - 626 005';

  /* Inline SVG icon set — no emoji anywhere on the site. */
  const ICONS = {
    cart: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3h2l.6 3M7 13h10l3-7H5.6M7 13 5.6 6M7 13l-1 4h13"/><circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
    chat: '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.4 0-2.7-.3-3.9-.9L3 21l1.9-5.6A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 10h8M8 13.5h5"/></svg>',
    menu: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  };

  const NAV = [
    { href: 'index.html', label: 'Home', key: 'home' },
    { href: 'products.html', label: 'Products', key: 'products' },
    { href: 'about.html', label: 'About Us', key: 'about' },
    { href: 'safety.html', label: 'Safety Tips', key: 'safety' },
    { href: 'faq.html', label: 'FAQ', key: 'faq' },
    { href: 'contact.html', label: 'Enquiry', key: 'contact' },
  ];

  /* -------------------------------------------------- cookie helpers
     Used to remember checkout details (name/phone/address) in the browser
     only. Nothing here is ever sent to a server — see terms.html. */
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      expires = '; expires=' + d.toUTCString();
    }
    document.cookie = name + '=' + encodeURIComponent(value || '') + expires + '; path=/; SameSite=Lax';
  }
  function getCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : '';
  }
  function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
  }
  var COOKIE_CONSENT_KEY = 'agp_cookie_consent';
  function hasCookieConsent() { return getCookie(COOKIE_CONSENT_KEY) === 'accepted'; }

  function cookieBannerHtml() {
    return (
      '<div class="cookie-banner" id="cookieBanner">' +
      '<div class="wrap cookie-banner-inner">' +
      '<p>We use a cookie to temporarily remember your name, contact number and delivery address on this device, so you don’t have to retype them at checkout. This data is <strong>never sent to or stored on any server</strong> — see our <a href="terms.html">Terms &amp; Conditions</a>.</p>' +
      '<div class="cookie-banner-actions">' +
      '<button class="btn btn-outline btn-sm" id="cookieDecline" type="button">Decline</button>' +
      '<button class="btn btn-primary btn-sm" id="cookieAccept" type="button">Accept</button>' +
      '</div></div></div>'
    );
  }

  function initCookieBanner() {
    if (getCookie(COOKIE_CONSENT_KEY)) return;
    var wrap = document.createElement('div');
    wrap.innerHTML = cookieBannerHtml();
    document.body.appendChild(wrap.firstChild);
    var banner = $('#cookieBanner');
    $('#cookieAccept').addEventListener('click', function () {
      setCookie(COOKIE_CONSENT_KEY, 'accepted', 365);
      banner.remove();
    });
    $('#cookieDecline').addEventListener('click', function () {
      setCookie(COOKIE_CONSENT_KEY, 'declined', 365);
      ['agp_cust_name', 'agp_cust_phone', 'agp_cust_address'].forEach(deleteCookie);
      banner.remove();
    });
  }

  function headerHtml(active) {
    return (
      '<div class="topbar"><div class="wrap">' +
      '<span>18+ only. Always follow local laws and manufacturer instructions.</span>' +
      '<ul class="topbar-links"><li><a href="tel:+91' + PHONE.replace(/\s/g, '') + '">Call: ' + PHONE + '</a></li><li><a href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp</a></li></ul>' +
      '</div></div>' +
      '<header class="site-header"><div class="wrap"><nav class="nav" aria-label="Primary">' +
      '<a class="brand" href="index.html"><img src="assets/logo-badge.jpg" alt="AGP Crackers" width="44" height="44"></a>' +
      '<ul class="nav-links">' +
      NAV.map((n) => '<li><a class="nav-link" href="' + n.href + '"' + (active === n.key ? ' aria-current="page"' : '') + '>' + n.label + '</a></li>').join('') +
      '</ul>' +
      '<div class="nav-actions">' +
      '<a class="icon-link" href="cart.html" aria-label="View cart">' + ICONS.cart + '<span class="count" id="cartCount">0</span></a>' +
      '<button class="burger" id="burger" aria-label="Open menu" aria-expanded="false">' + ICONS.menu + '</button>' +
      '</div></nav>' +
      '<div class="mobile-panel" id="mobilePanel">' +
      NAV.map((n) => '<a href="' + n.href + '"' + (active === n.key ? ' aria-current="page"' : '') + '>' + n.label + '</a>').join('') +
      '<a href="cart.html">Cart</a>' +
      '<a href="' + WHATSAPP + '" target="_blank" rel="noopener">WhatsApp Enquiry</a>' +
      '</div></div></header>'
    );
  }

  function footerHtml() {
    const cats = D.CATEGORIES;
    return (
      '<footer class="site-footer"><div class="wrap">' +
      '<div class="footer-grid">' +
      '<div class="footer-brand"><a class="brand" href="index.html" style="color:#fff"><img src="assets/logo-badge.jpg" alt="AGP Crackers" width="44" height="44"></a>' +
      '<p>Wholesale &amp; retail dealers of crackers, sparklers and fancy varieties. Browse our full price-list catalog and send us your order on WhatsApp.</p></div>' +
      '<div><h4>Products</h4><ul>' + cats.slice(0, 8).map((c) => '<li><a href="products.html?category=' + c.id + '">' + escapeHtml(c.name) + '</a></li>').join('') + '<li><a href="products.html">All categories</a></li></ul></div>' +
      '<div><h4>Company</h4><ul><li><a href="about.html">About us</a></li><li><a href="safety.html">Safety tips</a></li><li><a href="faq.html">FAQ</a></li><li><a href="contact.html">Enquiry</a></li><li><a href="cart.html">Cart</a></li></ul></div>' +
      '<div><h4>Contact</h4><ul><li>' + ADDRESS + '</li><li><a href="tel:+91' + PHONE.replace(/\s/g, '') + '">' + PHONE + '</a></li><li><a href="tel:+91' + PHONE2.replace(/\s/g, '') + '">' + PHONE2 + '</a></li></ul></div>' +
      '</div>' +
      '<div class="footer-note"><span>© ' + new Date().getFullYear() + ' AGP Crackers, Sivakasi.</span>' +
      '<ul class="footer-legal"><li><a href="safety.html">Safety</a></li><li><a href="terms.html">Terms &amp; Conditions</a></li><li><a href="sitemap.xml">Sitemap</a></li></ul></div>' +
      '</div></footer>' +
      '<a class="whatsapp-fab" href="' + WHATSAPP + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + ICONS.chat + '</a>'
    );
  }

  function renderLayout(active) {
    const head = document.createElement('div');
    head.innerHTML = headerHtml(active);
    document.body.insertBefore(head, document.body.firstChild);

    const foot = document.createElement('div');
    foot.innerHTML = footerHtml();
    document.body.appendChild(foot);

    const burger = $('#burger');
    const panel = $('#mobilePanel');
    if (burger && panel) {
      burger.addEventListener('click', () => {
        const open = panel.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
      });
    }

    if (window.SZ_CART) window.SZ_CART.syncBadge();
    initCookieBanner();
  }

  function productCard(p) {
    const href = 'product.html?id=' + encodeURIComponent(p.id);
    return (
      '<article class="p-card" data-id="' + p.id + '">' +
      '<div class="p-media">' +
      '<span class="p-code-badge">' + escapeHtml(p.code) + '</span>' +
      '<a href="' + href + '"><img src="' + p.image + '" alt="' + escapeHtml(p.name) + ' — ' + escapeHtml(p.categoryName) + '" width="500" height="500" loading="lazy" decoding="async"></a>' +
      '</div>' +
      '<div class="p-body">' +
      '<span class="p-cat">' + escapeHtml(p.categoryName) + ' &middot; Code ' + escapeHtml(p.code) + '</span>' +
      '<h3 class="p-name"><a href="' + href + '">' + escapeHtml(p.name) + '</a></h3>' +
      '<p class="p-unit muted small">' + escapeHtml(p.per) + ' &middot; ' + escapeHtml(p.content) + '</p>' +
      '<div class="p-price"><span class="now">' + money(p.price) + '</span><span class="p-per-unit">/ ' + escapeHtml(p.per) + '</span></div>' +
      '<div class="p-foot">' +
      '<button class="btn btn-primary btn-sm btn-block" onclick="SZ_CART.add(\'' + p.id + '\')">Add to Cart</button>' +
      '<a class="btn btn-outline btn-sm btn-block" style="border-color:var(--maroon);color:var(--maroon)" href="' + href + '">Details</a>' +
      '</div>' +
      '</div></article>'
    );
  }

  const renderCards = (target, list) => {
    const node = typeof target === 'string' ? $(target) : target;
    if (node) node.innerHTML = list.map(productCard).join('');
  };

  /* -------------------------------------------------- product quick-view drawer */
  let drawerEls = null;

  function ensureDrawer() {
    if (drawerEls) return drawerEls;
    const overlay = document.createElement('div');
    overlay.className = 'pd-drawer-overlay';
    overlay.id = 'pdDrawerOverlay';

    const drawer = document.createElement('aside');
    drawer.className = 'pd-drawer';
    drawer.id = 'pdDrawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Product details');
    drawer.innerHTML = '<button class="pd-drawer-close" id="pdDrawerClose" aria-label="Close">&times;</button><div class="pd-drawer-body" id="pdDrawerBody"></div>';

    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    function close() {
      overlay.classList.remove('open');
      drawer.classList.remove('open');
      document.body.classList.remove('drawer-open');
    }
    overlay.addEventListener('click', close);
    $('#pdDrawerClose', drawer).addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    drawerEls = { overlay, drawer, close };
    return drawerEls;
  }

  function openProductDrawer(id) {
    const p = D.byId(id);
    if (!p) return;
    const { overlay, drawer, close } = ensureDrawer();
    const body = $('#pdDrawerBody', drawer);

    body.innerHTML =
      '<div class="pd-drawer-img"><img id="pdDrawerMainImg" src="' + p.images[0] + '" alt="' + escapeHtml(p.name) + '" width="500" height="500"></div>' +
      (p.images.length > 1
        ? '<div class="pd-thumbs" id="pdDrawerThumbs">' + p.images.map((img, i) => '<button class="' + (i === 0 ? 'active' : '') + '" data-img="' + img + '"><img src="' + img + '" alt=""></button>').join('') + '</div>'
        : '') +
      '<span class="p-cat">' + escapeHtml(p.categoryName) + ' &middot; Code ' + escapeHtml(p.code) + '</span>' +
      '<h2 class="pd-drawer-name">' + escapeHtml(p.name) + '</h2>' +
      '<p class="muted small">' + escapeHtml(p.per) + ' &middot; ' + escapeHtml(p.content) + '</p>' +
      '<div class="pd-price-row"><span class="now">' + money(p.price) + '</span><span class="muted small">per ' + escapeHtml(p.per) + '</span></div>' +
      '<div class="row" style="gap:12px;margin:16px 0;flex-wrap:wrap">' +
      '<div class="qty-stepper"><button type="button" id="pdDrawerMinus" aria-label="Decrease quantity">&minus;</button><input type="number" id="pdDrawerQty" value="1" min="1" aria-label="Quantity"><button type="button" id="pdDrawerPlus" aria-label="Increase quantity">+</button></div>' +
      '<button class="btn btn-primary" id="pdDrawerAddCart">Add to Cart</button>' +
      '</div>' +
      '<a class="btn btn-outline btn-block" id="pdDrawerWhatsapp" href="#" target="_blank" rel="noopener" style="border-color:var(--maroon);color:var(--maroon)">Ask a question on WhatsApp</a>' +
      '<a class="pd-drawer-fulllink" href="product.html?id=' + encodeURIComponent(p.id) + '">View full product page &rarr;</a>';

    $$('.pd-thumbs button', body).forEach((btn) => {
      btn.addEventListener('click', () => {
        $('#pdDrawerMainImg', body).src = btn.getAttribute('data-img');
        $$('.pd-thumbs button', body).forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    const qtyInput = $('#pdDrawerQty', body);
    $('#pdDrawerMinus', body).addEventListener('click', () => {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    });
    $('#pdDrawerPlus', body).addEventListener('click', () => {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
    $('#pdDrawerAddCart', body).addEventListener('click', () => {
      window.SZ_CART.add(p.id, Math.max(1, parseInt(qtyInput.value, 10) || 1));
    });

    const msg = encodeURIComponent('Hi, I have a question about ' + p.name + ' (' + money(p.price) + ' per ' + p.per + ').');
    $('#pdDrawerWhatsapp', body).href = WHATSAPP + '?text=' + msg;

    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.classList.add('drawer-open');
  }

  /* Delegate clicks on any product card link/button so the sidebar opens
     instead of navigating, without changing how productCard() renders. */
  function enableCardDrawer(containerSelector) {
    const container = typeof containerSelector === 'string' ? $(containerSelector) : containerSelector;
    if (!container) return;
    container.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="product.html?id="]');
      if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const card = link.closest('.p-card');
      if (!card) return;
      e.preventDefault();
      openProductDrawer(card.getAttribute('data-id'));
    });
  }

  return { $, $$, money, escapeHtml, BRAND, PHONE, PHONE2, WHATSAPP, ADDRESS, ICONS, renderLayout, productCard, renderCards, openProductDrawer, enableCardDrawer, setCookie, getCookie, deleteCookie, hasCookieConsent };
})();
