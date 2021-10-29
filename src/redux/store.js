import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { rootReducer } from "./rootReducer";
import authRedusers from "./auth/authReducers";
import errorReducer from "./errorReducer/errorReducer";
import isLoadingReduser from "./isLoadingReduser/isLoadingReduser";
import showModalReducer from "./navModal/navModalReducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: {
    rootReducer,
    authData: authRedusers,
    error: errorReducer,
    isLoading: isLoadingReduser,
    // showModal: showModalReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

export default store;
