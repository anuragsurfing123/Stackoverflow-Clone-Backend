const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  title: String,
  body: String,
  tags: {type : Array},
  user_id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Users"
  },
  votes :{
    type : Number,
    default : 0

  },
  views :{
    type : Number,
    default : 0

  },
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comments",
  },
  
},{timestamps : true});

module.exports = mongoose.model("Questions", questionSchema);