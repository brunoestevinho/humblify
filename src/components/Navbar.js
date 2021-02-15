import React from "react";

import { Link } from "react-router-dom";

import { logout } from "../apiCalls";

const sidebar = () => {
  return (
    <nav className="nav-container">
      <Link to="/home">
        <div className="nav-profile">Profile Pic and Name</div>
      </Link>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/recent">
            <div>Recent from artists you follow</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/recent">
            <div>Your Albums</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/recent">
            <div>Your Artists</div>
          </Link>
        </li>
      </ul>

      <div className="logout" onClick={logout}>
        Logout
      </div>
    </nav>
  );
};

export default sidebar;
