import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateStatusAfterRequest } from '../../state/features/socialSlice';
import Article from '../single/Article';
import Img from '../single/Img';
import Div from '../single/Div';
import Paragraph from '../single/Paragraph';
import Btn from '../single/Btn';
import reqHandlers from '../../helpers/reqHandlers';


const Connection = ({ connection }) => {
  const dispatch = useDispatch();
  let nextArgs;
  
  const handleRequest = (e) => {
    e.preventDefault();
    const requestStatus = (e.target.innerHTML).toLowerCase();

    if (requestStatus === 'accept') {
      // accept request -> creates connection and deletes request
      nextArgs = {
        dispatch,
        action1: updateStatusAfterRequest
      };
      reqHandlers.createConnection(connection, nextArgs);

    } else if (requestStatus === 'pending' || requestStatus === 'cancel' || requestStatus === 'deny') {
      // delete request as the requester
      nextArgs = {
        dispatch,
        action1: updateStatusAfterRequest
      };
      reqHandlers.deleteRequest(connection, nextArgs);

    } else if (requestStatus === 'add') {
      // create a one directional request
      nextArgs = {
        dispatch,
        action1: updateStatusAfterRequest
      };
      reqHandlers.createRequest(connection, nextArgs);
    }
  }

  const handleDeleteConnection = (e) => {
    e.preventDefault();
    const requestStatus = (e.target.innerHTML).toLowerCase();
    console.log('Handle Delete Connection (status):', requestStatus);
    if (requestStatus === 'delete') {
      // accept request -> creates connection and deletes request
      nextArgs = {
        dispatch,
        action1: updateStatusAfterRequest
      };
      reqHandlers.deleteConnection(connection, nextArgs);
    }
  }

  return (
      <Article connection>
        <Div>
          <Img/>
        </Div>
        <Div>
          <Paragraph>{connection.username}</Paragraph>
        </Div>
        <Div>
          {
            connection.status === 'accept' ?
            <React.Fragment>
              <Btn onClick={handleRequest}>{connection.status}</Btn>
              <Btn onClick={handleRequest}>deny</Btn>
            </React.Fragment> :

            connection.status === 'pending' ?
            <React.Fragment>
              <Btn onClick={handleRequest}>{connection.status}</Btn>
              <Btn onClick={handleRequest}>cancel</Btn>
            </React.Fragment> :

            connection.status === 'delete' ?
            <Btn onClick={handleDeleteConnection}>{connection.status}</Btn> :

            connection.status === 'add' ?
            <Btn onClick={handleRequest}>{connection.status}</Btn> :
            
            null
          }
        </Div>
      </Article>
  );
};


export default Connection;
