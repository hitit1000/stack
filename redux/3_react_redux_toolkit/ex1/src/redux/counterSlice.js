import { createSlice } from "@reduxjs/toolkit";

// const initialState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.payload;
    },
    down(state, action) {
      state.value = state.value + action.payload;
    },
  },
});
export default counterSlice;
export const { up, down } = counterSlice.actions;
