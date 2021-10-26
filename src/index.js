import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import App from "./Components/App";

ReactDOM.render(
  <>
    {/* <Provider> */}
    {/* <PersistGate> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
  </>,
  document.getElementById("root")
);
