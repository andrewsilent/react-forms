import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
  const location = useLocation();
  const userActionLink = () => {
    if (location.pathname === '/signup') {
      return (
        <Link to='login' className={styles.btnLink}>
          Login
        </Link>
      );
    }
    return (
      <Link to='signup' className={styles.btnLink}>
        Signup
      </Link>
    );
  };
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to='/' className={styles.logoLink}>
          andrewsilent
        </Link>
      </div>
      <div className={styles.btnWrapper}>{userActionLink()}</div>
    </header>
  );
};

export default Header;
