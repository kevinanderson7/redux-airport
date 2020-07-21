import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineTable extends Component {
  render() {
    return (
      <div>
        <table>{this.props.airlineList}</table>
      </div>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  };
};

export default connect(mapStoreToProps)(AirlineTable);
