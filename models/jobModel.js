const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  description: { type: String, required: true },
  openDate: { type: Date, default: Date.now },
},{
  versionKey:false
});
const JobModel= mongoose.model('Job', jobSchema);
module.exports ={JobModel};
