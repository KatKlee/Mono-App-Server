import connect from "../utils/db.js";

export const registerUser = async (body) => {
    const db = await connect();
    const result = await db.collection("users").insertOne(body);
    return result;
}