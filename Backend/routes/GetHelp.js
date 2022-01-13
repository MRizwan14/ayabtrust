const router = require('Express').Router();
const req = require('express/lib/request');
let GetHelp = require('../models/GetHelp')

router.route('/').get((req, res)=>{
    Exercise.find()
    .then(gethelp => res.json(gethelp))
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
    const noh = req.body.noh;

    const newGethelp = new GetHelp({
        FirstName,
        LastName,
        age,
        gender,
        city,
        occupation,
        address,
        phoneNumber,
        province,
        noh,
    });

    newGethelp.save()
    .then(() => res.json('Form Submitted!'))
    .catch(err => res.status(400).json('Error: '+ err));

})

module.exports = router;
