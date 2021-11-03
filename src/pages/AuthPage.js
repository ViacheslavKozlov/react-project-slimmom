import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../routes/mainRoutes";
import { authLogin, authRegistration } from "../redux/auth/authOperations";
import { useHistory, useLocation } from "react-router";
import AuthTempForm from "../Components/authTempForm";
import { userInfo } from "../redux/user/userSelectors";

const AuthPage = () => {
  const dispatch = useDispatch();

  // const state = useSelector((state) => state.error);
  const error = useSelector((state) => state.error);
  const userId = useSelector(userInfo);
  const history = useHistory();
  const { pathname, state } = useLocation();

  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };

  useEffect(() => {
    if (pathname === "/login" && error !== "") {
      alert("Что-то пошло не так, попробуйте еще раз");
      return;
    }
    if (pathname === "/register" && error !== "") {
      alert("Что-то пошло не так, попробуйте еще раз");
      return;
    }
    if (pathname === "/register" && userId.id !== "" && error === "") {
      const isComing = window.confirm(
        "Вы успешно зарегистрировались, перейти на страницу входа?"
      );
      isComing && history.push("/login");
    }
  }, [userId, error, history, pathname]);

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
