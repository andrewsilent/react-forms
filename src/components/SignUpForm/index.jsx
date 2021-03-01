import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import { SIGNUP_SHEMA } from '../../utils/validation/schemas';
import styles from './SignUpForm.module.scss';
import cx from 'classnames';

const initialValues = {
  firstName: '',
  lastName: '',
  displayName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  picked: '',
  checkbox: '',
};

const SignUpForm = props => {
  const onSubmit = (values, formikBag) => {
    console.log('submit accepted');
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGNUP_SHEMA}
      onSubmit={onSubmit}
    >
      {formProps => {
        return (
          <Form className={styles.form}>
            <div className={styles.flex}>
              <label className={cx(styles.flexLabel, styles.label)}>
                <Field
                  type='text'
                  name='firstName'
                  placeholder='First name'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.firstName &&
                      formProps.touched.firstName,
                    [styles.invalid]:
                      formProps.errors.firstName && formProps.touched.firstName,
                  })}
                />
                <ErrorMessage
                  name='firstName'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
              <label className={cx(styles.flexLabel, styles.label)}>
                <Field
                  type='text'
                  name='lastName'
                  placeholder='Last name'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.lastName && formProps.touched.lastName,
                    [styles.invalid]:
                      formProps.errors.lastName && formProps.touched.lastName,
                  })}
                />
                <ErrorMessage
                  name='lastName'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
            </div>
            <div className={styles.flex}>
              <label className={cx(styles.flexLabel, styles.label)}>
                <Field
                  type='text'
                  name='displayName'
                  placeholder='Display name'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.displayName &&
                      formProps.touched.displayName,
                    [styles.invalid]:
                      formProps.errors.displayName &&
                      formProps.touched.displayName,
                  })}
                />
                <ErrorMessage
                  name='displayName'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
              <label className={cx(styles.flexLabel, styles.label)}>
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
              <label className={cx(styles.flexLabel, styles.label)}>
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
              <label className={cx(styles.flexLabel, styles.label)}>
                <Field
                  type='password'
                  name='passwordConfirm'
                  placeholder='Password Confirmation'
                  className={cx(styles.input, {
                    [styles.valid]:
                      !formProps.errors.passwordConfirm &&
                      formProps.touched.passwordConfirm,
                    [styles.invalid]:
                      formProps.errors.passwordConfirm &&
                      formProps.touched.passwordConfirm,
                  })}
                />
                <ErrorMessage
                  name='passwordConfirm'
                  component='div'
                  className={styles.errorMessage}
                />
              </label>
            </div>
            <label
              className={cx(styles.radioLabel, {
                [styles.invalid]:
                  formProps.errors.picked && formProps.touched.picked,
              })}
            >
              <Field type='radio' name='picked' value='buyer' />
              Join As a Buyer
              <span>
                I am looking for a Name, Logo or Tagline for my business, brand
                or product.
              </span>
            </label>
            <label
              className={cx(styles.radioLabel, {
                [styles.invalid]:
                  formProps.errors.picked && formProps.touched.picked,
              })}
            >
              <Field type='radio' name='picked' value='seller' />
              Join As a Creative or Marketplace Seller
              <span>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </span>
            </label>
            <label className={styles.checkboxLabel}>
              <Field type='checkbox' name='checkbox' />
              Allow Squadhelp to send marketing/promotional offers from time to
              time
            </label>
            <button type='submit' className={styles.submit}>
              Create account
            </button>
            <div className={styles.terms}>
              <span>By clicking this button, you agree to our </span>
              <Link to='/terms-of-service' className={styles.termsLink}>
                Terms of Service
              </Link>
              .
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
