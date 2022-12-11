import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    value: '',
    isActive: false,
  },
  reducers: {
    updateSearchValue: (state, { payload }) => {
      state.value = payload;
    },
    clearSearchValue: (state) => {
      state.value = '';
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
