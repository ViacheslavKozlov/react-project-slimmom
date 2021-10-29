import React from "react";
import { useDispatch } from "react-redux";
import sprite from "../../../icons/sprite.svg";
import { toggleModalOperation } from "../../../redux/navModal/navModalOperations";

const Burger = () => {
  const dispatch = useDispatch();
  const toggleModal = dispatch(toggleModalOperation());
  return (
    <>
      <button type="button" onClick={toggleModal}>
        <svg width="20" height="20">
          <use href={sprite + "#burger"} />
        </svg>
      </button>
      {/* <button type="button" onClick={toggleModal}>
        закрыть модалку
      </button> */}
    </>
  );
};

export default Burger;
