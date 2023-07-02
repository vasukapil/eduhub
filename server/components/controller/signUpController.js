const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports.handleSignUp= async function (req, res) {

    const { username, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      res.json({ message: 'Signup successful' });
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  };
