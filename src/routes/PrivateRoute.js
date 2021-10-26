import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, exact, component, isAuth }) => {
  return !isAuth ? (
    <Redirect to="/login" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;
