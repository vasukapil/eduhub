const {Question, addQuizQuestion} = require("../models/Quiz");
module.exports.GetQuizQuestions= async function (req, res) {

  try {
    const questions = await Question.find();

    res.json(questions);
  } catch (error) {
    console.error("Failed to fetch questions:", error);
    res.status(500).json({ error: "Failed to fetch questions" });
  }
}

module.exports.AddQuizQuestions= async function (req, res) {

    const { question, options, correctAnswer } = req.body;
  
    const questionData = {
      question,
      options,
      correctAnswer,
    };
  
    // Call the addQuizQuestion function from the quiz module to add the question
    addQuizQuestion(questionData);
  
    res.status(200).json({ message: 'Question saved successfully.' });
  }
