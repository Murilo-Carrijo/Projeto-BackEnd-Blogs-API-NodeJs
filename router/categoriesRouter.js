const express = require('express');

const categoriesController = require('../controllers/categoriesControllers');
const categoriesValidate = require('../middleware/categoriesValidate');

const router = express.Router();

router
  .get('/', categoriesController.getAll)
  .post('/',
    categoriesValidate.validationName,
    categoriesController.add);

module.exports = router;