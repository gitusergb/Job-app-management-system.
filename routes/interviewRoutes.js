const express = require('express');
const { scheduleInterview, getInterviews } = require('../controllers/interviewController');
const interviewRouter = express.Router();

interviewRouter .post('/scheduleInt', scheduleInterview);
interviewRouter .get('/getInt', getInterviews);

module.exports = {interviewRouter} ;
