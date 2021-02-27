import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link to='/' className={styles.logoLink}>
          andrewsilent
        </Link>
      </div>
      <div className={styles.btnWrapper}>
        <Link to='signup' className={styles.btnLink}>
          Signup
        </Link>
      </div>
    </header>
  );
};

export default Header;
