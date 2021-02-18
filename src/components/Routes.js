import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Navbar from "./Navbar";
import Profile from "./Profile";
import NewForUser from "./NewForUser";

const Routes = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/foryou">
          <NewForUser />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
