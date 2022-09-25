import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    trending: [],
    searched: [],
    focus: {},
  },
  reducers: {
    updateAllGifs: (state, { payload }) => {
      payload.forEach((gif) => {
        state.all.push(gif);
      });
    },
    updateTrendingGifs: (state, { payload }) => {
      state.trending =  payload;
    },
    updateSearchedGifs: (state, { payload }) => {
      state.searched = payload;
    },
    updateFocusGif: (state, {payload}) => {
      localStorage.setItem('focusGif', JSON.stringify(payload));
      state.focus = payload;
    }
  },
});


export const { updateAllGifs, updateTrendingGifs, updateSearchedGifs, updateFocusGif } = gifsSlice.actions;

export default gifsSlice.reducer;
