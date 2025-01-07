import express from "express";
import dotenv from "dotenv";
import { enums } from "./constant/enums.js";
import productRoute from "./routes/productRoute.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then((req, res) => {
    console.log("MongoDB Connect Successfully!");
  })
  .catch((error) => {
    console.log("MongoDB Connect Failed!");
  });

app.use("/products", productRoute);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: 200, message: enums.CONNECTION_SUCCESS });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.CONNECTION_FAILED });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
