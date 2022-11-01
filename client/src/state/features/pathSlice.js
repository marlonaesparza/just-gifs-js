import { createSlice } from "@reduxjs/toolkit";


export const pathSlice = createSlice({
  name: 'pathSlice',
  initialState: {
    path: ''
  },
  reducers: {
    setCurrentPath: (state, { payload }) => {
      state.path = payload;
    }
  },
});


export const {
  setCurrentPath,
} = pathSlice.actions;

export default pathSlice.reducer;
