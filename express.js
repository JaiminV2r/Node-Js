var express = require("express")
var app = express()
app.listen(4567,()=>{
    console.log("App 4567 listen successfully")
})

app.get("/",(req, res)=>{
    res.write("Hello World !")
    res.end()
})