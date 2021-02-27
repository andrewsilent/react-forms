import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <h4>Login form</h4>
      <Formik
        initialValues={{
          email: '',
          password: '',
          checked: 'false',
        }}
      >
        <Form>
          <label>
            <Field type='email' name='email' placeholder='Email address' />
          </label>
          <label>
            <Field type='password' name='password' placeholder='Password' />
          </label>
          <label>
            <Field type='checkbox' name='checked' value='remember' />
            Remember me
          </label>
          <Link to='/forgot'>Forgot password</Link>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
