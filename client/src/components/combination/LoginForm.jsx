import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';
import formHandlers from '../../helpers/formHandlers';
import reqHandlers from '../../helpers/reqHandlers';


const LoginForm = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    if (!formHandlers.validate(values)) {
      console.log('Invalid Login Form: Create better UX.');
      return;
    }

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

      <FormSubmitInput id='submit-btn' />
    </Form>
  );
};


export default LoginForm;
