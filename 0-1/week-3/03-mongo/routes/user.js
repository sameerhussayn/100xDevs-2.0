const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Course, User } = require("../db")
// User Routes


router.post("/signup", (req, res) => {
  // Implement user signup logic
  try {
    const {username, password} = req.body;
    const user = new User({username, password})
    user.save()
    return res.json({ message: 'User created successfully' })
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
});


router.get("/courses", async(req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.json({courses });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async(req, res) => {
  // Implement course purchase logic
  try {
    const {courseId} = req.params;

    const {username} = req.headers;
    const courseFound = await Course.findById(courseId)
    if(!courseFound){
        return res.status(409).json({message: 'Course not found.'})
    }
    
    const userFound = await User.findOne({username})
   
    userFound.purchasedCourses.push(courseFound)

    console.log(userFound)
    userFound.save()
    res.json({ message: 'Course purchased successfully' })
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware,async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const {username} = req.headers;
    const {purchasedCourses} = await User.findOne({username})

    res.json({purchasedCourses})
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
});

module.exports = router;