const express = require('express');
const loginController = require('../controller/loginController');
const signUpController = require('../controller/signUpController');
const authRouter = express.Router();

authRouter.post('/login', loginController.handleLogin);
authRouter.post('/signup', signUpController.handleSignUp);

module.exports = authRouter;