import { createSlice } from "@reduxjs/toolkit";


export const paginationSlice = createSlice({
  name: 'paginationSlice',
  initialState: {
    offset: 1,
    trendingIndex: 1,
    searchIndex: 1,
    feedIndex: 1,
  },
  reducers: {
    resetPagination: (state) => {
      state.offset = 1;
      state.trendingIndex = 1;
      state.searchIndex = 1;
      state.feedIndex = 1;
    },
    offsetForward: (state) => {
      if (!(state.offset > 4000)) {
        state.offset = state.offset + 6;
      }
    },
    offsetBackward: (state) => {
      if (state.offset !== 1) {
        state.offset = state.offset - 6;
      }
    },
    setTrendingIndex: (state, { payload }) => {
      state.trendingIndex = payload;
    },
    setSearchIndex: (state, { payload }) => {
      state.searchIndex = payload;
    },
    setFeedIndex: (state, { payload }) => {
      state.feedIndex = payload;
    },
  },
});


export const {
  offsetForward,
  offsetBackward,
  setTrendingIndex,
  setSearchIndex,
  setFeedIndex,
  resetPagination,
  
} = paginationSlice.actions;

export default paginationSlice.reducer;
