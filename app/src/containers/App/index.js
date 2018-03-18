import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { lookupData } from '../../data/reducer';
import { isFetching } from '../../data/selectors';

import { Home, PreIco, ico } from '../index';
import { Navbar, LoadingScreen } from '../../components';
import styles from './App.scss';

class App extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { isLoading } = this.props;
    return (
      <div className={styles.container}>
        <Navbar />
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/pre" component={PreIco} />
            <Route exact path="/ico" component={ico} />
          </main>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: isFetching(state),
});

const mapDispatchToProps = {
  getData: lookupData.request,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
