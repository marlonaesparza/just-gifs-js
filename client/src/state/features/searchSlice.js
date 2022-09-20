import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    value: '',
  },
  reducers: {
    updateSearchValue: (state, { payload }) => {
      console.log(payload);
      state.value = payload;
    },
  }
});


export const { updateSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
