import { statusModal } from "./navModalActions";

export const toggleModalOperation = () => (dispatch) => {
  dispatch(statusModal);
};
