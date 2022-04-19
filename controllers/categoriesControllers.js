const jwt = require('jsonwebtoken');
const { Category } = require('../models');

const add = async (req, res, _next) => {
  const { name } = req.body;
  const { authorization } = req.headers;
  try {
    try {
      if (authorization.length === 0) return res.status(401).json({ message: 'Token not found' });
      jwt.verify(authorization, 'superSecreto');
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const category = await Category.create({ name });
    return res.status(201).json(category);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

module.exports = {
  add,
};