const router = require('Express').Router();
const req = require('express/lib/request');
let Donate = require('../models/Donate')

router.route('/').get((req, res)=>{
    Donate.find()
    .then(offerhelp => res.json(offerhelp))
    .catch(err=> res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) =>{
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const occupation = req.body.occupation;
    const address = req.body.address;
    const age = req.body.age;
    const phoneNumber = req.body.phoneNumber;
    const gender = req.body.gender;
    const city = req.body.city;
    const province = req.body.province;
    const donation = req.body.donation;

    const newDonation = new Donate({
        FirstName,
        LastName,
        age,
        gender,
        city,
        occupation,
        address,
        phoneNumber,
        province,
        donation,
    });

    newDonation.save()
    .then(() => res.json('Donation Recieved!'))
    .catch(err => res.status(400).json('Error: '+ err));
    
});

router.route('/:id').delete((req, res) => {
    Donate.findByIdAndDelete(req.params.id)
      .then(() => res.json('Donor deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;
