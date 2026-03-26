# SETUP CHECKLIST - My Store eCommerce

## Pre-Installation

- [ ] Download Node.js: https://nodejs.org/
- [ ] Download MongoDB: https://www.mongodb.com/try/download/community
- [ ] (Optional) Download Python: https://www.python.org/
- [ ] Extract project files to a folder

---

## Installation Phase

### Step 1: Install Node.js
- [ ] Run Node.js installer
- [ ] Follow installation wizard
- [ ] Click "Install"
- [ ] Verify: Open Command Prompt, run `node --version` ✅

### Step 2: Install MongoDB
- [ ] Run MongoDB installer
- [ ] Check "Install MongoDB as a Service"
- [ ] Complete installation
- [ ] MongoDB starts automatically
- [ ] (Optional) Verify: Run `mongosh` in Command Prompt ✅

### Step 3: Install Backend Dependencies
- [ ] Open Command Prompt
- [ ] Navigate to `backend` folder: `cd path/to/backend`
- [ ] Run: `npm install`
- [ ] Wait for completion (takes 1-2 minutes) ✅

---

## Running Phase

### Step 4: Start MongoDB
- [ ] Windows: Should auto-start (check Services if not)
- [ ] Mac: Run `brew services start mongodb-community`
- [ ] Linux: Run `sudo systemctl start mongod`
- [ ] Verify: Open MongoDB compass or run `mongosh`

### Step 5: Start Backend Server
- [ ] Open Command Prompt (new terminal)
- [ ] Navigate to `backend` folder
- [ ] Run: `npm start`
- [ ] See message: "Connected to MongoDB" ✅
- [ ] See message: "Server running on http://localhost:5000" ✅
- [ ] **KEEP THIS TERMINAL OPEN**

### Step 6: Start Frontend Server
- [ ] Open **NEW** Command Prompt
- [ ] Navigate to `frontend` folder
- [ ] Run: `python -m http.server 8000`
- [ ] OR use: `http-server` if installed
- [ ] See message: "Serving HTTP..." ✅
- [ ] **KEEP THIS TERMINAL OPEN**

---

## Testing Phase

### Step 7: Access Application
- [ ] Open web browser
- [ ] Go to: http://localhost:8000
- [ ] See "My Store" homepage ✅
- [ ] Homepage has two category cards ✅
- [ ] Navigation bar shows "Home", "Shop", "Cart", "Admin" ✅

### Step 8: Test Admin Panel
- [ ] Click "Admin" in navigation
- [ ] See admin login form ✅
- [ ] Login with:
  - [ ] Username: `admin`
  - [ ] Password: `admin123`
- [ ] Clicked login, see admin dashboard ✅
- [ ] Can switch between Products and Orders tabs ✅

### Step 9: Add Sample Products
- [ ] Click "Products" tab
- [ ] Fill form with Product 1:
  - [ ] Name: Lipstick Red
  - [ ] Price: 15.99
  - [ ] Category: Cosmetics
  - [ ] Image: https://via.placeholder.com/300x300?text=LipstickRed
  - [ ] Description: Premium matte red lipstick
- [ ] Click "Add Product" ✅
- [ ] Product appears in the list ✅

### Step 10: Add More Products
- [ ] Product 2 - Baby Dress:
  - [ ] Name: Pink Baby Dress
  - [ ] Price: 19.99
  - [ ] Category: Baby Dresses
  - [ ] Image: https://via.placeholder.com/300x300?text=PinkDress
  - [ ] Description: Cute cotton dress
- [ ] Add Product 3 (optional):
  - [ ] Name: Foundation
  - [ ] Price: 24.99
  - [ ] Category: Cosmetics
- [ ] Add Product 4 (optional):
  - [ ] Name: Baby Romper
  - [ ] Price: 17.99
  - [ ] Category: Baby Dresses

### Step 11: Test Shopping (Customer Side)
- [ ] Click "Home" or "Shop"
- [ ] Click "Shop" navigation
- [ ] See all products loaded ✅
- [ ] See prices and images ✅
- [ ] Select category filter: "Cosmetics"
- [ ] Only cosmetics show ✅
- [ ] Select: "Baby Dresses"
- [ ] Only baby dresses show ✅
- [ ] Clear filter (select "All Products")
- [ ] All products show ✅

### Step 12: Test Product Details
- [ ] Click "View Details" on any product
- [ ] See product detail page ✅
- [ ] See large product image ✅
- [ ] See full description ✅
- [ ] See price and category ✅
- [ ] Click "Add to Cart" ✅
- [ ] See confirmation message ✅
- [ ] Cart count increases in navbar ✅

### Step 13: Test Shopping Cart
- [ ] Click cart icon in navbar
- [ ] See items in cart ✅
- [ ] See quantity selector ✅
- [ ] See price calculations ✅
- [ ] Add same product again (goes back, add to cart)
- [ ] Quantity increases ✅
- [ ] Can update quantity
- [ ] Total updates ✅
- [ ] Click "Remove" button
- [ ] Item removed from cart ✅

