import React from "react";
import { useDispatch, useSelector } from "react-redux";

import arrow from "../../../icons/arrow.svg";

import { authLogout } from "../../../redux/auth/authOperations";
import { isOpenAddFormModal } from "../../../redux/isOpen/IsOpenSelector";
import styles from "./LoginItem.module.css";
import { toggleFrom } from "../../../redux/isOpen/IsOpenAction";
import useDeviceSizes from "../../../hooks/useDeviceSizec";

const LoginItem = () => {
  const dispatch = useDispatch();
  const logout = () => dispatch(authLogout());
  const user = useSelector((state) => state?.user?.userInfo?.username);
  const isOpen = useSelector(isOpenAddFormModal);
  const { isMobileDevice } = useDeviceSizes();

  const toggle = () => {
    dispatch(toggleFrom());
  };
  const onLogoutClick = () => {
    logout();
    dispatch(toggleFrom(false));
  };

  return (
    <div className={styles.container}>
      {isMobileDevice && isOpen && (
        <div className={styles.goBackBtn}>
          <button type="button" onClick={toggle}>
            <svg className={styles.arrowSvg}>
              <use href={arrow + "#icon-arrow-left2"} />
            </svg>
          </button>
        </div>
      )}
      <div className={styles.rightContainer}>
        <ul className={styles.listSecondary}>
          <li className={styles.itemUser}>{user}</li>
          <li className={styles.item} onClick={onLogoutClick}>
            <button type="button" className={styles.btn}>
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginItem;
