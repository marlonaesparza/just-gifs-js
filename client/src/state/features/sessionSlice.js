import { createSlice } from "@reduxjs/toolkit";


export const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: {
    validAuth: false,
  },
  reducers: {
    clearSessionSlice: (state) => {
      state.validAuth = false;
    },
    updateValidAuth: (state, { payload }) => {
      payload === true ? state.validAuth = true : state.validAuth = false
    },
  }
});


export const {
  clearSessionSlice,
  updateValidAuth
} = sessionSlice.actions;

export default sessionSlice.reducer;
