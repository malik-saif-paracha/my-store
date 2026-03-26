# SETUP & INSTALLATION GUIDE - My Store eCommerce

## Complete Step-by-Step Setup

### Prerequisites Check

Before starting, ensure you have:
1. **Node.js v14+** - Download from https://nodejs.org/
   - To verify: Open Command Prompt and type `node --version`
   - Should show v14.x.x or higher

2. **MongoDB Community** - Download from https://www.mongodb.com/try/download/community
   - To verify: Type `mongosh` or `mongo` in Command Prompt

3. **Git** (optional) - Download from https://git-scm.com/

---

## PART 1: MongoDB Installation & Setup

### Windows Installation

1. **Download MongoDB Community Edition**
   - Go to https://www.mongodb.com/try/download/community
   - Select Windows, MSI format
   - Click Download

2. **Run Installer**
   - Double-click the downloaded `.msi` file
   - Click "Next" through the installation wizard
   - ✅ Check "Install MongoDB as a Service"
   - Select "Run service as Network Service"
   - Click "Install"
   - MongoDB will automatically start as a Windows service

3. **Verify Installation**
   - Open Command Prompt (Win + R, type `cmd`)
   - Type: `mongosh`
   - You should see a connection message with a `>` prompt
   - Type `exit` to close

### Mac Installation

```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Verify
mongosh
```

### Linux Installation (Ubuntu/Debian)

```bash
sudo apt-get update
sudo apt-get install -y mongodb
sudo systemctl start mongod
sudo systemctl enable mongod

# Verify
mongosh
```

---

## PART 2: Backend Setup

### Step 1: Navigate to Backend Folder

```bash
cd path/to/new/backend
```

Replace `path/to/new` with the actual path where you extracted the files.

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- express (web framework)
- mongoose (MongoDB connection)
- cors (cross-origin support)
- dotenv (environment variables)

**Expected output:**
```
added 100+ packages in 30s
```

### Step 3: Verify Installation

Check if `node_modules` folder was created:
```bash
ls node_modules
# or on Windows
dir node_modules
```

### Step 4: Start Backend Server

```bash
npm start
```

**Expected output:**
```
Connected to MongoDB
Server is running on http://localhost:5000
Make sure MongoDB is running!
```

✅ **Backend is ready!** Don't close this terminal.

---

## PART 3: Frontend Setup

### Important: Keep Backend Running!
The backend must keep running in its terminal. Open a **NEW terminal** for the frontend.

### Option A: Using Python (Recommended - Works on Windows, Mac, Linux)

```bash
# Navigate to frontend folder
cd path/to/new/frontend

# Start local server
python -m http.server 8000
```

**For Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Expected output:**
```
Serving HTTP on 0.0.0.0 port 8000
```

### Option B: Using Node.js http-server

```bash
# Install globally (first time only)
npm install -g http-server

# Navigate to frontend
cd path/to/new/frontend

# Start server
http-server
```

**Expected output:**
```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
```

**Then open: http://localhost:8080**

---

## PART 4: Access the Application

### Open in Browser

1. **Main Application**
   - Open: http://localhost:8000 (if using Python)
   - Or: http://localhost:8080 (if using http-server)
   - You should see the homepage with "Welcome to My Store"

2. **Admin Panel**
   - Go to: http://localhost:8000/admin.html
   - Configure your own admin username and password before first use (no default credentials)
   - Set them in backend configuration (e.g., create `backend/.env` with `ADMIN_USERNAME` and `ADMIN_PASSWORD`) before starting

### Initial Setup - Add Sample Products

