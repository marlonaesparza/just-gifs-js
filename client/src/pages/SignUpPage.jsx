import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuView } from '../state/features/viewsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import SignupForm from '../components/combination/SignupForm';


const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  
  useEffect(() => {
    dispatch(setMenuView());

    console.log('Login user, or direct them to signup.');
    const next = () => {return;}
    const nextArgs = {
      dispatch,
      page: 'Signup Page'
    };

    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        validAuth ?
          <Navigate to="/home" replace={true} /> :

          <Div signupPage={true}>
            <PageHeader/>

           <Div>
             <SignupForm />
            </Div>
         </Div>
      }
    </React.Fragment>
  );
};


export default SignUpPage;
