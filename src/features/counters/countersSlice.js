import { createSlice } from "@reduxjs/toolkit";
import initialCounters from "./../../data/initialCounters";
const CounterSlice = createSlice({
  name: "counters",
  initialState: initialCounters,
  reducers: {
    increment(sate, action) {
      const counterIndex = sate.findIndex((c) => c.id === action.payload);
      sate[counterIndex].value++;
    },
    decrement(sate, action) {
      const counterIndex = sate.findIndex((c) => c.id === action.payload);
      sate[counterIndex].value--;
    },
  },
});

export default CounterSlice.reducer;
export const { increment, decrement } = CounterSlice.actions;
