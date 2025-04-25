import mongoose from "mongoose";

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
    minLength: "3",
    maxLength: "30",
  },
  model: {
    type: String,
    required: true,
    minLength: "3",
    maxLength: "50",
  },
});

export const Car = mongoose.model("Car", carSchema);
