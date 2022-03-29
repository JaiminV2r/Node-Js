const express = require("express")
const app = express()

const module1 = express.Router()

module1.get("/",(req,res)=>{
    res.json({"module1":"This is get module1"})
})
module1.post("/profile",(req,res)=>{
    res.json({"module1":"This is post module1"})
})
module1.delete("/delete",(req,res)=>{
    res.json({"module1":"This is delete module1"})
})


module.exports = module1;