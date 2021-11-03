import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { token } from "../redux/auth/authOperations";
import { getIsAuth } from "../redux/auth/authSelectors";
import Header from "./header/Header";
import Main from "./main/Main";
import { getUserInfo } from "../redux/user/userOperation";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  const isAuthIn = useSelector(getIsAuth);

  useEffect(
    () => {
      isAuthIn && token.set(isAuthIn);
      isAuthIn && dispatch(getUserInfo());
    },
    [dispatch, isAuthIn]
  );

  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Header />
        <Main />
      </AuthContext.Provider>{" "}
    </>
  );
};

export default App;
