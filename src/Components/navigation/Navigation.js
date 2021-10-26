import React, { useContext } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { AuthContext } from "../App";
import NavigationItem from "./navigationItem/NavigationItem";

const Navigation = ({ routes = mainRoutes }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const toggle = () => setIsAuth((prev) => !prev);
  return (
    <>
      <ul>
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <NavigationItem
            key={path}
            path={path}
            name={name}
            exact={exact}
            isPrivate={isPrivate}
            isRestricted={isRestricted}
            isAuth={isAuth}
          />
        ))}

        {isAuth && (
          <ul>
            <li>
              <span>Юзер</span>
            </li>

            <li onClick={toggle}>
              <span>Выйти</span>
            </li>
          </ul>
        )}

        <li>
          <button onClick={toggle}>isAuth</button>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
