import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';

class App extends Component {
  render() {
    return (
      <div>
        <AirlineForm />
        {/* <h1>Redux Airport</h1>
        <input
          type="text"
          onChange={this.handleAirlineInputChange}
          placeholder="Airline Name"
        />
        <button onClick={this.handleClick}>Add Airline</button> */}
        <AirlineTable />
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    airlineList: store.airlineList,
  };
};

export default connect(mapStoreToProps)(App);
