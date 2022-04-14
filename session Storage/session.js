const express = require("express")
const app = express();

// coockie-parser
const coockieParser = require("cookie-parser");
app.use(coockieParser());

// express-session
const session = require("express-session");
app.use(session({ secret: "Skillqode@123", resave: true, saveUninitialized: true }));

// Set Session
app.get('/setthesession', (req, res) => {
    req.session.uname = "admin";
    req.session.upwd = "admin123";
    res.send("Session Created...");
})

// Get Session
app.get('/getthesession', (req, res) => {
    res.send(`Session uname :  ${req.session.uname} and Session upwd : ${req.session.upwd}`);
});

// Delete Session
app.get('/deletethesession', (req, res) => {
    req.session.destroy();
    res.send('Session Deleted...')
})

const port = process.env.PORT || 100
app.listen(port,()=>{
    console.log("Server listen port no.:", port)
})