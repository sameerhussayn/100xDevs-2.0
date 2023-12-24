const { User } = require("../db");
const jwt = require('jsonwebtoken')
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const { authorization } = req.headers;
        const token = authorization && authorization.split(" ")[1];
        if (!token) {
          return res.status(401).json({ message: "Unauthorized access." });
        }
    
        const payload = jwt.verify(token, "secret-key");
        req.body.id = payload.id;
        const userFound = User.findById(payload.id);
        if (!userFound) {
          return res.status(401).json({ message: "Unauthorized access." });
        }
        next()
      } catch (error) {
        console.log(error)
        res.json({message: 'Internal Server Error'})
      }
}

module.exports = userMiddleware;