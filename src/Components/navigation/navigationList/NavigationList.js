import React from "react";
// import { useLocation } from "react-router-dom";
import useDeviceSizes from "../../../hooks/useDeviceSizec";
import { mainRoutes } from "../../../routes/mainRoutes";

import NavigationItem from "../navigationItem/NavigationItem";
import NavModal from "../navModal/NavModal";
import styles from "./NavigationList.module.css";

const NavigationList = ({
  routes = mainRoutes,
  showModal,
  toggleModal,
  isAuth,
}) => {
  const { isTabletDevice } = useDeviceSizes();
  // const location = useLocation();

  return (
    <div className={styles.container}>
      <ul className={styles.listMain}>
        {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
          <>
            {isTabletDevice && isPrivate ? (
              <>
                {showModal && (
                  <NavModal showModal={showModal} toggleModal={toggleModal}>
                    {routes.map(
                      ({ name, path, exact, isPrivate, isRestricted }) => (
                        <>
                          {path !== "/" && (
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
                      )
                    )}
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
          <li className={styles.item}>
            <span>Выйти</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavigationList;
