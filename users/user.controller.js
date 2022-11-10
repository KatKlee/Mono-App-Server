import {registerUser} from "./user.service.js";


export const register = async (req, res) => {
    const body = req.body;
    console.log("body", body)
    const result = await registerUser(body);
    res.status(201).json({message:"user was created", data: result});
}