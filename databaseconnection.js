const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema(
    {
        date : { type: Date, required: true },
        formNo : { type: Number, required: true },
        name : { type: String, required: true },
        DOB : { type: Date, required: true },
        contact : { type: Number, required: true },
        email : { type: String, required: true },
        qualification : { type: String, required: true },
        address : { type: String, required: true },
        course : { type: String, required: true },
        inqueryfor : { type: String, required: true },
        reference : { type: String, required: true },
        notes : { type: String, required: true }
    }, { timestamps: true })

module.exports = new mongoose.model("student", studentSchema)