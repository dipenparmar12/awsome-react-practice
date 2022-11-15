import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment(state) {
      // console.log(state);
      state.count += 1;
      return state;
    },
    decrement(state) {
      state.count -= 1;
      return state;
    },
    incrementBy: (state, action) => {
      state.count += action.payload;
      return state;
    }
  }
});

export const { increment, decrement, incrementBy } = countSlice.actions;
export default countSlice.reducer;
// export const counterActions = countSlice.actions;
