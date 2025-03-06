import User from "../models/user.model.js";
import bycrptjs from "bcryptjs";
import {errorHandler} from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (
      !username ||
      !email ||
      !password ||
      (username === "") | (email === "") ||
      password === ""
    ) {
      return next(errorHandler(400, "All fields are required!"));
    }

    const hashedPassword = bycrptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json("User created successfully");
  } catch (error) {
    next(error);
  }
};
