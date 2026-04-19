const express = require("express")
const mongoss = require("mongoose")
const cors = require("cors")
const ProductRouter = require("./Routes/Product.rout")

mongoss.connect("mongodb://localhost:27017/Product")
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use("/api/product/insertdata" , ProductRouter)

app.listen(5000 , ()=> {
    console.log(`http://localhost:5000`)
})