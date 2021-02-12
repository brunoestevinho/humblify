import React, { useState, useEffect } from "react";
import { token } from "./apiCalls";

import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setAccessToken(token);
    };
    fetchData();
  }, []);

  return (
    <div className="app-container">
      {accessToken ? (
        <div className="router">
          <Navbar />
          <Home />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
