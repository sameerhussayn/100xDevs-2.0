const { Admin } = require("../db");
const jwt = require('jsonwebtoken')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const { authorization } = req.headers;
    // console.log(authorization)
    const token = authorization && authorization.split(" ")[1];
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    const payload = jwt.verify(token, "secret-key");
    const adminFound = Admin.findById(payload.id);
    if (!adminFound) {
      return res.status(401).json({ message: "Unauthorized access." });
    }
    next()
  } catch (error) {
    console.log(error)
    res.json({message: 'Internal Server Error'})
  }
}

module.exports = adminMiddleware;
