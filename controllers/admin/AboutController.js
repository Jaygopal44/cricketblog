const AboutModel = require("../../models/About");

class AboutController {
  static CreateAbout = async (req, res) => {
    try {
      res.render("admin/about/createabout");
    } catch (err) {
      console.log(err);
    }
  };
  static InsertAbout = async (req, res) => {
    try {
      const data = new AboutModel({
        description: req.body.description,
      });
      const result = await data.save();
      res.redirect("/admin/create-about");
    } catch (err) {
      console.log(err);
    }
  };
  static DisplayAbout = async (req, res) => {
    try {
      const result = await AboutModel.find();
      console.log(result)
      res.render("admin/about/display_about", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static ViewAbout = async (req, res) => {
    try {
      const result = await AboutModel.findById(req.params.id);
      res.render("admin/about/view", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static EditAbout = async (req, res) => {
    try {
      const result = await AboutModel.findById(req.params.id);
      res.render("admin/about/edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static UpdateAbout = async (req, res) => {
    try {
      const result = await AboutModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-about");
    } catch (err) {
      console.log(err);
    }
  };
  static DeleteAbout = async (req, res) => {
    try {
      const result = await AboutModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-about");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = AboutController;
