import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllGifsAfterLikeOrDelete } from '../../state/features/gifsSlice';
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

    const gifToFavoriteId =  gifToFavorite.postID ?
      gifToFavorite.postID :
      gifToFavorite.id;

    const gifToFavoriteMedia = gifToFavorite.images || gifToFavorite.postMedia;

    const favoritedGif = {
      postID: gifToFavoriteId,
      postRating: gifToFavorite.rating,
      postMedia: {
        downsized_large: gifToFavoriteMedia.downsized_large,
        fixed_height_small: gifToFavoriteMedia.fixed_height_small
      }
    };

    const nextArgs = {
      dispatch,
      updateAllGifsAfterLikeOrDelete
    };

    reqHandlers.postFavoriteGif(favoritedGif, nextArgs);
  };

  const handleDeleteFavoriteGif = (e) => {
    e.preventDefault();
    
    const gifToDelete = path === 'focus' ?
      focusedGif :
      props.gif
    ;

    const gifToDeleteId = gifToDelete.liked ?
      gifToDelete.postID :
      gifToDelete.id;

    const gifToDeleteMedia = gifToDelete.images || gifToDelete.postMedia;

    const favoritedGif = {
      postID: gifToDeleteId,
      postRating: gifToDelete.rating,
      postMedia: {
        downsized_large: gifToDeleteMedia.downsized_large,
        fixed_height_small: gifToDeleteMedia.fixed_height_small
      }
    };

    const nextArgs = {
      dispatch,
      updateAllGifsAfterLikeOrDelete
    };

    reqHandlers.deleteFavoriteGif(favoritedGif, nextArgs);
  };

  const createGifElement = (gif, handleFavoriteGif, handleDeleteFavoriteGif, focusGif) => {
    let username = gif.username || 'Uknown';
    let liked = gif.liked ? 'unlike' : 'like';
    let callback = gif.liked ? handleDeleteFavoriteGif : handleFavoriteGif;

    let gifId = gif.postID ?
      gif.postID :
      gif.id;

    let mediaURL = gif.images && path === 'focus' ?
        gif.images.downsized_large.url :
      gif.postMedia && path === 'focus' ?
        gif.postMedia.downsized_large.url :
      gif.images && path !== 'focus' ?  
        gif.images.fixed_height_small.url :
        gif.postMedia.fixed_height_small.url;

    if (props.favoriteGif) {
      username = '';
    };

    return (
      <Article gif={true} focusGif={focusGif}>
        <Div imgCont={true}>
          <NavLink
            to={`/focus/${gifId}`}
            style={isActive => ({
              display: 'block',
              height: '100%',
              textAlign: 'center',
            })}
          >
            <Img id={gifId} src={mediaURL}/>
          </NavLink>
        </Div>
        <Div gifDetailsAndActions={true}>
          <Span gifDetailsAndActions={true}>User: {username}</Span>
          <Btn
            data-gif={(JSON.stringify(gif))}
            onClick={callback}
            gifDetailsAndActions={true}
          >
            {liked}
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
            props.gif,
            handleFavoriteGif,
            handleDeleteFavoriteGif
          ) :
        path === 'focus' && focusedGif.id ?
          createGifElement(
            focusedGif,
            handleFavoriteGif,
            handleDeleteFavoriteGif,
            true
          ) :  
        path === 'favorites' && props.favoriteGif || path === 'home' && props.feedGif ?
          createGifElement(
            props.gif,
            handleFavoriteGif,
            handleDeleteFavoriteGif
          ) :

        null
      }
    </React.Fragment>
  );
};


export default Gif;
