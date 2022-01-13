const router = require("Express").Router();
const req = require("express/lib/request");
let Volunteer = require("../models/Volunteer");

router.route("/").get((req, res) => {
  Volunteer.find()
    .then((offerhelp) => res.json(offerhelp))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const FirstName = req.body.FirstName;
  const LastName = req.body.LastName;
  const occupation = req.body.occupation;
  const address = req.body.address;
  const age = req.body.age;
  const phoneNumber = req.body.phoneNumber;
  const gender = req.body.gender;
  const city = req.body.city;
  const province = req.body.province;
  const hyh = req.body.hyh;

  const newVolunteer = new Volunteer({
    FirstName,
    LastName,
    age,
    gender,
    city,
    occupation,
    address,
    phoneNumber,
    province,
    hyh,
  });

  newVolunteer
    .save()
    .then(() => res.json("Volunteer Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Volunteer.findByIdAndDelete(req.params.id)
    .then(() => res.json("Volunteer deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
