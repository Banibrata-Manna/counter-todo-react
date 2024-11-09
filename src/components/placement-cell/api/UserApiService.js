import { apiClient } from "./ApiClient"

export const studentDetailsApiService
    = (username) => apiClient.get(`/students/${ username }`)

export const hodDetailsApiService
    = (username) => apiClient.get(`/hod/${ username }`)
