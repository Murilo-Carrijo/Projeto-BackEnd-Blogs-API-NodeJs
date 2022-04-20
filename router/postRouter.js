const express = require('express');

const postControllers = require('../controllers/postControllers');

const router = express.Router();

router
  .get('/', postControllers.getAll)
  .get('/:id', postControllers.getById);

module.exports = router;