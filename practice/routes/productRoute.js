import express from 'express';
import { enums } from '../constant/enum.js';
import { Product } from '../models/productModel.js';

export const productRoute = express.Router();

productRoute.get('/', async (req, res) => {
    try {
        const data = req.body;
        const getAllData = await Product.find(data);
        res.status(200).send({ status: 200, message: enums.SUCCESS_MSG200, data: getAllData })
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.ERROR_MSG404 })
    }
})



productRoute.post('/add-product', async (req, res) => {
    try {
        const data = req.body;
        const response = await Product.create(data);
        res.status(200).send({ status: 200, message: enums.SUCCESS_MSG202, data: response })
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.ERROR_MSG400 })
    }
})




productRoute.delete('/delete-product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const response = await Product.findByIdAndDelete(id, data);
        res.status(200).send({ status: 200, message: enums.DELETE_MSG, data: response })
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.ERROR_MSG400 })
    }
})




productRoute.put('/update-product/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const data = req.body;
        const response = await Product.findByIdAndUpdate(id, data);
        res.status(200).send({ status: 200, message: enums.UPDATE_MSG, data: response })
    } catch (error) {
        res.status(404).send({ status: 404, message: enums.ERROR_MSG400 })
    }
})