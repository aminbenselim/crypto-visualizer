import React from 'react';
import { Route, Link } from 'react-router-dom';

import { Home, PreICO, ICO } from '../index';

export const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/pre">PreICO</Link>
      <Link to="/ICO">ICO</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/pre" component={PreICO} />
      <Route exact path="/ICO" component={ICO} />
    </main>
  </div>
);
