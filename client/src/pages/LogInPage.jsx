import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import requestHelpers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';


const LogInPage = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('Login user, or have them login.');
    requestHelpers.authUser();
  }, []);

  return (
    <Div>
      <PageHeader/>

      <Div>
        {
          // Insert login form
        }
        Login Form
      </Div>
    </Div>
  );
};


export default LogInPage;
