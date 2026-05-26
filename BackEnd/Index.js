const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const coustomerRoutes = require("./Routes/Customerdata")

const app = express()

app.use(cors({
    origin: "*",       
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

mongoose.connect("mongodb://localhost:27017/BMS")
    .then(() => console.log(" MongoDB connected"))
    .catch((err) => console.error(" MongoDB error:", err.message))

app.use("/api/inquary/info", coustomerRoutes)

const port = 5000
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`)
})