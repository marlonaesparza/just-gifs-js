import React, {useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuView } from '../state/features/viewsSlice';
import reqHandlers from '../helpers/reqHandlers';
import Div from '../components/single/Div';
import PageHeader from '../components/combination/PageHeader';
import LoginForm from '../components/combination/LoginForm';


const LogInPage = (props) => {
  const dispatch = useDispatch();
  const validAuth = useSelector((state) => state.sessionSlice.validAuth);
  const currentPath = useSelector((state) => state.pathSlice.path);
  
  useEffect(() => {
    dispatch(setMenuView());

    console.log('Login user, or direct them to signup.');
    const next = () => {return;}
    
    const nextArgs = {
      dispatch,
      page: 'Login Page'
    };

    reqHandlers.authUser(next, nextArgs);
  }, []);

  return (
    <React.Fragment>
      {
        validAuth ?
          <Navigate 
            to={
              currentPath.length !== 0 ? currentPath : '/home'
            }

            replace={true}
          /> :

          <Div loginPage={true}>
            <PageHeader/>

           <Div>
              <LoginForm />
            </Div>
         </Div>
      }
    </React.Fragment>
  );
};


export default LogInPage;
