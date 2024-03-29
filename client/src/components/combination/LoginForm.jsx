import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setUsername, setPassword, setErrorMessage } from '../../state/features/formSlice';
import { clearFormSlice } from '../../state/features/formSlice';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';
import { formHandlers, formHandler } from '../../helpers/formHandlers';
import reqHandlers from '../../helpers/reqHandlers';
import ErrorMessage from './ErrorMessage';

const formHandlerClass = new formHandler;

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.formSlice.errorMessage);
  const username = useSelector(state => state.formSlice.username);
  const password = useSelector(state => state.formSlice.password);
  
  useEffect(() => {
    if (errorMessage.length > 0) {
      dispatch(setErrorMessage(''));
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    if (e.target.id === 'username-input') {
      dispatch(setUsername(value));
      if (!formHandlerClass.validateUsername(value)) {
        dispatch(setErrorMessage('Username must be at least 6 characters long.No special characters'));
        return setTimeout(() => {
          dispatch(setErrorMessage(''));
        }, 2050);
      };

    } else if (e.target.id === 'password-input') {
      dispatch(setPassword(value));
      if (!formHandlerClass.validatePassword(value)) {
        dispatch(setErrorMessage('Password must be at least 8 characters long.No special characters'));
        return setTimeout(() => {
          dispatch(setErrorMessage(''));
        }, 2050);
      };
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    dispatch(clearFormSlice());

    if (!formHandlerClass.validate(values)) {
      dispatch(setErrorMessage('You entered invalid login credentials'));
      return setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 3050);
    };

    const next = reqHandlers.authUser;
    const nextArgs = {
      dispatch
    };

    reqHandlers.loginUser(next, nextArgs, values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' onChange={handleChange} value={username}/>
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' onChange={handleChange} value={password}/>

      {
        errorMessage.length > 0 ? <ErrorMessage errorMessage={errorMessage}/> : <FormSubmitInput id='submit-btn' />
      }
    </Form>
  );
};


export default LoginForm;
