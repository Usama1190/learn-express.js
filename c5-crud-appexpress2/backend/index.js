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
