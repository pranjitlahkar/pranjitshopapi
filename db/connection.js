const mongoose = require("mongoose");



const connection=(uri)=>{
    console.log('db connected')
   return mongoose.connect(uri ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   })
   
}

module.exports= connection;