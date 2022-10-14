import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllGifs, updateTrendingGifs } from '../state/features/gifsSlice';
import requestHelpers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import GifsContainer from '../components/combination/GifsContainer';


const HomePage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  
  useEffect(() => {
    console.log('Login user, or have them login.');
    const nextArgs = {
      offset: 0,
      dispatch,
      action1: updateAllGifs,
      action2: updateTrendingGifs
    };

    const next = requestHelpers.getTrendingGifs;

    requestHelpers.authUser(next, nextArgs);
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
          </Div>
      }
    </React.Fragment>
  );
};


export default HomePage;
