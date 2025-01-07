import express from "express";
import { enums } from "../constant/enums.js";
// import { products } from "../data/products.js";
import Product from "../models/productModel.js";

const productRoute = express.Router();

productRoute.get("/", async (req, res) => {
  try {
    const getAllProducts = await Product.find();
    res
      .status(200)
      .send({ status: 200, message: enums.CONNECTION_SUCCESS, data: getAllProducts });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.NOT_FOUND });
  }
});

// productRoute.get("/:id", (req, res) => {
//   try {
//     const { id } = req.params;
//     const response = products.find((items) => items.id == id);
    
//     res
//       .status(200)
//       .send({ status: 200, message: enums.CONNECTION_SUCCESS, data: response });
//   } catch (error) {
//     res.status(404).send({ status: 404, message: enums.NOT_FOUND });
//   }
// });

// productRoute.get("*", () => {
//   res.status(404).send({ status: 404, message: enums.NOT_FOUND });
// });

productRoute.post("/add-product", (req, res) => {
  try {
    const data = req.body;
    const addProduct = Product.create(data);
    // products.push(response);
    res
      .status(200)
      .send({ status: 202, message: enums.ADD_SUCCESS, data: data });
  } catch (error) {
    res.status(404).send({ status: 400, message: enums.ADD_FAILED });
  }
});

productRoute.delete("/delete-product/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);
    // const data = products.find((items) => items.id == id);
    

    res
      .status(200)
      .send({ status: 200, message: enums.DELETE_SUCCESS, data: deleteProduct });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.DELETE_FAILED });
  }
});

productRoute.put("/update-product/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const data = req.body;
    const updateProduct = await Product.findByIdAndUpdate(id, data);
    res
      .status(200)
      .send({ status: 200, message: enums.UPDATE_SUCCESS, data: updateProduct });
  } catch (error) {
    res.status(404).send({ status: 404, message: enums.UPDATE_FAILED });
  }
});

export default productRoute;
