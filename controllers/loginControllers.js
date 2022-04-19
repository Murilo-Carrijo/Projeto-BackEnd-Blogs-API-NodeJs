const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = async (req, res, _next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
  
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const token = jwt.sign(
      user.dataValues, 'superSecreto', { 
        expiresIn: '15d',
        algorithm: 'HS256',
      },
    );
    return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

module.exports = {
  secret,
};