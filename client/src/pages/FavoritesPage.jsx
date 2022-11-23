import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFavoriteGifs } from '../state/features/gifsSlice';
import { setCurrentPath } from '../state/features/pathSlice';
import { setMenuView } from '../state/features/viewsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';


const FavoritesPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  const menuView = useSelector(state => state.viewsSlice.menuView);
  
  useEffect(() => {
    if (menuView) {
      dispatch(setMenuView());
    };

    const next = reqHandlers.getFavoriteGifs;

    const nextArgs = {
      offset: 0,
      dispatch,
      updateFavoriteGifs,
      page: 'Favorites Page'
    };

    dispatch(setCurrentPath('/favorites'));

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
              <GifsContainer />
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default FavoritesPage;
