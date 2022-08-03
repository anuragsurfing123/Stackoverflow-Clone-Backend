const Users = require("../models/Users");
const { verifyToken } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyToken, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString();
    }
  
    try {
      const updatedUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });


//GET USER BY ID

router.get("/find/:id",verifyToken,async (req,res)=>{
    try{
        const user = await Users.findById(req.params.id);
        const {password,...others} = user._doc;

        res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router
    