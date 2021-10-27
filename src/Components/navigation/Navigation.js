import React, { useContext } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { AuthContext } from "../App";
import NavigationItem from "./navigationItem/NavigationItem";
import styles from "./Navigation.module.css";

const Navigation = ({ routes = mainRoutes }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);

  const toggle = () => setIsAuth((prev) => !prev);
  return (
    <div className={styles.container}>
      <ul className={styles.listMain}>
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

        <li>
          <button onClick={toggle}>isAuth</button>
        </li>
      </ul>

      {isAuth && (
        <ul className={styles.listSecondary}>
          <li className={styles.itemUser}>
            <span>User</span>
          </li>
          <li onClick={toggle} className={styles.item}>
            <span>Выйти</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
