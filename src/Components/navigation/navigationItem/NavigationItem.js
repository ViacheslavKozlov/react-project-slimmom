import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
import logo from "../../../images/logo-desc-min.jpg";
import mobileLogo from "../../../images/logo-mobile-min.jpg";
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
          {isMobileDevice && isAuth ? (
            <img src={mobileLogo} alt="Logo" className={styles.logo}></img>
          ) : (
            <img src={logo} alt="Logo" className={styles.logo}></img>
          )}
        </NavLink>
      )}
    </li>
  );
};

export default NavigationItem;
