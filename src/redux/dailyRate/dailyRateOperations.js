import axios from "axios";
import {
  getDailyRateByDateError,
  getDailyRateByDateSucces,
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getUserInfoError,
  getUserInfoSucces,
} from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const getUserInfoOperation = () => async (dispatch) => {
  // dispatch(getDailyRateRequest());
  try {
    const response = await axios.get(`${BASE_URL}/user`);

    dispatch(getUserInfoSucces({ ...response.data }));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};

const getDailyRateOperation =
  (userData, id = "") =>
  async (dispatch) => {
    dispatch(getDailyRateRequest());
    try {
      const response = await axios.post(
        `${BASE_URL}/daily-rate/${id}`,
        userData
      );
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

const getDailyRateByDateOperation = (date) => async (dispatch) => {
  // dispatch(getDailyRateRequest());
  try {
    const response = await axios.post(`${BASE_URL}/day/info`, date);

    dispatch(getDailyRateByDateSucces({ ...response.data }));
  } catch (error) {
    dispatch(getDailyRateByDateError(error.message));
  }
};

export {
  getDailyRateOperation,
  getDailyRateByDateOperation,
  getUserInfoOperation,
};
