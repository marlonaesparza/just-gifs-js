import React from 'react';
import { useSelector } from 'react-redux';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';


const GifContainer = () => {
  const gifsSliceFocus = useSelector((state) => state.gifsSlice.focus)[0] ?
    useSelector((state) => state.gifsSlice.focus)[0] :
    JSON.parse(localStorage.getItem('focusGif'))[0];
  
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
