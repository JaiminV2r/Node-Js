require("./config/databaseconfig").connection();
const express = require("express")
const bodyparser = require("body-parser")
const app = express()
app.use(express.json())
app.use(bodyparser.urlencoded({extended : true}))
app.use(bodyparser.json())
const student = require("./databaseconnection")

app.get("/", (req, res) => {
    res.send("Hello student");
})

app.get("/inquery", (req, res) => {
    res.sendFile(__dirname + "/register.html")
})

app.get("/register", (req, res) => {
    const studentdata = new student(req.query)
    console.log("student data : ", studentdata)

    studentdata.save(function (error) {
        if (error) {
            console.log("ERROR : ", error)
        }
        else {
            console.log("Data inserted Successfully :)")
        }
    })
})

app.post("/register", (req, res) => {
    console.log("req.body", req.body)
    const studentdata = new student(req.body)
    console.log("student data : ", studentdata)

    studentdata.save(function (error) {
        if (error) {
            console.log("ERROR : ", error)
        }
        else {
            res.send("Data successfully Inserted...")
            console.log("Data inserted Successfully :)")
        }
    })
})
//  Server listening through the port
const port = process.env.PORT || 0123;
app.listen(port, () => { console.log("Server listen port no. : ", port) });