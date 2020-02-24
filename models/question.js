const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: String,
  choiceA: String,
  choiceB: String,
  choiceC: String,
  choiceD: String,
  answered: {type: Boolean, default: false},
  correctAnswer: String,
  studentsAnswer:{type: String, default: null},
  answeredCorrectly: {type: Boolean, default: null}
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
