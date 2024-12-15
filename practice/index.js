import express from 'express';
import dotenv from 'dotenv';
import enums from './constant/enum.js';
import productRoutes from './routes/productRoutes.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('Mongo_db connect successfully!');
    
})
.catch((error) => {
    console.log('Connection failed!', error);
    
})

app.use(express.json());

app.use('/products', productRoutes)

app.get('/', (req, res) => {
    try {
        res.status(200).send({ status: 200, message: enums.ON_SUCCESS })
    } catch (error) {
        res.status(400).send({ status: 400, message: enums.ON_ERROR })
    }
})



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})