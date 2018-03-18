import React from 'react';
import { connect } from 'react-redux';

import { CurrencyTable } from '../../components';
import { preIcoAmountsInEuro } from '../../data/selectors';

const PreICO = props => {
  console.log(props);
  return (
    <React.Fragment>
      <h1> PreICO</h1>
      <CurrencyTable data={props.preIcoAmountsInEuro} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    preIcoAmountsInEuro: preIcoAmountsInEuro(state),
  };
};

export default connect(mapStateToProps, undefined)(PreICO);
