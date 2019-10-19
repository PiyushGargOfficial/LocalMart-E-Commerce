const mongoose = require('../connect');
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    imagepath: {
        type: String,
        default: null
    },
    imagename: {
        type: String,
        default: null
    }
})

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;