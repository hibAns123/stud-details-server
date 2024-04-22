const Registration = require('../models/Registration');

exports.register = async (req, res) => {
  const { name, address, mobile, email, gender, dob, course } = req.body;

  try {
    const newRegistration = new Registration({
      name,
      address,
      mobile,
      email,
      gender,
      dob,
      course
    });

    const savedRegistration = await newRegistration.save();
    res.json(savedRegistration);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};