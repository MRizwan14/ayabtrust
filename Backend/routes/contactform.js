const router = require("express").Router();
let ContactForm = require("../models/contactform.model");

router.route("/add").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phonenum = req.body.phonenum;
  const message = req.body.message;

  const newContactForm = new ContactForm({
    firstName,
    lastName,
    email,
    phonenum,
    message,
  });

  newContactForm
    .save()
    .then(() => res.json("ContactForm Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
