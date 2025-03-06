import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
app.use(express.json());
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const messege = err.messege || "Internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    messege,
  });
});
