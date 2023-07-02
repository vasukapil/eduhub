const express = require('express');
const videoController = require('../controller/videoController');
const videoRouter = express.Router();

videoRouter.route('/videos').get(videoController.GetVideos).post(videoController.PutVideos);
module.exports = videoRouter;