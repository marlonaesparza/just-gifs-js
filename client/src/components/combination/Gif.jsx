import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';
import Span from '../single/Span';
import reqHandlers from '../../helpers/reqHandlers';


const Gif = (props) => {
  const dispatch = useDispatch();
  const path = location.pathname.split('/')[1];
  const focusedGif = useSelector((state) => state.gifsSlice.focus);

  const handleFavoriteGif = (e) => {
    e.preventDefault();
    
    const gifToFavorite = path === 'focus' ?
      focusedGif :
      props.gif
    ;

    const favoritedGif = {
      postID: gifToFavorite.id,
      postRating: gifToFavorite.rating,
      postMedia: {
        downsized_large: gifToFavorite.images.downsized_large,
        fixed_height_small: gifToFavorite.images.fixed_height_small
      }
    };

    reqHandlers.postFavoriteGif(favoritedGif);
  };

  const createGifElement = (id, url, gif, callback) => {
    let username = gif.username || 'Uknown';

    if (props.favoriteGif) {
      username = '';
    };

    return (
      <Article gif={true}>
        <Div>
        <Link to={`/focus/${id}`}>
          <Img id={id} src={url}/>
        </Link>
        </Div>
        <Div>
          <Span>{username}</Span>
          <Btn
            data-gif={(JSON.stringify(gif))}
            onClick={callback}
          >
            Like
          </Btn>
        </Div>
      </Article>
    );
  };

  return (
    <React.Fragment>
      {
        path === 'home' && props.homeGif ?
          createGifElement(
            props.gif.id,
            props.gif.images.fixed_height_small.url,
            props.gif,
            handleFavoriteGif
          ) :
        path === 'focus' && focusedGif.id ?
          createGifElement(
            focusedGif.id,
            focusedGif.images.downsized_large.url,
            focusedGif,
            handleFavoriteGif
          ) :  
        path === 'favorites' && props.favoriteGif || path === 'home' && props.feedGif ?
          createGifElement(
            props.gif.postID,
            props.gif.postMedia.fixed_height_small.url,
            props.gif,
            handleFavoriteGif
          ) :

        null
      }
    </React.Fragment>
  );
};


export default Gif;
