const jwt = require('jsonwebtoken');
const { User } = require('../models');

const add = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;
  const token = req.headers.authorization;

  console.log('informações do token: ', token);

  try {
    const checkemail = await User.findOne({ where: { email } });

    if (checkemail) return res.status(409).json({ message: 'User already registered' });

    const user = await User.create({
      displayName,
      email,
      password,
      image,
    });
    return res.status(201).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

const getAll = async (req, res, _next) => {
  const { authorization } = req.headers;
  try {
    try {
      if (authorization.length === 0) return res.status(401).json({ message: 'Token not found' });
      jwt.verify(authorization, 'superSecreto');
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  try {
    try {
      if (authorization.length === 0) return res.status(401).json({ message: 'Token not found' });
      jwt.verify(authorization, 'superSecreto');
    } catch (e) {
      console.log(e);
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

module.exports = {
  add,
  getAll,
  getById,
};