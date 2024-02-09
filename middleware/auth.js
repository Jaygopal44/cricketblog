const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");

const CheckAuthUser = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    // console.log(token);

    if(!token){
        res.redirect('/')
    }else{        
        const verifyuser = jwt.verify(token, "jaygopal_7");
        console.log(verifyuser);
        const user = await UserModel.findOne({_id:verifyuser.userid})
        req.user = user
        console.log(user);
        next();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = CheckAuthUser;
