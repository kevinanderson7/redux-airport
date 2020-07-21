import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirlineList from '../AirlineList/AirlineList';

class AirlineTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Airline Name</th>
          </tr>
          <AirlineList />
        </tbody>
      </table>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  };
};

export default connect(mapStoreToProps)(AirlineTable);
