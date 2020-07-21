import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineForm extends Component {
  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <input
          type="text"
          onChange={this.handleAirlineInputChange}
          placeholder="Airline Name"
        />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  };
};

export default connect(mapStoreToProps)(AirlineForm);
