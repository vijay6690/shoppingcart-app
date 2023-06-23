const express = require("express")
const server = express()
const mongoose = require("mongoose");
const { createProduct } = require("./controller/Product");
const productRouters = require("./routes/Products.js")
const categoryRouter = require("./routes/Categories.js")
const brandRouter = require("./routes/Brands.js")
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

server.use(cors(corsOptions))

server.use(express.json())
server.use("/products", productRouters.router)
server.use("/products",productRouters.router)
server.use("/categories", categoryRouter.router)
server.use("/brands", brandRouter.router)


main().catch(err => console.log(err))
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');    
    console.log("mongo connected");
}

server.get("/",(req,res) => {
    res.json({status: "success"})
})

server.post("/products",createProduct)

server.listen(8000,() => {
    console.log("server started");
})


// C:\Program Files\MongoDB\Server\6.0\data\