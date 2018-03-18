import React from 'react';
import { Route } from 'react-router-dom';

import { Home, PreIco, ico } from '../index';
import { Navbar} from '../../components'
import styles from './App.scss';

export const App = () => (
  <div className={styles.container}>
    <Navbar/>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/pre" component={PreIco} />
      <Route exact path="/ico" component={ico} />
    </main>
  </div>
);
