import React from "react";
import { useAuth } from "./security/AuthContext";

const SideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const authContext = useAuth();
  if(authContext.isAuthenticated)
  return (
    <div className={sidebarClass}>
        <div class="item">Profile</div>
        {(!authContext.role == 'ROLE_STUDENT') && <div class="item">Students</div>}
        <div class="item">Jobs</div>
        {(authContext.role == 'ROLE_STUDENT') && <div class="item">Applied Jobs</div>}
        {(!authContext.role == 'ROLE_STUDENT') && <div class="item">HODs</div>}
      <button onClick={props.toggleSidebar} className="sidebar-toggle">{'<>'}</button>
    </div>
  );
};
export default SideBar;
