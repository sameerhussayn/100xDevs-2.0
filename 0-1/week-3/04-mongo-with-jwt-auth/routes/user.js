const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require('jsonwebtoken')
const app = router;
// User Routes
app.post('/signup', async(req, res) => {
    // Implement user signup logic
    try {
        const { username, password } = req.body;
        const userFound = await User.findOne({username})
        if(userFound){
            return res.status(409).json({message:'User already exist'})
        }
        const user = new User({ username, password });
        user.save();
        res.status(200).json({ message: "User created successfully" });
      } catch (error) {
        console.log(error)
        res.json({message: 'Internal Server Error'})
      }
});

app.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;

    const userFound = await User.findOne({username})
    if(!userFound){
        return res.status(409).json({message:'User not exist'})
    }

    if(userFound.password !== password){
        return res.status(409).json({message:'Unauthorized access'})
    }

    const authToken = jwt.sign({username, id: userFound._id}, 'secret-key')

    return res.json({message: 'Login success', authToken})
    } catch (error) {
        console.log(error)
        res.json({message: 'Internal Server Error'})
    }
});

app.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find({});
        res.json({courses });
      } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error" });
      }
});

app.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try {
        const {courseId} = req.params;
    
        const {id} = req.body;
        const courseFound = await Course.findById(courseId)
        if(!courseFound){
            return res.status(409).json({message: 'Course not found.'})
        }
        
        const userFound = await User.findById(id)
       
        userFound.purchasedCourses.push(courseFound)
    
        // console.log(userFound)
        userFound.save()
        res.json({ message: 'Course purchased successfully' })
      } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error" });
      }
});

app.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const {id} = req.body;
        const {purchasedCourses} = await User.findById(id)
    
        res.json({purchasedCourses})
      } catch (error) {
        console.log(error);
        res.json({ message: "Internal Server Error" });
      }
});

module.exports = router;