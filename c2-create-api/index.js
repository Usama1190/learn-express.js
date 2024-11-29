import express from 'express';

const app = express();



app.listeners(8000, () => {
    console.log('Server is running!');
    
})