const express=require('express')
const mongoose = require('mongoose')
const product =new express()
const model = require('./model/productmodel')
const control = require('./services/user')
const route = require('./router/router')

const body = require("body-parser")
const bodyParser=require('body-parser')
const port = 7001
const product_url = "mongodb://localhost:27017/productdata"
product.use(bodyParser.json())
product.use(express.json())
product.use("/",route)
mongoose.connect(product_url)
const database = mongoose.connection
database.once("open",_ => {
    console.log(`database connected: `,product_url);
})
database.on(`error`,err =>{
    console.log(`connection error`,err);
})
product.listen(port,()=>{
    console.log(`server listening at localhost: ${port}`);
})