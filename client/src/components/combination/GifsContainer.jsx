import React from 'react';
import { useSelector } from 'react-redux';
import Gif from './Gif';
import Div from '../single/Div';


const GifsContainer = (props) => {
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
          gifs.map((gif, i) => {
            return (
              <Gif key={i} gif={gif} homeGif={true}/>
            );
          }) :
        viewsSliceFeedView && location.pathname === '/home' ?
          gifsSliceFeed.map((gif, i) => {
            return (
              <Gif key={i} gif={gif} feedGif={true}/>
            );
          }) :
        location.pathname === '/favorites' ?
          favoriteGifs.map((gif, i) => {
            return (
              <Gif key={i} gif={gif} favoriteGif={true}/>
            );
          }) :
        null
      }
    </Div>
  );
};


export default GifsContainer;
