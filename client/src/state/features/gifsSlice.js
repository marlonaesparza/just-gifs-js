import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    trending: [],
    searched: [],
    feed: [],
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
    updateFeedGifs: (state, { payload }) => {
      state.feed.push(payload);
    },
    updateFocusGif: (state, {payload}) => {
      state.focus = payload;
    }
  },
});


export const {
  updateAllGifs,
  updateTrendingGifs,
  updateSearchedGifs,
  updateFeedGifs,
  updateFocusGif
} = gifsSlice.actions;

export default gifsSlice.reducer;
