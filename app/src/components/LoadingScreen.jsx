import React from 'react';
import styles from './LoadingScreen.scss';

const loader = require('../styles/images/loader.svg');

export default () => (
  <div className={styles.container}>
    <div className={styles.loading}>
      <img src={loader} alt="loading screen" />
    </div>
  </div>
);
