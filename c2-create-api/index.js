import express from 'express';
import dotenv from 'dotenv';
import comments from './comments.js'
import productRoutes from './routes/productsRoute.js';
import usersRoute from './routes/usersRoute.js';
import {authRoute} from './routes/authRoute.js';

const app = express();
dotenv.config();

// route

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Backend');
})



// middle waer use

// .get

app.use('/products', productRoutes);
app.use('/users', usersRoute);
app.use('/auth', authRoute);




/*
app.get('/profile', (req, res) => {
    res.status(200).send('Welcome to Profile');
})

// front -------> 
// welcome...          <------- expressjs



// dynamic routing

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).send(`Welcome to my product ${id}`);
})


// api hit

app.get('/comments', (req, res) => {
    res.status(200).send({status: 200, message: 'success', data: comments})
})


// status, message, data
// 200, all data present, data=comments


// app.get('/login', () => {
//     res.status(200).send({status: 200, message: 'You are logged in', data: comments})
// })




app.get('*', (req, res) => {
    res.status(404).send('Page Not Found');
})
*/


const PORT = process.env.PORT;          // npm install dotenv

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
    
})

// npm install nodemon





// npm install express

// expressjs framework Nodejs (manage req and res)

// console.log('hello world!);