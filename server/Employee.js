const mongoose = require('mongoose')

const EmpoyeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    picture:String,
    tax:String,
    hierarchy:String
})

mongoose.model("employee",EmpoyeeSchema)