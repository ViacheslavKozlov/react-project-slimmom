import axios from "axios";
import {
  getDailyRateByDateSucces,
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
  getUserInfoSucces,
} from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTdhZTQ5Y2E2Zjk3NjY4ZjdmYzU5ODAiLCJzaWQiOiI2MTdiOGU3Y2E2Zjk3NjY4ZjdmYzU5OGEiLCJpYXQiOjE2MzU0ODczNTYsImV4cCI6MTYzNTQ5MDk1Nn0.cF25a_t-Cb8DPW682HrSWQ0hbZWokKdDecKEOWCBju0";

// {
//   "email": "dnbdimka@gmail.com",
//   "password": "qweqwe123"
// }

// "userId": "617a4645a6f97668f7fc593f",

//  axios
//         .get(BASE_URL + /product?search=${value}, {
//           headers: { Authorization: Bearer ${token} },
//         })
//         .then((response) => setProducts(response.data));
//   }, [value]);

const getUserInfoOperation = () => async (dispatch) => {
  // dispatch(getDailyRateRequest());
  try {
    const response = await axios.get(`${BASE_URL}/user`);

    dispatch(getUserInfoSucces({ ...response.data }));
  } catch (error) {
    dispatch(getDailyRateError(error.message));
  }
};

const getDailyRateOperation =
  (userData, id = "") =>
  async (dispatch) => {
    dispatch(getDailyRateRequest());
    try {
      const response = await axios.post(
        `${BASE_URL}/daily-rate/${id}`,
        userData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
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

const getDailyRateByDateOperation =
  (date = "2020-12-31") =>
  async (dispatch) => {
    // dispatch(getDailyRateRequest());
    try {
      const response = await axios.post(`${BASE_URL}/day/info`, date, {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(getDailyRateByDateSucces({ ...response.data }));
    } catch (error) {
      dispatch(getDailyRateError(error.message));
    }
  };

export {
  getDailyRateOperation,
  getDailyRateByDateOperation,
  getUserInfoOperation,
};
