import React, {lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Loader from "./components/utility/loader";

import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "./helpers/privateRoute";
import "./App.css";
import "antd/dist/antd.css";

const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const LoginForm = lazy(() => import("./pages/loginForm/loginForm"));



function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <Route exact path="/" component={LoginForm} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
