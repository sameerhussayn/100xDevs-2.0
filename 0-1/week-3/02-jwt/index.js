const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const {z} = require("zod")
/*
 - Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
 - Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
 - Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
 - To test, go to the 02-jwt folder and run `npx jest ./tests`
 */
const schema = z.object({
    "username": z.string().email(),
    "password" : z.string().min(6)
})

 function signJwt(username, password) {
    const input = schema.safeParse({username, password})
    if(!input.success) return null;

    const token = jwt.sign({username}, jwtPassword)
    return token;
}

function verifyJwt(token) {
   try {
    const verified = jwt.verify(token, jwtPassword)
    if(verified) return true;
    // return false
   } catch (error) {
    return false
   }
   
}

function decodeJwt(token) {

    let verifiedToken = jwt.decode(token);
    if(verifiedToken){
        return true
    }
    return false;
}


module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}