import axios from 'axios';
import { access_token, baseURL } from './env';
const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json', 
  },
});
 
api.interceptors.request.use(
  (config) => { 
    const token = access_token; 
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => { 
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => { 
    return response;
  },
  (error) => { 
    return Promise.reject(error);
  }
);

export default api;
