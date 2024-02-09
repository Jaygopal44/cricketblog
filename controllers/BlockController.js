const AboutModel = require('../models/About.js');
const BlogModel=require('../models/Blog.js');
const CategoryModel = require('../models/Category.js');

class BlockController{
    static Home = async(req,res)=>{
        
        try{
            const result= await BlogModel.find();
            res.render('home',{data:result})

        }catch(err){
            console.log(err)
        }
    }

    static details=async(req,res)=>{
        try{
            const data= await BlogModel.findById(req.params.id);
        const category= await CategoryModel.find();
        const recentblogs= await BlogModel.find();
        res.render('details',{data:data,category:category,recentblogs:recentblogs});

        }catch(err){
            console.log(err)
        }
    } 

    static About = async(req,res)=>{
        try{
            
            const result = await AboutModel.find()
            res.render('about',{data:result})

        }catch(err){
            console.log(err)
        }
    }

    static Blog = async(req,res)=>{
        // res.render('blog')
        try{
            const result= await BlogModel.find();
            res.render('blog',{data:result})

        }catch(err){
            console.log(err)
        }
    }

    

    static Login = (req,res)=>{
        // res.render('login',{message:req.flash('success')})
        res.render('login',{message:req.flash('error')})

    }
}


module.exports = BlockController