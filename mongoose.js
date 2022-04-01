const express = require("express");
const ejs = require("ejs");
const querystring = require("querystring");
const app = express();
// const cors = require("cors");

app.use(express.json());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
var mongoose = require("mongoose");
const { error } = require("console");
var EmpSchema = new mongoose.Schema(
  {
    empname: String,
    empsal: Number,
    empadd: String,
    body: String,
  },
  { versionKey: false },
  { timesTamps: true }
);

var EmpModel = mongoose.model("Employee", EmpSchema);
mongoose.connect("mongodb://localhost/Jaimin")
  .then((result) => {
    console.log("Connected success");
  })
  .catch((error) => {
    console.log("ERor : ", error);
  });

app.get("/", (req, res) => {
  console.log("No data any here"), res.send("no data in here");
});

app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/views/insertmongoose.html");
});

app.get("/insert", (req, res) => {
  res.write("Data in get method");
  var newEmp = new EmpModel("req.body",req.query);

  newEmp.save(function (err) {
    if (err) {
      console.log("insert time error : ", err);
    }
    else {
      console.log("Data Successfully Inserted in Database Jaimin.");
    }
    // mongoose.disconnect();
  });
  res.end();
});

app.post("/insert", (req, res) => {
  console.log("req.body 1 1 : :: ::", req.body);
  var newEmp = new EmpModel(req.body);
  console.log("newEmp : ",newEmp)

  newEmp.save(function (err) {
    if (err) {
      console.log("insert time error : ", err);
    } else {
      console.log("Data Successfully Inserted in Database Jaimin.");
    }
  });
});

  app.get("/find",(req,res)=>{
    EmpModel.find().select("empname").then((data)=>{
      res.json(data)
    })
    .catch((error)=>{
      console.log("errorroeoer : ",error)
    })
  })

const port = process.env.port || 7859;
app.listen(port, () => {
  console.log("server listen port no.:", port);
});
