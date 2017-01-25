import React from 'react';
import { Field, reduxForm } from 'redux-form'

const LoginForm = ({ handlePressLogin }) => {
  return (
    <div>
      <form onSubmit={handlePressLogin}>
        <div>
          <label htmlFor='username'>Username</label>
          <Field name='username' component='input' type='text' />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <Field name='password' component='input' type='text' />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <p>Hint: any password except blank is valid password:)</p>
    </div>
  );
};

// Decorate the form component
export default reduxForm({
  form: "login"
})(LoginForm)