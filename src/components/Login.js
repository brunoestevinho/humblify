import React from "react";

import { SpotifyAuth } from "react-spotify-auth";

const Login = () => {
  console.log("rendering login.js");

  return (
    <div className="login-page h-screen pt-36">
      <h1 className="text-5xl pb-2">Humblify</h1>
      <h2 className="text-xl">A simple user-friendly Spotify</h2>

      <div className="loginBtn">
        <SpotifyAuth
          redirectUri="http://localhost:3000/home"
          clientID="6bd413ba51b941f99b32b4da3d082ffd"
          scopes={[
            "user-read-private",
            "user-read-email",
            "user-read-recently-played",
            "user-top-read",
            "user-follow-read",
            "user-follow-modify",
            "playlist-read-private",
            "playlist-read-collaborative",
            "playlist-modify-public",
          ]} // either style will work
        />
      </div>
    </div>
  );
};

export default Login;
