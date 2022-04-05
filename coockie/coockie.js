const express = require("express")
const cookieParser = require("cookie-parser")
const app = express()
app.use(cookieParser())

app.get("/setthecookies",(req,res)=>{
    res.cookie("Sub-one","react js")
    res.cookie("Sub-two","node js")
    res.cookie("Sub-three","MongoDB")
    res.send({"message":"Cookies are set"})
})

app.get("/getthecookies",(req,res)=>{
    res.send(req.cookies)
    console.log(req.cookies)
})

app.get("/deletethecookies",(req,res)=>{
    res.clearCookie("Sub-one")
    res.send("Cookies are deleted")
    console.log("Cookies are deleted")
})

// server listening
const port = process.env.PORT || 1111
app.listen(port,()=>{ console.log("server listen port no.: ",port) });