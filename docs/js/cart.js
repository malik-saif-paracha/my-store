/* ============================
   Cart Page – cart.js
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-content');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <a href="products.html" class="btn btn-dark">Shop Now</a>
      </div>`;
    document.getElementById('checkout-section').classList.add('hidden');
    return;
  }

  document.getElementById('checkout-section').classList.remove('hidden');

  // Cart items HTML
  const itemsHtml = cart
    .map((item) => {
      const imgSrc = productImageSrc(item.image);
      const imgHtml = imgSrc
        ? `<img src="${imgSrc}" alt="${escapeHtml(item.name)}">`
        : '🛍️';
      return `
        <div class="cart-item" data-id="${item._id}">
          <div class="cart-item-img">${imgHtml}</div>
          <div class="cart-item-info">
            <div class="cart-item-name">${escapeHtml(item.name)}</div>
            <div class="cart-item-price">$${Number(item.price).toFixed(2)} each</div>
          </div>
          <div class="cart-item-controls">
            <button class="qty-btn" onclick="changeQty('${item._id}', -1)">−</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="changeQty('${item._id}', 1)">+</button>
          </div>
          <div>
            <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
          </div>
          <button class="remove-btn" onclick="removeItem('${item._id}')" title="Remove">🗑️</button>
        </div>`;
    })
    .join('');

  container.innerHTML = `<div class="cart-items">${itemsHtml}</div>`;
  updateSummary(cart);
}

function updateSummary(cart) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;
  document.getElementById('order-total').textContent = `$${total.toFixed(2)}`;
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find((i) => i._id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    const idx = cart.indexOf(item);
    cart.splice(idx, 1);
  }
  saveCart(cart);
  updateCartBadge();
  renderCart();
}

function removeItem(id) {
  const cart = getCart().filter((i) => i._id !== id);
  saveCart(cart);
  updateCartBadge();
  renderCart();
  showToast('Item removed from cart', 'info');
}

// ── Place Order ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('order-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) return;

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Placing order…';

    const payload = {
      customerName: form.customerName.value.trim(),
      customerEmail: form.customerEmail.value.trim(),
      customerPhone: form.customerPhone.value.trim(),
      shippingAddress: form.shippingAddress.value.trim(),
      items: cart.map((i) => ({ productId: i._id, quantity: i.quantity })),
    };

    try {
      const res = await fetch(`${API_BASE}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Order failed');

      // Clear cart
      saveCart([]);
      updateCartBadge();

      // Show success message
      document.getElementById('checkout-section').innerHTML = `
        <div class="text-center" style="padding:40px;background:#fff;border-radius:10px;box-shadow:0 2px 15px rgba(0,0,0,.1)">
          <div style="font-size:3.5rem;margin-bottom:15px;">🎉</div>
          <h2 style="color:#27ae60;margin-bottom:10px;">Order Placed Successfully!</h2>
          <p style="color:#636e72;">Thank you, <strong>${escapeHtml(payload.customerName)}</strong>! Your order has been received.</p>
          <p style="color:#636e72;margin-top:8px;">We'll contact you at <strong>${escapeHtml(payload.customerEmail)}</strong> with updates.</p>
          <a href="index.html" class="btn btn-dark" style="margin-top:25px;">Continue Shopping</a>
        </div>`;

      document.getElementById('cart-content').innerHTML = '';
    } catch (err) {
      showToast(err.message || 'Failed to place order', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Place Order';
    }
  });
});
