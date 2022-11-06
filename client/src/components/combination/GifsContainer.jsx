import React from 'react';
import { useSelector } from 'react-redux';
import Gif from './Gif';
import Div from '../single/Div';

let i = 0;

const GifsContainer = (props) => {
  i++;
  const gifsSliceTrending = useSelector((state) => state.gifsSlice.trending);
  const gifsSliceSearched = useSelector((state) => state.gifsSlice.searched);
  const gifsSliceFeed = useSelector((state) => state.gifsSlice.feed);
  const viewsSliceFeedView = useSelector((state) => state.viewsSlice.feedView);
  const favoriteGifs = useSelector((state) => state.gifsSlice.favorites);

  let gifs = gifsSliceTrending;

  if (gifsSliceSearched.length !== 0) {
    gifs = gifsSliceSearched;
  };

  return (
    <Div gifsCont={true}>
      {
        !viewsSliceFeedView && location.pathname === '/home' ?
          gifs.map((gif) => {
            return (
              <Gif key={gif.id} gif={gif} homeGif={true}/>
            );
          }) :
        location.pathname === '/favorites' ?
          favoriteGifs.map((gif) => {
            return (
              <Gif key={gif.postID} gif={gif} favoriteGif={true}/>
            );
          }) :
          gifsSliceFeed.map(({ gifId, gifUrl}) => {
            let id = gifId;
            let url = gifUrl;
            return (
              <Gif key={id} id={id} url={url} sliceFeed={true}/>
            );
          })
      }
    </Div>
  );
};


export default GifsContainer;
