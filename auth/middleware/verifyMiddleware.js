import { verifyToken } from "../auth.service.js"

export const checkToken = (req, res, next) => {
    try {
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        console.log(result)
        next()
    } catch (error) {
        // print the error in console
        console.log(error)
        res.status(403).json({ state: false })
    }
}