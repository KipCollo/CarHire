const express = require('express');
const app = express();

app.get('/api/customers',(req,res)=>{
})

app.get('/api/customers:id',(req,res)=>{
    req.params.id
})

app.post('/api/customers',(req,res)=>{

})

app.put('/api/curstomers:id',(req,res)=>{
    req.params.id
})

app.delete('/api/customers:id',(req,res)=>{
    req.params.id
})