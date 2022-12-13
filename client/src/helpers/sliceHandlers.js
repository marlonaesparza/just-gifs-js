import { updateValidAuth } from "../state/features/sessionSlice";
import { clearGifsSlice } from "../state/features/gifsSlice";
import { clearPathSlice } from '../state/features/pathSlice';
import { clearSearchValue } from '../state/features/searchSlice';
import { clearSessionSlice } from '../state/features/sessionSlice';
import { clearSocialSlice } from '../state/features/socialSlice';
import { clearViewsSlice } from '../state/features/viewsSlice';
import { resetPagination } from "../state/features/paginationSlice";


const sliceHandlers = {
  /* 
    CLEAR APP STATE
    Purpose: Clears the entire state of the app.
  */
  clearAppState: (dispatch) => {
    dispatch(clearSessionSlice());
    dispatch(clearGifsSlice());
    dispatch(clearPathSlice());
    dispatch(clearSearchValue());
    dispatch(clearSocialSlice());
    dispatch(clearViewsSlice());
    dispatch(resetPagination());
  },

  /* 
    AUTH USER SLICE
    Purpose: Updates the user's authentication status.
  */
  authUserSlice: (dispatch, bool) => {
    dispatch(updateValidAuth(bool));
  }
};


export default sliceHandlers;
