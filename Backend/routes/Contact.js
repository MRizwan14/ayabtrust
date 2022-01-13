const router = require("Express").Router();
const req = require("express/lib/request");

router.route("/").get((req, res) => {
  Exercise.find()
    .then((contact) => res.json(contact))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const email = req.body.email;
  const msg = req.body.msg;

  const newContact = new Contact({
    FirstName,
    LastName,
    email,
    msg,
  });

  newContact
    .save()
    .then(() => res.json("Form Submitted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
