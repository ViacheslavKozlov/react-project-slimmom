import React from "react";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../../icons/sprite.svg";
import arrow from "../../../icons/arrow-go-back.svg";
import { authLogout } from "../../../redux/auth/authOperations";
import { isOpenAddFormModal } from "../../../redux/isOpen/IsOpenSelector";
import styles from "./LoginItem.module.css";
import { toggleFrom } from "../../../redux/isOpen/IsOpenAction";

const LoginItem = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(authLogout());
  const user = useSelector((state) => state?.user?.userInfo?.username);
  const isOpen = useSelector(isOpenAddFormModal);

  const toggle = () => {
    dispatch(toggleFrom());
  };

  return (
    <ul className={styles.listSecondary}>
      {isOpen && (
        <li>
          <button type="button" className={styles.goBackBtn} onClick={toggle}>
            <svg width="12" height="7">
              <use href={sprite + "#close"}></use>
            </svg>
          </button>
        </li>
      )}
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
