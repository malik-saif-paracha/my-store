# My Store - Complete eCommerce Platform

## 🚀 Project Overview

A full-featured eCommerce website with two product categories:
- **Cosmetics** - Beauty and makeup products
- **Baby Dresses** - Children's clothing

Built with **HTML, CSS, JavaScript (Frontend), Node.js, Express, and MongoDB (Backend)**

---

## 📁 What's Included

### ✅ Frontend (Ready to Use)
- Homepage with category browsing
- Product listing with filtering
- Product detail pages
- Shopping cart with local storage
- Checkout form
- Admin dashboard
- Fully responsive design
- Modern clean UI

### ✅ Backend (Node.js + Express + MongoDB)
- RESTful API for products and orders
- MongoDB database integration
- Product management (CRUD)
- Order management
- Built-in CORS support

### ✅ Documentation
- README.md - Full documentation
- QUICKSTART.md - 5-minute setup
- SETUP_GUIDE.md - Detailed installation
- START_APP.bat - Auto-start (Windows)
- start_app.sh - Auto-start (Mac/Linux)

---

## 🔧 Quick Start (5 Minutes)

### Prerequisites:
1. **Node.js** - https://nodejs.org/
2. **MongoDB** - https://www.mongodb.com/try/download/community

### Windows Users:
```bash
# Double-click START_APP.bat file
# Or manually:
cd backend
npm install
npm start

# New terminal:
cd frontend
python -m http.server 8000
```

### Mac/Linux Users:
```bash
chmod +x start_app.sh
./start_app.sh
```

### Then open in browser:
- **App**: http://localhost:8000
- **Admin**: http://localhost:8000/admin.html

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| **README.md** | Complete project documentation and API reference |
| **QUICKSTART.md** | 5-minute quick start guide |
| **SETUP_GUIDE.md** | Detailed step-by-step installation and troubleshooting |
| **START_APP.bat** | Windows automated startup script |
| **start_app.sh** | Mac/Linux automated startup script |

---

## 🏗️ Project Structure

```
my-store/
├── frontend/                    # Customer-facing website
│   ├── index.html              # Homepage
│   ├── products.html           # Product listing
│   ├── product-detail.html     # Product details
│   ├── cart.html               # Shopping cart
│   ├── checkout.html           # Order form
│   ├── admin.html              # Admin panel
│   ├── css/styles.css          # Responsive styling
│   └── js/
│       ├── main.js             # Shared functions
│       ├── cart.js             # Cart management
│       └── admin.js            # Admin functionality
│
├── backend/                     # Server and API
│   ├── server.js               # Express server
│   ├── package.json            # Dependencies
│   ├── .env                    # Configuration
│   ├── models/
│   │   ├── Product.js          # Product schema
│   │   └── Order.js            # Order schema
│   └── routes/
│       ├── products.js         # Product API
│       └── orders.js           # Order API
│
├── README.md                    # Full documentation
├── QUICKSTART.md               # Quick reference
├── SETUP_GUIDE.md              # Detailed setup
├── START_APP.bat               # Windows startup
└── start_app.sh                # Mac/Linux startup
```

---

## 🎯 Admin Features (Login: admin/admin123)

### Product Management
- ✅ Add new products (name, price, category, image, description)
- ✅ Edit existing products
- ✅ Delete products
- ✅ View all products

### Order Management
- ✅ View all customer orders
- ✅ See order details (customer info, items, total)
- ✅ Track order dates

---

## 👥 Customer Features

### Shopping
- ✅ Browse products by category
- ✅ View product details
- ✅ Filter by category
- ✅ View product images and descriptions

### Cart & Checkout
- ✅ Add items to cart
- ✅ View cart with item quantities
- ✅ Update quantities
- ✅ Remove items
- ✅ See cart subtotal and tax
- ✅ Fill checkout form
- ✅ Place order

---

## 🔌 API Endpoints

### Products
```
GET    /api/products                  # Get all products
GET    /api/products?category=X       # Filter by category
GET    /api/products/:id              # Get product details
POST   /api/products                  # Add product
PUT    /api/products/:id              # Update product
DELETE /api/products/:id              # Delete product
```

### Orders
```
GET    /api/orders                    # Get all orders
GET    /api/orders/:id                # Get order details
POST   /api/orders                    # Create order
PUT    /api/orders/:id                # Update order
DELETE /api/orders/:id                # Delete order
```

---

## 📖 How to Use

### First Time Setup:

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Start MongoDB**
   - Windows: MongoDB starts automatically after installation
   - Mac: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

3. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   ✅ You should see: "Connected to MongoDB"

4. **Start Frontend Server** (new terminal)
   ```bash
   cd frontend
   python -m http.server 8000
   ```

5. **Open in Browser**
   - Main app: http://localhost:8000
   - Admin: http://localhost:8000/admin.html
   - Admin Login: username: `admin`, password: `admin123`

### Adding Products:

1. Go to Admin Panel
2. Click "Products" tab
3. Fill the form:
   - Product Name
   - Price
   - Category (Cosmetics or Baby Dresses)
   - Image URL
   - Description
4. Click "Add Product"

### Testing as Customer:

1. Browse products on homepage
2. Filter by category
3. Click product to see details
4. Add to cart
5. View cart and proceed to checkout
6. Fill contact info and place order
7. Check "Orders" tab in admin to see order

---

## ⚙️ System Requirements

