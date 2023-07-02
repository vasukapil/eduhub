const mongoose = require('mongoose');
const questionSchema = new mongoose.Schema({
    question: String,
    options: [String],
    correctAnswer: String,
  });
  
  const Question = mongoose.model('questions', questionSchema);
  const addQuizQuestion = async (questionData) => {
    try {
      const newQuestion = new Question(questionData);
      await newQuestion.save();
      console.log('Question saved successfully.');
    } catch (error) {
      console.log('Error saving the question:', error);
    }
  };
  module.exports = {Question,addQuizQuestion};