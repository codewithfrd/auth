const jwt = require('jsonwebtoken')

const ensureAuth = (req,res,next) =>{
    const auth = req.headers["authorization"];
    if(!auth){
        return res.status(403).json({message:"unauthrized"})
    }
    try {
        const decoded = jwt.verify(auth, process.env.JWT_SECERT)
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(403).json({message:"unauthrized token or expired"}) 
    }
}

module.exports = ensureAuth