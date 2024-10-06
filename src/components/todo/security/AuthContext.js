import {createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

    const [number, setNumber] = useState(0);

    return (
        <div>
            <AuthContext.Provider>
                {children}
            </AuthContext.Provider>
        </div>
    );
}