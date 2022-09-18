import { configureStore } from "@reduxjs/toolkit";
import trendingGifsReducer from './features/trendingGifsSlice';


export default configureStore({
  reducer: {
    trendingGifs: trendingGifsReducer,
  },
});
