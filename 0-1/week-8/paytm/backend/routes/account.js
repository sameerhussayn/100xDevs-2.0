import { Router } from "express";
import { authMiddleware } from "../user.middleware.js";
import { Account } from "../db.js";
import mongoose from "mongoose";

const router = Router();

// check balance
router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const {balance} = await Account.findOne({ userId: req.userId });

    return res.json({ balance });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//transfer money
router.post("/transfer", authMiddleware, async (req, res) => {
  try {
    const session = await mongoose.startSession();
    //check if sufficient balance
    session.startTransaction();
    const sender = await Account.findOne({ userId: req.userId });
    if (req.amount > sender.amount) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    //check if receiver exist
    const receiver = await Account.findOne({ userId: req.body.to }).session(
      session
    );

    if (!receiver) {
      await session.abortTransaction();
      return res.status(400).json({
        message: "Invalid account",
      });
    }

    //update amount logic
    await Account.updateOne(
      { userId: req.userId },
      {
        $inc: { balance: -req.body.amount },
      },
      { session, new: true }
    );

    await Account.updateOne(
      { userId: req.body.to },
      {
        $inc: { balance: req.body.amount },
      },
      { session, new: true }
    );

    await session.commitTransaction();
    res.json({
      message: "Transfer successful",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
export default router;