### Step 14: Test Checkout
- [ ] Click "Proceed to Checkout"
- [ ] See checkout form ✅
- [ ] Fill in details:
  - [ ] Full Name: Test Customer
  - [ ] Email: test@example.com
  - [ ] Phone: 1234567890
  - [ ] Address: 123 Main Street
  - [ ] City: New York
  - [ ] ZIP: 10001
- [ ] Click "Place Order" ✅
- [ ] See success message ✅
- [ ] Redirected to homepage ✅
- [ ] Cart is now empty ✅

### Step 15: Test Admin Orders
- [ ] Go to http://localhost:8000/admin.html
- [ ] Login (admin/admin123)
- [ ] Click "Orders" tab
- [ ] Your order appears in list ✅
- [ ] Shows customer name and email ✅
- [ ] Shows total amount ✅

### Step 16: Test Admin Product Management
- [ ] Go to Products tab
- [ ] Click "Edit" on a product
- [ ] Change product name
- [ ] Change product price
- [ ] Product updates ✅
- [ ] Click "Delete" on a product
- [ ] Confirm deletion
- [ ] Product removed ✅
- [ ] Add new product
- [ ] Product appears ✅

### Step 17: Test Responsive Design
- [ ] Press F12 (Developer Tools)
- [ ] Click device icon (mobile view)
- [ ] Select "iPhone 12"
- [ ] Page adapts to mobile ✅
- [ ] Navbar is readable ✅
- [ ] Products display properly ✅
- [ ] Forms are usable ✅
- [ ] Click back to desktop view ✅

---

## Verification Phase

### API Endpoints
- [ ] Test: http://localhost:5000/api/products (shows all products)
- [ ] Test: http://localhost:5000/api/orders (shows all orders)

### Browser Console Check
- [ ] Open browser F12
- [ ] Go to Console tab
- [ ] No red error messages ✅
- [ ] No warnings about CORS ✅

### Database Connection
- [ ] Backend shows "Connected to MongoDB" ✅
- [ ] Can open MongoDB Compass and see:
  - [ ] mystore database
  - [ ] products collection
  - [ ] orders collection

---

## Common Issues Resolution

### Issue: Ports Not Working
- [ ] Check if port 5000 or 8000 in use
- [ ] Windows: `netstat -ano | findstr :5000`
- [ ] Change port if needed
- [ ] Restart servers

### Issue: Products Not Loading
- [ ] Wait 5 seconds
- [ ] Refresh page
- [ ] Check console (F12)
- [ ] Restart backend
- [ ] Restart MongoDB

### Issue: Admin Login Fails
- [ ] Check credentials: admin / admin123
- [ ] Clear browser cookies
- [ ] Try incognito mode
- [ ] Check console for errors

### Issue: Cart Not Working
- [ ] Enable JavaScript
- [ ] Allow Local Storage
- [ ] Try different browser
- [ ] Clear browser cache

---

## Final Verification

- [ ] All 3 terminals running (MongoDB, Backend, Frontend)
- [ ] No red error messages anywhere
- [ ] Products display on shop page
- [ ] Can add products to cart
- [ ] Can checkout
- [ ] Can view orders in admin
- [ ] Can add/edit/delete products in admin
- [ ] Mobile responsive works
- [ ] All URLs accessible

---

## Maintenance Tasks

### Weekly
- [ ] Check for product issues
- [ ] Review customer orders
- [ ] Backup database

### Monthly
- [ ] Update npm packages: `npm update`
- [ ] Check for MongoDB updates
- [ ] Review application logs

---

## Customization (Optional)

- [ ] Change store name in all HTML files
- [ ] Modify colors in CSS file
- [ ] Add company logo
- [ ] Customize product categories
- [ ] Add more products
- [ ] Upload real product images

---

## Deployment Preparation (When Ready)

- [ ] Create production database (MongoDB Atlas)
- [ ] Update backend connection string
- [ ] Remove console.log statements
- [ ] Set environment variables
- [ ] Test in production mode
- [ ] Deploy frontend (Vercel/Netlify)
- [ ] Deploy backend (Heroku/Render)

---

## Summary Status

| Component | Status |
|-----------|--------|
| Node.js | ❌ To Do → ✅ Complete |
| MongoDB | ❌ To Do → ✅ Complete |
| Backend | ❌ To Do → ✅ Complete |
| Frontend | ❌ To Do → ✅ Complete |
| Products | ❌ To Do → ✅ Complete |
| Testing | ❌ To Do → ✅ Complete |
| Ready | ❌ To Do → ✅ Complete |

---

## Check Mark System

- ❌ Not started
- 🟡 In progress
- ✅ Complete
- ⚠️ Issue found

---

## Notes Section

Use below to track issues or notes:

```
Issue 1: ________________
Solution: _______________

Issue 2: ________________
Solution: _______________

Note 1: _________________
Note 2: _________________
```

---

**When entire checklist is complete, you're ready to use My Store! 🎉**
