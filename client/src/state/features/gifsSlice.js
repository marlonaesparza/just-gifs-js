import { createSlice } from "@reduxjs/toolkit";


export const gifsSlice = createSlice({
  name: 'gifsSlice',
  initialState: {
    all: [],
    trending: [],
    searched: [],
    feed: [],
    favorites: [],
    focus: {},
  },
  reducers: {
    clearGifsSlice: (state) => {
      state.all = [];
      state.trending = [];
      state.searched = [];
      state.feed = [];
      state.favorites = [];
      state.focus = {};
    },
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
      state.feed = payload;
    },
    updateFocusGif: (state, { payload }) => {
      state.focus = payload;
    },
    updateFavoriteGifs: (state, { payload }) => {
      state.favorites = payload;
    },
    updateAllGifsAfterLikeOrDelete: (state, { payload }) => {
      state.trending = state.trending.map((gif) => {
        const gifId = gif.postID ? gif.postID : gif.id;
        if (payload.postID === gifId) {
          return {
            ...payload
          };
        };

        return gif;
      });

      state.searched = state.searched.map((gif) => {
        const gifId = gif.postID ? gif.postID : gif.id;
        if (payload.postID === gifId) {
          return {
            ...payload
          };
        };

        return gif;
      });

      state.feed = state.feed.map((gif) => {
        const gifId = gif.postID ? gif.postID : gif.id;
        if (payload.postID === gifId) {
          return {
            ...payload
          };
        };

        return gif;
      });

      state.favorites = state.favorites.filter((gif) => {
        const gifId = gif.postID ? gif.postID : gif.id;
        if (payload.postID === gifId) {
          return false;
        };

        return true;
      });

      state.focus = payload;
    },
  },
});


export const {
  clearGifsSlice,
  updateAllGifs,
  updateTrendingGifs,
  updateSearchedGifs,
  updateFeedGifs,
  updateFocusGif,
  updateFavoriteGifs,
  updateAllGifsAfterLikeOrDelete,

} = gifsSlice.actions;

export default gifsSlice.reducer;
