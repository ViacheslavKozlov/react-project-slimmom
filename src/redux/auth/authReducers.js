import { createReducer, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { registerAuthSuccess, loginAuthSuccess, logoutAuthSuccess, refreshAuthSuccess, getUserSuccess } from "./authActions";
import { getUserInfoSuccess } from "../user/userActions";

const persistConfig = {
  key: "refresh",
  version: 1,
  storage,
  whitelist: ["accessToken", "refreshToken", "sid"]
};

const authReducer = createReducer(
  {
    accessToken: "",
    refreshToken: "",
    sid: ""
  },
  {
    [loginAuthSuccess]: (_, { payload }) => ({
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid
    }),
    [logoutAuthSuccess]: () => ({
      accessToken: "",
      refreshToken: "",
      sid: ""
    }),
    [refreshAuthSuccess]: (_, { payload }) => ({
      accessToken: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.sid
    })
  }
);

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// const userInfo = createReducer(
//   {},
//   {
//     [registerAuthSuccess]: (_, { payload }) => ({ user: payload }),
//     [loginAuthSuccess]: (_, { payload }) => payload,
//     [logoutAuthSuccess]: () => ({}),
//     [refreshAuthSuccess]: (state, { payload }) => ({ ...state, ...payload }),
//     [getUserSuccess]: (state, { payload }) => ({ ...state, user: payload }),
//   }
// );

// const isAuthIn = createReducer(false, {
//   // [registerAuthSuccess]: () => true,
//   [loginAuthSuccess]: () => true,
//   [logoutAuthSuccess]: () => false,
//   [refreshAuthSuccess]: () => true,
// });

// const persistedUsersData = persistReducer(persistConfig, userInfo);

// const userRedusers = combineReducers({
//   userInfo: persistedUsersData,
//   isAuthIn,
// });

// export default userRedusers;
