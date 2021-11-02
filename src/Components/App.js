import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DairyPage from "../pages/DiaryPage";
import { getProducts } from "../redux/DiaryProducts/diaryProductOperations";
import { authRefresh, token } from "../redux/auth/authOperations";
import {
  getIsAuth,
  getRefreshToken,
  getSid,
} from "../redux/auth/authSelectors";
// import { Button, ButtonAdd } from "./button/Button";
// import DiaryAddProductForm from "./diaryAddProductForm/DiaryAddProductForm";
import Header from "./header/Header";
import Main from "./main/Main";
import { getUserInfo } from "../redux/user/userOperation";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  const isAuthIn = useSelector(getIsAuth);
  const refreshToken = useSelector(getRefreshToken);
  const sid = useSelector(getSid);
  // console.log(isAuthIn);

  useEffect(() => {
    isAuthIn && token.set(isAuthIn);
    isAuthIn && dispatch(getUserInfo());
  }, [dispatch, isAuthIn]);

  // useEffect(
  //   () => {
  //     !isAuthIn && refreshToken && dispatch(authRefresh(refreshToken, sid));
  //   },
  //   [dispatch, isAuthIn, refreshToken, sid]
  // );

  return (
    <>
      {/* <ButtonAdd />
      <Button buttonName="dfghjkl" /> */}
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Header />
        <Main />
      </AuthContext.Provider>{" "}
      {/* <DiaryAddProductForm /> */}
      {/* <DairyPage /> */}
    </>
  );
};

export default App;
