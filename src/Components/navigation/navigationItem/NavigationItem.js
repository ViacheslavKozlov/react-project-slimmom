import React from "react";
import { NavLink } from "react-router-dom";

const NavigationItem = ({
  name,
  path,
  exact,
  isPrivate,
  isRestricted,
  isAuth,
}) => {
  return (
    <>
      {((!isPrivate && !isRestricted) ||
        (isPrivate && !isRestricted && isAuth) ||
        (!isPrivate && isRestricted && !isAuth)) && (
        <li>
          {name !== "Home" ? (
            <NavLink to={path} exact={exact}>
              {name}
            </NavLink>
          ) : (
            <NavLink to={path} exact={exact}>
              <img src="../../../images/logo-desc-min.jpg" alt="Logo"></img>
              <p>
                Slim<span>Mom</span>
              </p>
            </NavLink>
          )}
        </li>
      )}
    </>
  );
};

export default NavigationItem;
