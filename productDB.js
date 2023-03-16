require("dotenv").config();
const mongoose= require("mongoose")
const connection= require("./db/connection")
const Product = require("./models/productModel")
const productlist = require("./productlist.json")




const start= async()=>{
    try {
     await connection(process.env.MONGODB_URI);
     await Product.create(productlist);
     console.log("successful")

    } catch (error) {
        console.log(error)
    }

}
start();