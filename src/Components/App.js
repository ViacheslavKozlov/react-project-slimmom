import React, { useState } from "react";
import { Button, ButtonAdd } from "./button/Button";
import Header from "./header/Header";
import Main from "./main/Main";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <>
      <ButtonAdd />
      <Button buttonName="dfghjkl" />
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Header />
        <Main />
      </AuthContext.Provider>
    </>
  );
};

export default App;
