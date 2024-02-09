const UserModel = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static Register = async (req, res) => {
    res.render("user/registration", { message: req.flash("error") });
  };

  static RegisterInsert = async (req, res) => {
    // console.log(req.body);
    const { username, email, password, confirm_password } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (user) {
      req.flash("error", "This email is already registered");
      res.redirect("/register");
    } else {
      if (username && email && password && confirm_password) {
        if (password === confirm_password) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hashpassword = await bcrypt.hash(password, salt);
            const result = new UserModel({
              username: username,
              email: email,
              password: hashpassword,
            });
            await result.save();
            req.flash("error", "Registration successful");
            res.redirect("/login");
          } catch (err) {
            console.log(err);
          }
        } else {
          req.flash("error", "All field are required");
          res.redirect("/register");
        }
      } else {
        req.flash("error", "All field are required");
        res.redirect("/register");
      }
    }
  };

  static VerifyLogin = async (req, res) => {
    // console.log(req.body)
    try {
      const { email, password } = req.body;
      const User = await UserModel.findOne({ email: email });
      // console.log(User);
      if (User != null) {
        const isMatch = await bcrypt.compare(password, User.password);
        if ((User.email == email) && isMatch) {

          // generate token
          var token = jwt.sign({ userid: User._id }, 'jaygopal_7');
          // console.log(token);
          res.cookie('jwt',token);
          res.redirect("/admin/dashboard");
        } else {
          req.flash("error", "Email and password does not match ");
          res.redirect("/login");
        }
      } else {
        req.flash("error", "You are not a registered User ");
        res.redirect("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  static Logout = async(req, res)=>{
    try {
      res.clearCookie('jwt')
      res.redirect('/')
    } catch (err) {
      console.log(err)
    }
  }

}

module.exports = UserController;
