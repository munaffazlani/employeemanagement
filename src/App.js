import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import LoginForm from "./containers/loginForm/loginForm";
import Dashboard from "./containers/dashboard/dashboard";
import PrivateRoute from "./helpers/privateRoute";
import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginForm} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
