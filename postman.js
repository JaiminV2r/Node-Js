// POSTMAN testing                                                                        ---------- > 24/03/2022s < ----------
var express = require("express")
var app = express()

app.get("/",(req, res)=>{
    res.json({"message":"This is default get method"})
})
app.get("/products",(req, res)=>{
    res.json({"message":"This is products get method"})
})

app.post("/",(req, res)=>{
    res.json({"message":"This is default post method"})
})
app.post("/products",(req, res)=>{
    res.json({"message":"This is products post method"})
})

app.head("/",(req, res)=>{
    res.json({"message":"This is default head method"})
})
app.head("/products",(req, res)=>{
    res.json({"message":"This is products head method"})
})

app.delete("/",(req, res)=>{
    res.json({"message":"This is default delete method"})
})
app.delete("/products",(req, res)=>{
    res.json({"message":"This is products delete method"})
})

app.listen(4789, ()=>{
    console.log("app 4789 listen successfully...!")
})