const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
const authRoutes = require("./routes/auth");
const questionsRoutes = require("./routes/question")
const answersRoutes = require("./routes/answer")
const commentsRoutes = require("./routes/comment")
const votesRoutes = require("./routes/votes")







dotenv.config()
app.use(cors())


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("server connected successfully"))
.catch((err)=>console.log(err))

app.use(express.json());





app.get('/',(req,res)=>{
    res.send("Working Fine")
})
app.use("/api/auth",authRoutes);
app.use("/api/questions",questionsRoutes);
app.use("/api/answers",answersRoutes);commentsRoutes
app.use("/api/comments",commentsRoutes);
app.use("/api/votes",votesRoutes);




app.listen(process.env.PORT || 5000,()=>{
    console.log("app is running")
})