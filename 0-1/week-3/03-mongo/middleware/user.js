const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const {username, password} = req.headers;
    if(!username || !password){
        return res.status(403).json({message:'No access'})
    } 

    const userFound = await User.findOne({username})
    if(!userFound){
        return res.status(403).json({message:'No access'})
    }
    if(userFound.password !== password){
        return res.status(403).json({message:'No access'})
    }
    next()
    } catch (error) {
        console.log(error);
    res.json({ message: "Internal Server Error" });
    }
}

module.exports = userMiddleware;