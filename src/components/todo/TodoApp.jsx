import "./TodoApp.css"

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginComponent from "./LoginComponent";
import WelcomeComponent from "./WelcomeComponent";
import ListTodosComponent from "./ListTodosComponent";
import ErrorComponent from "./ErrorComponent";
// import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import LogoutComponent from "./LogoutComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";

function AuthenticateRoute({children}) {

    const authContext = useAuth();

    if(authContext.isAuthenticated){
        return (
            children
        );
    } else {
        return (
           <Navigate to="/"/>
        )
    }
        
    
}


export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>

                        <Routes>
                            <Route path="/" element={ <LoginComponent/> }></Route>
                            <Route path="/login" element={ <LoginComponent/> }></Route>

                            <Route path="/welcome/:username" element={ 
                                <AuthenticateRoute>
                                    <WelcomeComponent/>
                                </AuthenticateRoute>
                            }></Route>

                            <Route path="/todos" element={ <AuthenticateRoute>
                                    <ListTodosComponent/>
                                </AuthenticateRoute>
                            }></Route>

                            <Route path="/logout" element={ <AuthenticateRoute>
                                    <LogoutComponent/>
                                </AuthenticateRoute>
                            }></Route>

                            <Route path="*" element={ <ErrorComponent/> }></Route>
                        </Routes>

                    {/* <FooterComponent/> */}
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}
