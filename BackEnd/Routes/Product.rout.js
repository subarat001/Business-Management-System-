const express = require("express")
const productModel = require("../Model/Product.model")
const router = express.Router()


// insert product detali 
router.post("/" , async(req , res)=> {
    await productModel.create(req.body)
    res.json({"message" : "data insert successfully "})
})

module.exports = router