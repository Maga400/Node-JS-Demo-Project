import { Car } from "../models/car.model.js";

export async function getCars(req, res) {
  try {
    const cars = await Car.find();
    res.status(200).json({
      success: true,
      data: cars,
      message: "All Cars Returned Successfully!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function getCarById(req, res) {
  try {
    const { id } = req.params;
    const car = await Car.findById(id);

    if (!car) {
      res
        .status(404)
        .json({ success: false, message: `Car With Id ${id} Not Found!` });
    }

    res.status(200).json({
      success: true,
      data: car,
      message: `Car With Id ${id} Returned Successfully!`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export async function createCar(req, res) {
  const newCar = req.body;
  const car = new Car(newCar);
  try {
    const savedCar = await car.save();
    res.status(201).json({
      success: true,
      data: savedCar,
      message: "New Car Added Server Successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
}

export async function editCar(req, res) {
  try {
    const { id } = req.params;
    const updatedCar = req.body;
    const car = await Car.findByIdAndUpdate(id, updatedCar, { new: true });
    res.status(201).json({
      success: true,
      data: car,
      message: `Cars With Id ${id} Updated Successfully!`,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: "Internal Server Error" });
  }
}

export async function deleteCar(req, res) {
  try {
    const { id } = req.params;
    const car = await Car.findByIdAndDelete(id);

    if (!car) {
      res
        .status(404)
        .json({ success: false, message: `Car With Id ${id} Not Found!` });
    }

    res.status(200).json({
      success: true,
      message: `Car With Id ${id} Deleted Successfully!`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
