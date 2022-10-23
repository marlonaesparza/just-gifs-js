import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedGifs } from '../../state/features/gifsSlice';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';
import reqHandlers from '../../helpers/reqHandlers';


const Gif = ({ gif }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const focusedGif = useSelector((state) => state.gifsSlice.focus);

  const handleFavoriteGif = (e) => {
    e.preventDefault();
    const gifToFavorite = path === 'focus' ?
      focusedGif :
      gif
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

  return (
    <React.Fragment>
      {
        path === 'focus' && focusedGif.id ?
          <Article>
            <Div>
              <Img 
                id={focusedGif.id}
                src={focusedGif.images.downsized_large.url}
              />
            </Div>
            <Div>
              <Btn
                data-gif={(JSON.stringify(focusedGif))}
                onClick={handleFavoriteGif}
              >
                Like
              </Btn>
            </Div>
          </Article> :  
        gif ?
          <Article>
            <Div>
              <Link to={`/focus/${gif.id}`}>
                <Img
                  id={gif.id}
                  src={gif.images.fixed_height_small.url}
                />
              </Link>
            </Div>
            <Div>
              <Btn
                data-gif={gif}
                onClick={handleFavoriteGif}
              >
                Like
              </Btn>
            </Div>
          </Article> :

          null
      }
    </React.Fragment>
  );
};


export default Gif;
