const express = require('express');
const router = express.Router();


router.get('/api/cars',(req,res)=>{
})

router.get('/api/cars:id',(req,res)=>{
    req.params.id
})

router.post('/api/cars',(req,res)=>{

})

router.put('/api/cars:id',(req,res)=>{
    req.params.id
})

router.delete('/api/cars:id',(req,res)=>{
    req.params.id
})

module.exports= router
