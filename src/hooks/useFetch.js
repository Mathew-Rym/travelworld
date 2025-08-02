import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

// Import mock data
let mockTours = [];
try {
  mockTours = require('../mockData/tours').default;
} catch (e) {
  console.log('Mock tours data not found');
}

const useFetch = (endpoint, queryParams) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
          params: queryParams,
          timeout: 3000, // 3 second timeout
        });
        setData(response.data.data);
      } catch (error) {
        console.log('Using mock data as fallback for', endpoint);
        // Use mock data as fallback
        if (endpoint === 'tours' && mockTours.length > 0) {
          setData(mockTours);
          setError(null);
        } else {
          setError('Failed to load data and no mock data available');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
