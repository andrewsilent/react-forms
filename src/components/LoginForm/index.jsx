import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { LOGIN_SHEMA } from '../../utils/validation/schemas';
import styles from './LoginForm.module.scss';
import cx from 'classnames';

const initialValues = {
  email: '',
  password: '',
  checkbox: '',
};

const LoginForm = props => {
  const onSubmit = (values, formikBag) => {
    console.log('submit accepted');
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LOGIN_SHEMA}
      onSubmit={onSubmit}
    >
      {formProps => {
        return (
          <Form className={styles.form}>
            <div className={styles.flex}>
              <label className={styles.label}>
                <Field
                  type='email'
                  name='email'
                  placeholder='Email address'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.email && formProps.touched.email,
                    [styles.invalid]:
                      formProps.errors.email && formProps.touched.email,
                  })}
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
            </div>
            <div className={styles.flex}>
              <label className={styles.label}>
                <Field
                  type='password'
                  name='password'
                  placeholder='Password'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.password && formProps.touched.password,
                    [styles.invalid]:
                      formProps.errors.password && formProps.touched.password,
                  })}
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
            </div>
            <div className={styles.flex}>
              <label className={cx(styles.checkboxLabel, styles.label)}>
                <Field type='checkbox' name='checkbox' />
                Remember me
                <ErrorMessage
                  name='checkbox'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
              <Link to='/forgot-password' className={styles.link}>
                Forgot password
              </Link>
            </div>
            <button type='submit' className={styles.submit}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
