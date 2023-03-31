import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    value: '',
    isActive: false,
  },
  reducers: {
    clearSearchValue: (state) => {
      state.value = '';
    },
    updateSearchValue: (state, { payload }) => {
      state.value = payload;
    },
    setIsActive: (state) => {
      state.isActive = !state.isActive;
    }
  }
});


export const {
  updateSearchValue,
  clearSearchValue,
  setIsActive,
  
} = searchSlice.actions;

export default searchSlice.reducer;
