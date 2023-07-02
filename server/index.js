const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const databaseConnect = require("./database"); 
const authRouter = require("./components/routers/authenticationRoutes");
const quizRouter = require("./components/routers/quizRoutes");
const videoRouter = require("./components/routers/videoRoutes");


const app = express();
app.use(express.json());
app.use(cors());
app.use('/', authRouter);
app.use('/',quizRouter)
app.use('/',videoRouter);
app.listen(8000, (req, res) => {
    console.log("backend is running");
  });


