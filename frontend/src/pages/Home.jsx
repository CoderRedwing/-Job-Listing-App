    // Home.jsx
    import React, { useState, useEffect } from 'react';
    import JobCard from '../components/JobCard';
    import JobDetails from '../components/JobDetails';
    import Filters from '../components/SearchBar';
    import Pagination from '../components/Pagination';
    import { fetchJobs } from '../services/api';

    const Home = () => {
    const [jobs, setJobs] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Filters
    const [filters, setFilters] = useState({
        location: '',
        country: '',
        source: '',
        minExperience: '',
        maxExperience: ''
    });

    const jobsPerPage = 5;

    const fetchData = async (appliedFilters = filters, page = currentPage) => {
        try {
        const data = await fetchJobs({
            ...appliedFilters,
            page,
            limit: jobsPerPage
        });
        setJobs(data.jobs);
        setTotalPages(data.totalPages || 1);
        } catch (err) {
        console.error('Error fetching jobs:', err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const handleSearch = (newFilters) => {
        setFilters(newFilters);
        setCurrentPage(1);
        fetchData(newFilters, 1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        fetchData(filters, page);
    };
    
    const handleJobClick = (job) => {   
    setSelectedJob(job); // Update the selected job state
    };
    
    const handleClose = () => {
    setSelectedJob(null);
    };


    return (
        <div className="container mx-auto p-4">
        <Filters onSearch={handleSearch} />
        <div className="flex gap-4">
            <div className="flex-1 space-y-4">
            {jobs.length === 0 ? (
                <p className="text-gray-500">No jobs found.</p>
            ) : (
                jobs.map((job) => (
                <JobCard key={job._id} job={job} onClick={setSelectedJob} />
                ))
            )}
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
            </div>
            <div className="flex-1">
            <JobDetails job={selectedJob} onClose={handleClose} />
            </div>
        </div>
        </div>
    );
    };

    export default Home;
