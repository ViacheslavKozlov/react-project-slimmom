import React, { useState } from "react";
import { useSelector } from "react-redux";
import useDeviceSizes from "../../hooks/useDeviceSizec";
import { getIsAuth } from "../../redux/auth/authSelectors";

import Burger from "./burger/Burger";
import NavigationList from "./navigationList/NavigationList";

const Navigation = () => {
  const isAuth = useSelector(getIsAuth);
  const { isTabletDevice } = useDeviceSizes();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      {
        <NavigationList
          showModal={showModal}
          toggleModal={toggleModal}
          isAuth={isAuth}
        />
      }
      {isTabletDevice && isAuth && <Burger toggleModal={toggleModal} />}
    </>
  );
};

export default Navigation;

