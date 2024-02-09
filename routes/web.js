const express = require('express')
const BlockController = require('../controllers/BlockController')
const FrontController = require('../controllers/FrontController')
const AdminController = require('../controllers/admin/AdminController')
const BlogController = require('../controllers/admin/BlogController')
const CategoryController = require('../controllers/admin/CategoryController')
const CurdController = require('../controllers/CurdController')
const AboutController = require('../controllers/admin/AboutController')
const ConatctController = require('../controllers/admin/ContactController')
const auth = require('../middleware/auth')

// const { CreateController } = require('../controllers/admin/CategoryController')

// const BlockController = require('../controllers/BlockController')
const router=express.Router();
const imagemiddleware = require('../middleware/imagemiddleware')// image middleware
const UserController = require('../controllers/user/UserController')



// Block controller

router.get('/' , BlockController.Home)
router.get('/blog/details/:id',BlockController.details);
router.get('/about' , BlockController.About)
router.get('/blog' , BlockController.Blog)

router.get('/login' , BlockController.Login)


// Admin Controller

router.get('/admin/dashboard', auth , AdminController.Dashboard)


// Admin Create blog controller

router.get('/admin/create-blogs', auth , BlogController.CategoryBlogs)
router.post('/bloginsert' , imagemiddleware , BlogController.BlogInsert)
router.get('/admin/display-blogs', auth , BlogController.DisplayBlogs)
router.get('/blog/view/:id', auth , BlogController.viewblog);
router.get('/blog/edit/:id', auth , BlogController.editblog);
router.post('/blog/update/:id', imagemiddleware  , BlogController.updateblog);
router.get('/blog/delete/:id' , BlogController.deleteblog);

// router.get('/admin/display-blogs' , BlogController.DisplayBlogs)


// Admin Create Category controller

router.get('/admin/create-category', auth , CategoryController.CreateCategory);
router.post('/admin/category/insert', auth,CategoryController.InsertCategory);
router.get('/admin/display-category', auth , CategoryController.DisplayCategory);
router.get('/category/view/:id',CategoryController.ViewCategory);
router.get('/category/edit/:id',CategoryController.EditCategory);
router.post('/category/update/:id',CategoryController.UpdateCategory);
router.get('/category/delete/:id',CategoryController.DeleteCategory);


// Admin About controller

router.get('/admin/create-about', auth , AboutController.CreateAbout);
router.post('/admin/about/insert', auth,AboutController.InsertAbout);
router.get('/admin/display-about', auth , AboutController.DisplayAbout);
router.get('/about/view/:id',AboutController.ViewAbout);
router.get('/about/edit/:id',AboutController.EditAbout);
router.post('/about/update/:id',AboutController.UpdateAbout);
router.get('/about/delete/:id',AboutController.DeleteAbout);

// Contact Controller

router.get('/contact' , ConatctController.Contact)
router.post('/contact-insert',ConatctController.InsertContact);
router.get('/admin/display-contact' , ConatctController.DisplayContact);
router.get('/contact/view/:id',ConatctController.ViewContact);
router.get('/contact/edit/:id',ConatctController.EditContact);
router.post('/contact/update/:id',ConatctController.UpdateContact);
router.get('/contact/delete/:id',ConatctController.DeleteContact);




// Curd controller
router.get('/create-form' , CurdController.CreateForm)
router.post('/form-insert' , CurdController.InsertForm)
router.get('/form-display' , CurdController.DisplayForm)
router.get('/curd/view/:id' , CurdController.CurdView)
router.get('/curd/edit/:id' , CurdController.CurdEdit)


//User controller
router.get('/register' , UserController.Register)
router.post('/registerinsert' , UserController.RegisterInsert)
router.post('/verifylogin' , UserController.VerifyLogin)
router.get('/logout' , UserController.Logout)


module.exports = router; 