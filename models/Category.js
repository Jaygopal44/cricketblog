const mongoose = require('mongoose')

// Schema // field
const CategorySchema = new mongoose.Schema({
    title:{ type:String ,Required: true,trim:true}
},{timestamps:true})

// create model

const CategoryModel = mongoose.model('category',CategorySchema);// blog is name of collection

module.exports = CategoryModel