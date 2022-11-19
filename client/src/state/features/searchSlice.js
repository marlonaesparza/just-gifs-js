import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    value: '',
  },
  reducers: {
    clearSearchSlice: (state) => {
      state.value = '';
    },
    updateSearchValue: (state, { payload }) => {
      state.value = payload;
    },
    clearSearchValue: (state, { payload}) => {
      state.value = '';
    }
  }
});


export const {
  clearSearchSlice,
  updateSearchValue,
  clearSearchValue
} = searchSlice.actions;

export default searchSlice.reducer;
