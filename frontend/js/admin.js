/* ============================
   Admin Panel – admin.js
   ============================ */

const ADMIN_API = 'http://localhost:5000/api';

// ── Auth helpers ──────────────────────────────────────────────
function getToken() {
  return localStorage.getItem('adminToken');
}

function authHeaders() {
  return {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
}

function checkAuth() {
  if (!getToken()) {
    window.location.href = 'login.html';
  }
}

function logout() {
  localStorage.removeItem('adminToken');
  window.location.href = 'login.html';
}

// ── Toast ─────────────────────────────────────────────────────
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
    toast.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ── Dashboard ─────────────────────────────────────────────────
async function loadDashboard() {
  checkAuth();
  try {
    const [prodRes, orderRes] = await Promise.all([
      fetch(`${ADMIN_API}/products`),
      fetch(`${ADMIN_API}/orders`, { headers: authHeaders() }),
    ]);

    const products = prodRes.ok ? await prodRes.json() : [];
    const orders = orderRes.ok ? await orderRes.json() : [];

    const cosmeticsCount = products.filter((p) => p.category === 'Cosmetics').length;
    const babyCount = products.filter((p) => p.category === 'Baby Dresses').length;
    const revenue = orders.reduce((sum, o) => sum + (o.totalAmount || 0), 0);

    setInnerText('stat-products', products.length);
    setInnerText('stat-orders', orders.length);
    setInnerText('stat-cosmetics', cosmeticsCount);
    setInnerText('stat-baby', babyCount);
    setInnerText('stat-revenue', `$${revenue.toFixed(2)}`);

    // Recent orders table
    renderOrdersTable(orders.slice(0, 5), 'recent-orders-table');
  } catch (err) {
    console.error(err);
  }
}

// ── Products Management ───────────────────────────────────────
let editingProductId = null;

async function loadProducts() {
  checkAuth();
  const tbody = document.getElementById('products-table');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px">Loading…</td></tr>';

  try {
    const res = await fetch(`${ADMIN_API}/products`);
    const products = await res.json();

    if (products.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px">No products found. Add one!</td></tr>';
      return;
    }

    tbody.innerHTML = products
      .map((p) => {
        const imgSrc = p.image
          ? `${ADMIN_API.replace('/api', '')}${p.image}`
          : null;
        const imgHtml = imgSrc
          ? `<img src="${imgSrc}" class="product-thumb" alt="">`
          : `<div class="product-thumb-placeholder">🛍️</div>`;

        return `
          <tr>
            <td>${imgHtml}</td>
            <td><strong>${escapeHtml(p.name)}</strong></td>
            <td><span class="badge badge-${p.category === 'Cosmetics' ? 'cosmetics' : 'baby'}">${p.category}</span></td>
            <td>$${Number(p.price).toFixed(2)}</td>
            <td>${p.stock}</td>
            <td>
              <button class="btn btn-sm btn-secondary" onclick="openEditModal('${p._id}')">✏️ Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteProduct('${p._id}')">🗑️ Delete</button>
            </td>
          </tr>`;
      })
      .join('');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:30px">No products found. Add one!</td></tr>';
  }
}

function openAddModal() {
  editingProductId = null;
  document.getElementById('modal-title').textContent = 'Add New Product';
  document.getElementById('product-form').reset();
  document.getElementById('image-preview').style.display = 'none';
  document.getElementById('product-modal').classList.remove('hidden');
}

async function openEditModal(id) {
  editingProductId = id;
  document.getElementById('modal-title').textContent = 'Edit Product';

  try {
    const res = await fetch(`${ADMIN_API}/products/${id}`);
    const p = await res.json();

    document.getElementById('product-name').value = p.name;
    document.getElementById('product-price').value = p.price;
    document.getElementById('product-description').value = p.description;
    document.getElementById('product-category').value = p.category;
    document.getElementById('product-stock').value = p.stock;

    const preview = document.getElementById('image-preview');
    if (p.image) {
      preview.src = `${ADMIN_API.replace('/api', '')}${p.image}`;
      preview.style.display = 'block';
    } else {
      preview.style.display = 'none';
    }

    document.getElementById('product-modal').classList.remove('hidden');
  } catch (err) {
    showToast('Failed to load product', 'error');
  }
}

function closeModal() {
  document.getElementById('product-modal').classList.add('hidden');
}

async function saveProduct(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append('name', document.getElementById('product-name').value.trim());
  formData.append('price', document.getElementById('product-price').value);
  formData.append('description', document.getElementById('product-description').value.trim());
  formData.append('category', document.getElementById('product-category').value);
  formData.append('stock', document.getElementById('product-stock').value || 0);

  const imageFile = document.getElementById('product-image').files[0];
  if (imageFile) formData.append('image', imageFile);

  const url = editingProductId
    ? `${ADMIN_API}/products/${editingProductId}`
    : `${ADMIN_API}/products`;
  const method = editingProductId ? 'PUT' : 'POST';

  const saveBtn = document.getElementById('save-product-btn');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Saving…';

  try {
    const res = await fetch(url, {
      method,
      headers: { Authorization: `Bearer ${getToken()}` },
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || 'Save failed');

    showToast(editingProductId ? 'Product updated!' : 'Product added!', 'success');
    closeModal();
    loadProducts();
  } catch (err) {
    showToast(err.message, 'error');
  } finally {
    saveBtn.disabled = false;
    saveBtn.textContent = 'Save Product';
  }
}

async function deleteProduct(id) {
  if (!confirm('Are you sure you want to delete this product?')) return;

  try {
    const res = await fetch(`${ADMIN_API}/products/${id}`, {
      method: 'DELETE',
      headers: authHeaders(),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    showToast('Product deleted', 'success');
    loadProducts();
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// ── Orders Management ─────────────────────────────────────────
async function loadOrders() {
  checkAuth();
  const tbody = document.getElementById('orders-table');
  if (!tbody) return;

  tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px">Loading…</td></tr>';

  try {
    const res = await fetch(`${ADMIN_API}/orders`, { headers: authHeaders() });
    const orders = await res.json();
    renderOrdersTable(orders, 'orders-table');
  } catch (err) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px">No orders yet.</td></tr>';
  }
}

function renderOrdersTable(orders, tableId) {
  const tbody = document.getElementById(tableId);
  if (!tbody) return;

  if (orders.length === 0) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;padding:30px">No orders yet.</td></tr>';
    return;
  }

  tbody.innerHTML = orders
    .map((o) => {
      const date = new Date(o.createdAt).toLocaleDateString();
      return `
        <tr>
          <td><code style="font-size:0.75rem">${o._id.slice(-6).toUpperCase()}</code></td>
          <td>${escapeHtml(o.customerName)}</td>
          <td>${escapeHtml(o.customerEmail)}</td>
          <td>${o.items.length} item${o.items.length !== 1 ? 's' : ''}</td>
          <td><strong>$${o.totalAmount.toFixed(2)}</strong></td>
          <td>
            <select class="status-select" onchange="updateOrderStatus('${o._id}', this.value)"
              style="padding:4px 8px;border-radius:6px;border:1px solid #e0e0e0;font-size:0.8rem">
              ${['pending','processing','shipped','delivered','cancelled']
                .map((s) => `<option value="${s}" ${s === o.status ? 'selected' : ''}>${capitalize(s)}</option>`)
                .join('')}
            </select>
          </td>
          <td>${date}</td>
        </tr>`;
    })
    .join('');
}

async function updateOrderStatus(id, status) {
  try {
    const res = await fetch(`${ADMIN_API}/orders/${id}/status`, {
      method: 'PUT',
      headers: authHeaders(),
      body: JSON.stringify({ status }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    showToast('Status updated', 'success');
  } catch (err) {
    showToast(err.message, 'error');
  }
}

// ── Helpers ───────────────────────────────────────────────────
function setInnerText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str || ''));
  return div.innerHTML;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Image preview on file select
document.addEventListener('DOMContentLoaded', () => {
  const imageInput = document.getElementById('product-image');
  if (imageInput) {
    imageInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      const preview = document.getElementById('image-preview');
      if (file && preview) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          preview.src = ev.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
