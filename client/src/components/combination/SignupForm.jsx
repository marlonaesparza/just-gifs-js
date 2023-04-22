import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage } from '../../state/features/formSlice';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';
import formHandlers from '../../helpers/formHandlers';
import reqHandlers from '../../helpers/reqHandlers';
import ErrorMessage from './ErrorMessage';


const SignupForm = (props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.formSlice.errorMessage);
  const errMessStatements = errorMessage.split('. ');


  useEffect(() => {
    if (errorMessage.length > 0) {
      dispatch(setErrorMessage(''));
    };
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      username: e.target.username.value,
      password: e.target.password.value,
      confirmedPassword: e.target['confirmed-password'].value
    };

    if (!formHandlers.validate(values)) {
      console.log('Invalid Signup Form: Create better UX.');
      
      dispatch(setErrorMessage(
        `Username must be 6 or more characters long. Password must be 8 or more characters long. Confirm password must match password.`
      ));

      return setTimeout(() => {
        dispatch(setErrorMessage(''));
      }, 3000);
    };

    console.log('Valid Signup Form: Post info to server.');
    const next = reqHandlers.authUser;
    const nextArgs = {
      dispatch
    };

    reqHandlers.resgisterUser(next, nextArgs, values);
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' />
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' />

      <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
      <FormPasswordInput id='confirm-password-input' name='confirmed-password' />
      
      {
        errorMessage.length > 0 ? <ErrorMessage errorMessage={errorMessage} errMessStatements={errMessStatements}/> : <FormSubmitInput id='submit-btn' />
      }
    </Form>
  );
};


export default SignupForm;
