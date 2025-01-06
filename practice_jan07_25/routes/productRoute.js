import express from "express";
import { enums } from "../constant/enums.js";
import { products } from "../data/products.js";

const productRoute = express.Router();

productRoute.get("/", (req, res) => {
  try {
    res
      .status(200)
      .send({ status: 200, message: enums.CONNECTION_SUCCESS, data: products });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.NOT_FOUND });
  }
});

productRoute.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const response = products.find((items) => items.id == id);
    
    res
      .status(200)
      .send({ status: 200, message: enums.CONNECTION_SUCCESS, data: response });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.NOT_FOUND });
  }
});

productRoute.get("*", () => {
  res.status(404).send({ status: 404, message: enums.NOT_FOUND });
});

productRoute.post("/add-product", (req, res) => {
  try {
    const response = req.body;
    res
      .status(200)
      .send({ status: 202, message: enums.ADD_SUCCESS, data: response });
  } catch (error) {
    res.status(404).send({ status: 400, message: enums.ADD_FAILED });
  }
});

productRoute.delete("/delete-product/:id", (req, res) => {
  try {
    const id = req.params;

    res
      .status(200)
      .send({ status: 200, message: enums.DELETE_SUCCESS, data: id });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.DELETE_FAILED });
  }
});

productRoute.put("/update-product/:id", (req, res) => {
  try {
    const id = req.params;
    const response = req.body;
    res
      .status(200)
      .send({ status: 200, message: enums.UPDATE_SUCCESS, data: id });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.UPDATE_FAILED });
  }
});

export default productRoute;
