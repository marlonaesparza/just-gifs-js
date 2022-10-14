import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import requestHelpers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';


const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  
  useEffect(() => {
    console.log('Login user, or have them login.');
    requestHelpers.authUser();
  }, []);

  return (
    <React.Fragment>
      {
        validAuth ?
          <Navigate to="/home" replace={true} /> :

          <Div>
            <PageHeader/>

           <Div>
              {
                // Insert login form
              }
             Signup Form
            </Div>
         </Div>
      }
    </React.Fragment>
  );
};


export default SignUpPage;
