import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          checked: 'false',
        }}
      >
        <Form className={styles.form}>
          <label>
            <Field
              type='email'
              name='email'
              placeholder='Email address'
              className={styles.input}
            />
          </label>
          <label>
            <Field
              type='password'
              name='password'
              placeholder='Password'
              className={styles.input}
            />
          </label>
          <div className={styles.flex}>
            <label className={styles.checkboxLabel}>
              <Field type='checkbox' name='checked' value='remember' />
              Remember me
            </label>
            <Link to='/forgot-password' className={styles.link}>Forgot password</Link>
          </div>
          <button type='submit' className={styles.submit}>
            Login
          </button>
        </Form>
      </Formik>
  );
};

export default LoginForm;
