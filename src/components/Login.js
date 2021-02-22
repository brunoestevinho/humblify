import React from "react";

import { SpotifyAuth } from "react-spotify-auth";

const Login = () => {
  return (
    <div className="login-page h-screen pt-36">
      <h1 className="text-5xl pb-2">Humblify</h1>
      <h2 className="text-xl">A simple user-friendly Spotify</h2>
      <small>
        Running in <b>{process.env.NODE_ENV}</b> mode.
      </small>

      <div className="loginBtn">
        <SpotifyAuth
          redirectUri="http://localhost:3000/"
          clientID={process.env.REACT_APP_CLIENT_ID}
          scopes={[
            "user-read-private",
            "user-read-email",
            "user-read-recently-played",
            "user-top-read",
            "user-follow-read",
            "user-follow-modify",
            "user-library-read",
            "user-library-modify",
          ]}
        />
      </div>
    </div>
  );
};

export default Login;
