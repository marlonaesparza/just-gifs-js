import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GifArticle from './atoms/GifArticle';
import Div from './atoms/Div';
import GifContainer from './GifContainer';


const GifsContainer = () => {
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFocus = useSelector((state) => state.gifsSlice.focus);
  const params = useParams();

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  }

  return (
    <React.Fragment>
      {
        params['*'] === '' ?
          gifs.map((gif) => {
            return (
              <GifArticle key={gif.id}>
                <Div gifArticleDiv={true}>
                <Link to={`/home/${gif.id}`}>
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
            <Route path={`:${gifsSliceFocus.id}`} element={<GifContainer gifId={gifsSliceFocus.id}/>} />
          </Routes>
      }
    </React.Fragment>
  );
};


export default GifsContainer;
