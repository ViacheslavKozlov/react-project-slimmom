import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
import logoDesc from "../../../images/logo-tablet-min.jpg";
import mobileLogoWithoutSlim from "../../../images/logo-mobile-min.jpg";
import useDeviceSizes from "../../../hooks/useDeviceSizec";

const NavigationItem = ({ name, path, exact, toggleModal, isAuth }) => {
  const { isMobileDevice } = useDeviceSizes();

  return (
    <li className={styles.item}>
      {name !== "Home" ? (
        <NavLink
          onClick={toggleModal}
          to={path}
          exact={exact}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          {name}
        </NavLink>
      ) : (
        <NavLink
          to={path}
          exact={exact}
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          {/* <img src={logo} alt="Logo" className={styles.logo}></img> */}
          {isMobileDevice && !isAuth ? (
            <img
              src={mobileLogoWithoutSlim}
              alt="Logo"
              className={styles.logo_without_slim}
            ></img>
          ) : (
            <img src={logoDesc} alt="Logo" className={styles.logo}></img>
          )}
        </NavLink>
      )}
    </li>
  );
};

export default NavigationItem;
