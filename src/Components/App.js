import React from "react";

import Header from "./header/Header";
import Main from "./main/Main";

export const AuthContext = React.createContext();

const App = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
