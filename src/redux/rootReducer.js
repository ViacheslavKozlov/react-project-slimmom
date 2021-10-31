import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { productDailyReducer } from "./DiaryProducts/diaryProductReducer";
import { dailyRateReducer } from "./dailyRate/dailyRateReducer";
import authRedusers from "./auth/authReducers";
import errorReducer from "./errorReducer/errorReducer";
import isLoadingReduser from "./isLoadingReduser/isLoadingReduser";

// const authConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"]
// };

const dailyRateConfig = {
  key: "dailyRate",
  storage,
};

const productsConfig = {
  key: "products",
  storage,
};

export const rootReducer = combineReducers({
  // dailyCalories: dailyCaloriesReducer,
  dailyRate: persistReducer(dailyRateConfig, dailyRateReducer),
  days: productDailyReducer,
  products: productDailyReducer,
  authData: authRedusers,
  error: errorReducer,
  isLoading: isLoadingReduser,
});
