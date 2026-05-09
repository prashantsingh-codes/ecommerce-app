# 🛒 Forever — Full-Stack Fashion E-Commerce Platform

> A complete end-to-end fashion store built from scratch — customer storefront, admin dashboard, and three payment methods. No e-commerce framework used.

[![Live Store](https://img.shields.io/badge/Live_Store-22c55e?style=for-the-badge&logo=googlechrome&logoColor=white)](https://forever-frontend-ten-chi.vercel.app/)
[![Admin Panel](https://img.shields.io/badge/Admin_Panel-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white)](https://forever-admin-one-sigma.vercel.app/)

---

## 📸 What is Forever?

Forever is a fashion e-commerce web app where users can browse clothing, filter by category and size, add items to their cart, and place orders using Stripe, Razorpay, or Cash on Delivery. A separate admin panel lets the store owner manage products, view orders, and update delivery statuses — all in real time.

---

## ✨ Features

### 🛍️ Customer Storefront
- Browse and filter products by **category**, **size**, and **price**
- Product detail pages with size selection
- **Cart management** — add, remove, update quantities
- **Checkout** with address and payment selection
- **Order history** — track status of all past orders
- **JWT-based authentication** — secure login and signup

### 💳 Payment Integration
- **Stripe** — card payments
- **Razorpay** — UPI, net banking, cards
- **Cash on Delivery** — no payment required upfront

### 🛠️ Admin Panel
- **Add / remove products** with image uploads
- **View all orders** across all customers
- **Update order status** — Order Placed → Packing → Shipped → Out for Delivery → Delivered
- Separate deployment from the storefront

### 🔐 Authentication
- JWT-based sessions for customers
- Separate admin login with hardcoded credentials (no signup)
- Passwords hashed with bcrypt

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite |
| Admin Panel | React 18, Vite (separate app) |
| Styling | Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB Atlas (Mongoose) |
| Auth | JWT + bcryptjs |
| Payments | Stripe, Razorpay |
| File Uploads | Cloudinary + Multer |
| Hosting | Vercel (frontend + admin), Render/Railway (backend) |

---

## 📁 Project Structure

```
ecommerce-app/
├── frontend/          ← Customer-facing React app
│   └── src/
│       ├── pages/     ← Home, Product, Cart, Orders, Login
│       ├── components/
│       └── context/   ← ShopContext (cart, auth, products)
├── admin/             ← Admin React app
│   └── src/
│       ├── pages/     ← Add Item, List Items, Orders
│       └── components/
└── backend/           ← Express REST API
    ├── controllers/
    ├── models/        ← User, Product, Order
    ├── routes/
    └── middleware/    ← Auth, multer upload
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Stripe and Razorpay accounts (for payment testing)
- Cloudinary account (for image uploads)

### 1. Clone the repo

```bash
git clone https://github.com/prashantsingh-codes/ecommerce-app.git
cd ecommerce-app
```

### 2. Set up the backend

```bash
cd backend
cp .env.example .env
```

Fill in your `.env`:

```env
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
ADMIN_EMAIL=admin@forever.com
ADMIN_PASSWORD=yourpassword
```

```bash
npm install
npm run dev
```

### 3. Set up the frontend

```bash
cd ../frontend
npm install
npm run dev
```

### 4. Set up the admin panel

```bash
cd ../admin
npm install
npm run dev
```

- **Storefront** → http://localhost:5173
- **Admin** → http://localhost:5174

---

## 🗄️ API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/user/register` | — | Register customer |
| POST | `/api/user/login` | — | Login customer |
| POST | `/api/user/admin` | — | Admin login |
| GET | `/api/product/list` | — | Get all products |
| GET | `/api/product/single` | — | Get single product |
| POST | `/api/product/add` | Admin | Add product |
| DELETE | `/api/product/remove` | Admin | Remove product |
| POST | `/api/order/place` | ✅ | Place COD order |
| POST | `/api/order/stripe` | ✅ | Place Stripe order |
| POST | `/api/order/razorpay` | ✅ | Place Razorpay order |
| GET | `/api/order/userorders` | ✅ | Get user's orders |
| GET | `/api/order/list` | Admin | Get all orders |
| POST | `/api/order/status` | Admin | Update order status |
| POST | `/api/cart/add` | ✅ | Add to cart |
| POST | `/api/cart/update` | ✅ | Update cart |
| POST | `/api/cart/get` | ✅ | Get cart |

---

## 🌐 Live Deployments

| App | URL |
|-----|-----|
| 🛍️ Customer Store | [forever-frontend-ten-chi.vercel.app](https://forever-frontend-ten-chi.vercel.app/) |
| 🛠️ Admin Panel | [forever-admin-one-sigma.vercel.app](https://forever-admin-one-sigma.vercel.app/) |

---

## 📄 License

MIT — free to use, modify, and deploy.

---

Built with ☕ by [Prashant Singh](https://www.linkedin.com/in/prashant-singh-079237192/)
