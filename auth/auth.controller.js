import {getOneUser} from "../users/user.service.js";
import "../config/config.js";

//import packages
import jwt from "jsonwebtoken";
import {createToken} from "./auth.service.js";


export const login = async (req, res) => {
    console.log("body", req.body);
    const userData = req.body;
    const user = await getOneUser(userData.email);
    console.log("password 1", req.body.password, "password 2", user.password);
    const verifyPassword = (req.body.password === user.password);
    console.log("verified:", verifyPassword);
    if(verifyPassword){
        const accessToken = createToken(user._id);
        console.log("acessToken", accessToken);
        res.json({message: `${user.username} was logged in`, data: accessToken});
    } else {
        res.status(401).join({message: "login Data is invalid"});                   // maybe eine unauthorized componente im React.
    }
}

export const logout = () => {

}


