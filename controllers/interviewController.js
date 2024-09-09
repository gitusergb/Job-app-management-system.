const Interview = require('../models/interviewModel');

// POST /interviews
exports.scheduleInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).json(interview);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET /interviews
exports.getInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find({ applicantId: req.query.applicantId });
    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
