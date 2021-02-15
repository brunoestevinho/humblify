import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NewReleases from "./NewReleases";
import Navbar from "./Navbar";

const Routes = () => {
  console.log("choosing route");
  return (
    <div className="app-container">
      <Navbar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/recent">
          <NewReleases />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
