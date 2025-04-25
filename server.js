import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import carRoute from "./routes/car.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/cars", carRoute);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};

app.listen(process.env.PORT, () => {
  console.log(`✅ Server listening at http://localhost:${process.env.PORT}`);
  connectDB();
});
