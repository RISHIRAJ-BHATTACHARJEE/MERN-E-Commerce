# 🛒 E-Commerce Application

This repository contains the source code for a full-stack e-commerce application. The application is divided into two main parts: the client and the server.

## 📌 Table of Contents
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

---

## 🎨 Client

The client is a React application built with Vite. It provides the user interface for the e-commerce platform, allowing users to browse products, add items to their cart, and complete purchases.

### 🚀 Technologies
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-%23000000.svg?style=for-the-badge&logo=zustand&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-FF0080?style=for-the-badge&logo=framer&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)

### ⚙️ Setup
Navigate to the client directory:
```sh
cd client
```

Install dependencies:
```sh
npm install
```

Start the development server:
```sh
npm run dev
```

### 📜 Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Previews the production build.

### 📂 Directory Structure
```
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

---

## 🖥️ Server

The server is a Node.js application built with Express. It provides the backend API for the e-commerce platform, handling user authentication, product management, cart operations, and payment processing.

### 🛠️ Technologies
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge)
![bcrypt](https://img.shields.io/badge/Bcryptjs-4A4A4A?style=for-the-badge)
![CORS](https://img.shields.io/badge/CORS-0052CC?style=for-the-badge)

### ⚙️ Setup
Navigate to the server directory:
```sh
cd server
```

Install dependencies:
```sh
npm install
```

Create a `.env` file with the following environment variables:
```
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

### 📜 Scripts
- `npm run dev`: Starts the development server with nodemon.
- `npm run start`: Starts the production server.
- `npm run build`: Installs dependencies and completes the build step.

### 📂 Directory Structure
```
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

---

## 🎯 Features
✅ Full-stack e-commerce platform  
✅ Secure authentication system (JWT)  
✅ Optimized caching with Redis  
✅ Cloud storage for images (Cloudinary)  
✅ Payment gateway integration (Stripe)  
✅ Modern frontend with React & TailwindCSS  

🚀 **Happy Coding!** 🚀
