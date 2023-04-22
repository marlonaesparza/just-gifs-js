import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setErrorMessage } from '../../state/features/formSlice';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';
import formHandlers from '../../helpers/formHandlers';
import reqHandlers from '../../helpers/reqHandlers';
import ErrorMessage from './ErrorMessage';


const LoginForm = (props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.formSlice.errorMessage);

  useEffect(() => {
    if (errorMessage.length > 0) {
      dispatch(setErrorMessage(''));
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    if (!formHandlers.validate(values)) {
      console.log('Invalid Login Form: Create better UX.');

      dispatch(setErrorMessage('You entered invalid login credentials.'));

      return setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 3000);
    };

    console.log('Valid Login Form: Post info to server.');
    const next = reqHandlers.authUser;
    const nextArgs = {
      dispatch
    };

    reqHandlers.loginUser(next, nextArgs, values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' />
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' />

      {
        errorMessage.length > 0 ? <ErrorMessage errorMessage={errorMessage}/> : <FormSubmitInput id='submit-btn' />
      }
    </Form>
  );
};


export default LoginForm;
