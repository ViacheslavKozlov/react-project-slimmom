import React from "react";
import LoginItem from "../navigation/loginItem/LoginItem";
import styles from "./Header.module.css";

import Navigation from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import useDeviceSizes from "../../hooks/useDeviceSizec";

const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const { isMobileDevice } = useDeviceSizes();
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.colorLine}>
                {isMobileDevice && isAuth && <LoginItem />}
      </div>
    </div>
  );
};

export default Header;
