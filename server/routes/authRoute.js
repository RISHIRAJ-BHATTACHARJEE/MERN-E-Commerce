import express from "express";
import { getProfile, login, logout, refreshToken, signup } from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

//Signup route
router.post("/signup", signup)

//Login route
router.post("/login", login)

//Logout route
router.post("/logout", logout)

//Refresh Acces Token Route
router.post("/refresh-token", refreshToken);

//Get Profile Route
router.get("/profile", protectRoute, getProfile);

export default router;