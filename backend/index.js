const express = require('express');
const mongoose =require ('mongoose');
const app = express();

mongoose.connect('mongodb+srv://OMINISTACK:OMINISTACK@cluster0-axa2g.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());

app.get('/users',(request,response)=>{
    console.log(request.body);
    return response.json({ message:'Hello World'});
});

app.listen(3333);