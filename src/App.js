import React, { Component } from "react";
import Cookies from "js-cookie";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import NewReleases from "./components/NewReleases";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

class App extends Component {
  componentDidMount() {
    console.log("App component mounted");
  }
  componentDidUpdate() {
    console.log("App component updated");
  }
  render() {
    return (
      <div>
        {Cookies.get("spotifyAuthToken") ? (
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
        ) : (
          <Login />
        )}
      </div>
    );
  }
}

export default App;
