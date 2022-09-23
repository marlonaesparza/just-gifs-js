import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFocusGif } from '../state/features/gifsSlice';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';
import GifContainer from './GifContainer';


const GifsContainer = () => {
  const gifsSliceAll = useSelector((state) => state.gifsSlice.all);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFocus = useSelector((state) => state.gifsSlice.focus);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(params);

  let gifs = gifsSliceAll;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  }

  const handleGifFocus = (e) => {
    dispatch(updateFocusGif(
      gifsSliceAll.filter((gif) => 
        gif.id === e.target.id
      )
    ));
  }

  return (
    <React.Fragment>
      {
        params['*'] === '' ?
          gifs.map((gif) => {
            return (
              <Link to={`/home/${gif.id}`} key={gif.id}>
                <GifArticle onClick={handleGifFocus}>
                  <Div gifArticleDiv={true}>
                    <img id={gif.id} src={gif.images.fixed_width_small.url} />
                  </Div>
                  <Div gifArticleDiv={true}>
                    <button>Like</button>
                  </Div>
                </GifArticle>
              </Link>
            );
          }) :
          <Routes>
            <Route path={`:${gifsSliceFocus.id}`} element={<GifContainer/>} />
          </Routes>
      }
    </React.Fragment>
  );
};


export default GifsContainer;
