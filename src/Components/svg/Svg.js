import React from "react";

import sprite from "../../icons/sprite.svg";

const Svg = ({ svgName }) => {
  return (
    <svg width="20" height="20" fill="white">
      <use href={sprite + "#add"} />
    </svg>
  );
};

export { Svg };
