import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import "./App.css";

import Login from "./components/Login";
import Routes from "./components/Routes";

const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();

  useEffect(() => {
    setSpotifyAuthToken(Cookies.get("spotifyAuthToken"));
  }, []);

  return <div>{spotifyAuthToken ? <Routes /> : <Login />}</div>;
};

export default App;
