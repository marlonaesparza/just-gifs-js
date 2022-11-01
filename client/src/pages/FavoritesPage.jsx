import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteGifs } from '../state/features/gifsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';


const FavoritesPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  const favoriteGifs = useSelector((state) => state.gifsSlice.favoriteGifs);
  
  useEffect(() => {
    console.log('Valid Auth Favorites Page:', validAuth);
    const next = reqHandlers.getFavoriteGifs;

    const nextArgs = {
      offset: 0,
      dispatch,
      action1: updateFavoriteGifs,
      page: 'Favorites Page'
    };

    console.log('Access favorites page, or have them login.');

    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        !validAuth ?
          <Navigate to="/login" replace={true} /> :

          <Div id='favorites-page-container' favoritesPage={ true }>
            <PageHeader/>

            <Div id='favorites-content-container' favoritesContentCont={true}>
              <ContentNav/>
              <GifsContainer favoriteGifs={favoriteGifs}/>
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default FavoritesPage;
