import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import { connectDB } from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
  connectDB();
});

//email:- test-admin@gmail.com
//password:- test-admin-password

//email:- test-user@gmail.com
//password:- test-user-password

//email:- test-user1@gmail.com
//password:- test-user1-password

//https://mern-e-commerce-gqza.onrender.com