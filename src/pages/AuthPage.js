import React from "react";
import { useDispatch } from "react-redux";
import { mainRoutes } from "../routes/mainRoutes";
import { authLogin, authRegistration } from "../redux/auth/authOperations";
import { useLocation } from "react-router";
import AuthTempForm from "../Components/authTempForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage = () => {
  const dispatch = useDispatch();

  // const error = useSelector((state) => state.error);
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
          <>
            <ToastContainer theme={"colored"} />
            <AuthTempForm
              handleSubmit={handleSubmit}
              btnName={name}
              key={path}
            />
          </>
        )
    );
};

export default AuthPage;
