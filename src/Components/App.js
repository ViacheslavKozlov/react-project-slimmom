import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import DairyPage from "../pages/DairyPage";
import { getProducts } from "../redux/DiaryProducts/diaryProductOperations";
import { Button, ButtonAdd } from "./button/Button";
import DiaryAddProductForm from "./diaryAddProductForm/DiaryAddProductForm";
import Header from "./header/Header";
import Main from "./main/Main";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {/* <ButtonAdd />
      <Button buttonName="dfghjkl" />
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Header />
        <Main />
      </AuthContext.Provider> */}
      {/* <DiaryAddProductForm /> */}
      <DairyPage />
    </>
  );
};

export default App;
