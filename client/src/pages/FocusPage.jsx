import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocusGif } from '../state/features/gifsSlice';
import { setMenuView } from '../state/features/viewsSlice';
import { setCurrentPath } from '../state/features/pathSlice';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import Gif from '../components/combination/Gif';
import LoadingIcon from '../components/combination/LoadingIcon';
import reqHandlers from '../helpers/reqHandlers';
import sliceHandlers from '../helpers/sliceHandlers';


const FocusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  const menuView = useSelector(state => state.viewsSlice.menuView);
  const focusLoading = useSelector(state => state.loadingSlice.focusLoading)
  
  useEffect(() => {
    if (menuView) {
      dispatch(setMenuView());
    };
    
    const next = reqHandlers.getFocusedGif;
    const nextArgs = {
      gifId: params.gifId,
      dispatch,
      actions: {
        action1: updateFocusGif
      }
    };

    const currentPath = location.pathname.split('/')[3];
    dispatch(setCurrentPath(`/focus/${currentPath}`));
    sliceHandlers.dispatchSetFocusLoading(dispatch);
    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        !validAuth ?
          <Navigate to="/login" replace={true} /> :

          <Div id='focus-page-container' focusPage={ true }>
            <PageHeader/>

            <Div id='focus-content-container' homeContentCont={true}>
              <ContentNav />
              <Div focusGifCont={true}>
                {
                  focusLoading ?
                    <LoadingIcon/> : <Gif />
                }
              </Div>
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default FocusPage;
