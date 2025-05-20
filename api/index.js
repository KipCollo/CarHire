const express = require('express');

const customer = require('./routes/customer')
const car = require('./routes/car')

const app = express();

app.use('/api', customer)
app.use('/api', car)

app.listen(3000, ()=>{
    console.log("Listening...")
})