import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ component: Component, ...rest }) {
  const authorized = true; // useSelector((state) => state.authReducer.token);
  return (
    <Route
      {...rest}
      render={(props) =>
        authorized ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
