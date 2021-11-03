import axios from "axios";
import { authRefresh } from "../auth/authOperations";
import {
  getDailyRateByDateError,
  getDailyRateByDateRequest,
  getDailyRateByDateSucces,
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getUserInfoError,
  getUserInfoRequest,
  getUserInfoSucces,
} from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const getUserInfoOperation = () => async (dispatch, getState) => {
  dispatch(getUserInfoRequest());
  try {
    const response = await axios.get(`${BASE_URL}/user`);

    dispatch(getUserInfoSucces({ ...response.data }));
  } catch (error) {
    if (error.response.status === 401) {
      await dispatch(authRefresh());
      getState().authData.accessToken && dispatch(getUserInfoOperation());
    }
    dispatch(getUserInfoError(error.message));
  }
};

const getDailyRateOperation = (userData, id) => async (dispatch, getState) => {
  dispatch(getDailyRateRequest());
  try {
    const response = await axios.post(
      id ? `${BASE_URL}/daily-rate/${id}` : `${BASE_URL}/daily-rate`,
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
    if (error.response.status === 401) {
      await dispatch(authRefresh());
      getState().authData.accessToken &&
        dispatch(getDailyRateOperation(userData, id));
    }
    dispatch(getDailyRateError(error.message));
  }
};

const getDailyRateByDateOperation = (date) => async (dispatch, getState) => {
  dispatch(getDailyRateByDateRequest());
  try {
    const response = await axios.post(`${BASE_URL}/day/info`, date);

    dispatch(getDailyRateByDateSucces({ ...response.data }));
  } catch (error) {
    if (error.response.status === 401) {
      await dispatch(authRefresh());
      getState().authData.accessToken &&
        dispatch(getDailyRateByDateOperation(date));
    }
    dispatch(getDailyRateByDateError(error.message));
  }
};

export {
  getDailyRateOperation,
  getDailyRateByDateOperation,
  getUserInfoOperation,
};
