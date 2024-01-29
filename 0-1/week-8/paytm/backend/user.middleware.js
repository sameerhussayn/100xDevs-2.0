import jwt from 'jsonwebtoken'
import { JWT_secret } from './config.js'

export function authMiddleware(req, res, next){
    let {authorization} = req.headers


    if(!authorization || !authorization.startsWith('Bearer ')){
        return res.status(403).json({message: 'Unauthorized acces'})
    }

    const token = authorization.split(' ')[1]
    try {
        const decoded = jwt.verify(token, JWT_secret)
        if(!decoded.userId){
            return res.status(403).json({message: 'Unauthorized acces'})
        }
        req.userId = decoded.userId;
        next()
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error"})

    }
}