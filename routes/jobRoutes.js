const express = require('express');
const { addJob, getJobs } = require('../controllers/jobController');
const jobRouter = express.Router();

jobRouter.post('/addjobs', addJob);
jobRouter.get('/getjobs', getJobs);

module.exports = {jobRouter };
