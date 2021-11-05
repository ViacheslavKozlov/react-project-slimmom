import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
import logoTablet from "../../../images/logo-tablet-min.jpg";
import mobileLogoWithoutSlim from "../../../images/logo-mobile-min.jpg";
import logoDesc from "../../../images/logo-desc-min.jpg";
import useDeviceSizes from "../../../hooks/useDeviceSizec";
import { useLocation } from "react-router";

const NavigationItem = ({ name, path, exact, toggleModal, isAuth }) => {
  const { isMobileDevice, isDescDevice, isTabletDevice } = useDeviceSizes();
  const location = useLocation();
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
          to={{ pathname: path, state: { prevPath: location.pathname } }}
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
          {isMobileDevice && (
            <>
              {!isAuth ? (
                <img
                  src={mobileLogoWithoutSlim}
                  alt="Logo"
                  className={styles.logo_without_slim}
                />
              ) : (
                <img src={logoTablet} alt="Logo" className={styles.logo} />
              )}
            </>
          )}
          {isTabletDevice && (
            <img src={logoTablet} alt="Logo" className={styles.logo} />
          )}
          {isDescDevice && (
            <>
              <img
                src={logoDesc}
                alt="Logo"
                className={styles.logo_main_desc}
              />
            </>
          )}
        </NavLink>
      )}
    </li>
  );
};

export default NavigationItem;
