import { apiClient } from "./config"


// service  function for Sign up 
export const apiSignUp = async (payload) =>{
  return apiClient.post('/users/signup', payload, {
    headers: {'Content-Type' : 'application/json'}
  });
}

export const apiLogin = async (payload) =>{
  return apiClient.post('/users/login', payload, {
    headers: {'Content-Type' : 'application/json'}
  });
}