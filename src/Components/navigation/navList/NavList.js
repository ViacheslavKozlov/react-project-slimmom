import React from "react";
import useDeviceSizes from "../../../hooks/useDeviceSizec";
import NavigationItem from "../navigationItem/NavigationItem";
import styles from "./NavList.module.css";

const NavList = ({ routes, isAuth, toggleModal }) => {
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();

  return (
    <ul
      className={
        isAuth && (isMobileDevice || isTabletDevice)
          ? styles.listPrivate
          : styles.list
      }
    >
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
