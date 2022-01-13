const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gethelpSchema = new Schema({
    FirstName: {type: String, required: true},
    LastName: {type: String, required: true},
    occupation: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    age: {type: String, required: true},   
    gender: {type: String, required: true},        
    city: {type: String, required: true},
    province: {type: String, required: true},
    noh: {type: String, required: true},
})

const gethelp = mongoose.model('GetHelp', gethelpSchema);
module.exports = gethelp;