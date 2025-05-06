// server.js
const express = require('express');
const cors = require('cors');
const jobRoute = require('./routes/jobRoute'); // ✅ Correct path
const dbConnect = require('./config/db');

const app = express();
const PORT = 5000;

dbConnect(); // Connect to DB

app.use(cors());
app.use(express.json()); // ✅ Required to parse JSON body

app.use('/jobs', jobRoute); // ✅ http://localhost:5000/jobs

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));
