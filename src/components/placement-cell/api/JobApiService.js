import { apiClient } from "./ApiClient";

export const retrieveAllJobs = 
    () => apiClient.get('/jobs');