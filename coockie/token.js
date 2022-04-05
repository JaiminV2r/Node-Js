const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express()

const authorization = (req,res, next)=>{
    const allheaders = req.headers;
    if(allheaders.token === "paresh"){
        next();
    }
    else{
        res.send({"message":"Unthorization user"})
    }
}

app.get("/login",[authorization],(req,res)=>{
    if(req.query.uname == "jaimin" && req.query.upwd == "hello"){
        console.log("Success")
        res.send({"login":"Success"})
    }else{
        console.log("Failed")
        res.send({"login":"Failed"})
    }
})

// server listen
const port = process.env.PORT || 2222
app.listen(port,(req,res)=>{
    console.log("server listening port no.: ",port)
})