import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import Landing from "./Landing";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Progress from "./Progress";

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/progress">
            <Progress />
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
