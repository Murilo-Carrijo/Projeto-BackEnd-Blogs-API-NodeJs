const express = require('express');

const userControllers = require('../controllers/userControllers');
const validateUser = require('../middleware/userValidate');

const router = express.Router();

router
  .get('/', userControllers.getAll)
  .post('/',
    validateUser.validationName,
    validateUser.validationEmail,
    validateUser.validationPassword,
    userControllers.add);

module.exports = router;