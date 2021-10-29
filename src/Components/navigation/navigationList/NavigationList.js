import React, { useContext, useState } from "react";
import useDeviceSizes from "../../../hooks/useDeviceSizec";
import { mainRoutes } from "../../../routes/mainRoutes";
import { AuthContext } from "../../App";
import NavigationItem from "../navigationItem/NavigationItem";
import NavModal from "../navModal/NavModal";
import styles from "./NavigationList.module.css";

const NavigationList = ({ routes = mainRoutes, showModal, toggleModal }) => {
  const { isTabletDevice } = useDeviceSizes();

  const [isAuth, setIsAuth] = useContext(AuthContext);

  const toggle = () => setIsAuth((prev) => !prev);
  return (
    <div className={styles.container}>
      <ul className={styles.listMain}>
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <>
            {isTabletDevice && isPrivate ? (
              <>
                {showModal && (
                  <NavModal toggleModal={toggleModal}>
                    <NavigationItem
                      key={path}
                      path={path}
                      name={name}
                      exact={exact}
                      isPrivate={isPrivate}
                      isRestricted={isRestricted}
                      isAuth={isAuth}
                    />
                  </NavModal>
                )}
              </>
            ) : (
              <NavigationItem
                key={path}
                path={path}
                name={name}
                exact={exact}
                isPrivate={isPrivate}
                isRestricted={isRestricted}
                isAuth={isAuth}
              />
            )}
          </>
        ))}
      </ul>

      {isAuth && (
        <ul className={styles.listSecondary}>
          <li className={styles.itemUser}>
            <span>User</span>
          </li>
          <li onClick={toggle} className={styles.item}>
            <span>Выйти</span>
          </li>
        </ul>
      )}

      <button onClick={toggle} type="button">
        isAuth
      </button>
    </div>
  );
};

export default NavigationList;
