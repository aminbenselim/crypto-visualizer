import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.scss';

const logo = require('../styles/images/logo.svg');

const Navbar = () => (
  <nav className={styles.navbar}>
    <span className={styles.logo}>
      <Link to={'/'}>
        <img src={logo} alt="BrickBlock Logo" />
      </Link>
    </span>
    <span className={styles.navigation}>
      <Link className={styles.link} to="/pre">
        PreICO
      </Link>
      <Link className={styles.link} to="/ico">
        ICO
      </Link>
    </span>
  </nav>
);

export default Navbar;
