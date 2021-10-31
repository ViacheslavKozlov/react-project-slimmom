import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { dailyRateSelector } from "../redux/dailyRate/dailyRateSelectors";

const PublicRoute = ({ path, exact, component, isAuth, isRestricted }) => {
  const dailyRate = useSelector(dailyRateSelector);
  return isAuth && isRestricted ? (
    <>
      {dailyRate.notAllowedProducts?.length === 0 ? (
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
