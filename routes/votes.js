const express = require("express");
const router = express.Router();
const QuestionDB = require("../models/Questions");
const { verifyToken } = require("./verifyToken");


router.put("/:id",verifyToken,async (req,res)=>{
    vote_type = req.body.vote_type
    vote_type && vote_type == "upvote" ? voteVal = 1 : voteVal = -1

    try {
        const updatedVotes = await QuestionDB.findByIdAndUpdate(
          req.params.id,
          {
            $inc: { votes: voteVal }
          },
          { new: true }
        );
        res.status(200).json(updatedVotes);
      } catch (err) {
        res.status(500).json(err);
      }
})


module.exports = router;