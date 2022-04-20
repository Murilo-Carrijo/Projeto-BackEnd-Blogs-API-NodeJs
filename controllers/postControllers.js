const jwt = require('jsonwebtoken');
const { BlogPost, User, Category } = require('../models');

// const add = async (req, res, _next) => {
//   const { title, content, categoryIds } = req.body;

//   try {
//     const categories = await Category.findAll();
//     const checkCategories = categories.map((category) => category.id === categoryIds);
//     if (!checkCategories) return res.status(400).json({ message: '"checkCategories" not found' });
//     const post = await BlogPost.create({ title, content });
//     post.addCategory(categoryIds);
//     return res.status(200).json(post);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json(e);
//   }
// };

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
    const posts = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ] });
    return res.status(200).json(posts); 
  } catch (e) {
    return res.status(500).json(e);  
  }
};

module.exports = {
  // add,
  getAll,
};