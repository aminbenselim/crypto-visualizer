import React from 'react';
import { connect } from 'react-redux';

import { CurrencyTable } from '../../components';
import { preIcoAmountsInEuro } from '../../data/selectors';

const PreIco = props => {
  return (
    <React.Fragment>
      <CurrencyTable data={props.preIcoAmountsInEuro} />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    preIcoAmountsInEuro: preIcoAmountsInEuro(state),
  };
};

export default connect(mapStateToProps, undefined)(PreIco);
