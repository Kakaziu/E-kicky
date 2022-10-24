const jwt = require('jsonwebtoken')
const secret = require('../secret')

exports.authVerify = (req, res, next) =>{
    const token = req.header('authorization-token')
    if(!token) return res.status(401).json({ message: 'Acesse Denied' })

    try{
        const userVerified = jwt.verify(token, secret)
        req.user = userVerified
        next()
    }catch(e){
        return res.status(401).json({ message: 'Acesse Denied' })
    }
}