const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const dbConnect = require('./config/db');
const Job = require('./models/jobs.model');

const importJobs = async () => {
  try {
    await dbConnect();

    const filePath = path.join(__dirname, 'data', 'jobs.json');
    const rawData = fs.readFileSync(filePath);
    const jobs = JSON.parse(rawData);

    const transformedJobs = jobs.map((job) => ({
  jobId: String(job["Job ID (Numeric)"].$numberLong), // Convert jobId to string
  title: job.title,
  company: job.company,
  location: job.location,
  job_link: job.job_link,
  seniority_level: job.seniority_level,
  employment_type: job.employment_type,
  source: job.source,
  experience: job.experience,
  company_url: String(job.company_url), // Ensure company_url is a string
  companyImageUrl: String(job.companyImageUrl), // Ensure companyImageUrl is a string
  postedDateTime: new Date(job.postedDateTime?.$date), // Convert postedDateTime to Date
  min_exp: job.min_exp,
  max_exp: job.max_exp,
  country: job.country,
  companytype: job.companytype
}));


    await Job.insertMany(transformedJobs);
    console.log('Job data imported successfully!');
  } catch (error) {
    console.error(' Error importing jobs:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log(' Disconnected from MongoDB');
  }
};

importJobs();
