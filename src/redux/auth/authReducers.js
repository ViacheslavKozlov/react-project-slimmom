import { createReducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { loginAuthSuccess, logoutAuthSuccess, refreshAuthSuccess } from "./authActions";

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
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
      sid: payload.sid
    })
  }
);

export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
