import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';
import searchSliceReducer from './features/searchSlice';
import viewsSliceReducer from './features/viewsSlice';


export default configureStore({
  reducer: {
    gifsSlice: gifsSliceReducer,
    searchSlice: searchSliceReducer,
    viewsSlice: viewsSliceReducer
  },
});
