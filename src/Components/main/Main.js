import React, { Suspense, useContext, useState } from "react";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { AuthContext } from "../App";
import DailyCaloriesForm from "../dailyCaloriesForm/DailyCaloriesForm";
import Modal from "../modal/Modal";

const Main = () => {
  const [isAuth] = useContext(AuthContext);

  return (
    <Suspense fallback={<h2>loading</h2>}>
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
