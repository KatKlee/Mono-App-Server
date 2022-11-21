import express from "express";
import { login, logout, verifyBearer } from "./auth.controller.js";
import { encrypt } from "./middleware/encryptMiddleware.js";

const router = express.Router();

router.post("/login", encrypt, login);
router.get("/verify", verifyBearer)

router.get("/logout", logout);


export default router;