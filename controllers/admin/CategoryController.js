const CategoryModel = require("../../models/Category");

class CategoryController {
    
  static CreateCategory = async (req, res) => {
    try {
      res.render("admin/category/create_category");
    } catch (err) {
      console.log(err);
    }
  };
  static InsertCategory = async (req, res) => {
    try {
      const data = new CategoryModel({
        title: req.body.title,
      });
      const result = await data.save();
      res.redirect("/admin/create-category");
    } catch (err) {
      console.log(err);
    }
  };
  static DisplayCategory = async (req, res) => {
    try {
      const data = await CategoryModel.find();
      res.render("admin/category/display_category", { data: data });
    } catch (err) {
      console.log(err);
    }
  };
  static ViewCategory = async (req, res) => {
    try {
      const result = await CategoryModel.findById(req.params.id);
      res.render("admin/category/view", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static EditCategory = async (req, res) => {
    try {
      const result = await CategoryModel.findById(req.params.id);
      res.render("admin/category/edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static UpdateCategory = async (req, res) => {
    try {
      const result = await CategoryModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-category");
    } catch (err) {
      console.log(err);
    }
  };
  static DeleteCategory = async (req, res) => {
    try {
      const result = await CategoryModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-category");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = CategoryController;
