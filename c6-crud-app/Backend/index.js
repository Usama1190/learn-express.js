import express from 'express';
import dotenv from 'dotenv';
import { taskRoutes } from './routes/taskRoutes.js';
import { enums } from './constant/enum.js';
import mongoose from 'mongoose';

/*

mongodb
username: usamaisrar1190
password: hxwqKnbEW8n5M22x

*/

const app = express();
dotenv.config();

app.use(express.json());

app.use('/tasks', taskRoutes)

app.get('/', (req, res) => {
    try {
        res.status(200).send({ status: 200, message: enums.SUCCESS })
    }
    catch(error) {
        res.status(400).send({ status: 400, message: enums.ERROR_MSG })
    }
})

const MONGODB_URI = process.env.MONGODB_URI;


/*  

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('db connected successfully!');
    
})
.catch((error) => {
    console.log('db not connected!', error);
    
})

*/


const dbConnection = async() => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('db connected successfully!');
        
    } catch (error) {
        console.log('db not connected!', error);
        
    }
}

dbConnection();


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})









/*

// Extracted code

import express from 'express'
import dotenv from 'dotenv';
import taskRoutes from './routes/taskRoutes.js';
import mongoose from 'mongoose';
// 
const app = express();
dotenv.config();


app.use(express.json());

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

app.get('/',(req,res)=>{
    res.send("welcome to backend")
})

app.use('/tasks',taskRoutes);


// mongoose.connect(MONGODB_URI)
// .then(()=>{
//     console.log("db connected successfully")
// })
// .catch((error)=>{
//     console.log("db not connected" , error);
// })

const dbConnection = async()=>{
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("db connected succesfully")
    }
    catch(error){
        console.log("db is not connected",error)
    }
}
dbConnection();




app.listen(PORT,()=>{
    console.log('server started')
})


*/