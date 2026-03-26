# QUICK START GUIDE - My Store eCommerce

## 5-Minute Quick Start

### Prerequisites:
- Node.js installed: https://nodejs.org/
- MongoDB installed and running: https://www.mongodb.com/try/download/community

### Step 1: Start MongoDB
```bash
# Windows - MongoDB should start automatically after installation
# If not, open Command Prompt and run:
mongod

# Mac/Linux
brew services start mongodb-community
# or
sudo systemctl start mongod
```

### Step 2: Install and Start Backend
```bash
cd backend
npm install
npm start
```

You should see: "Connected to MongoDB" and "Server is running on http://localhost:5000"

### Step 3: Start Frontend (open new terminal/command prompt)
```bash
cd frontend

# Option A - Python (Windows, Mac, Linux)
python -m http.server 8000

# Option B - Node.js
npm install -g http-server
http-server
```

### Step 4: Open in Browser
- Main App: http://localhost:8000
- Admin Panel: http://localhost:8000/admin.html

### Step 5: Login to Admin
- Username: `admin`
- Password: `admin123`

### Step 6: Add Sample Products
Click "Add Product" and add:

**Product 1:**
- Name: Lipstick Red
- Price: 15.99
- Category: Cosmetics
- Image: https://via.placeholder.com/300x300?text=Lipstick+Red
- Description: Premium matte red lipstick with long-lasting formula

**Product 2:**
- Name: Pink Baby Dress
- Price: 19.99
- Category: Baby Dresses
- Image: https://via.placeholder.com/300x300?text=Pink+Dress
- Description: Cute pink cotton dress for babies aged 0-6 months

## Testing the Application

1. **Browse Products**: Click "Shop" or category cards
2. **View Details**: Click "View Details" on any product
3. **Add to Cart**: Click "Add to Cart"
4. **View Cart**: Click Cart icon in navbar
5. **Checkout**: Fill form and place order
6. **Admin Orders**: Check "Orders" tab in admin panel

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Cannot connect to MongoDB" | Make sure MongoDB is running. Run `mongod` in new terminal |
| "Cannot GET /api/products" | Backend not running. Run `npm start` in backend folder |
| Products not loading | Wait 5 seconds for MongoDB connection. Refresh page |
| Cart not working | Enable JavaScript and Local Storage in browser |
| Admin login fails | Use: username `admin` password `admin123` |
| Port 8000 already in use? | Use different port: `python -m http.server 8001` |

## Project Files

### Frontend
- `index.html` - Homepage with categories
- `products.html` - Product listing
- `product-detail.html` - Product details
- `cart.html` - Shopping cart
- `checkout.html` - Order form
- `admin.html` - Admin panel
- `css/styles.css` - Responsive styling
- `js/main.js` - Shared functions
- `js/cart.js` - Cart management
- `js/admin.js` - Admin functionality

### Backend
- `server.js` - Express server
- `models/Product.js` - Product schema
- `models/Order.js` - Order schema
- `routes/products.js` - Product API
- `routes/orders.js` - Order API

## API Endpoints

```
GET    /api/products                 - Get all products
GET    /api/products?category=X      - Filter by category
GET    /api/products/:id             - Get product details
POST   /api/products                 - Add product (admin)
PUT    /api/products/:id             - Update product (admin)
DELETE /api/products/:id             - Delete product (admin)

GET    /api/orders                   - Get all orders (admin)
POST   /api/orders                   - Create order (customer)
```

## Features Implemented

✅ Homepage with category showcase
✅ Product browsing and filtering
✅ Product detail pages
✅ Shopping cart with local storage
✅ Checkout form
✅ Order management
✅ Admin product CRUD
✅ Admin order viewing
✅ Simple admin authentication
✅ Responsive design
✅ REST API
✅ MongoDB database

## Folder Structure

```
new/
├── frontend/
│   ├── index.html
│   ├── products.html
│   ├── product-detail.html
│   ├── cart.html
│   ├── checkout.html
│   ├── admin.html
│   ├── css/styles.css
│   └── js/
│       ├── main.js
│       ├── cart.js
│       └── admin.js
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── models/
│   │   ├── Product.js
│   │   └── Order.js
│   └── routes/
│       ├── products.js
│       └── orders.js
└── README.md
```

## Next Steps

1. Customize products and categories
2. Update branding and colors
3. Add real product images
4. Deploy to cloud (Heroku, Vercel, etc.)
5. Integrate payment gateway
6. Add user authentication
7. Implement email notifications

Enjoy your eCommerce store! 🚀
