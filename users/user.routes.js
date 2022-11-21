import express from "express";
import { getOne, register } from "./user.controller.js";
import { encrypt } from "../auth/middleware/encryptMiddleware.js";

const router = express.Router();

router.post("/register", encrypt, register);

router.get("/", getOne);



export default router;