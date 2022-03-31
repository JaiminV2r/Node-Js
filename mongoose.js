const express = require("express");
const MongoClient = require('mongodb').MongoClient
const ejs = require("ejs");
const querystring = require("querystring");
const app = express();
const cors= require("cors")

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
var mongoose = require("mongoose");
var EmpSchema = new mongoose.Schema(
  {
    _id: Number,
    empname: String,
    empsal: Number,
    empadd: String,
    body: String,
  },
  { versionKey: false }
);

var EmpModel = mongoose.model("Employee", EmpSchema);
MongoClient.connect("mongodb://localhost/Jaimin");

app.get("/", (req, res) => {
  console.log("No data any here"), res.send("no data in here");
});
app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/views/insertmongoose.html");
});

app.get("/insert", (req, res) => {
  res.write("Data in get method");
  res.end();
});
app.post("/insert", (req, res) => {
  console.log(req.body);
  var newEmp = new EmpModel(req.body);

  newEmp.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Data Successfully Inserted in Database Jaimin.");
    }
    mongoose.disconnect();
  });
});

const port = process.env.port || 7859;
app.listen(port, () => {
  console.log("server listen port no.:", port);
});
