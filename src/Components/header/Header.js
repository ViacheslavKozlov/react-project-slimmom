import React from "react";
import LoginItem from "../navigation/loginItem/LoginItem";
import styles from "./Header.module.css";
import Wrapper from "../wrapper/Wrapper";

import Navigation from "../navigation/Navigation";
import { useSelector } from "react-redux";
import { getIsAuth } from "../../redux/auth/authSelectors";
import useDeviceSizes from "../../hooks/useDeviceSizec";

const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const { isMobileDevice, isTabletDevice } = useDeviceSizes();
  return (
    <div className={styles.MainContainer}>
      <Wrapper>
        <Navigation />
      </Wrapper>
      {isMobileDevice && isAuth && (
        <div className={styles.colorLine}>
          <Wrapper>{<LoginItem />}</Wrapper>
        </div>
      )}
      {isMobileDevice && !isAuth && <div className={styles.shrinkLine}></div>}
      {isTabletDevice && <div className={styles.shrinkLine}></div>}
    </div>
  );
};

export default Header;

//
