import { Router } from "express";
import {
  signUpValidations,
  updateValidations,
} from "../validations/user.validations.js";
import { Account, User } from "../db.js";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { authMiddleware } from "../user.middleware.js";
const router = Router();

// /api/v1/user/signup
router.post("/signup", async (req, res) => {
  try {
    const validate = await signUpValidations.safeParseAsync(req.body);

    if (!validate.success) {
      return res.status(411).json({
        message:  validate?.error?.issues[0]?.message ||"Email already taken / Incorrect inputs"
      });
    }
    const existingUser = await User.findOne({ userName: req.body.userName });

    if (existingUser) {
      return res
        .status(411)
        .json({ message: "Email already taken / Incorrect inputs" });
    }

    const user = await User.create(req.body);

   const account = await Account.create({
      userId: user._id,
      balance: Math.floor(Math.random() * 10000),
    });

    user.account = account._id

    await user.save()

    return res.status(200).json({
      message: "User created successfully", success: true
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" , error, success: false});
    console.log(error)
  }
});

// /api/v1/user/signin
router.post("/signin", async (req, res) => {
  try {
    const userFound = await User.findOne({ userName: req.body.userName });
    
    if (!userFound) {
      return res.status(411).json({ message: "Unauthorized access" });
    }

    if (userFound.password !== req.body.password) {
      return res.status(411).json({ message: "Unauthorized access /  Wrong Password" });
    }

    const token = jwt.sign(
      {
        userId: userFound._id,
      },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token , success: true,name: userFound.firstName});
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error"});
  }
});

// /api/v1/user/
router.put("/", authMiddleware, async (req, res) => {
  try {
    const validate  = await updateValidations.safeParseAsync(req.body);

    if (!validate.success) {
      return res.status(411).json({
        message: "Email already taken / Incorrect inputs",
      });
    }

    const updated = await User.updateOne({ _id: req.userId }, req.body);

    if (!updated) {
      return res.status(411).json({
        message: "Error while updating information",
      });
    }

    return res.status(200).json({
      message: "Updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/bulk", async (req, res) => {
  try {
    const filter = req.query.filter || "";

    const users = await User.find({
      $or: [
        {
          firstName: { $regex: filter ,  $options: 'i' },
        },
        {
          lastName: { $regex: filter , $options: 'i'},
        },
      ],
    });

    res.json({
      users: users.map((user) => ({
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;
