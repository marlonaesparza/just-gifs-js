import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';


const SignUpPage = (props) => {
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
