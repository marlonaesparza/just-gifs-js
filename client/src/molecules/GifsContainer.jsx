import React from 'react';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFocusGif } from '../state/features/gifsSlice';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';
import GifContainer from './GifContainer';


const GifsContainer = () => {
  const gifsSliceAll = useSelector((state) => state.gifsSlice.all);
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFocus = useSelector((state) => state.gifsSlice.focus);
  const dispatch = useDispatch();
  const params = useParams();

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  }

  const handleGifFocus = (e) => {
    dispatch(updateFocusGif(
      gifsSliceAll.filter((gif) =>{
        return gif.id === e.target.id
      })
    ));
  }

  return (
    <React.Fragment>
      {
        params['*'] === '' ?
          gifs.map((gif) => {
            return (
              <GifArticle key={gif.id} onClick={handleGifFocus}>
                <Div gifArticleDiv={true}>
                <Link to={`/home/${gif.id}`} key={gif.id}>
                  <img id={gif.id} src={gif.images.fixed_width_small.url} />
                </Link>
                </Div>
                <Div gifArticleDiv={true}>
                  <button>Like</button>
                </Div>
              </GifArticle>
            );
          }) :
          <Routes>
            <Route path={`:${gifsSliceFocus.id}`} element={<GifContainer gifId={() => {
              
            }} />} />
          </Routes>
      }
    </React.Fragment>
  );
};


export default GifsContainer;
