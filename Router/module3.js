const express = require("express")
const app = express()

const module3 = express.Router()

module3.get("/",(req,res)=>{
    res.json({"module3":"This is get module3"})
})
module3.post("/profile",(req,res)=>{
    res.json({"module3":"This is post module3"})
})
module3.delete("/delete",(req,res)=>{
    res.json({"module3":"This is delete module3"})
})

module.exports = module3;