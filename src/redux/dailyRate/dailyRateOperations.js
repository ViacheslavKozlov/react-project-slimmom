import axios from "axios";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
} from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const getDailyRateOperation = (userData) => async (dispatch) => {
  dispatch(getDailyRateRequest());
  try {
    const response = await axios.post(`${BASE_URL}/daily-rate`, userData);
    if (response.data.notAllowedProducts.length >= 5) {
      const normData = {
        ...response.data,
        notAllowedProducts: response.data.notAllowedProducts.slice(0, 5),
      };
      dispatch(getDailyRateSucces(normData));
      return;
    }
    dispatch(getDailyRateSucces({ ...response.data }));
  } catch (error) {
    dispatch(getDailyRateError(error.message));
  }
};

export { getDailyRateOperation };
