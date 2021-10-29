import React from "react";
import style from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Wrapper;
