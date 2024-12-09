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



// POST ----> data transfer from input

productsRoute.post('/', (req, res) => {
  // const {id, title, description} = req.body;
  // console.log(id, title, description);

  const data = req.body;
  // const { id, title, description } = data;

  const isAlreadyFound = Products.find((item) => item.id == data.id);

    if (isAlreadyFound) {
      return res
        .status(409)
        .send({ status: 409, message: "Product already found" });
    }
    else {
      Products.push(data);
      res.status(201).send({ status: 201, message: "Product add successfully", data: Products })

    }
})



productsRoute.delete('/:id', (req, res) => {

  const { id } = req.params;
  const idNotFound = Products.find((item) => item.id == id);

  if(!idNotFound) {
    return res
        .status(409)
        .send({ status: 409, message: "Product ID not found" });
  }

  let deletedItem = Products.filter((item) => item.id != id);
  // console.log(deletedItem);
  
  res.status(200).send({ status: 200, message: "Product delete successfully", data: deletedItem })
})

export default productsRoute;