import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {

    const [isAuthenticated, setAuthenticated] = useState(false);

    const [username, setUsername] = useState(null);

    // const valuesToBeShared = {number, isAuthenticated, setAuthenticated};

    // setInterval(
    //     () => setNumber(number+10)
    //     ,5000
    // )

    function login(username, password) {
        if (username === "Banibrata" && password === "dummy"){
            setAuthenticated(true);
            setUsername("Banibrata");
            return true;
        }
        else {
            setAuthenticated(false);
            setUsername(null);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <div>
            <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}