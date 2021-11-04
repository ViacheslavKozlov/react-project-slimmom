import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainRoutes } from "../routes/mainRoutes";
import { authLogin, authRegistration } from "../redux/auth/authOperations";
import { useHistory, useLocation } from "react-router";
import AuthTempForm from "../Components/authTempForm";
import { userInfo } from "../redux/user/userSelectors";

const AuthPage = () => {
  const dispatch = useDispatch();

  const error = useSelector((state) => state.error);
  const userId = useSelector(userInfo);
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSubmit = (userData) => {
    pathname === mainRoutes[4].path
      ? dispatch(authRegistration(userData))
      : dispatch(authLogin(userData));
  };

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
