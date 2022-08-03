const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  //   commentID: String,
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Questions",
  },
  comment: {type:String},
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users"
  },
},{timestamps : true});

module.exports = mongoose.model("Comments", CommentSchema);