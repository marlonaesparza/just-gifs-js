import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';
import searchSliceReducer from './features/searchSlice';
import viewsSliceReducer from './features/viewsSlice';
import sessionSliceReducer from "./features/sessionSlice";
import pathSliceReducer from './features/pathSlice';


export default configureStore({
  reducer: {
    gifsSlice: gifsSliceReducer,
    searchSlice: searchSliceReducer,
    viewsSlice: viewsSliceReducer,
    sessionSlice: sessionSliceReducer,
    pathSlice: pathSliceReducer,
    
  },
});
