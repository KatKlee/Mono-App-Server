// packages
import express from "express";
import cors from "cors";
import "./config/config.js"; // damit env variablen funktionieren



//import routes
import userRoutes from "./users/user.routes.js";
import transactionRoutes from "./transactions/transaction.routes.js";
import authRoutes from "./auth/auth.routes.js";
import finansesRoutes from "./finances/finanses.routes.js";

// env vars
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);
app.use("/auth", authRoutes);
app.use("/finanses", finansesRoutes);




app.listen(PORT, () => {
    console.log(`the app is running on port ${PORT}`);
});







