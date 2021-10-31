import React from "react";
import { useDispatch } from "react-redux";
import { logoutAuthSuccess } from "../../../redux/auth/authActions";
import { authLogout } from "../../../redux/auth/authOperations";
import styles from "./LoginItem.module.css";

const LoginItem = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAuthSuccess());
  console.log(logout);

  return (
    <ul className={styles.listSecondary}>
      <li className={styles.itemUser}>
        <span>User</span>
      </li>
      <li className={styles.item} onClick={logout}>
        <button type="button">Выйти</button>
      </li>
    </ul>
  );
};

export default LoginItem;
