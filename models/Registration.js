const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  name: String,
  address: String,
  mobile: String,
  email: String,
  gender: String,
  dob: Date,
  course: String
});

module.exports = mongoose.model('Registration', registrationSchema);