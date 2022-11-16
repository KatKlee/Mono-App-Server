import express from "express";
import {addOne, deleteOne, editOne, getSome} from "./transaction.controller.js";

const router = express.Router();

router.post("/", addOne);

router.get("/", getSome);

router.delete("/", deleteOne);

router.put("/", editOne);


export default router;