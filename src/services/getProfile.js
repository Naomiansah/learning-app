
import { apiClient } from "./config"



// service for getting profile 
export const apiGetProfile = async () =>{
  return apiClient.get('/users/me');
}