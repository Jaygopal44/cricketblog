const mongoose = require('mongoose')

// Schema // field
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        Required:true,
    },
    email:{
        type:String,
        Required:true,
        unique:true,
    },
    password:{
        type:String,
        Required:true,
    },
},{timestamps:true})

// create model

const UserModel = mongoose.model('user',UserSchema);// user is name of collection

module.exports = UserModel