import axios from "axios";
import { getUserInfoError, getUserInfoRequest, getUserInfoSuccess } from "./userActions";
import { BASE_URL } from "../../service/Api";

export const getUserInfo = () => async (dispatch, getState) => {
  try {
    dispatch(getUserInfoRequest());
    const token = getState().authData.accessToken;
    const { data } = await axios.get(BASE_URL + "/user", { headers: { Authorization: `Bearer ${token}` } });
    console.log(data);
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
