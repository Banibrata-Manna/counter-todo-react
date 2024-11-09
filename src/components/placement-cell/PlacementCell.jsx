import "./PlacementCell.css"

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import SideBar from "./SideBar";
import { useState } from "react";


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
            <h1>This is Placement Cell App</h1>
            <AuthProvider>
                <BrowserRouter>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                    <Routes>
                        <Route path="/" element={ <LoginComponent/>}/>
                        <Route path="/login" element={ <LoginComponent/> }></Route>
                        <Route path="/welcome/:username" element={ 
                                <AuthenticateRoute>
                                    <HomeComponent/>
                                </AuthenticateRoute>
                            }></Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}