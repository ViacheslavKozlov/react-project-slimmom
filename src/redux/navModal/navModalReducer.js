import { createReducer } from "@reduxjs/toolkit";
import { statusModal } from "./navModalActions";

const showModalReducer = createReducer(false, {
  [statusModal]: (_, { payload }) => !payload,
});

export default showModalReducer;
