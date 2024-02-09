const mongoose = require('mongoose')

// Schema // field
const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        Required:true,
    },
    email:{
        type:String,
        Required:true,
    }
},{timestamps:true})

// create model

const StudentModel = mongoose.model('curd',StudentSchema);// blog is name of collection

module.exports = StudentModel