const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://oministack:F3rn4nd0@cluster0-axa2g.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json());

// Metodos HTTP: get,post, put, delete

app.get('/',(request,response)=>{
    return response.json({message: 'Hello OminiStack'});
});

app.listen(3333);