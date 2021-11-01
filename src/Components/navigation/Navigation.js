import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useDeviceSizes from "../../hooks/useDeviceSizec";
import { getIsAuth } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";

import Burger from "./burger/Burger";
import LoginItem from "./loginItem/LoginItem";
import NavList from "./navList/NavList";
import NavModal from "./navModal/NavModal";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  const { isDescDevice } = useDeviceSizes();
  const [showModal, setShowModal] = useState(false);
  // const userdata = ();

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  // useEffect(() => {
  // // если нет данных в  по заполенинию джанных, history push to calculator
  // }, [input])

  return (
    <div className={styles.container}>
      {isDescDevice && (
        <NavList
          routes={
            isAuth
              ? mainRoutes.filter((item) => item.isPrivate || item.path === "/")
              : mainRoutes.filter(
                  (item) => item.isRestricted || item.path === "/"
                )
          }
          isAuth={isAuth}
        />
      )}
      {!isDescDevice && (
        <>
          {!isAuth && (
            <NavList
              routes={mainRoutes.filter(
                (item) => item.isRestricted || item.path === "/"
              )}
              isAuth={isAuth}
            />
          )}
          {isAuth && (
            <>
              <NavList
                routes={mainRoutes.filter((item) => item.path === "/")}
                isAuth={isAuth}
              />

              {showModal && (
                <NavModal toggleModal={toggleModal}>
                  <NavList
                    toggleModal={toggleModal}
                    routes={mainRoutes.filter((item) => item.isPrivate)}
                    isAuth={isAuth}
                  />
                </NavModal>
              )}
            </>
          )}
          {/* <div className={styles.horizontalLine}></div>  */}
        </>
      )}

      {isAuth && <LoginItem />}

      {!isDescDevice && isAuth && <Burger toggleModal={toggleModal} />}

      {/* {
        <NavigationList
          showModal={showModal}
          toggleModal={toggleModal}
          isAuth={isAuth}
        />
      }
      {isTabletDevice && isAuth && <Burger toggleModal={toggleModal} />} */}
    </div>
  );
};

export default Navigation;
