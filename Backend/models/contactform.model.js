const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactusSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phonenum: { type: Number, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Contactus = mongoose.model("ContactUsForm", contactusSchema);

module.exports = Contactus;
