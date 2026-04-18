import counterReducer from "../src/features/counters/countersSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counters: counterReducer,
  },
});

export default store;
