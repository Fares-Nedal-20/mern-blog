import User from "../models/user.model.js";
import bycrptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

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
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password || email === "" || password === "") {
      return next(errorHandler(400, "All fields are required!"));
    }
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassword = bycrptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Password!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const google = async (req, res, next) => {
  try {
    const { name, email, photoFromGoogle } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
      const { password, ...rest } = user._doc;
      res
      .status(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
    } else {
      const generatedPassword =
      Math.random().toString(36).slice(-8) +
      Math.random().toString(36).slice(-8);
      const hashedPassword = bycrptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
        name.toLowerCase().split(" ").join("") +
        Math.random().toString(9).slice(-4), //Fares Nedal => faresnedal4831
        email,
        password: hashedPassword,
        profilePicture: photoFromGoogle,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
      const { password, ...rest } = newUser._doc;
      res
      .statue(200)
      .cookie("access_token", token, { httpOnly: true })
      .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
