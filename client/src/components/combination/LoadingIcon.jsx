import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Div from '../single/Div';
import Paragraph from '../single/Paragraph';


const LoadingIcon = () => {
  const params = useParams();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Div loadingIconContainer>
        <Paragraph LoadingIcon>JUST GIFS</Paragraph>
      </Div>
    </React.Fragment>
  );
};


export default LoadingIcon;