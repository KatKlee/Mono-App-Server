import connect from "../utils/db.js";
import jwt from "jsonwebtoken";

export const createToken = (userid) => {
    const secret = process.env.ACCESS_JWT_SECRET;
    const accessToken = jwt.sign({userid}, secret, {expiresIn: '1h'});
    return accessToken;
}

export const logoutUser = async (userId) => {
    const db = await connect();
    const result = await db.collection("users").insertOne(body);
    return result;
}