// registrationRoutes.js
const express = require('express');
const router = express.Router();
const registrationController = require('../contollers/registrationController');

// Route to handle registration
router.post('/register', registrationController.register)

module.exports = router;
