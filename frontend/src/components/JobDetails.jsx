import React from 'react';
import { formatDistanceToNow } from 'date-fns'; // npm install date-fns

const JobDetails = ({ job, onClose }) => {
  if (!job) {
    return <div className="text-gray-500 text-center p-6">Select a job to see details.</div>;
  }

  const postedAgo = job.postedDateTime
    ? formatDistanceToNow(new Date(job.postedDateTime), { addSuffix: true })
    : 'Unknown';

  return (
    <div className="relative border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
      {/* Close button */}
      <button 
        onClick={onClose} 
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition-colors text-2xl"
      >
        ×
      </button>

      {/* Header section with logo and meta */}
      <div className="flex items-center gap-4 mb-4">
        {job.companyImageUrl && (
          <img
            src={job.companyImageUrl}
            alt={`${job.company} logo`}
            className="w-14 h-14 object-contain rounded"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">{job.title}</h2>
          <div className="text-sm text-gray-600">{job.company}</div>
          <div className="text-sm text-gray-500">{job.location}, {job.country}</div>
          <div className="text-xs text-gray-400">Posted {postedAgo}</div>
        </div>
      </div>
        
      {/* Description */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">Job Description</h3>
        <p className="text-sm text-gray-700">{job.description || 'No description available'}</p>
      </div>

      {/* Requirements */}
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-1">Requirements</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
            job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))
          ) : (
            <li>No requirements available.</li>
          )}
        </ul>
      </div>

      {/* Meta Info */}
      <div className="text-sm text-gray-700 mb-1">
        <strong>Experience Required:</strong> {job.experience} years
      </div>
      <div className="text-sm text-gray-700 mb-4">
        <strong>Employment Type:</strong> {job.employment_type}
      </div>

      {/* Apply button */}
      <a
        href={job.job_link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Quick Apply
      </a>
    </div>
  );
};

export default JobDetails;
