import React from 'react';

import { connect } from 'react-redux';

import { CurrencyChart } from '../../components';
import { totalAmountsInEuroByCurrency } from '../../data/selectors';

const Home = props => (
  <React.Fragment>
    <h1>BrickBlock Funding in Numbers</h1>
    <CurrencyChart data={props.totalAmountsInEuro} />
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    totalAmountsInEuro: totalAmountsInEuroByCurrency(state),
  };
};

export default connect(mapStateToProps, undefined)(Home);
