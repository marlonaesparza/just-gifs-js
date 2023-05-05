import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername, setPassword, setErrorMessage, setConfirmedPassword } from '../../state/features/formSlice';
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

const SignupForm = (props) => {
  const dispatch = useDispatch();

  const errorMessage = useSelector(state => state.formSlice.errorMessage);
  const username = useSelector(state => state.formSlice.username);
  const password = useSelector(state => state.formSlice.password);
  const confirmedPassword = useSelector(state => state.formSlice.confirmedPassword);

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
        dispatch(setErrorMessage('Username must be at least 6 characters long.Letters and numbers only'));
        return setTimeout(() => {
          dispatch(setErrorMessage(''));
        }, 2050);
      };

    } else if (e.target.id === 'password-input') {
      dispatch(setPassword(value));
      if (!formHandlerClass.validatePassword(value)) {
        dispatch(setErrorMessage('Password must be at least 8 characters long.Letters and numbers only'));
        return setTimeout(() => {
          dispatch(setErrorMessage(''));
        }, 2050);
      };

    } else if (e.target.id === 'confirm-password-input') {
      dispatch(setConfirmedPassword(value));
      // validatePassword method works just fine before submission
      if (!formHandlerClass.validatePassword(value)) {
        dispatch(setErrorMessage('Confirmed password must be at least 8 characters long.Letters and numbers only'));
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
      password: e.target.password.value,
      confirmedPassword: e.target['confirmed-password'].value
    };

    dispatch(clearFormSlice());

    if (!formHandlerClass.validate(values)) {
      dispatch(setErrorMessage(
        `Username must be 6 or more characters long.Password must be 8 or more characters long.Confirm password must match password. Letters and numbers only.`
      ));

      return setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 3050);
    };

    const next = reqHandlers.authUser;
    const nextArgs = {
      dispatch
    };

    reqHandlers.resgisterUser(next, nextArgs, values);
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' onChange={handleChange} value={username}/>
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' onChange={handleChange} value={password}/>

      <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
      <FormPasswordInput id='confirm-password-input' name='confirmed-password' onChange={handleChange} value={confirmedPassword}/>
      
      {
        errorMessage.length > 0 ? <ErrorMessage errorMessage={errorMessage}/> : <FormSubmitInput id='submit-btn' />
      }
    </Form>
  );
};


export default SignupForm;
