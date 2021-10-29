import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import {
  dailyCaloriesReducer,
  dailyRateReducer,
} from "./dailyRate/dailyRateReducer";
import authRedusers from "./auth/authReducers";
import errorReducer from "./errorReducer/errorReducer";
import isLoadingReduser from "./isLoadingReduser/isLoadingReduser";
// const authConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"]
// };

// const dailyRateConfig = {
//   key: "dailyRate",
//   storage,
// };

export const rootReducer = combineReducers({
  dailyRate: dailyRateReducer,
  // dailyCalories: dailyCaloriesReducer,
  authData: authRedusers,
  error: errorReducer,
  isLoading: isLoadingReduser,
});
