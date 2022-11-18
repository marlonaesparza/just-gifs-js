import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePotentialConnections, updateUserConnections } from '../state/features/socialSlice';
import { setCurrentPath } from '../state/features/pathSlice';
import { setMenuView } from '../state/features/viewsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import ContentNav from '../components/combination/ContentNav';
import ConnectionsContainer from '../components/combination/ConnectionsContainer';


const FriendsPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  
  useEffect(() => {
    dispatch(setMenuView());

    const next = reqHandlers.getAllPotentialConnections;

    const nextArgs = {
      offset: 0,
      dispatch,
      action1: updatePotentialConnections,
      page: 'Friends Page'
    };

    dispatch(setCurrentPath('/friends'));

    console.log('Access friends page, or have them login.');

    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        !validAuth ?
          <Navigate to="/login" replace={true} /> :

          <Div id='friends-page-container' friendsPage={ true }>
            <PageHeader/>

            <Div id='friends-content-container' friendsContentCont={true}>
              <ContentNav/>
              <ConnectionsContainer />
            </Div>
          </Div>
      }
    </React.Fragment>
  );
};


export default FriendsPage;
