require("dotenv").config();
const express = require("express");
const cors= require("cors")
const app = express();
app.use(cors())
const connection = require("./db/connection")
const PORT = process.env.PORT || 5000
const product_route = require("./routes/products")

app.get("/" ,(req,res)=>{
    res.send("Hello World I am live")
})

app.use("/api/products",  product_route)

const start = async () => {
    try {
        await connection(process.env.MONGODB_URI);
        app.listen(PORT, () => {
            console.log(`${PORT} is connected`)
        })
    } catch (error) {
        console.log(error)
    }
}

start();