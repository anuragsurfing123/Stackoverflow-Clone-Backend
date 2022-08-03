const express = require("express");
const router = express.Router();
const answerDB = require("../models/Answers");
const { verifyToken } = require("./verifyToken");

router.post("/", verifyToken , async (req, res) => {
  const answerData = new answerDB({
    question_id: req.body.question_id,
    answer: req.body.answer,
    user_id: req.user.id,
  });

  await answerData
    .save()
    .then((doc) => {
      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(400).send({
        message: "Answer not added successfully",
      });
    });
});

module.exports = router;