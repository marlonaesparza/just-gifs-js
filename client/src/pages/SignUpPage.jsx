import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import requestHelpers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';


const SignUpPage = (props) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log('Login user, or have them signup.');
  }, []);

  return (
    <Div>
      <PageHeader/>

      <Div>
        {
          // Insert signup form
        }
        Signup Form
      </Div>
    </Div>
  );
};


export default SignUpPage;
