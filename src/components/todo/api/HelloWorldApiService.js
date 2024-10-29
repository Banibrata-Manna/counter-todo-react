import axios from "axios";


const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080"
    }
)

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean') //Not Best Practice always make a ApiClient to avoid duplicacy in code! Shown Below
// }

export const retrieveHelloWorldBean
    = () => apiClient.get('/hello-world-bean');

// also can return using a arrow function.

export const retrieveHelloWorldPathVariable
    = (username) => apiClient.get(`/hello-world/path-variable/${username}`,
        {
            headers : {
                Authorization : 'Basic QmFuaWJyYXRhOmR1bW15'
            }
        });