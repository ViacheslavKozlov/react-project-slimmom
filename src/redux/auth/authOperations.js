import {
  registerAuthRequest,
  registerAuthSuccess,
  registerAuthError,
  loginAuthRequest,
  loginAuthSuccess,
  loginAuthError,
  logoutAuthRequest,
  logoutAuthSuccess,
  logoutAuthError,
  refreshAuthRequest,
  refreshAuthSuccess,
  getUserSuccess,
} from "./authActions";
import { apiBaseURL, register, login, logout, refresh } from "../../bk.json";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifyError = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

axios.defaults.baseURL = apiBaseURL;

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const authRegistration = (userData) => async (dispatch) => {
  dispatch(registerAuthRequest());
  await axios
    .post(register, userData)
    .then(({ data }) => dispatch(registerAuthSuccess(data)))
    .then(() =>
      dispatch(
        authLogin({ email: userData.email, password: userData.password })
      )
    )
    .catch((error) => {
      if (
        error.response.data.message.includes(
          `User with ${userData.email} email already exists`
        )
      ) {
        notifyError("Пользователь с таким email уже зарегистрирован");
      }
      dispatch(registerAuthError(error.response.data.message));
    });
};

export const authLogin = (userData) => (dispatch) => {
  dispatch(loginAuthRequest());
  const { email, password } = userData;
  axios
    .post(login, {
      email,
      password,
    })
    .then(({ data }) => {
      dispatch(loginAuthSuccess(data));
      token.set(data.accessToken);
    })
    .catch((error) => {
      if (
        error.response.data.message.includes(
          `User with ${email} email doesn't exist`
        )
      ) {
        notifyError("Пользователь с таким email не зарегистрирован");
      }
      if (error.response.data.message.includes(`Password is wrong`)) {
        notifyError("Неправильный пароль");
      }
      dispatch(loginAuthError(error.response.data.message));
    });
};

export const authLogout = () => (dispatch) => {
  dispatch(logoutAuthRequest());

  axios
    .post(logout)
    .then(() => {
      token.unset();
      return dispatch(logoutAuthSuccess());
    })
    .catch((error) => dispatch(logoutAuthError(error.response.data.message)));
};

export const authRefresh = () => (dispatch, getState) => {
  const refreshToken = getState().authData.refreshToken;
  const sid = getState().authData.sid;
  dispatch(refreshAuthRequest());
  token.set(refreshToken);
  axios
    .post(refresh, { sid })
    .then(({ data }) => {
      const {
        newAccessToken: accessToken,
        newRefreshToken: refreshToken,
        sid,
      } = data;
      token.set(accessToken);
      dispatch(
        refreshAuthSuccess({
          accessToken,
          refreshToken,
          sid,
        })
      );
      axios.get("/user").then(({ data }) => dispatch(getUserSuccess(data)));
    })
    .catch(() => dispatch(logoutAuthSuccess()));
};
