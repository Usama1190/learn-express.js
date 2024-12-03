import express from "express";
import comments from "../comments.js";

const productRoutes = express.Router();

productRoutes.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: 'success', data: comments})
})

productRoutes.get('/:id', (req, res) => {
    res.status(200).send({status: 200, message: 'success', data: []})
})

export default productRoutes;