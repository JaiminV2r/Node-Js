const express = require("express");
const module1 = require("./module1");
const module2 = require("./module2");
const module3 = require("./module3");

const app = express()

app.use("/m1",module1)
app.use("/m2",module2)
app.use("/m3",module3)


let port = process.env.port || 4123;
app.listen(port,()=>{console.log("Server listen port no.:",port)})