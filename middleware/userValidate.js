const validationName = (req, res, next) => {
    const { displayName } = req.body;
    if (!displayName) return res.status(400).json({ message: '"displayName" is required' });
    if (displayName.length < 8) {
      return res.status(400).json({
          message: '"displayName" length must be at least 8 characters long' });
  }
    next();
  };
  
  const validationEmail = (req, res, next) => {
    const { email } = req.body;
    const re = /\S+@\S+\.\S+/;
    const testEmail = re.test(email);

    if (!email) return res.status(400).json({ message: '"email" is required' });
    if (testEmail === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
      }
    next();
  };

  const validationPassword = (req, res, next) => {
    const { password } = req.body;
    
    if (!password) return res.status(400).json({ message: '"password" is required' });
    if (password.length < 6) { 
      return res.status(400).json({
          message: '"password" length must be 6 characters long' });
    }
    next();
  };
  
  module.exports = {
    validationName,
    validationEmail,
    validationPassword,
  };