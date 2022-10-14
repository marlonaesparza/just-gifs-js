import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import requestHelpers from '../helpers/reqHandlers';


const LandingPage = (props) => {
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);

  useEffect(() => {
    console.log('Login user, or have them login.');
    requestHelpers.authUser();
  }, []);

  return (
    <React.Fragment>
    {
      !validAuth ?
        <Navigate to="/login" replace={true} /> :
        <Navigate to="/home" replace={true} /> 
      }
      </React.Fragment> 
  );
};


export default LandingPage;
