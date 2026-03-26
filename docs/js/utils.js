/* ============================
   My Store - Shared Utilities
   ============================ */

const API_BASE = 'http://localhost:5000/api';

// ── Cart helpers ──────────────────────────────────────────────
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find((i) => i._id === product._id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  showToast(`"${product.name}" added to cart 🛒`, 'success');
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach((el) => {
    el.textContent = totalQty;
    el.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

// ── Toast notifications ───────────────────────────────────────
function showToast(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── Image URL helper ─────────────────────────────────────────
function productImageSrc(image) {
  if (!image) return '';
  if (image.startsWith('http')) return image;
  return `${API_BASE.replace('/api', '')}${image}`;
}

// ── Build product card HTML ───────────────────────────────────
function buildProductCard(product) {
  const imgSrc = productImageSrc(product.image);
  const imgHtml = imgSrc
    ? `<img src="${imgSrc}" alt="${escapeHtml(product.name)}" loading="lazy">`
    : `<span class="no-img">🛍️</span>`;

  return `
    <div class="product-card" data-id="${product._id}">
      <div class="product-img">${imgHtml}</div>
      <div class="product-info">
        <div class="product-category">${escapeHtml(product.category)}</div>
        <div class="product-name">${escapeHtml(product.name)}</div>
        <div class="product-desc">${escapeHtml(product.description)}</div>
        <div class="product-footer">
          <span class="product-price">$${Number(product.price).toFixed(2)}</span>
          <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
            Add to Cart
          </button>
        </div>
      </div>
    </div>`;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ── Navbar hamburger ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.navbar-nav');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }
});
