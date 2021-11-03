import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
import logoTablet from "../../../images/logo-tablet-min.jpg";
import logoDesc from "../../../images/logo-desc-min.jpg";
import mobileLogoWithoutSlim from "../../../images/logo-mobile-min.jpg";
import useDeviceSizes from "../../../hooks/useDeviceSizec";

const NavigationItem = ({ name, path, exact, toggleModal, isAuth }) => {
  const { isMobileDevice, isDescDevice, isTabletDevice } = useDeviceSizes();

  return (
    <li
      className={
        isAuth && (isMobileDevice || isTabletDevice)
          ? styles.privateItem
          : styles.item
      }
    >
      {name !== "Home" ? (
        <NavLink
          onClick={toggleModal}
          to={path}
          exact={exact}
          className={styles.link}
          activeClassName={
            !isDescDevice && isAuth
              ? styles.activeLinkPrivate
              : styles.activeLink
          }
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
          {isMobileDevice ? (
            <>
              {!isAuth ? (
                <img
                  src={mobileLogoWithoutSlim}
                  alt="Logo"
                  className={styles.logo_without_slim}
                ></img>
              ) : (
                <img src={logoTablet} alt="Logo" className={styles.logo}></img>
              )}
            </>
          ) : (
            <img src={logoTablet} alt="Logo" className={styles.logo}></img>
          )}
        </NavLink>
      )}
    </li>
  );
};

export default NavigationItem;
