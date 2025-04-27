import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL

// Create axois instance

export const apiClient = axios.create({
  baseURL: baseURL,
});


apiClient.interceptors.request.use((config) =>{
  // get access token 
    const token = localStorage.getItem('token');

    // attach the token to the headers
   config.headers.Authorization = `Bearer ${token}`
    return config;
})