import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./Dashboard";

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
          <Route path="/dashboard">
            <Dashboard />
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
