import axios from "axios";

// export function retrieveHelloWorldBean() {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retrieveHelloWorldBean
    = () => axios.get('http://localhost:8080/hello-world-bean');

// also can return using a arrow function.