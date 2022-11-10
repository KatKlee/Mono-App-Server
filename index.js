// packages
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import "./config/config.js"; // damit env variablen funktionieren


dotenv.config();

//import routes
import userRoutes from "./users/user.routes.js";

// env vars
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/users", userRoutes);




app.listen(PORT, () => {
    console.log(`the app is running on port ${PORT}`);
});







