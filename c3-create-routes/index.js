import express from 'express';
import dotenv from 'dotenv';
import productsRoute from './routes/productsRoute.js';

const app = express();

dotenv.config();

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Backend!')
})

app.use('/products', productsRoute);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})