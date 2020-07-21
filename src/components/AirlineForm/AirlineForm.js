import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineForm extends Component {
  state = {
    enteredAirline: '',
    enteredAirlineNumber: '',
  };
  handleClick = (event) => {
    console.log('clicking add airline');
    this.props.dispatch({
      type: 'ADD_AIRLINE_TO_LIST',
      payload: {
        enteredAirline: this.state.enteredAirline,
        enteredAirlineNumber: this.state.enteredAirlineNumber,
      },
    });
    this.setState({
      enteredAirline: '',
      enteredAirlineNumber: '',
    });
  };

  handleAirlineInputChange = (event) => {
    this.setState({
      enteredAirline: event.target.value,
    });
  };

  handleAirlineNumberChange = (event) => {
    this.setState({ enteredAirlineNumber: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Redux Airport</h1>
        <input
          onChange={this.handleAirlineInputChange}
          value={this.state.enteredAirline}
          placeholder="Airline Name"
        />
        <input
          onChange={this.handleAirlineNumberChange}
          placeholder="Number of Planes"
          value={this.state.enteredAirlineNumber}
        />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

export default connect()(AirlineForm);
