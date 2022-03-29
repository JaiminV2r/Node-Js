const express = require("express")
const app = express()

const module2 = express.Router()

module2.get("/",(req,res)=>{
    res.json({"module2":"This is get module2"})
})
module2.post("/profile",(req,res)=>{
    res.json({"module2":"This is post module2"})
})
module2.delete("/delete",(req,res)=>{
    res.json({"module2":"This is delete module2"})
})


module.exports = module2;