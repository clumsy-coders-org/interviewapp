const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../Model/User');
const control = require('../control/authcontrol')
const router = express.Router();

router.post( "/signup",control.user_signup_control)






module.exports = router;
