const mongoose = require("mongoose");

// Schema // field
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, Required: true, trim: true },
    email: { type: String, Required: true, trim: true },
    phone: { type: Number, Required: true, trim: true },
    message: { type: String, Required: true, trim: true },
  },
  { timestamps: true }
);

// create model

const ContactModel = mongoose.model("contact", ContactSchema); // contact is name of collection

module.exports = ContactModel;
