import { useState } from 'react';

const Filters = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [source, setSource] = useState('');
  const [minExp, setMinExp] = useState('');
  const [maxExp, setMaxExp] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
    location: location.trim(),
    country: country.trim(),
    source: source.trim(),
    minExperience: minExp,
    maxExperience: maxExp,
  });  
    onSearch({
      location: location.trim(),
      country: country.trim(),
      source: source.trim(),
      minExperience: minExp,
      maxExperience: maxExp,
    });
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-6 rounded-xl shadow-md mb-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-gray-800">Filter Jobs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Bangalore"
            className="w-full text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Country
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. India"
            className="w-full text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Source
          </label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="e.g. LinkedIn"
            className="w-full text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Min Experience
          </label>
          <input
            type="number"
            value={minExp}
            onChange={(e) => setMinExp(e.target.value)}
            placeholder="e.g. 1"
            className="w-full text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Max Experience
          </label>
          <input
            type="number"
            value={maxExp}
            onChange={(e) => setMaxExp(e.target.value)}
            placeholder="e.g. 5"
            className="w-full text-black p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
};

export default Filters;
