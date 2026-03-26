/* ============================
   Products Page – products.js
   ============================ */

let allProducts = [];

document.addEventListener('DOMContentLoaded', async () => {
  // Highlight active nav link
  document.querySelectorAll('.navbar-nav a').forEach((a) => {
    if (a.href === window.location.href) a.classList.add('active');
  });

  // Read category filter from URL query string
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');

  // Set dropdown default
  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter && categoryParam) categoryFilter.value = categoryParam;

  await loadProducts();

  // Search and filter listeners
  document.getElementById('search-input')?.addEventListener('input', filterProducts);
  categoryFilter?.addEventListener('change', filterProducts);
});

async function loadProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '<div class="loading-wrapper"><div class="spinner"></div></div>';

  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Failed to fetch');
    allProducts = await res.json();
    filterProducts();
  } catch {
    // Backend unavailable – use demo products (works on GitHub Pages)
    if (typeof DEMO_PRODUCTS === 'undefined') {
      console.warn('DEMO_PRODUCTS not loaded – check that js/data.js is included before this script.');
    }
    allProducts = typeof DEMO_PRODUCTS !== 'undefined' ? DEMO_PRODUCTS : [];
    filterProducts();
  }
}

function filterProducts() {
  const search = (document.getElementById('search-input')?.value || '').toLowerCase();
  const category = document.getElementById('category-filter')?.value || '';

  const filtered = allProducts.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search);
    const matchCategory = !category || p.category === category;
    return matchSearch && matchCategory;
  });

  renderProducts(filtered);
}

function renderProducts(products) {
  const grid = document.getElementById('products-grid');
  const countEl = document.getElementById('product-count');
  if (countEl) countEl.textContent = `${products.length} product${products.length !== 1 ? 's' : ''} found`;

  if (products.length === 0) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column:1/-1;padding:60px;">
        <div style="font-size:3rem;margin-bottom:15px;">🔍</div>
        <h3>No products found</h3>
        <p style="color:#636e72;margin-top:8px;">Try a different search or category.</p>
      </div>`;
    return;
  }

  grid.innerHTML = products.map(buildProductCard).join('');
}
