const mongoose = require('mongoose')

// Schema // field
const AboutSchema = new mongoose.Schema({
    description:{ type:String ,Required: true,trim:true}
},{timestamps:true})

// create model

const AboutModel = mongoose.model('about',AboutSchema);// about is name of collection

module.exports = AboutModel