import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../routes/mainRoutes";
import { authLogin, authRegistration } from "../redux/auth/authOperations";
import { useLocation } from "react-router";
import AuthTempForm from "../Components/authTempForm";

const AuthPage = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);
  const { pathname } = useLocation();

  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };

  useEffect(() => {
    if (pathname === "/login" && error !== "") {
      alert("Что-то пошло не так, попробуйте еще раз");
      window.location.reload();
      return;
    }
    if (pathname === "/register" && error !== "") {
      alert("Что-то пошло не так, попробуйте еще раз");
      window.location.reload();
      return;
    }
  }, [error, pathname]);

  return mainRoutes
    .filter(({ isRestricted }) => isRestricted)
    .map(
      ({ path, name }) =>
        path === pathname && (
          <AuthTempForm handleSubmit={handleSubmit} btnName={name} key={path} />
        )
    );
};

export default AuthPage;