1. Go to Admin Panel (http://localhost:8000/admin.html)
2. Click login button
3. Enter your configured admin credentials
4. Go to "Products" tab
5. Fill the form and add products:

**Product #1 - Lipstick**
```
Name: Lipstick Red Premium
Price: 15.99
Category: Cosmetics
Image: https://via.placeholder.com/300x300?text=Lipstick+Red
Description: Premium matte red lipstick with long-lasting color and moisturizing formula
```

**Product #2 - Baby Dress**
```
Name: Pink Baby Dress
Price: 19.99
Category: Baby Dresses
Image: https://via.placeholder.com/300x300?text=Pink+Dress
Description: Adorable pink cotton dress perfect for baby girls 0-6 months
```

**Product #3 - Foundation**
```
Name: Foundation Base
Price: 24.99
Category: Cosmetics
Image: https://via.placeholder.com/300x300?text=Foundation
Description: Lightweight foundation with SPF 15 and natural finish
```

**Product #4 - Baby Romper**
```
Name: Blue Baby Romper
Price: 17.99
Category: Baby Dresses
Image: https://via.placeholder.com/300x300?text=Blue+Romper
Description: Comfortable blue romper suit for active baby boys
```

---

## PART 5: Testing the Application

### Test as Customer

1. **View Products**
   - Click "Shop" in navbar
   - Browse all products
   - ✅ Should see all 4 products with images and prices

2. **Filter by Category**
   - Select "Cosmetics" from dropdown
   - ✅ Should see only cosmetics products
   - Select "Baby Dresses"
   - ✅ Should see only baby dresses

3. **View Product Details**
   - Click "View Details" on any product
   - ✅ Should see full product information
   - ✅ Should see larger image

4. **Shopping Cart**
   - Click "Add to Cart"
   - ✅ Cart count should increase in navbar
   - Add the same product again
   - ✅ Quantity should increase
   - Click cart icon to view cart
   - ✅ Should see all items with quantities

5. **Checkout**
   - Click "Proceed to Checkout" in cart
   - Fill form with:
     ```
     Full Name: John Doe
     Email: john@example.com
     Phone: 1234567890
     Address: 123 Main St
     City: New York
     ZIP: 10001
     ```
   - Click "Place Order"
   - ✅ Should see success message
   - ✅ Should redirect to homepage
   - ✅ Cart should be empty

### Test as Admin

1. **View Orders**
   - Go to Admin (http://localhost:8000/admin.html)
   - Login with your configured admin credentials
   - Click "Orders" tab
   - ✅ Should see your order with customer info

2. **Manage Products**
   - Click "Products" tab
   - **Edit**: Click "Edit" button, change name/price
   - ✅ Should update successfully
   - **Delete**: Click "Delete" button
   - ⚠️ Confirm deletion dialog
   - ✅ Should be removed from list

3. **Add Product**
   - Fill form with new product
   - Click "Add Product"
   - ✅ Should appear in products list
   - ✅ Should appear in customer shop page

---

## Troubleshooting

### Issue: "Cannot connect to MongoDB"

**Solution:**
```bash
# Check if MongoDB is running
# Windows: Open Services (services.msc) and look for "MongoDB Server"
# If not running, start it

# Or in Command Prompt:
mongod

# Mac:
brew services start mongodb-community

# Linux:
sudo systemctl start mongod
```

### Issue: "Cannot GET /api/products"

**Solution:**
- Backend not running or crashed
- Open new terminal in backend folder
- Run `npm start` again
- Check for any error messages
- Ensure MongoDB is running first

### Issue: Backend won't start - "Error: listen EADDRINUSE"

**Solution:**
Port 5000 is already in use. Either:
1. Kill the process using port 5000, OR
2. Change port in backend/server.js line 30 from 5000 to something else (e.g., 5001)

```bash
# Windows - Find and close process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### Issue: Frontend won't load - GET request errors

**Solution:**
1. Frontend must be served from local server (not direct file)
2. Backend must be running on port 5000
3. Browser console (F12) should show no errors
4. Check firewall settings

### Issue: Products not showing in shop

**Solution:**
1. Backend running? Check terminal shows "Connected to MongoDB"
2. MongoDB running? Try `mongosh` in new terminal
3. Wait 5 seconds and refresh page
4. Have you added products in admin? Add one first
5. Check console for errors (F12 → Console tab)

### Issue: Admin login doesn't work

**Solution:**
- Confirm you have set your own admin username and password (there are no default credentials)
- Check browser console for errors
- Make sure you're on admin.html page

### Issue: Cart not working

**Solution:**
1. Enable JavaScript in browser
2. Allow Local Storage (most browsers have it by default)
3. Try incognito/private mode to test
4. Clear browser cache and try again
5. Check console for errors (F12 → Console tab)

---

## File Structure Reference

```
new/
├── frontend/
│   ├── index.html                 ← Homepage
│   ├── products.html              ← Shop page
│   ├── product-detail.html        ← Product details
│   ├── cart.html                  ← Shopping cart
│   ├── checkout.html              ← Order form
│   ├── admin.html                 ← Admin dashboard
│   ├── css/
│   │   └── styles.css             ← All styling
│   ├── js/
│   │   ├── main.js                ← Shared functions
│   │   ├── cart.js                ← Cart logic
│   │   └── admin.js               ← Admin logic
│   └── images/                    ← Product images (if needed)
│
├── backend/
│   ├── server.js                  ← Main Express server
│   ├── package.json               ← Dependencies
│   ├── .env                       ← Environment config
│   ├── models/
│   │   ├── Product.js             ← Product database schema
│   │   └── Order.js               ← Order database schema
│   └── routes/
│       ├── products.js            ← Product API endpoints
│       └── orders.js              ← Order API endpoints
│
├── README.md                      ← Full documentation
├── QUICKSTART.md                  ← Quick reference
└── SETUP_GUIDE.md                 ← This file
```

---

## Important Terminals

**Keep these running:**

**Terminal 1 - MongoDB:**
```bash
mongod
```

**Terminal 2 - Backend (in backend folder):**
```bash
npm start
```

**Terminal 3 - Frontend (in frontend folder):**
```bash
python -m http.server 8000
```

Then open: http://localhost:8000

---

## Database Connection

The application connects to MongoDB at:
```
mongodb://localhost:27017/mystore
```

This is configured in `backend/server.js` and `.env`

To use MongoDB Atlas (cloud):
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster and get connection string
3. Update `.env` file:
   ```
   MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/mystore
   ```
4. Restart backend server

---

## API Testing

You can test API directly using curl or Postman:

```bash
# Get all products
curl http://localhost:5000/api/products

# Get cosmetics only
curl "http://localhost:5000/api/products?category=Cosmetics"

# Get single product (replace ID)
curl http://localhost:5000/api/products/[ID]

# Add product (POST)
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","price":10,"category":"Cosmetics","image":"url","description":"desc"}'

# Get all orders
curl http://localhost:5000/api/orders
```

---

## Performance Tips

1. **MongoDB Indexing** - Already optimized in models
2. **Frontend Caching** - Product data is fetched when needed
3. **Lazy Loading** - Images load only when visible
4. **Compression** - Apply gzip in production
5. **Database:** Ensure MongoDB service is always running

---

## Next Steps After Setup

1. ✅ Test all features thoroughly
2. 🎨 Customize colors and branding
3. 📸 Add real product images
4. 🔐 Add real user authentication
5. 💳 Integrate payment gateway (Stripe/PayPal)
6. 📧 Add email notifications
7. ☁️ Deploy to cloud (Heroku, Vercel, AWS, etc.)

---

## Deployment Checklist

- [ ] All products added
- [ ] All features tested
- [ ] No console errors
- [ ] Mobile responsive checked
- [ ] Admin functions working
- [ ] Cart functionality working
- [ ] Orders saving correctly
- [ ] Backend database connection stable

---

## Support & Resources

- **Node.js Docs**: https://nodejs.org/docs/
- **Express.js Guide**: https://expressjs.com/
- **MongoDB Manual**: https://docs.mongodb.com/manual/
- **Mongoose Docs**: https://mongoosejs.com/

---

## Summary

You now have:
✅ Full-stack eCommerce application
✅ MongoDB database
✅ REST API backend
✅ Responsive frontend
✅ Admin panel
✅ Shopping cart
✅ Order management

Happy coding! 🚀
