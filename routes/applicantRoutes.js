const express = require('express');
const { addApplicant, getApplicants, updateApplicantStatus, deleteApplicant } = require('../controllers/applicantController');
const applicantRouter = express.Router();

applicantRouter.post('/add_applicant', addApplicant);
applicantRouter.get('/get_applicant', getApplicants);
applicantRouter.patch('/edit_applicant/:id', updateApplicantStatus);
applicantRouter.delete('/delete_applicant/:id', deleteApplicant);

module.exports ={ applicantRouter};
