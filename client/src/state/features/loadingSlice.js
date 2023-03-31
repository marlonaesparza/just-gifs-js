import { createSlice } from "@reduxjs/toolkit";


export const loadingSlice = createSlice({
  name: 'loadingSlice',
  initialState: {
    focusLoading: false,
  },
  reducers: {
    setFocusLoading: (state) => {
      state.focusLoading = state.focusLoading === false ?
        true : false;
    },
    clearState: (state) => {
      state.focusLoading = false;
    },
  }
});


export const {
  setFocusLoading,
  clearState
} = loadingSlice.actions;

export default loadingSlice.reducer;
