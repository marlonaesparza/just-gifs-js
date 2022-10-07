import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateFeedGifs } from '../../state/features/gifsSlice';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';


const GifsContainer = (props) => {
  const dispatch = useDispatch();
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFeed = useSelector((state) => state.gifsSlice.feed);
  const viewsSliceFeedView = useSelector((state) => state.viewsSlice.feedView);

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  };

  const handleFavoriteGif = (e) => {
    e.preventDefault();
    const gifId = e.target.dataset.gifId;
    const gifUrl = e.target.dataset.gifUrl;
    const favoritedGif = {gifId, gifUrl}
    dispatch(updateFeedGifs(favoritedGif));
  };

  return (
    <Div gifsCont={true}>
      {
        !viewsSliceFeedView ?
          gifs.map((gif) => {
            return (
              <Article key={gif.id}>
                <Div>
                  <Link>
                    <Img id={gif.id} src={gif.images.fixed_width_small.url} />
                  </Link>
                </Div>
                <Div>
                  <Btn data-gif-id={gif.id} data-gif-url={gif.images.fixed_width_small.url} onClick={handleFavoriteGif}>Like</Btn>
                </Div>
              </Article>
            );
          }) :
          gifsSliceFeed.map(({ gifId, gifUrl}) => {
            return (
              <Article key={gifId}>
                <Div>
                  <Link>
                    <Img id={gifId} src={gifUrl} />
                  </Link>
                </Div>
                <Div>
                  <Btn data-gif-id={gifId} data-gif-url={gifUrl} onClick={handleFavoriteGif}>Like</Btn>
                </Div>
              </Article>
            );
          })
      }
    </Div>
  );
};


export default GifsContainer;
