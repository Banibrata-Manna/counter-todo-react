import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";

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

     async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ":" + password);

        try {
            const response = await executeBasicAuthenticationService(baToken);

            if (response.status == 200){
                setAuthenticated(true);
                setUsername("Banibrata");
                setToken(baToken);
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