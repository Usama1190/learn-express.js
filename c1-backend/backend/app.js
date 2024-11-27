import express from "express";
import { products } from "./products.js";
import { posts } from "./allData/post.js";

const app = express();



// Routes 

app.get('/', (req, res) => {
    res.send(`<div>
    <h1>My all api<h1>
    <ul>
    <li>Post : localhost:8080/post</li>
    </ul>
    </div>`)
})
app.get('/products', (req, res) => {
    res.status(200).send({ user:{name:"sadiq",age:23},status:"success", allProducts:products})
})

app.get('/posts', (req, res) => {
    res.status(200).send({status:true,allPosts:posts})
})

app.get('*', (req, res) => {
    res.status(404).send({message:"page not found"})
})




app.get('/products/:id', (req, res) => {
    const data = req.params;
    res.status(200).send(`my id is ${data?.id}`)
})




//server listner
app.listen(8080, () => {
    console.log("server started ")
})