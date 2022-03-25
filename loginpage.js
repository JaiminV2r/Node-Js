// Login page direct fire when you enter port in browser                                    // ----------> 25/03/2022 <----------
const express = require("express")
const queryString = require("querystring")
const app = express()

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/login.html")
})
app.post("/",(req,res)=>{
    res.writeHead(200,("content-type","text/html"))
        var postparameter = "";
        req.on("data", function(data){
            postparameter = postparameter + data;
        });
        req.on("end", function(){
            var postdata = queryString.parse(postparameter);
            if(postdata["uname"]=="skill" && postdata["upwd"] =="qode"){
                res.write("<h1> Login Successfully...!</h1>")
            }
            else{
                res.write("<h1>Login Failed, Please Try Again and Later...!</h1>")
            }
            res.end()
            console.log("post parameter : ",postparameter)
        })
})

app.listen(2020,()=>{
    console.log("1478 server is started")
})