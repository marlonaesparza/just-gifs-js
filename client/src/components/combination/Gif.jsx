import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeedGifs } from '../../state/features/gifsSlice';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Btn from '../single/Btn';


const Gif = ({ id, url }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split('/')[1];
  const focusedGif = useSelector((state) => state.gifsSlice.focus);

  const handleFavoriteGif = (e) => {
    e.preventDefault();
    const gifId = e.target.dataset.gifId;
    const gifUrl = e.target.dataset.gifUrl;
    const favoritedGif = {gifId, gifUrl}
    dispatch(updateFeedGifs(favoritedGif));
  };

  return (
    <React.Fragment>
      {
        path === 'focus' && focusedGif.id ?
          <Article key={id}>
            <Div>
              <Img id={focusedGif.id} src={focusedGif.images.downsized_large.url} />
            </Div>
            <Div>
              <Btn data-gif-id={id} data-gif-url={url} onClick={handleFavoriteGif}>
                Like
              </Btn>
            </Div>
          </Article> :  

          <Article key={id}>
            <Div>
              <Link to={`/focus/${id}`}>
                <Img id={id} src={url} />
              </Link>
            </Div>
            <Div>
              <Btn data-gif-id={id} data-gif-url={url} onClick={handleFavoriteGif}>
                Like
              </Btn>
            </Div>
          </Article>
      }
    </React.Fragment>
  );
};


export default Gif;
