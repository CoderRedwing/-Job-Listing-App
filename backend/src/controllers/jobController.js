const Job = require('../models/jobs.model');

const getJobs = async (req, res) => {
    const {
        location,
        source,
        min_exp,
        max_exp,
        country,
        page = 1,
        limit = 20
    } = req.query;

    const filter = {};

   
    if (location) {
        filter.location = new RegExp(location, 'i');
    };

    if (source) {
        filter.source = new RegExp(source, 'i');
    };
    if (country) {
        filter.country = new RegExp(country, 'i');
    };

    
    if (min_exp) {
        filter.min_exp = { $gte: Number(min_exp) };
    };

    if (max_exp) {
        filter.max_exp = { ...filter.max_exp, $lte: Number(max_exp) };
    };

    const skip = (Number(page) - 1) * Number(limit);

    try {

        const jobs = await Job.find(filter)
            .sort({ postedDateTime: -1 })
            .skip(skip)
            .limit(Number(limit));

        const total = await Job.countDocuments(filter);

        res.status(200).json({
            success: true,
            message: jobs.length ? 'Jobs fetched successfully' : 'No jobs found with the given filters',
            totalJobs: total,
            page: Number(page),
            totalPages: Math.ceil(total / limit),
            jobs
        });
    } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ error: 'Error fetching jobs' });
    }
};

module.exports = getJobs;
