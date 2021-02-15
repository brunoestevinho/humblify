import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { logout, getUser, catchErrors } from "../apiCalls";

const Navbar = () => {
  const [user, setUser] = useState(null);
  console.log("rendering navbar.js");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUser(data);
    };
    catchErrors(fetchData());
    console.log(user);
  }, []);

  return (
    <nav className="nav-container">
      <Link to="/home">
        <div className="profile">
          <img
            className="avatar"
            src={user.data.images[0].url}
            alt="User Avatar"
          />
          <div className="nav-profile">{user.data.display_name}</div>
        </div>
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

export default Navbar;
