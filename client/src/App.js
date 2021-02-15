import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Home from "./Home";
import Landing from "./Landing";

import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/landing">
            <Landing />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route strict path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
