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
  const { isMobileDevice } = useDeviceSizes();
  return (
    <>
      <Wrapper>
        <Navigation />
      </Wrapper>
      <div className={styles.colorLine}>
        {isMobileDevice && isAuth && <LoginItem />}
      </div>
    </>
  );
};

export default Header;
