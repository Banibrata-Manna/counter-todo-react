import "./PlacementCell.css"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";
import LogoutComponent from "./LogoutComponent";
import HomeComponent from "./HomeComponent";
import SideBar from "./SideBar";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";

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

export default function PlacementCell() {

    const [sidebarOpen, setSideBarOpen] = useState(false);
        const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    };

    return (
        <div className="PlacementCell">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                    <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                    <Routes>
                        <Route path="/" element={ <LoginComponent/>}/>
                        <Route path="/login" element={ <LoginComponent/> }></Route>
                        <Route path="/welcome/:code" element={ 
                                <AuthenticateRoute>
                                    <HomeComponent/>
                                </AuthenticateRoute>
                            }></Route>
                        <Route path="/logout" element={ <AuthenticateRoute>
                                    <LogoutComponent/>
                                </AuthenticateRoute>
                            }></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}