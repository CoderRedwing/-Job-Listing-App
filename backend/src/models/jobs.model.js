const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: {
    type: String,
    required: true,  // Make jobId required
  },
  title: {
    type: String,
    required: true,  // Make title required
  },
  company: {
    type: String,
    required: true,  // Make company required
  },
  location: {
    type: String,
    required: true,  // Make location required
  },
  job_link: {
    type: String,
    required: true,  // Make job_link required
  },
  seniority_level: {
    type: String,
    default: "",  // Optional field, set default empty string if not provided
  },
  employment_type: {
    type: String,
    default: "",  // Optional field, set default empty string if not provided
  },
  source: {
    type: String,
    required: true,  // Make source required
  },
  experience: {
    type: String,
    required: true,  // Make experience required
  },
  company_url: {
    type: String,
    default: "",  // Optional field, set default empty string if not provided
  },
  companyImageUrl: {
    type: String,
    default: "",  // Optional field, set default empty string if not provided
  },
  postedDateTime: {
    type: Date,
    required: true,  // Make postedDateTime required
  },
  min_exp: {
    type: Number,
    required: true,  // Make min_exp required
  },
  max_exp: {
    type: Number,
    required: true,  // Make max_exp required
  },
  country: {
    type: String,
  },
  companytype: {
    type: String,
    default: "",  // Optional field, set default empty string if not provided
  }
});

// This method will run before saving to ensure date format is correct.
jobSchema.pre('save', function(next) {
  // If postedDateTime is an object with "$date", convert it to Date object
  if (this.postedDateTime && this.postedDateTime.$date) {
    this.postedDateTime = new Date(this.postedDateTime.$date);
  }
  next();
});

module.exports = mongoose.model('Job', jobSchema);
