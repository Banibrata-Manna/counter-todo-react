import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {

    const [number, setNumber] = useState(10);

    const [isAuthenticated, setAuthenticated] = useState(false);

    // const valuesToBeShared = {number, isAuthenticated, setAuthenticated};

    // setInterval(
    //     () => setNumber(number+10)
    //     ,5000
    // )

    return (
        <div>
            <AuthContext.Provider value={{number, isAuthenticated, setAuthenticated}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}