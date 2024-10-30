import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    const[token, setToken] = useState(null);

    // const valuesToBeShared = {number, isAuthenticated, setAuthenticated};

    // setInterval(
    //     () => setNumber(number+10)
    //     ,5000
    // )

    // function login(username, password) {
    //     if (username === "Banibrata" && password === "dummy"){
    //         setAuthenticated(true);
    //         setUsername("Banibrata");
    //         return true;
    //     }
    //     else {
    //         setAuthenticated(false);
    //         setUsername(null);
    //         return false;
    //     }
    // }

    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password);

    //     try {
    //         const response = await executeBasicAuthenticationService(baToken);

    //         if (response.status == 200){
    //             setAuthenticated(true);
    //             setUsername("Banibrata");
    //             setToken(baToken);

    //             apiClient.interceptors.request.use(
    //                 config => {
    //                     console.log('Intercepting and adding a token');
    //                     config.headers.Authorization=baToken;
    //                     return config;
    //                 }
    //             )

    //             return true;
    //         }
    //         else {
    //             logout();
    //             return false;
    //         }
    //     } catch {
    //         logout();
    //         return false;
    //     }
    // }

    async function login(username, password) {

       

        try {
            const response = await executeJwtAuthenticationService(username, password);

            if (response.status == 200){
                const jwtToken = 'Bearer ' + response.data.token;
                setAuthenticated(true);
                setUsername("Banibrata");
                setToken(jwtToken);

                apiClient.interceptors.request.use(
                    config => {
                        console.log('Intercepting and adding a token');
                        config.headers.Authorization=jwtToken;
                        return config;
                    }
                )

                return true;
            }
            else {
                logout();
                return false;
            }
        } catch {
            logout();
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
        setToken(null);
        setUsername(null);
    }

    return (
        <div>
            <AuthContext.Provider value={{isAuthenticated, login, logout, username, token}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}