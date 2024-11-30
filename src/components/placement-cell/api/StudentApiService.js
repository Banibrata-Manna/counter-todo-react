import { apiClient } from "./ApiClient"

export const applyJobApiService
    = (enrollmentNumber, jobId) => apiClient.post(`/students/${ enrollmentNumber }/jobs/${ jobId }`);
