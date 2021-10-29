import React from "react";

import sprite from "../../../icons/sprite.svg";

const Burger = ({toggleModal}) => {
 

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
