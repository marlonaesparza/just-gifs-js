import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateFocusGif } from '../state/features/gifsSlice';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import Gif from '../components/combination/Gif';
import requestHelpers from '../helpers/reqHandlers';


const FocusPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    requestHelpers.getFocusedGif(params.gifId, dispatch, updateFocusGif);
  }, []);

  return (
    <Div id='focus-page-container' focusPage={ true }>
      <PageHeader/>

      <Div id='focus-content-container' homeContentCont={true}>
        <ContentNav />
        <Gif />
      </Div>
    </Div>
  );
};


export default FocusPage;
