const express = require('express');
const app = express();

app.get('/api/cars',(req,res)=>{
})

app.get('/api/cars:id',(req,res)=>{
    req.params.id
})

app.post('/api/cars',(req,res)=>{

})

app.put('/api/cars:id',(req,res)=>{
    req.params.id
})

app.delete('/api/cars:id',(req,res)=>{
    req.params.id
})