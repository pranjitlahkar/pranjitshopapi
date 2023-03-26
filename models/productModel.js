const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price field cannot be empty"]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.8

    },
    img: {
        type: String
    },
    company: {
        type: String,
        enum: {
            values: ["apple", "samsung", "sony", "oppo", "vivo", "jbl"],
            message: `{value} is not supported`
        }
    },
    images: {
        type: Array
    }



}, { timestamps: true })

const productModel = new mongoose.model("Product", productSchema);
module.exports = productModel;