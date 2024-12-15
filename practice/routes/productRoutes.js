import express from "express";
import enums from "../constant/enum.js";
import Tasks from "../models/taskModel.js";

const productRoutes = express.Router();

productRoutes.get("/", async (req, res) => {
  try {
    const data = req.body;
    const getAllData = await Tasks.find(data);

    res
      .status(200)
      .send({ status: 200, message: enums.ON_SUCCESS, data: getAllData });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ON_ERROR });
  }
});

productRoutes.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const response = await Tasks.create(data);

    res
      .status(200)
      .send({ status: 200, message: enums.ON_ADD, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ON_ERROR });
  }
});

productRoutes.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await Tasks.findByIdAndDelete(id, data);

    res
      .status(200)
      .send({ status: 200, message: enums.ON_DELETE, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ON_ERROR });
  }
});

productRoutes.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await Tasks.findByIdAndUpdate(id, data);

    res
      .status(200)
      .send({ status: 200, message: enums.ON_UPDATE, data: response });
  } catch (error) {
    res.status(400).send({ status: 400, message: enums.ON_ERROR });
  }
});

export default productRoutes;
