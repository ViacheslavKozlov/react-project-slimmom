import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DairyPage from "../pages/DiaryPage";
import { getProducts } from "../redux/DiaryProducts/diaryProductOperations";
import { authRefresh } from "../redux/auth/authOperations";
import {
  getIsAuth,
  getRefreshToken,
  getSid,
} from "../redux/auth/authSelectors";
// import { Button, ButtonAdd } from "./button/Button";
// import DiaryAddProductForm from "./diaryAddProductForm/DiaryAddProductForm";
import Header from "./header/Header";
import Main from "./main/Main";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const isAuthIn = useSelector(getIsAuth);
  const refreshToken = useSelector(getRefreshToken);
  const sid = useSelector(getSid);
  useEffect(() => {
    !isAuthIn && refreshToken && dispatch(authRefresh(refreshToken, sid));
  }, [dispatch, isAuthIn, refreshToken, sid]);

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
