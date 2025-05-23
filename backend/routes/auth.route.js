import express from "express";
import {
  authCheck,
  Signup,
  Login,
  Logout,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../Middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/logout", Logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
