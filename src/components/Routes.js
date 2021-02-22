import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import NewForUser from "./NewForUser";
import Album from "./Album";
import SavedAlbums from "./SavedAlbums";

const Routes = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/foryou" component={NewForUser} />
        <Route path="/profile" component={Profile} />
        <Route path="/saved" component={SavedAlbums} />
        <Route path="/album/:albumId" component={Album} />
      </Switch>
    </div>
  );
};

export default Routes;
