const ContactModel = require("../../models/Contact");

class ContactController {
  static Contact = (req, res) => {
    res.render("contact");
  };
  static InsertContact = async (req, res) => {
    try {
      const data = new ContactModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
      });
      // console.log(data);
      const result = await data.save();
      res.redirect("/contact");
    } catch (err) {
      console.log(err);
    }
  };
  static DisplayContact = async (req, res) => {
    try {
      const data = await ContactModel.find();
      res.render("admin/contact/display-contact", { data: data });
    } catch (err) {
      console.log(err);
    }
  };
  static ViewContact = async (req, res) => {
    try {
      const result = await ContactModel.findById(req.params.id);
      res.render("admin/contact/view", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static EditContact = async (req, res) => {
    try {
      const result = await ContactModel.findById(req.params.id);
      res.render("admin/contact/edit", { data: result });
    } catch (err) {
      console.log(err);
    }
  };
  static UpdateContact = async (req, res) => {
    try {
      const result = await ContactModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-contact");
    } catch (err) {
      console.log(err);
    }
  };
  static DeleteContact = async (req, res) => {
    try {
      const result = await ContactModel.findByIdAndDelete(
        req.params.id,
        req.body
      );
      res.redirect("/admin/display-contact");
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = ContactController;
