import React, { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import requestHelpers from '../helpers/reqHandlers';
import Header1 from '../components/single/Header1';


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
        <React.Fragment>
          <Header1>Landing Page</Header1>
          <nav>
            <ul>
              <Link to='/home'>Home</Link>
            </ul>
          </nav>
        </React.Fragment> 
      }
      </React.Fragment> 
  );
};


export default LandingPage;
