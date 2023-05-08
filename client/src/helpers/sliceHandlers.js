import { updateValidAuth, clearSessionSlice } from "../state/features/sessionSlice";
import { clearGifsSlice } from "../state/features/gifsSlice";
import { clearPathSlice } from '../state/features/pathSlice';
import { clearSearchValue } from '../state/features/searchSlice';
import { clearSocialSlice } from '../state/features/socialSlice';
import { clearViewsSlice } from '../state/features/viewsSlice';
import { resetPagination } from "../state/features/paginationSlice";
import { setFocusLoading, clearState } from '../state/features/loadingSlice';
import { clearFormSlice } from "../state/features/formSlice";


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
    dispatch(clearFormSlice());
    dispatch(clearState());
  },

  /* 
    AUTH USER SLICE
    Purpose: Updates the user's authentication status.
  */
  authUserSlice: (dispatch, bool) => {
    dispatch(updateValidAuth(bool));
  },

  /* 
    Dispatch Set Fous Loading
    Purpose: Updates focus loading state to true or false.
  */
  dispatchSetFocusLoading: (dispatch) => {
    dispatch(setFocusLoading());
  }
};


export default sliceHandlers;
