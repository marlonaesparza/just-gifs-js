import { updateValidAuth } from "../state/features/sessionSlice";


const sliceHandlers = {
  authUserSlice: (dispatch, bool) => {
    dispatch(updateValidAuth(bool));
  }
};


export default sliceHandlers;
