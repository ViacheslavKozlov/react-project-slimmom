import React, { useContext, useState } from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { AuthContext } from "../App";
import NavigationItem from "./navigationItem/NavigationItem";
import styles from "./Navigation.module.css";
import NavModal from "./navModal/NavModal";
import sprite from "../../icons/sprite.svg";

const Navigation = ({ routes = mainRoutes }) => {
  const [isAuth, setIsAuth] = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);

  const toggle = () => setIsAuth((prev) => !prev);
  return (
    <div className={styles.container}>
      <ul className={styles.listMain}>
        {window.innerWidth > 767 ? (
          routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
            <NavigationItem
              key={path}
              path={path}
              name={name}
              exact={exact}
              isPrivate={isPrivate}
              isRestricted={isRestricted}
              isAuth={isAuth}
            />
          ))
        ) : (
          <>
            {isAuth ? (
              <li>
                <button type="button" onClick={toggleModal}>
                  открыть модалку
                </button>
              </li>
            ) : (
              <>
                {routes.map(
                  ({ name, path, exact, isPrivate, isRestricted }) => (
                    <>
                      {!isPrivate && (
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
              </>
            )}
          </>
        )}

        <li>
          <button onClick={toggle} type="button">
            isAuth
          </button>
        </li>
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

      {showModal && (
        <NavModal toggleModal={toggleModal}>
          {routes.map(({ name, path, exact, isPrivate, isRestricted }) => (
            <>
              {isPrivate && (
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
          <button type="button" onClick={toggleModal}>
            <svg width="20" height="20">
              <use href={sprite + "#close"} />
            </svg>
          </button>
        </NavModal>
      )}
    </div>
  );
};

export default Navigation;
