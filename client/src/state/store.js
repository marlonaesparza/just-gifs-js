import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';
import searchSliceReducer from './features/searchSlice';
import viewsSliceReducer from './features/viewsSlice';
import sessionSliceReducer from "./features/sessionSlice";
import pathSliceReducer from './features/pathSlice';
import socialSliceReducer from './features/socialSlice';


export default configureStore({
  reducer: {
    gifsSlice: gifsSliceReducer,
    searchSlice: searchSliceReducer,
    viewsSlice: viewsSliceReducer,
    sessionSlice: sessionSliceReducer,
    pathSlice: pathSliceReducer,
    socialSlice: socialSliceReducer,
    
  },
});
