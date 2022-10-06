import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';
import searchSliceReducer from './features/searchSlice';


export default configureStore({
  reducer: {
    gifsSlice: gifsSliceReducer,
    searchSlice: searchSliceReducer,
  },
});
