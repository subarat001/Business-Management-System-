const mongoose = require("mongoose")
const ProductScheema = mongoose.Schema({
    Name:String,
    Capcity:String,
    Amount:Number,
    WGSLLanguageFeatureseight:Number,
    Qty:Number,
    HSN:Number,
})

const productModel = mongoose.model("products" , ProductScheema)
module.exports = productModel