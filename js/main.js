/* ==========================================================================
   Zivra — Site Logic
   Cart is stored in the browser's localStorage under the key "Zivra_cart".
   No backend/server is required — this works entirely on GitHub Pages.
   For real checkout, WhatsApp order handoff is used (see WHATSAPP_NUMBER below).
   ========================================================================== */

/* ---- SETTINGS: edit these for your store ---- */
const STORE_NAME = "Zivra";
const WHATSAPP_NUMBER = "923001234567"; // <-- apna WhatsApp number yahan daalen (country code ke saath, + nahi)
const CURRENCY = "Rs. ";

/* ---------------------------------------------------------------------- */
/* PLACEHOLDER JEWELLERY ART (SVG)                                        */
/* Replace product.image in js/data.js with a real photo path any time —  */
/* until then, a tasteful gold-line illustration is generated instead.    */
/* ---------------------------------------------------------------------- */
const TONE_COLORS = {
  gold:   { bg1: "#f4e6c9", bg2: "#e9cf9a", line: "#8a6a2f" },
  rose:   { bg1: "#f3d9d3", bg2: "#e8c0b8", line: "#8a4a3f" },
  silver: { bg1: "#e9e6e0", bg2: "#d6d1c8", line: "#5c574d" },
};

const ICON_PATHS = {
  ring:     `<circle cx="100" cy="118" r="34" fill="none" stroke="var(--line)" stroke-width="3"/><path d="M84 88 L100 58 L116 88" fill="none" stroke="var(--line)" stroke-width="3" stroke-linejoin="round"/><circle cx="100" cy="62" r="6" fill="var(--line)"/>`,
  earring:  `<path d="M100 50 a10 10 0 1 1 0.1 0" fill="none" stroke="var(--line)" stroke-width="3"/><path d="M100 60 L100 90" stroke="var(--line)" stroke-width="3"/><path d="M78 90 Q100 150 122 90 Q100 110 78 90 Z" fill="none" stroke="var(--line)" stroke-width="3"/><circle cx="100" cy="140" r="4" fill="var(--line)"/>`,
  pendant:  `<path d="M70 55 Q100 40 130 55" fill="none" stroke="var(--line)" stroke-width="3"/><circle cx="100" cy="100" r="38" fill="none" stroke="var(--line)" stroke-width="3"/><path d="M100 62 L100 78" stroke="var(--line)" stroke-width="3"/>`,
  bracelet: `<ellipse cx="100" cy="100" rx="55" ry="30" fill="none" stroke="var(--line)" stroke-width="3"/><circle cx="45" cy="100" r="5" fill="var(--line)"/><circle cx="155" cy="100" r="5" fill="var(--line)"/><circle cx="100" cy="70" r="5" fill="var(--line)"/><circle cx="100" cy="130" r="5" fill="var(--line)"/>`,
  set:      `<path d="M70 50 Q100 35 130 50" fill="none" stroke="var(--line)" stroke-width="3"/><circle cx="100" cy="95" r="30" fill="none" stroke="var(--line)" stroke-width="3"/><path d="M60 150 a10 10 0 1 1 0.1 0" fill="none" stroke="var(--line)" stroke-width="2.5"/><path d="M140 150 a10 10 0 1 1 0.1 0" fill="none" stroke="var(--line)" stroke-width="2.5"/>`,
};

function placeholderSVG(product) {
  const tone = TONE_COLORS[product.tone] || TONE_COLORS.gold;
  const icon = ICON_PATHS[product.type] || ICON_PATHS.pendant;
  const uid = "g" + product.id;
  return `
  <svg viewBox="0 0 200 200" class="ph-art" role="img" aria-label="${product.name}" style="--line:${tone.line}">
    <defs>
      <linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${tone.bg1}"/>
        <stop offset="1" stop-color="${tone.bg2}"/>
      </linearGradient>
    </defs>
    <rect width="200" height="200" fill="url(#${uid})"/>
    <g class="ph-icon">${icon}</g>
  </svg>`;
}

function productImageHTML(product) {
  if (product.image) {
    return `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
  }
  return placeholderSVG(product);
}

/* ---------------------------------------------------------------------- */
/* CART                                                                    */
/* ---------------------------------------------------------------------- */
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("Zivra_cart")) || [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("Zivra_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart(cart);
  showToast("Cart mein shamil ho gaya!");
}

function removeFromCart(id) {
  saveCart(getCart().filter(item => item.id !== id));
}

function setQty(id, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, qty);
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function cartDetailed() {
  return getCart().map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    return product ? { ...product, qty: item.qty } : null;
  }).filter(Boolean);
}

function cartTotal() {
  return cartDetailed().reduce((sum, p) => sum + p.price * p.qty, 0);
}

function updateCartBadge() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

/* ---------------------------------------------------------------------- */
/* TOAST (small confirmation message)                                     */
/* ---------------------------------------------------------------------- */
function showToast(msg) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("toast--show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("toast--show"), 2200);
}

/* ---------------------------------------------------------------------- */
/* PRODUCT CARD RENDERING                                                 */
/* ---------------------------------------------------------------------- */
function productCardHTML(p) {
  const oldPriceHTML = p.oldPrice ? `<span class="price-old">${CURRENCY}${p.oldPrice.toLocaleString()}</span>` : "";
  const badgeHTML = p.badge ? `<span class="badge badge--${p.badge.toLowerCase()}">${p.badge}</span>` : "";
  return `
  <article class="card" data-id="${p.id}">
    <a href="product.html?id=${p.id}" class="card-media">
      ${badgeHTML}
      ${productImageHTML(p)}
      <span class="card-shine"></span>
    </a>
    <div class="card-body">
      <p class="card-cat">${categoryLabel(p.category)}</p>
      <h3 class="card-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
      <p class="card-price">${CURRENCY}${p.price.toLocaleString()} ${oldPriceHTML}</p>
      <button class="btn btn-outline btn-sm" onclick="addToCart(${p.id});event.stopPropagation();">Add to Cart</button>
    </div>
  </article>`;
}

function renderGrid(container, products) {
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = `<p class="empty-msg">Koi product nahi mila. Kisi aur category try karein.</p>`;
    return;
  }
  container.innerHTML = products.map(productCardHTML).join("");
}

/* ---------------------------------------------------------------------- */
/* MOBILE MENU                                                            */
/* ---------------------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    nav.classList.toggle("main-nav--open");
    toggle.classList.toggle("menu-toggle--open");
  });
}

/* ---------------------------------------------------------------------- */
/* NEWSLETTER (demo only — no backend)                                    */
/* ---------------------------------------------------------------------- */
function initNewsletter() {
  const form = document.querySelector(".newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast("Shukriya! Aap subscribe ho gaye hain.");
    form.reset();
  });
}

/* ---------------------------------------------------------------------- */
/* INIT (runs on every page)                                              */
/* ---------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initMobileMenu();
  initNewsletter();

  // fill any populated category nav lists dynamically where present
  document.querySelectorAll("[data-cat-list]").forEach(list => {
    list.innerHTML = CATEGORIES.map(c => `<a href="shop.html?cat=${c.id}">${c.label}</a>`).join("");
  });
});
