import React from 'react';
import { useDispatch } from 'react-redux';
import Form from './../single/Form';
import FormLabel from '../single/FormLabel';
import FormUsernameInput from '../single/FormUsernameInput';
import FormPasswordInput from '../single/FormPasswordInput';
import FormSubmitInput from '../single/FormSubmitInput';
import formHandlers from '../../helpers/formHandlers';


const SignupForm = (props) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      username: e.target.username.value,
      password: e.target.password.value,
      confirmedPassword: e.target['confirmed-password'].value
    };

    const proceed = formHandlers.validate(values);

    if (!proceed) {
      console.log('Invalid Signup Form: Create better UX.');
      return;
    }

    console.log('Valid Signup Form: Post info to server.');
    return;
  };


  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor='username'>Username</FormLabel>
      <FormUsernameInput id='username-input' name='username' />
      
      <FormLabel htmlFor='password'>Password</FormLabel>
      <FormPasswordInput id='password-input' name='password' />

      <FormLabel htmlFor='confirm-password'>Confirm Password</FormLabel>
      <FormPasswordInput id='confirm-password-input' name='confirmed-password' />

      <FormSubmitInput id='submit-btn' />
    </Form>
  );
};


export default SignupForm;
