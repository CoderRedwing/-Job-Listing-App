import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';

const JobCard = ({ job, onClick }) => {

  return (
    <div
      onClick={() => onClick(job)}
      className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col gap-2"
    >
      {/* Job title and company */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
        <p className="text-sm text-gray-600">{job.company}</p>
      </div>

      {/* Location and country */}
      <div className="flex items-center text-sm text-gray-500 gap-1">
        <MapPin className="w-4 h-4" />
        {job.location}, {job.country}
      </div>

      {/* Experience and employment type */}
      <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
        <div className="flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          <span>{job.experience} yrs</span>
        </div>
        <div className="flex items-center gap-1">
           <span>{job.employment_type || 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
