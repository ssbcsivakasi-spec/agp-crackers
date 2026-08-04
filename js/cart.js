/* ==========================================================================
   AGP Crackers — cart store (localStorage-backed, no backend)
   ========================================================================== */

window.SZ_CART = (function () {
  'use strict';

  const KEY = 'agp_cart';
  const D = window.SZ_DATA;

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function save(items) {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch (e) {}
  }

  function add(id, qty) {
    qty = qty || 1;
    const items = load();
    const line = items.find((l) => l.id === id);
    if (line) line.qty += qty; else items.push({ id: id, qty: qty });
    save(items);
    syncBadge();
    const p = D.byId(id);
    toast(p ? p.name + ' added to cart' : 'Added to cart');
  }

  function setQty(id, qty) {
    qty = Math.max(1, parseInt(qty, 10) || 1);
    const items = load();
    const line = items.find((l) => l.id === id);
    if (line) { line.qty = qty; save(items); }
  }

  function remove(id) {
    save(load().filter((l) => l.id !== id));
    syncBadge();
  }

  function clear() {
    save([]);
    syncBadge();
  }

  function lines() {
    return load()
      .map((l) => {
        const p = D.byId(l.id);
        return p ? { product: p, qty: l.qty, lineTotal: p.price * l.qty } : null;
      })
      .filter(Boolean);
  }

  function totals() {
    const ls = lines();
    return {
      count: ls.reduce((n, l) => n + l.qty, 0),
      subtotal: ls.reduce((n, l) => n + l.lineTotal, 0),
    };
  }

  function syncBadge() {
    const el = document.getElementById('cartCount');
    if (!el) return;
    const t = totals();
    el.textContent = t.count;
    el.style.display = t.count ? '' : 'none';
  }

  function toast(msg) {
    let stack = document.querySelector('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      stack.setAttribute('role', 'status');
      stack.setAttribute('aria-live', 'polite');
      document.body.appendChild(stack);
    }
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    stack.appendChild(t);
    setTimeout(() => {
      t.classList.add('leaving');
      setTimeout(() => t.remove(), 300);
    }, 2600);
  }

  document.addEventListener('DOMContentLoaded', syncBadge);

  return { add, setQty, remove, clear, lines, totals, syncBadge, toast };
})();
