# 🛍️ My Store

A complete beginner-friendly eCommerce website for **Cosmetics** and **Baby Dresses**. Built with HTML, CSS, JavaScript (frontend) and Node.js + Express + MongoDB (backend).

---

## ✨ Features

### 👤 User Features
- Browse products by category (Cosmetics & Baby Dresses)
- Search and filter products
- Add products to cart (saved in `localStorage`)
- Place orders with a simple shipping form (Cash on Delivery)

### 🔧 Admin Features
- Secure login with hardcoded credentials
- View dashboard stats (products, orders, revenue)
- Add, edit, and delete products (with image upload)
- View all orders and update order status

---

## 📁 Project Structure

```
my-store/
├── frontend/               # Static HTML/CSS/JS files
│   ├── index.html          # Homepage with categories
│   ├── products.html       # Product listing page
│   ├── cart.html           # Cart & checkout page
│   ├── css/
│   │   ├── style.css       # Main styles
│   │   └── admin.css       # Admin panel styles
│   ├── js/
│   │   ├── utils.js        # Shared utilities (cart, toast, etc.)
│   │   ├── main.js         # Homepage logic
│   │   ├── products.js     # Products page logic
│   │   ├── cart.js         # Cart page logic
│   │   └── admin.js        # Admin panel logic
│   └── admin/
│       ├── login.html      # Admin login page
│       └── dashboard.html  # Admin dashboard
│
└── backend/                # Node.js + Express API
    ├── server.js           # Main entry point
    ├── package.json
    ├── .env.example        # Environment variable template
    ├── models/
    │   ├── Product.js      # Mongoose product model
    │   └── Order.js        # Mongoose order model
    ├── routes/
    │   ├── products.js     # Product CRUD API
    │   ├── orders.js       # Orders API
    │   └── admin.js        # Admin login API
    └── middleware/
        └── auth.js         # JWT authentication middleware
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally on port 27017)

---

### 1. Set Up the Backend

```bash
# Navigate to the backend folder
cd backend

# Install dependencies
npm install

# Copy environment file and configure it
cp .env.example .env
```

Edit `.env` if needed (defaults work out of the box):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/my-store
JWT_SECRET=your_jwt_secret_key_here
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

Start the backend server:
```bash
# Development mode (auto-reload)
npm run dev

# Production mode
npm start
```

The API will be available at: **http://localhost:5000**

---

### 2. Set Up the Frontend

The frontend is pure HTML/CSS/JS — no build step required!

**Option A: Open directly in browser**
```bash
# Simply open the file in your browser
open frontend/index.html
```

**Option B: Use a local server (recommended for best results)**
```bash
# Using VS Code Live Server extension, or:
cd frontend
npx serve .
# Then visit http://localhost:3000
```

---

### 3. Access the Application

| Page              | URL                              |
|-------------------|----------------------------------|
| Homepage          | `frontend/index.html`            |
| Products          | `frontend/products.html`         |
| Shopping Cart     | `frontend/cart.html`             |
| Admin Login       | `frontend/admin/login.html`      |
| Admin Dashboard   | `frontend/admin/dashboard.html`  |

**Admin credentials:**
- Username: `admin`
- Password: `admin123`

---

## 🔌 API Endpoints

### Products
| Method | Endpoint              | Description            | Auth     |
|--------|-----------------------|------------------------|----------|
| GET    | `/api/products`       | List all products      | Public   |
| GET    | `/api/products/:id`   | Get single product     | Public   |
| POST   | `/api/products`       | Create product         | Admin    |
| PUT    | `/api/products/:id`   | Update product         | Admin    |
| DELETE | `/api/products/:id`   | Delete product         | Admin    |

### Orders
| Method | Endpoint                   | Description          | Auth     |
|--------|----------------------------|----------------------|----------|
| POST   | `/api/orders`              | Place a new order    | Public   |
| GET    | `/api/orders`              | List all orders      | Admin    |
| GET    | `/api/orders/:id`          | Get single order     | Admin    |
| PUT    | `/api/orders/:id/status`   | Update order status  | Admin    |

### Admin
| Method | Endpoint            | Description   |
|--------|---------------------|---------------|
| POST   | `/api/admin/login`  | Admin login   |

---

## 🛒 How to Use

### Shopping
1. Open `frontend/index.html` in your browser
2. Browse categories or click "Shop Now"
3. Click **"Add to Cart"** on any product
4. Go to the Cart page and fill in your shipping details
5. Click **"Place Order"** — no payment needed!

### Admin
1. Open `frontend/admin/login.html`
2. Login with `admin` / `admin123`
3. Add products with images, manage orders, view stats

---

## 🛠️ Tech Stack

| Layer     | Technology                    |
|-----------|-------------------------------|
| Frontend  | HTML5, CSS3, Vanilla JavaScript |
| Backend   | Node.js, Express.js           |
| Database  | MongoDB with Mongoose         |
| Auth      | JSON Web Tokens (JWT)         |
| Images    | Multer (local file uploads)   |

---

## 📝 Notes for Beginners

- **CORS** is enabled so the frontend can talk to the backend.
- **Cart data** is stored in the browser's `localStorage` — it persists between page refreshes.
- **Product images** are uploaded to the `backend/uploads/` folder.
- The admin password is hardcoded for simplicity. In a real app, use a database with hashed passwords.
- This project has no payment gateway — orders are placed as "Cash on Delivery".

---

## 📄 License

MIT — free to use and modify for learning purposes.
