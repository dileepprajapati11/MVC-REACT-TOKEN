// import { configureStore } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./Slice";

const store = configureStore({
  reducer: {
    user: sliceReducer,
  },
});

export default store;
