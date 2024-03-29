import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateTrendingGifs, updateFeedGifs } from '../state/features/gifsSlice';
import { setMenuView } from '../state/features/viewsSlice';
import { resetPagination } from '../state/features/paginationSlice';
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
    
    const next = {
      getTrendingGifs: reqHandlers.getTrendingGifs,
      getFeedGifs: reqHandlers.getFeedGifs,
    };

    // every time a user navigates to the home page
    // reset the GIF pagination to 1
    // NOTE: This also happens when using the back button from favorites page to home.
    dispatch(resetPagination());

    const nextArgs = {
      offset: 1,
      dispatch,
      updateTrendingGifs,
      updateFeedGifs,
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
