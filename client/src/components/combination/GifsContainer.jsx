import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Gif from './Gif';
import Div from '../single/Div';


const GifsContainer = (props) => {
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
        !viewsSliceFeedView && location.pathname === '/home' ?
          gifs.map((gif) => {
            return (
              <Gif key={gif.id} gif={gif}/>
            );
          }) :
        props.favoriteGifs ?
          props.favoriteGifs.map(({ postID, postMedia: { fixed_height_small: { url } }, }) => {
            return (
              <Gif key={postID} id={postID} url={url} favoriteGifs={true}/>
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
