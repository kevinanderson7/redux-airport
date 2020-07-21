import React, { Component } from 'react';
import { connect } from 'react-redux';
//

class AirlineTable extends Component {
  render() {
    console.log('Table', this.props.reduxState);
    return (
      <table>
        <tbody>
          <tr>
            <th>Airline Name</th>
            <th>Airline Number of Planes</th>
          </tr>

          {this.props.reduxState.airlineList.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.enteredAirline}</td>
                <td>{item.enteredAirlineNumber}</td>
              </tr>
            );
          })}
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