- **RAM**: 2GB minimum
- **Disk Space**: 500MB minimum
- **OS**: Windows 7+, Mac OS 10.12+, Ubuntu 14.04+
- **Node.js**: v14.0 or higher
- **MongoDB**: 4.4 or higher
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

---

## 🆘 Troubleshooting

### MongoDB Not Connecting?
1. Ensure MongoDB is installed
2. Run `mongosh` in terminal to verify
3. Start MongoDB service

### Backend won't start?
1. Check Node.js is installed: `node --version`
2. Run `npm install` in backend folder
3. Ensure MongoDB is running
4. Check port 5000 isn't in use

### Products not loading?
1. Wait 5 seconds for connection
2. Refresh the page
3. Check browser console for errors (F12)
4. Verify backend is running

### Admin login fails?
1. Use exact credentials: `admin` / `admin123`
2. Make sure you're on admin.html page
3. Check cookies are enabled

### Cart not working?
1. Enable JavaScript in browser
2. Allow Local Storage
3. Try incognito mode
4. Clear browser cache

**For detailed troubleshooting, see SETUP_GUIDE.md**

---

## 🎨 Customization

### Change Store Name
1. Edit frontend files: Search & replace "My Store" with your name
2. Edit backend server.js if needed

### Modify Categories
1. Edit HTML category options
2. Update Product model in backend/models/Product.js
3. Change enum values in schema

### Change Styling
1. Edit `frontend/css/styles.css`
2. Modify colors, fonts, sizes
3. Changes apply immediately

### Add More Fields to Products
1. Edit `backend/models/Product.js`
2. Add new fields to schema
3. Update frontend form and display

---

## 🚀 Deployment

### Free Hosting Options:

**Frontend:**
- Vercel: https://vercel.com (Git integration)
- Netlify: https://netlify.com (Git integration)
- GitHub Pages: https://pages.github.com

**Backend:**
- Heroku: https://heroku.com (Now Eco Dynos - limited free)
- Render: https://render.com (Free tier available)
- Railway: https://railway.app (Free tier available)

**Database:**
- MongoDB Atlas: https://www.mongodb.com/cloud/atlas (Free tier)

---

## 📝 Sample Products to Add

### Cosmetics Category:
1. Lipstick Red Premium - $15.99
2. Foundation Base - $24.99
3. Eye Shadow Palette - $18.99
4. Mascara - $12.99

### Baby Dresses Category:
1. Pink Baby Dress - $19.99
2. Blue Baby Romper - $17.99
3. White Christening Dress - $29.99
4. Yellow Sunshine Dress - $21.99

---

## 🔐 Security Notes

⚠️ **Current Implementation:**
- Admin login uses hardcoded credentials (demo purpose only)
- No encryption for passwords
- No user authentication for customers

✅ **For Production, Add:**
- Proper user registration and authentication
- Password hashing (bcrypt)
- JWT tokens
- HTTPS/SSL encryption
- Rate limiting
- Input validation
- MongoDB encryption

---

## 📊 Database Collections

### Products Collection
```javascript
{
  _id: ObjectId,
  name: String,
  price: Number,
  category: String,
  image: String (URL),
  description: String,
  createdAt: Date
}
```

### Orders Collection
```javascript
{
  _id: ObjectId,
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  customerAddress: String,
  customerCity: String,
  customerZip: String,
  items: Array,
  subtotal: Number,
  tax: Number,
  total: Number,
  orderDate: Date,
  status: String
}
```

---

## 🎓 Learning Resources

- **Node.js**: https://nodejs.org/docs/
- **Express.js**: https://expressjs.com/
- **MongoDB**: https://docs.mongodb.com/
- **Mongoose**: https://mongoosejs.com/
- **JavaScript**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/

---

## 📋 Feature Checklist

- ✅ Homepage with category showcase
- ✅ Product listing page
- ✅ Product detail pages
- ✅ Product filtering by category
- ✅ Shopping cart with local storage
- ✅ Checkout form
- ✅ Order placement
- ✅ Admin product management (add, edit, delete)
- ✅ Admin order viewing
- ✅ Admin authentication
- ✅ Responsive design
- ✅ REST API
- ✅ MongoDB integration
- ✅ CORS support

---

## 🔄 Future Enhancements

- User authentication for customers
- Product reviews and ratings
- Payment gateway integration (Stripe, PayPal)
- Email notifications
- Inventory management
- Advanced search
- Product recommendations
- Wishlist feature
- Multiple languages
- Admin analytics dashboard

---

## 📞 Support

For issues or questions:
1. Check SETUP_GUIDE.md troubleshooting section
2. Review browser console for errors (F12)
3. Verify MongoDB and backend are running
4. Check all prerequisites are installed
5. Try clearing browser cache

---

## 📄 License

This project is open source and available for educational and personal use.

---

## 🎉 Getting Started NOW

### The Fastest Way:
1. **Windows**: Double-click `START_APP.bat`
2. **Mac/Linux**: Run `./start_app.sh`
3. Open http://localhost:8000
4. Explore and test!

### Need Help?
- Read [QUICKSTART.md](QUICKSTART.md) for 5-minute setup
- Read [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed steps
- Read [README.md](README.md) for complete documentation

---

**Happy eCommerce! 🛍️ 🚀**

Last Updated: 2026 | Version 1.0.0 - Premium eCommerce Platform
