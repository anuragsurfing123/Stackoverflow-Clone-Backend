const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  answer: {type:String},
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users"
  },
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
},{timestamps : true});

module.exports = mongoose.model("Answers", answerSchema);