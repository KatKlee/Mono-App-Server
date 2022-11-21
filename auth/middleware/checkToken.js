import jwt from 'jsonwebtoken'

export const checkToken = (req, res, next) => {
    const claim = jwt.verify(token, HDSZUGTZ)
    req.body.userid = claim.userid
}