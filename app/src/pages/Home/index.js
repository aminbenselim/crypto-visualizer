import React from 'react';
import { connect } from 'react-redux';

import { lookupData } from '../../reducers/data';
class Home extends React.PureComponent {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  getData: lookupData.request,
};

export default connect(undefined, mapDispatchToProps)(Home);
