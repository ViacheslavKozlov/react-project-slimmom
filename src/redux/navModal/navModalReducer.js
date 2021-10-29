import { createReducer } from "@reduxjs/toolkit";
import { statusModal } from "./navModalActions";

const showModalReducer = createReducer(false, {
  [statusModal]: (state, _) => !state,
});

export default showModalReducer;
