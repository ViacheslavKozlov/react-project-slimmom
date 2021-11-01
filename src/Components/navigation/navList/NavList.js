import React from "react";
import NavigationItem from "../navigationItem/NavigationItem";
import styles from "./NavList.module.css";

const NavList = ({ routes, isAuth, toggleModal }) => {
  return (
    <ul className={styles.listMain}>
      {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
        <NavigationItem
          toggleModal={toggleModal}
          key={path}
          name={name}
          path={path}
          exact={exact}
          isPrivate={isPrivate}
          isRestricted={isRestricted}
          isAuth={isAuth}
        />
      ))}
    </ul>
  );
};

export default NavList;
