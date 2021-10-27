import axios from "axios";
import { getDailyRateError, getDailyRateSucces } from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const getDailyRateOperation = (userData) => async (dispatch) => {
  // dispatch(addNewContactRequest());
  try {
    const response = await axios.post(`${BASE_URL}/daily-rate`, userData);
    dispatch(getDailyRateSucces({ ...response.data }));
  } catch (error) {
    dispatch(getDailyRateError(error.message));
  }
};

export { getDailyRateOperation };
