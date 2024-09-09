const {JobModel} = require('../models/jobModel');

// POST /jobs
exports.addJob = async (req, res) => {
  try {
    const job = new JobModel(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET /jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await JobModel.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
