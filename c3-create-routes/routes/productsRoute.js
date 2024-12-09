import express from "express";
import { Products } from "../utils/constants/Products.js";

const productsRoute = express.Router();

productsRoute.get("/", (req, res) => {
  try {
    res.status(200).send({ status: 200, data: Products });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong!" });
  }
});

productsRoute.get("/productId/:id", (req, res) => {
  try {
    const { id } = req.params;

    const isPorductFound = Products.find((item) => item.id == id);

    if (!isPorductFound) {
      return res
        .status(404)
        .send({ status: 404, message: "Product not found" });
    }

    res.status(200).send({ status: 200, data: isPorductFound });
  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong!" });
  }
});

/*
productsRoute.get('/category/:category', (req, res) => {
    try {
        const { category } = req.params;

    const isCategoryFound = Products.filter((item) => item.category == category)
    
    if(!isCategoryFound) {
        return res.status(404).send({ status: 404, message: 'Product not found' })
    }

    res.status(200).send({ status: 200, data: isCategoryFound })
    } catch (error) {
        res.status(400).send({ status: 400, message: 'Something went wrong!' })
    }
    
})
*/

// query parameters

productsRoute.get("/category", (req, res) => {
  try {
    const category = req.query.category;

    // validation
    const isCategoryFound = Products.find((item) => item.category == category);

    if(!isCategoryFound) {
        return res.status(404).send({ status: 404, message: 'Category not found'})
    }

    // response
    const isCategory = Products.filter(
      (item) => item.category == category
    );

    res.status(200).send({ status: 200, data: isCategory });

  } catch (error) {
    res.status(400).send({ status: 400, message: "Something went wrong!" });
  }
});

export default productsRoute;
