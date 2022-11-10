import express from "express";
import {register} from "./user.controller.js";

const router = express.Router();

router.post("/register", register);

router.get("/", (req, res) => {
    res.json({message: "it works"});
});


export default router;