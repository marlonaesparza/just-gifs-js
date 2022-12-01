import React from 'react';
import { useSelector } from 'react-redux';
import Connection from './Connection';
import Div from '../single/Div';


const ConnectionsContainer = (props) => {
  const userConnections = useSelector((state) => state.socialSlice.userConnections);
  const potentialConnections = useSelector((state) => state.socialSlice.potentialConnections);
  const searchedConnections = useSelector((state) => state.socialSlice.searchedConnections);
  const friendsView = useSelector((state) => state.viewsSlice.friendsView);
  const findFriendsView = useSelector((state) => state.viewsSlice.findFriendsView);

  let connectionsToDisplay =
    friendsView ? userConnections :
    findFriendsView ? potentialConnections : null;
  
  if (searchedConnections.length !== 0) {
    connectionsToDisplay = searchedConnections;
  };
  
  return (
    <Div connectionsCont={true}>
      {
        connectionsToDisplay.map((connection, i) => {
          return <Connection key={i} connection={connection}/>
        })
      }
    </Div>
  );
};


export default ConnectionsContainer;
