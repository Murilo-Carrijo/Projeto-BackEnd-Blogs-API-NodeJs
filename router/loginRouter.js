const express = require('express');

const validateLogin = require('../middleware/loginValidate');
const loginControllers = require('../controllers/loginControllers');

const router = express.Router();

router.post('/',
  validateLogin.validationEmail,
  validateLogin.validateionPassword,
  loginControllers.secret);

module.exports = router;
