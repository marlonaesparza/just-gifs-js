import { createSlice } from "@reduxjs/toolkit";


export const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: {
    validAuth: false,
  },
  reducers: {
    updateValidAuth: (state, { payload }) => {
      console.log('Update Valid Auth:', payload);
      payload === true ? state.validAuth = true : state.validAuth = false
    },
  }
});


export const { updateValidAuth } = sessionSlice.actions;

export default sessionSlice.reducer;
