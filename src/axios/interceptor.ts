import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  headers: {
    'x-api-key': 'reqres-free-v1',
    'Accept': 'application/json'
  },
});


axiosInstance.interceptors.response.use(
  response => {
    // Handle success responses
    return response;
  },
  error => {
    // Handle errors globally
    if (error.response) {
      console.error('Response error:', error.response);

      if (error.response.status === 401) {
        // Optional: redirect to login or refresh token
        console.warn('Unauthorized. Redirecting to login...');
      }
    } else {
      console.error('Network or server error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
