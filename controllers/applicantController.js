const Applicant = require('../models/applicantModel');

// POST /applicants
exports.addApplicant = async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET /applicants
exports.getApplicants = async (req, res) => {
  try {
    const applicants = await Applicant.find({ jobId: req.query.jobId });
    res.status(200).json(applicants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PATCH /applicants/:id
exports.updateApplicantStatus = async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.status(200).json(applicant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE /applicants/:id
exports.deleteApplicant = async (req, res) => {
  try {
    await Applicant.findByIdAndDelete(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
    