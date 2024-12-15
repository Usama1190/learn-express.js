import express from "express";
import dotenv from "dotenv";
import { enums } from "./constant/enum.js";
import { productRoute } from "./routes/productRoute.js";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(express.json());

app.use("/products", productRoute);

const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("mongo_db connected!");
  })
  .catch((error) => {
    console.log("connection failed!", error);
  });

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: 200, message: enums.SUCCESS_MSG200 });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ERROR_MSG404 });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on this ${PORT}`);
});
