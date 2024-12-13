import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database eshte i lidhur");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// per te lejuar json object ne req body
app.use(express.json());

app.listen(5000, () => {
  console.log("Serveri punon ne rregull ne porten 5000!");
});

app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
