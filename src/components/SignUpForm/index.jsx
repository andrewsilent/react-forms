import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  return (
    <>
      <h4>Signup form</h4>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          displayName: '',
          email: '',
          password: '',
          passwordConfirm: '',
          picked: '',
          subscribe: 'false',
        }}
      >
        <Form>
          <label>
            <Field type='text' name='firstName' placeholder='First name' />
          </label>
          <label>
            <Field type='text' name='lastName' placeholder='Last name' />
          </label>
          <label>
            <Field type='text' name='displayName' placeholder='Display name' />
          </label>
          <label>
            <Field type='email' name='email' placeholder='Email address' />
          </label>
          <label>
            <Field type='password' name='password' placeholder='Password' />
          </label>
          <label>
            <Field
              type='password'
              name='passwordConfirm'
              placeholder='Password Confirmation'
            />
          </label>
          <label>
            <Field type='radio' name='picked' value='buyer' />
            Join As a Buyer
            <span>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </span>
          </label>
          <label>
            <Field type='radio' name='picked' value='seller' />
            Join As a Creative or Marketplace Seller
            <span>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </span>
          </label>
          <label>
            <Field type='checkbox' name='subscribe' value='subscribe' />
            Allow Squadhelp to send marketing/promotional offers from time to
            time
          </label>
          <div>
            By clicking this button, you agree to our
            <Link to='/terms-of-service'>Terms of Service</Link>.
          </div>
          <button type='submit'>Create account</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignUpForm;
