import { updateValidAuth } from "../state/features/sessionSlice";
import { clearGifsSlice } from "../state/features/gifsSlice";
import { clearPathSlice } from '../state/features/pathSlice';
import { clearSearchSlice } from '../state/features/searchSlice';
import { clearSessionSlice } from '../state/features/sessionSlice';
import { clearSocialSlice } from '../state/features/socialSlice';
import { clearViewsSlice } from '../state/features/viewsSlice';


const sliceHandlers = {
  /* 
    CLEAR APP STATE
    Purpose: Clears the entire state of the app.
  */
  clearAppState: (dispatch) => {
    dispatch(clearSessionSlice());
    dispatch(clearGifsSlice());
    dispatch(clearPathSlice());
    dispatch(clearSearchSlice());
    dispatch(clearSocialSlice());
    dispatch(clearViewsSlice());
  },

  authUserSlice: (dispatch, bool) => {
    dispatch(updateValidAuth(bool));
  }
};


export default sliceHandlers;
