import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    value: '',
  },
  reducers: {
    updateSearchValue: (state, { payload }) => {
      state.value = payload;
    },
    clearSearchValue: (state) => {
      state.value = '';
    }
  }
});


export const {
  updateSearchValue,
  clearSearchValue,

} = searchSlice.actions;

export default searchSlice.reducer;
