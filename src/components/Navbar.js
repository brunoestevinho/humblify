import React from "react";

import { logout } from "../apiCalls";

const sidebar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-profile">Profile Pic and Name</div>
      <ul className="nav-menu">
        <li className="nav-item">Recent Tracks</li>
        <li className="nav-item">Your albums</li>
        <li className="nav-item">Your Artists</li>
      </ul>
      <div className="logout" onClick={logout}>
        Logout
      </div>
    </nav>
  );
};

export default sidebar;
