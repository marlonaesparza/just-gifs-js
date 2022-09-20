import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';


const GifsContainer = () => {
  const gifsSliceAll = useSelector((state) => state.gifsSlice.all);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  let gifs = gifsSliceAll;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  }

  return (
    <React.Fragment>
      {
        gifs.map((gif) => {
          return (
            <GifArticle key={gif.id}>
              <Div gifArticleDiv={true}>
                <img src={gif.images.fixed_width_small.url} />
              </Div>
              <Div gifArticleDiv={true}>
                <button>Like</button>
              </Div>
            </GifArticle>
          );
        })
      }
    </React.Fragment>
  );
};


export default GifsContainer;
