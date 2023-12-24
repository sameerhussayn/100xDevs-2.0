const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")

// Admin Routes
router.post("/signup", async(req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const adminFound = await Admin.findOne({username})
        if(adminFound){
            return res.status(403).json({message:'User already exist'})
        }
    const admin = new Admin({ username, password });
    admin.save();
    res.status(200).json({ message: "Admin created successfully" });
  } catch (error) {
    res.json({message: 'Internal Server Error'})
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  try {
    // const { username, password } = req.headers;
    const course = new Course(req.body);
    course.save();
    res.status(200).json({ message: "Course created successfully",courseId: course._id });
  } catch (error) {
    res.json({message: 'Internal Server Error'})
  }
});

router.get("/courses", adminMiddleware,async (req, res) => {
  // Implement fetching all courses logic
  try {
    const {username, password} = req.headers;
    const userFound = Admin.findOne(username)
    if(!userFound){
        return res.status(409).json({message:'User not found.'})
    }
    const courses = await Course.find({});
    // console.log(courses)
    res.status(200).json({ courses });

  } catch (error) {
    console.log(error)
    res.json({message: 'Internal Server Error'})
  }
});

module.exports = router;
