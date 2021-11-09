import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";

const Main = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Suspense fallback={null}>
      <Switch>
        {mainRoutes.map(({ path, exact, component, isPrivate, isRestricted }) =>
          isPrivate ? (
            <PrivateRoute
              key={path}
              path={path}
              exact={exact}
              component={component}
              isAuth={isAuth}
            />
          ) : (
            <PublicRoute
              key={path}
              path={path}
              exact={exact}
              component={component}
              isAuth={isAuth}
              isRestricted={isRestricted}
            />
          )
        )}
      </Switch>
    </Suspense>
  );
};

export default Main;
