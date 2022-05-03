const mongoose = require("mongoose");

const Product = new mongoose.Schema({
    title: String,
    quantity: Number,
    barcode: String,
    image: String,
    sku: String,
    category: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
})


module.exports = mongoose.model("Product", Product);