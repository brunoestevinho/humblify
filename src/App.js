import React, { useEffect, useState } from "react";
import { token } from "./apiCalls";

import "./App.css";

import Login from "./components/Login";
import Routes from "./components/Routes";

const App = () => {
  console.log("rendering app.js");

  const [spotifyAuthToken, setSpotifyAuthToken] = useState();

  useEffect(() => {
    setSpotifyAuthToken(token);
  }, [spotifyAuthToken]);

  return <div>{spotifyAuthToken ? <Routes /> : <Login />}</div>;
};

export default App;
