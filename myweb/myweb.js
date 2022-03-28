const express = require("express")
const app = express()
console.log(__dirname)

// Admin router start
let adminrouter = express.Router()
app.use("/admin",adminrouter)

adminrouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/admin/home.html")
})
adminrouter.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/admin/about.html")
})
adminrouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/admin/insert.html")
})
adminrouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/admin/getinfo.html")
})
// Admin router end

// User router start    
let userrouter = express.Router()
app.use("/user",userrouter)

userrouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/user/home.html")
})
userrouter.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/user/about.html")
})
userrouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/user/insert.html")
})
userrouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/user/getinfo.html")
})
// User router end

// Manager Router start
let managerrouter = express.Router()
app.use("/manager",managerrouter)

managerrouter.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/manager/home.html")
})
managerrouter.get("/about",(req,res)=>{
    res.sendFile(__dirname+"/manager/about.html")
})
managerrouter.get("/insert",(req,res)=>{
    res.sendFile(__dirname+"/manager/insert.html")
})
managerrouter.get("/getinfo",(req,res)=>{
    res.sendFile(__dirname+"/manager/getinfo.html")
})
// Manager Router End
app.use("/",(req,res)=>{
    res.sendFile("d:/Jaimin/Node Js/No Page.html")
})
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("Server listen port no :",port)
})