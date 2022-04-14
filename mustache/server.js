const express=require("express")
const app =express();
const mustacheexpress=require('mustache-express')

app.engine('mustache', mustacheexpress())
app.set('view engine','mustache')

app.get('/student', (req,res)=>{
    var model = {
        studentId:101, stdudentName:"Jaimin", studentMarks : 95, subjects :[
            {name : "English", Marks : 78},
            {name : "Maths", Marks : 85},
            {name : "Science", Marks : 76},
        ]
    }
    res.render('student',model)
})

const port = process.env.PORT || 4444;
app.listen(port,()=>{
    console.log("server listen port no.:",port)
})