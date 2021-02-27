import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import styles from './SignUp.module.scss';

const SignUpPage = () => {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupInfo}>
        <h1 className={styles.signupTitle}>Create an account</h1>
        <h5 className={styles.signupSubtitle}>
          We always keep your name and email address private.
        </h5>
      </div>
      <div className={styles.signupForm}>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
