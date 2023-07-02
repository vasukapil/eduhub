const express = require('express');
const quizController = require('../controller/quizController');
const quizRouter = express.Router();

quizRouter.route('/questions').get(quizController.GetQuizQuestions).post(quizController.AddQuizQuestions);
module.exports = quizRouter;