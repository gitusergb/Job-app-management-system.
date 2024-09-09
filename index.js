const express = require('express');
const cors = require('cors');
const {connectDB} = require('./config/db');

const {jobRouter} = require('./routes/jobRoutes');
const {applicantRouter }= require('./routes/applicantRoutes');
const {interviewRouter} = require('./routes/interviewRoutes');
const { protect } = require('./middleware/auth');

require('dotenv').config();
const app = express();
app.use(express.static('public'));

app.use(express.json());
app.use(cors());
// Routes
app.use('/job', jobRouter);
app.use('/applicant', applicantRouter);
app.use('/interview', interviewRouter);

// Start server
const PORT = process.env.PORT || 9000;

async function startServer() {
    try {
      await connectDB;
      console.log("Database connection Established");
    } catch {
      console.log("Database connection Failed");
    }
  
    app.listen(PORT,() => {
      console.log(`Server is running at http://localhost:${PORT}`);
      console.log("Server Started");
    });
  }
  
  startServer();







