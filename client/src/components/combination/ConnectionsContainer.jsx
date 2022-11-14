import React from 'react';
import { useSelector } from 'react-redux';
import Connection from './Connection';
import Div from '../single/Div';

let i = 0;

const ConnectionsContainer = (props) => {
  i++;
  const potentialConnections = useSelector((state) => state.socialSlice.potentialConnections);
  const userConnections = useSelector((state) => state.socialSlice.userConnections);
  const findFriendsView = useSelector((state) => state.viewsSlice.findFriendsView);
  const friendsView = useSelector((state) => state.viewsSlice.friendsView);
  
  return (
    <Div connectionsCont={true}>
      {
        findFriendsView ?
          potentialConnections.map((connection, i) => {
            // Update key with connection UUID
            return <Connection key={i} connection={connection} />
          }) :
        friendsView ?
          userConnections.map((connection, i) => {
            // Update key with connection UUID
            return <Connection key={i} connection={connection} />
          }) :
          'fallback'
      }
    </Div>
  );
};


export default ConnectionsContainer;
