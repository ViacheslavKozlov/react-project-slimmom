import React, { useState } from "react";
import Header from "./header/Header";
import Main from "./main/Main";

export const AuthContext = React.createContext();

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <Header />
        <Main />
      </AuthContext.Provider>
    </>
  );
};

export default App;
