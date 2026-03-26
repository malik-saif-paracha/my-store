/* ============================
   Homepage – main.js
   ============================ */

document.addEventListener('DOMContentLoaded', async () => {
  loadFeaturedProducts();
});

async function loadFeaturedProducts() {
  const grid = document.getElementById('featured-products');
  if (!grid) return;

  grid.innerHTML = '<div class="loading-wrapper"><div class="spinner"></div></div>';

  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const products = await res.json();

    if (products.length === 0) {
      grid.innerHTML = `
        <div class="text-center" style="grid-column:1/-1;padding:40px;">
          <p style="color:#636e72;">No products available yet. Check back soon!</p>
        </div>`;
      return;
    }

    // Show up to 8 featured products
    grid.innerHTML = products
      .slice(0, 8)
      .map(buildProductCard)
      .join('');
  } catch (err) {
    grid.innerHTML = `
      <div class="text-center" style="grid-column:1/-1;padding:40px;">
        <p style="color:#636e72;">Unable to load products. Make sure the backend server is running.</p>
      </div>`;
  }
}
