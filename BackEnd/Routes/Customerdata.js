const express = require("express")
const CustomerModel = require("../Modules/Coustomer")
const router = express.Router()


router.post("/" , async (req , res)=> {
    try{
        const newCoustomer = new CustomerModel(req.body);
        await newCoustomer.save()
        res.json({message: "inquarry submit successfully"})
    }catch(err) {
        res.status(500).json({message:"somthing went wrong"})
    }
} )

module.exports = router 