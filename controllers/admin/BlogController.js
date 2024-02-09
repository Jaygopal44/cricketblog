const BlogModel = require("../../models/Blog")
const CategoryModel = require("../../models/Category")
const multer  = require('multer')

class BlogController{
    static CategoryBlogs = async(req,res)=>{
        res.render('admin/blog/createblog')
    }

    static BlogInsert = async(req,res)=>{
        // console.log(req.body);
        
        try{
            const{title,description,image}=req.body
            const data=  new BlogModel({
                title:title,                
                description:description,
                image:req.file.filename
            })
            
            const result= await data.save();
            res.render('admin/blog/createblog');

        }catch(err){
        console.log(err)
        }
    }

    static DisplayBlogs = async(req,res)=>{
        try {
            const result = await BlogModel.find()
            // console.log(result);
            res.render('admin/blog/displayblog',{data:result})

        } catch (err) {
            console.log(err);
        }
        
    }

    static viewblog=async(req,res)=>{
        try{
            const result=await BlogModel.findById(req.params.id);
            res.render('admin/blog/view',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static editblog=async(req,res)=>{
        try{
            const result=await BlogModel.findById(req.params.id);
            res.render('admin/blog/edit',{data:result})

        }catch(err){
            console.log(err)
        }
    }
    static updateblog=async(req,res)=>{
        if(req.file){
            var imagefile = req.file.filename
        }
        try{
            const result=await BlogModel.findByIdAndUpdate(req.params.id,{
                title:req.body.title,
                description:req.body.description,
                image:imagefile

            });
            res.redirect('/admin/display-blogs')

        }catch(err){
            console.log(err)
        }
    }
    static deleteblog=async(req,res)=>{
        try{
            const result=await BlogModel.findByIdAndDelete(req.params.id,req.body);
            res.redirect('/admin/display-blogs');

        }catch(err){
            console.log(err)
        }
    }     

  

   
}


module.exports = BlogController