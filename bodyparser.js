var express = require("express")
var app = express()
var port = 4568
app.listen(port,()=>{
    console.log("Listen success port no. : ",port)
})

var bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})
app.post("/login",(req,res)=>{
    console.log(req.body)
    if(req.body.uname == "jaimin" && req.body.upwd == "vaddoriya"){
        res.send("<h1> Login SuccessFull!.. </h1>")
    }
    else{
        res.send("<h1> Login Failed </h1>")
    }
})

//  Fall Back Function
app.use("/",(req,res)=>{
    res.send("<h1> No Page </h1>")
})