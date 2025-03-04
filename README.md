# E-Commerce Application

This repository contains the source code for a full-stack e-commerce application. The application is divided into two main parts: the client and the server.

## Table of Contents
- [Client](#client)
  - [Technologies](#technologies)
  - [Setup](#setup)
  - [Scripts](#scripts)
  - [Directory Structure](#directory-structure)
- [Server](#server)
  - [Technologies](#technologies-1)
  - [Setup](#setup-1)
  - [Scripts](#scripts-1)
  - [Directory Structure](#directory-structure-1)

## Client
The client is a React application built with Vite. It provides the user interface for the e-commerce platform, allowing users to browse products, add items to their cart, and complete purchases.

### Technologies
- React
- Vite
- Tailwind CSS
- Zustand (state management)
- Axios (HTTP client)
- React Router (routing)
- ESLint (linting)
- Framer Motion (animations)
- Stripe.js (payment processing)

### Setup
```sh
cd client
npm install
npm run dev
```

### Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Previews the production build.

### Directory Structure
```plaintext
client/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   ├── bags.jpg
│   ├── glasses.png
│   ├── jackets.jpg
│   ├── jeans.jpg
│   ├── shoes.jpg
│   ├── suits.jpg
│   ├── tshirts.jpg
│   └── vite.svg
├── README.md
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── index.css
│   ├── lib/
│   ├── main.jsx
│   ├── pages/
│   └── stores/
├── vercel.json
└── vite.config.js
```

## Server
The server is a Node.js application built with Express. It provides the backend API for the e-commerce platform, handling user authentication, product management, cart operations, and payment processing.

### Technologies
- Node.js
- Express
- MongoDB (database)
- Mongoose (ODM)
- JWT (authentication)
- Redis (caching)
- Stripe (payment processing)
- Cloudinary (image storage)
- dotenv (environment variables)
- bcryptjs (password hashing)
- cookie-parser (cookie handling)
- cors (Cross-Origin Resource Sharing)

### Setup
```sh
cd server
npm install
```
Create a `.env` file with the following environment variables:
```env
MONGO_URI=<your-mongodb-uri>
ACCESS_TOKEN_SECRET=<your-access-token-secret>
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
STRIPE_SECRET_KEY=<your-stripe-secret-key>
UPSTASH_REDIS_URL=<your-upstash-redis-url>
CLIENT_URL=http://localhost:5173
```
Start the development server:
```sh
npm run dev
```

### Scripts
- `npm run dev`: Starts the development server with nodemon.
- `npm run start`: Starts the production server.
- `npm run build`: Installs dependencies and completes the build step.

### Directory Structure
```plaintext
server/
├── .env
├── .gitignore
├── config/
│   └── db.js
├── controllers/
│   ├── analyticsController.js
│   ├── authController.js
│   ├── cartController.js
│   ├── couponController.js
│   ├── paymentController.js
│   └── productController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Coupon.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── package.json
├── routes/
│   ├── analyticsRoutes.js
│   ├── authRoute.js
│   ├── cartRoutes.js
│   ├── couponRoutes.js
│   ├── paymentRoutes.js
│   └── productRoutes.js
├── server.js
└── utils/
    ├── cloudinary.js
    ├── redis.js
    └── stripe.js
```