import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  return (
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
      <Form className={styles.form}>
        <div className={styles.flex}>
          <label className={styles.flexLabel}>
            <Field
              type='text'
              name='firstName'
              placeholder='First name'
              className={styles.input}
            />
          </label>
          <label className={styles.flexLabel}>
            <Field
              type='text'
              name='lastName'
              placeholder='Last name'
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.flex}>
          <label className={styles.flexLabel}>
            <Field
              type='text'
              name='displayName'
              placeholder='Display name'
              className={styles.input}
            />
          </label>
          <label className={styles.flexLabel}>
            <Field
              type='email'
              name='email'
              placeholder='Email address'
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.flex}>
          <label className={styles.flexLabel}>
            <Field
              type='password'
              name='password'
              placeholder='Password'
              className={styles.input}
            />
          </label>
          <label className={styles.flexLabel}>
            <Field
              type='password'
              name='passwordConfirm'
              placeholder='Password Confirmation'
              className={styles.input}
            />
          </label>
        </div>
        <label className={styles.radioLabel}>
          <Field type='radio' name='picked' value='buyer' />
          Join As a Buyer
          <span>
            I am looking for a Name, Logo or Tagline for my business, brand or
            product.
          </span>
        </label>
        <label className={styles.radioLabel}>
          <Field type='radio' name='picked' value='seller' />
          Join As a Creative or Marketplace Seller
          <span>
            I plan to submit name ideas, Logo designs or sell names in Domain
            Marketplace.
          </span>
        </label>
        <label className={styles.checkboxLabel}>
          <Field type='checkbox' name='subscribe' value='subscribe' />
          Allow Squadhelp to send marketing/promotional offers from time to time
        </label>
        <button type='submit' className={styles.submit}>
          Create account
        </button>
        <div className={styles.terms}>
          <span>By clicking this button, you agree to our </span>
          <Link to='/terms-of-service' className={styles.termsLink}>Terms of Service</Link>.
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
