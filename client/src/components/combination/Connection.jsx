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
  
  const handleCreateRequest = (e) => {
    e.preventDefault();
    const nextArgs = {
      dispatch,
      action1: updateStatusAfterRequest
    };
    reqHandlers.createRequest(connection, nextArgs);
  }

  const handleDeleteConnection = () => {
    e.preventDefault();
    console.log('Connection.jsx Line 22:', '...');
  }

  return (
    <React.Fragment>
      <Article>
        <Div>
          <Img/>
        </Div>
        <Div>
          <Paragraph>{connection.username}</Paragraph>
        </Div>
        <Div>
          <Btn onClick={handleCreateRequest}>{connection.status}</Btn>
        </Div>
      </Article>
    </React.Fragment>
  );
};


export default Connection;
