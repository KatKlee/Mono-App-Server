import express from "express";

import {create, get, edit} from "./finanses.controller.js";

const router = express.Router();

router.post("/", create);

router.get("/", get);

router.put("/", edit);


export default router;