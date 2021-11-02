import { combineReducers } from "redux";
import { productDailyReducer } from "./DiaryProducts/diaryProductReducer";
import { dailyRateReducer } from "./dailyRate/dailyRateReducer";
import { persistedAuthReducer } from "./auth/authReducers";
import errorReducer from "./errorReducer/errorReducer";
import isLoadingReduser from "./isLoadingReduser/isLoadingReduser";
import { dayReducer, userReducer } from "./user/userReducers";
import toggleFormReducer from "./isOpen/IsOpenReducer";

export const rootReducer = combineReducers({
  authData: persistedAuthReducer,
  dailyRate: dailyRateReducer,
  products: productDailyReducer,
  error: errorReducer,
  isLoading: isLoadingReduser,
  user: userReducer,
  days: dayReducer,
  mobileFormState: toggleFormReducer,
});
