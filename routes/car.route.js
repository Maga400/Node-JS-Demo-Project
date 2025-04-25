import express from "express";
import {
  getCars,
  getCarById,
  createCar,
  editCar,
  deleteCar,
} from "../controllers/car.controller.js";

const router = express.Router();

router.get("/", getCars);

router.get("/car/:id", getCarById);

router.post("/add", createCar);

router.put("/edit/:id", editCar);

router.delete("/delete/:id", deleteCar);

export default router;
