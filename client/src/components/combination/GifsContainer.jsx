import React from 'react';
import { useSelector } from 'react-redux';
import Gif from './Gif';
import Div from '../single/Div';


const GifsContainer = () => {
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFeed = useSelector((state) => state.gifsSlice.feed);
  const viewsSliceFeedView = useSelector((state) => state.viewsSlice.feedView);

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  };

  return (
    <Div gifsCont={true}>
      {
        !viewsSliceFeedView ?
          gifs.map((gif) => {
            let id = gif.id;
            let url = gif.images.fixed_width_small.url;
            return (
              <Gif key={id} id={id} url={url}/>
            );
          }) :
          gifsSliceFeed.map(({ gifId, gifUrl}) => {
            let id = gifId;
            let url = gifUrl;
            return (
              <Gif key={id} id={id} url={url}/>
            );
          })
      }
    </Div>
  );
};


export default GifsContainer;
