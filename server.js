import express from 'express'
import carsRoute from "./routes/cars.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/v1/cars",carsRoute);

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});