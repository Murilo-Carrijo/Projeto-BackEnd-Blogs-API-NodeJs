const { User } = require('../models');

const add = async (req, res, _next) => {
  const { displayName, email, password, image } = req.body;

  console.log('informações do body: ', displayName, email, password, image);

  try {
    const checkemail = await User.findOne({ where: { email } });
    console.log('Verificanod checkemail: ', checkemail);

    if (checkemail) return res.status(409).json({ message: 'User already registered' });

    const user = await User.create({
      displayName,
      email,
      password,
      image,
    });

    console.log('verificação do retorno do user', user);
    return res.status(201).json('user');
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
};

module.exports = {
  add,
};