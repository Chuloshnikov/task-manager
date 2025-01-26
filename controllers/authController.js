import bcrypt from "bcrypt";
import connectDB from '../config/db.js';

import User from "../models/userModel.js";

connectDB();

export const register = async (req, res) => {
  try {
    const { username, email, password: pass, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(pass, salt);

    const user = await User.create({
      username,
      email,
      password: hash,
      role,
    });

    const { password, ...userData } = user._doc;

    return res.status(201).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password: pass } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isValid = await bcrypt.compare(pass, user.password);

    if (!isValid) {
      return res.status(400).json({
        message: "Invalid password or email",
      });
    }

    const { password, ...userData } = user._doc;

    return res.status(201).json(userData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
