const StudentModel = require("../models/Student.js");
class CurdController {
  static CreateForm = async (req, res) => {
    res.render("curd/create");
  };

  static InsertForm = async (req, res) => {
    try {
      const data = new StudentModel({
        name: req.body.name,
        email: req.body.email,
      });

      const result = await data.save();
      res.render("curd/create");
    } catch (err) {
      console.log(err);
    }
  };

  static DisplayForm = async (req, res) => {
    try {
      const result = await StudentModel.find();
      // console.log(result);
      res.render("curd/display", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  static CurdView = async (req, res) => {
    // console.log(req.params.id)
    try {
      const result = await StudentModel.findById(req.params.id);
      // console.log(result);
      res.render("curd/view", { data: result });
    } catch (err) {
      console.log(err);
    }
  };

  static CurdEdit = async (req, res) => {
    try {
      const data = new StudentModel({
        name: req.body.name,
        email: req.body.email,
      });

      const result = await data.save();
      res.render("curd/edit");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = CurdController;
