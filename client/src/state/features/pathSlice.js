import { createSlice } from "@reduxjs/toolkit";


export const pathSlice = createSlice({
  name: 'pathSlice',
  initialState: {
    path: ''
  },
  reducers: {
    clearPathSlice: (state) => {
      state.path = '';
    },
    setCurrentPath: (state, { payload }) => {
      state.path = payload;
    }
  },
});


export const {
  clearPathSlice,
  setCurrentPath,
} = pathSlice.actions;

export default pathSlice.reducer;
