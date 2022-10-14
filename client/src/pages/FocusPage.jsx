import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFocusGif } from '../state/features/gifsSlice';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import Gif from '../components/combination/Gif';
import requestHelpers from '../helpers/reqHandlers';


const FocusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  
  useEffect(() => {
    console.log('Login user, or have them login.');
    const nextArgs = {
      gifId: params.gifId,
      dispatch,
      actions: {
        action1: updateFocusGif
      }
    };

    const next = requestHelpers.getFocusedGif;
    requestHelpers.authUser(next, nextArgs);
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
              <Div>
                <Gif />
              </Div>
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default FocusPage;
