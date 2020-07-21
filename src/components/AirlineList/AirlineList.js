import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineList extends Component {
  render() {
    return (
      <tr>
        {this.props.reduxState.airlineList.map((item, index) => {
          return <td key={index}>{item}</td>;
        })}
      </tr>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  };
};

export default connect(mapStoreToProps)(AirlineList);
