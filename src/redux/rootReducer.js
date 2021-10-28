import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import { dailyRateReducer } from "./dailyRate/dailyRateReducer";
import { productDailyReducer } from "./DiaryProducts/diaryProductReducer";

// const authConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"]
// };

const dailyRateConfig = {
  key: "dailyRate",
  storage,
};

export const rootReducer = combineReducers({
  dailyRate: persistReducer(dailyRateConfig, dailyRateReducer),
  days: productDailyReducer,
});
