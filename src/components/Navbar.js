import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { logout, getUser } from "../utils/functions";
import Loading from "./Loading";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <nav className="nav-container">
      <Link to="/profile">
        <div className="profile">
          {user ? (
            <img
              className="avatar"
              src={user.data.images[0].url}
              alt="User Avatar"
            />
          ) : (
            <Loading />
          )}
          {user ? (
            <div className="nav-profile">{user.data.display_name}</div>
          ) : (
            <Loading />
          )}
        </div>
      </Link>

      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/">
            <div>Recent Releases</div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/foryou">
            <div>Recent For You</div>
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
