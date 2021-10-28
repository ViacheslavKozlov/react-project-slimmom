import axios from "axios";
import {
  getDailyRateError,
  getDailyRateRequest,
  getDailyRateSucces,
} from "./dailyRateActions";

const BASE_URL = "https://slimmom-backend.goit.global";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTdhNGRkYzUyODE5ZjAwMDQ1NzVhMDIiLCJzaWQiOiI2MTdhNmQwM2E2Zjk3NjY4ZjdmYzU5NTMiLCJpYXQiOjE2MzU0MTMyNTEsImV4cCI6MTYzNTQxNjg1MX0.4F_UipdMKIEHsKNl8SJVUBZl23-eagamZ4Mb6aF4oZ4";

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

export { getDailyRateOperation };
