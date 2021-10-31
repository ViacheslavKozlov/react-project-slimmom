import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationItem.module.css";
import logo from "../../../images/logo-desc-min.jpg";

const NavigationItem = ({ name, path, exact, toggleModal }) => {
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
          <img src={logo} alt="Logo" className={styles.logo}></img>
        </NavLink>
      )}
    </li>
  );
};

export default NavigationItem;
{
  /* <>
  {((!isPrivate && !isRestricted) ||
    (isPrivate && !isRestricted && isAuth) ||
    (!isPrivate && isRestricted && !isAuth)) && (
    <li className={styles.item}>
      {name !== "Home" ? (
        <NavLink
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
          <img src={logo} alt="Logo" className={styles.logo}></img>
        </NavLink>
      )}
    </li>
  )}
</>; */
}
