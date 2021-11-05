import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../redux/auth/authOperations";
import { getIsAuth } from "../redux/auth/authSelectors";
import Header from "./header/Header";
import Main from "./main/Main";
import { getUserInfo } from "../redux/user/userOperation";
import styles from "../Components/App.module.css";
import Wrapper from "./wrapper/Wrapper";

const App = () => {
  const dispatch = useDispatch();
  const isAuthIn = useSelector(getIsAuth);

  useEffect(() => {
    isAuthIn && token.set(isAuthIn);
    isAuthIn && dispatch(getUserInfo());
  }, [dispatch, isAuthIn]);

  return (
    <>
      <div className={!isAuthIn ? styles.public : styles.private}>
        <div className={!isAuthIn ? styles.publicLeave : styles.privateLeave}>
          <Header />
          <Wrapper>
            <Main />
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default App;
