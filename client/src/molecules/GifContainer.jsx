import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateFocusGif } from '../state/features/gifsSlice';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';
import requestHelpers from '../../helpers/requestHelpers';


const GifContainer = () => {
  const gifsSliceFocus = useSelector((state) => state.gifsSlice.focus);
  const dispatch = useDispatch();
  const params = useParams();

  console.log('Gif Container (PARAMS):', params['*']);

  useEffect(() => {
    console.log('Gif Container (USE EFFECT)');
    const id = params['*'];
    requestHelpers.getFocusedGifs(id, dispatch, updateFocusGif);
  }, []);
  
  return (
    <React.Fragment>
      <GifArticle id={gifsSliceFocus.id}>
        <Div gifArticleDiv={true}>
          <img src={gifsSliceFocus.images.fixed_width_small.url} />
        </Div>
        <Div gifArticleDiv={true}>
          <button>Like</button>
        </Div>
      </GifArticle>
    </React.Fragment>
  );
};


export default GifContainer;
