# My Store - Complete eCommerce Website

A full-stack eCommerce platform with frontend and backend, featuring products in Cosmetics and Baby Dresses categories.

## Project Structure

```
my-store/
├── frontend/
│   ├── index.html              # Homepage
│   ├── products.html           # Product listing
│   ├── product-detail.html     # Product details page
│   ├── cart.html               # Shopping cart
│   ├── checkout.html           # Order form
│   ├── admin.html              # Admin panel
│   ├── css/
│   │   └── styles.css          # Main stylesheet
│   ├── js/
│   │   ├── main.js             # Shared functions
│   │   ├── cart.js             # Cart functionality
│   │   └── admin.js            # Admin panel logic
│   └── images/                 # Product images folder
├── backend/
│   ├── server.js               # Express server
│   ├── package.json            # Dependencies
│   ├── models/
│   │   ├── Product.js          # Product schema
│   │   └── Order.js            # Order schema
│   └── routes/
│       ├── products.js         # Product API routes
│       └── orders.js           # Order API routes
└── README.md                   # Setup instructions
```

## Features

### Frontend
- ✅ Responsive design (mobile + desktop)
- ✅ Homepage with category showcase
- ✅ Product listing with filtering
- ✅ Product detail pages
- ✅ Shopping cart with local storage
- ✅ Checkout with order form
- ✅ Admin panel with product management
- ✅ Modern UI with smooth interactions

### Backend
- ✅ Node.js with Express
- ✅ MongoDB database integration
- ✅ RESTful API endpoints
- ✅ Product CRUD operations
- ✅ Order management
- ✅ CORS support

### Admin Features
- ✅ Add products (name, price, image, category, description)
- ✅ Edit products
- ✅ Delete products
- ✅ View all orders
- ✅ Simple hardcoded login (username: admin, password: admin123)

## Prerequisites

1. **Node.js** - Download from https://nodejs.org/
2. **MongoDB** - Download from https://www.mongodb.com/try/download/community
3. **Git** (optional, for cloning)

## Setup Instructions

### Step 1: Install MongoDB

#### Windows:
1. Download MongoDB Community Server from https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. Select "Install MongoDB as a Service" option
4. MongoDB will automatically start as a Windows service
5. Verify installation by opening Command Prompt and typing:
   ```bash
   mongosh
   ```
   You should see a MongoDB connection prompt.

#### Mac/Linux:
```bash
# Using Homebrew (Mac)
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Linux (Ubuntu)
sudo apt-get install -y mongodb
sudo systemctl start mongod
```

### Step 2: Start MongoDB

#### Windows (if not auto-started):
```bash
mongod
```

#### Mac/Linux:
```bash
# MongoDB should be running automatically if installed as service
# If not, start it with:
mongosh  # For newer versions
# OR
mongo    # For older versions
```

### Step 3: Install Backend Dependencies

1. Open Command Prompt/Terminal
2. Navigate to the backend folder:
   ```bash
   cd backend
   ```
3. Install NPM packages:
   ```bash
   npm install
   ```

### Step 4: Start the Backend Server

In the backend folder, run:
```bash
npm start
```

You should see:
```
Connected to MongoDB
Server is running on http://localhost:5000
```

### Step 5: Open Frontend

1. Open the frontend folder with a local server (recommended)
2. Option A - Using Python:
   ```bash
   cd frontend
   python -m http.server 8000
   # Or for Python 2:
   python -m SimpleHTTPServer 8000
   ```
   Then open http://localhost:8000

3. Option B - Using Node.js http-server:
   ```bash
   npm install -g http-server
   cd frontend
   http-server
   ```
   Then open http://localhost:8080

4. Or simply open `frontend/index.html` directly in your browser (some features may not work)

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products?category=Cosmetics` - Get products by category
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Delete order

## Admin Login

**URL**: http://localhost:8000/admin.html
- **Username**: admin
- **Password**: admin123

## How to Use

### As a Customer:
1. Visit the homepage
2. Browse products by category (Cosmetics or Baby Dresses)
3. Click on a product to see details
4. Click "Add to Cart" to add items
5. Go to Cart page to review items
6. Click "Proceed to Checkout"
7. Fill in your details and place order
8. Order will be saved in the database

### As an Admin:
1. Go to Admin page
2. Login with credentials (admin/admin123)
3. **Products Tab**: 
   - Add new products using the form
   - Edit product names/prices by clicking Edit
   - Delete products by clicking Delete
4. **Orders Tab**:
   - View all customer orders

## Sample Products to Add

### Cosmetics:
- Product: "Lipstick Red"
  - Price: 15.99
  - Image: https://via.placeholder.com/300x300?text=Lipstick+Red
  - Description: Premium matte red lipstick with long-lasting formula

- Product: "Foundation Base"
  - Price: 24.99
  - Image: https://via.placeholder.com/300x300?text=Foundation+Base
  - Description: Lightweight foundation with SPF 15 protection

### Baby Dresses:
- Product: "Pink Baby Dress"
  - Price: 19.99
  - Image: https://via.placeholder.com/300x300?text=Pink+Dress
  - Description: Cute pink cotton dress for babies aged 0-6 months

- Product: "Blue Baby Romper"
  - Price: 17.99
  - Image: https://via.placeholder.com/300x300?text=Blue+Romper
  - Description: Comfortable blue romper suit for baby boys

## Troubleshooting

### "Cannot connect to MongoDB"
- Make sure MongoDB is running
- Windows: Check if "MongoDB Server" service is running in Services
- Linux/Mac: Run `brew services start mongodb-community`

### "Cannot GET /api/products"
- Make sure backend server is running (npm start)
- Check that you're accessing from the correct port (5000 for backend)

### CORS errors
- Backend already has CORS enabled
- Make sure frontend is accessing via proper domain (localhost:8000)

### Cart not working
- Check browser's Local Storage is enabled
- Check browser console for errors (F12 key)

### Products not loading
- Start MongoDB first
- Start backend server (npm start)
- Wait a few seconds for MongoDB connection
- Refresh the page

## Environment Variables

Create a `.env` file in the backend folder (optional):
```
MONGODB_URI=mongodb://localhost:27017/mystore
```

If using MongoDB Atlas (cloud):
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mystore
```

## Technologies Used

**Frontend:**
- HTML5
- CSS3 (Responsive)
- JavaScript (Vanilla)
- Fetch API

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose ODM

## Database Schema

### Product Collection
```javascript
{
  _id: ObjectId,
  name: String,
  price: Number,
  category: String (Cosmetics | Baby Dresses),
  image: String (URL),
  description: String,
  createdAt: Date
}
```

### Order Collection
```javascript
{
  _id: ObjectId,
  customerName: String,
  customerEmail: String,
  customerPhone: String,
  customerAddress: String,
  customerCity: String,
  customerZip: String,
  items: Array[
    {
      id: String,
      name: String,
      price: Number,
      image: String,
      quantity: Number
    }
  ],
  subtotal: Number,
  tax: Number,
  total: Number,
  orderDate: Date,
  status: String (pending | processing | shipped | delivered)
}
```

## Future Enhancements

- Payment gateway integration (Stripe/PayPal)
- User authentication and profiles
- Product reviews and ratings
- Email notifications
- Inventory management
- Advanced admin dashboard
- Multiple payment methods
- Wishlist feature
- Product search functionality
- Newsletter subscription

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, check the console for error messages and verify:
1. MongoDB is running
2. Backend server is running (port 5000)
3. Frontend is served from a local server
4. No CORS errors in browser console
