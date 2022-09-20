import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';


export default configureStore({
  reducer: {
    gifsSlice: gifsSliceReducer,
  },
});
