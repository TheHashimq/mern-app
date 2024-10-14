import { Router } from "express";
import passport from "passport";
import "../utils/google-passport.js";

const router = Router();

// Google OAuth login route
router.get(
  "/api/v1/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

// Google OAuth callback route
router.get(
  "/api/v1/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/", // Redirect after successful login
    failureRedirect: "/login", // Redirect after failure
  }),
);

export default router;
