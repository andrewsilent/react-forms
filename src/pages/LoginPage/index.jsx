import React from 'react';
import LoginForm from '../../components/LoginForm';
import styles from './Login.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginInfo}>
        <h1 className={styles.loginTitle}>Login to your account</h1>
      </div>
      <div className={styles.form}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
