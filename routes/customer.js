const express = require('express');
const router = express.Router();

router.get('/api/customers',(req,res)=>{
    res.send("all customers")
})

router.get('/api/customers:id',(req,res)=>{
    req.params.id
})

router.post('/api/customers',(req,res)=>{

})

router.put('/api/curstomers:id',(req,res)=>{
    req.params.id
})

router.delete('/api/customers:id',(req,res)=>{
    req.params.id
})

module.exports= router