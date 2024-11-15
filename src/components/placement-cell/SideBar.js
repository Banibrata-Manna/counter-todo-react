import React from "react";
import { useAuth } from "./security/AuthContext";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const authContext = useAuth();
  if(authContext.isAuthenticated)
  return (
    <div className={sidebarClass}>
        <div className="item">Profile</div>
        {(!authContext.role == 'ROLE_STUDENT') && <div className="item">Students</div>}
        <div className="item">Jobs</div>
        {(authContext.role == 'ROLE_STUDENT') && <div className="item">Applied Jobs</div>}
        {(!authContext.role == 'ROLE_STUDENT') && <div className="item">HODs</div>}
      <button onClick={props.toggleSidebar} className="sidebar-toggle">{'<>'}</button>
    </div>
  );
};
export default SideBar;
