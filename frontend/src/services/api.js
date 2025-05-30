import axios from 'axios';

const API = axios.create({ baseURL: 'https://job-listing-app-4evp.onrender.com' });

export const fetchJobs = async (filters = {}) => {
  const response = await API.get('/jobs', {
      params: {
        location: filters.location,
        country: filters.country,
        source: filters.source,
        min_exp: filters.minExperience,
        max_exp: filters.maxExperience,
        page: filters.page,
        limit: filters.limit
    }
  });
  return response.data;
};
