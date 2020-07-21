import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';

class App extends Component {
  state = {
    enteredAirline: '',
  };
  handleClick = () => {
    console.log('clicking add airline');
    this.props.dispatch({
      type: 'ADD_AIRLINE_TO_LIST',
      payload: { airline: this.state.enteredAirline },
    });
  };

  handleAirlineInputChange = (event) => {
    this.setState({
      enteredAirline: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <AirlineForm
          handleClick={this.handleClick}
          handleAirlineInputChange={this.handleAirlineInputChange}
        />
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
