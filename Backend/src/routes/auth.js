import express from "express";
import passport from "../config/passport.js";
import { register, login, googleCallback, getCurrentUser } from "../controller/auth.js";
import { authenticateToken } from "../middleWare/auth.js";

const router = express.Router();

// Regular authentication routes
router.post("/register", register);
router.post("/login", login);

// Protected route to get current user
router.get("/me", authenticateToken, getCurrentUser);

// Google OAuth routes
router.get("/google", 
  passport.authenticate("google", { 
    scope: ["profile", "email"] 
  })
);

router.get("/google/callback", 
  passport.authenticate("google", { 
    failureRedirect: "http://localhost:5173/auth/error" 
  }),
  googleCallback
);

// Logout route
router.post("/logout", (req, res) => {
  res.json({ 
    success: true, 
    message: "Logged out successfully" 
  });
});

export default router;