const express = require('express');
const router = express.Router();
const { loginUser, signupUser } = require('../controllers/usersController')

// signup route
router.post("/signup", signupUser)

// login route
router.post("/login", loginUser)

module.exports = router