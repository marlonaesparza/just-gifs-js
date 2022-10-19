import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';


const LoginForm = (props) => {
  const dispatch = useDispatch();

  return (
    <Form>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' />
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' />

      <FormSubmitInput id='submit-btn' />
    </Form>
  );
};


export default LoginForm;
