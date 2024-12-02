import express from 'express';
import {comments} from './comments/comments.js';

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Hello Usama!</h1>${data}`);
})

app.get('/posts', (req, res) => {
    res.status(200).send({status: true, allPosts: comments})
})

app.listen(8000, () => {
    console.log('Server is running!');
    
})