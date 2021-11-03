import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { userData } from "../redux/user/userSelectors";

const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  const userDataSelector = useSelector(userData);

  return isAuth && isRestricted ? (
    <>
      {!userDataSelector.age ? (
        <Redirect to="/calculator" />
      ) : (
        <Redirect to="/diary" />
      )}
    </>
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
