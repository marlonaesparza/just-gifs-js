import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import reqHandlers from '../helpers/reqHandlers';


const LandingPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);

  useEffect(() => {
    console.log('Login user, or direct them to signup.');
    const next = () => {return;}
    const nextArgs = {
      dispatch
    };

    reqHandlers.authUser(next, nextArgs);
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
