// Middleware for handling auth
const { Admin } = require("../db")

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    try {
        const {username, password} = req.headers;
    if(!username || !password){
        return res.status(403).json({message:'No access'})
    } 

    const adminFound = await Admin.findOne({username})
    if(!adminFound){
        return res.status(403).json({message:'No access'})
    }
    if(adminFound.password !== password){
        return res.status(403).json({message:'No access'})
    }
    next()
    } catch (error) {
        console.log(error);
    res.json({ message: "Internal Server Error" });
    }

}

module.exports = adminMiddleware;