import { configureStore } from "@reduxjs/toolkit";
import gifsSliceReducer from './features/gifsSlice';
import searchSliceReducer from './features/searchSlice';
import viewsSliceReducer from './features/viewsSlice';
import sessionSliceReducer from "./features/sessionSlice";
import pathSliceReducer from './features/pathSlice';
import socialSliceReducer from './features/socialSlice';
import paginationSliceReducer from './features/paginationSlice';
import loadingSlice from "./features/loadingSlice";
import formSlice from "./features/formSlice";


export default configureStore({
  reducer: {
    loadingSlice: loadingSlice,
    gifsSlice: gifsSliceReducer,
    searchSlice: searchSliceReducer,
    viewsSlice: viewsSliceReducer,
    sessionSlice: sessionSliceReducer,
    pathSlice: pathSliceReducer,
    socialSlice: socialSliceReducer,
    paginationSlice: paginationSliceReducer,
    formSlice: formSlice,
    
  },
});
