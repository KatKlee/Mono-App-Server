import express from "express";
import {login, logout} from "./auth.controller.js";
import {encrypt} from "./middleware/encryptMiddleWare.js";

const router = express.Router();

router.post("/login", encrypt, login);

router.get("/logout", logout);


export default router;