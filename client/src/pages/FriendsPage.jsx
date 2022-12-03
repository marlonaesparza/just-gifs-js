import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {   setConnectionsAndPotentialConnections } from '../state/features/socialSlice';
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
  const menuView = useSelector(state => state.viewsSlice.menuView);
  
  useEffect(() => {
    if (menuView) {
      dispatch(setMenuView());
    };

    const next = reqHandlers.getAllPotentialConnections;

    const nextArgs = {
      offset: 0,
      dispatch,
      action1:   setConnectionsAndPotentialConnections,
      page: 'Friends Page'
    };

    dispatch(setCurrentPath('/friends'));

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
