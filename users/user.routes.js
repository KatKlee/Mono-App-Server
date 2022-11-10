import express from "express";


const router = express.Router();

router.post("/register");

router.get("/", (req, res) => {
    res.json({message: "it works"});
});


export default router;