const express=require("express")
const app =express();
const pug = require('pug')

app.set('view engine','pug')

app.get('/student', (req,res)=>{
    var model = {
        studentId:101, stdudentName:"Jaimin", studentMarks : 95, subjects :[
            {Name : "English", Marks : 78},
            {Name : "Maths", Marks : 85},
            {Name : "Science", Marks : 76},
        ]
    }
    res.render('student',model)
})

const port = process.env.PORT || 5555;
app.listen(port,()=>{
    console.log("server listen port no.:",port)
})