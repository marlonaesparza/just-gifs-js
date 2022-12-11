import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTrendingGifs } from '../state/features/gifsSlice';
import { setMenuView } from '../state/features/viewsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';
import Pagination from '../components/combination/Pagination';


const HomePage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector(state => state.sessionSlice.validAuth);
  const menuView = useSelector(state => state.viewsSlice.menuView);
  
  useEffect(() => {
    if (menuView) {
      dispatch(setMenuView());
    };
    
    const next = reqHandlers.getTrendingGifs;

    const nextArgs = {
      offset: 1,
      dispatch,
      updateTrendingGifs,
      page: 'Home Page'
    };

    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        !validAuth ?
          <Navigate to="/login" replace={true} /> :

          <Div id='home-page-container' homePage={ true }>
            <PageHeader/>

            <Div id='home-content-container' homeContentCont={true}>
              <ContentNav/>
              <GifsContainer/>
            </Div>

            <Div id='home-pagination-container'>
              <Pagination/>
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default HomePage;
