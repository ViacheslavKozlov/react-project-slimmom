import axios from "axios";
import {
  getUserInfoError,
  getUserInfoRequest,
  getUserInfoSuccess,
} from "./userActions";
import { BASE_URL } from "../../service/Api";
import { authRefresh } from "../auth/authOperations";

export const getUserInfo = () => async (dispatch, getState) => {
  try {
    dispatch(getUserInfoRequest());
    const token = getState().authData.accessToken;
    const { data } = await axios.get(BASE_URL + "/user", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (data.userData.notAllowedProducts.length >= 5) {
      const normData = {
        ...data,
        userData: {
          ...data.userData,
          notAllowedProducts: data.userData.notAllowedProducts.slice(0, 5),
        },
      };
      dispatch(getUserInfoSuccess(normData));
      return;
    }
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    if (error.response.status === 401) {
      await dispatch(authRefresh());
      getState().authData.accessToken && dispatch(getUserInfo());
    }
    dispatch(getUserInfoError(error.message));
  }
};
