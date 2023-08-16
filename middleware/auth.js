const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({success: false, msg: "Auth Failed"})
    }
    const token = authHeader.split(" ")[1]
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRETS)
        
        req.user = { userId: payload.userId, username: payload.email }
        next()
    } catch (error) {
       res.status(401).json({success:false, msg: "AuthFailed"}) 
    }
}

module.exports = auth