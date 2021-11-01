import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { authLogout } from "../../../redux/auth/authOperations";
import styles from "./LoginItem.module.css";

const LoginItem = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(authLogout());
  const user = useSelector((state) => state?.user?.userInfo?.username);

  return (
    <ul className={styles.listSecondary}>
      <li className={styles.itemUser}>
        <span>{user}</span>
      </li>
      <li className={styles.item} onClick={logout}>
        <button type="button" className={styles.btn}>
          Выйти
        </button>
      </li>
    </ul>
  );
};

export default LoginItem;
