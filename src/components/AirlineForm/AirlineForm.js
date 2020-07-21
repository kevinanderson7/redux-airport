import React, { Component } from 'react';
import { connect } from 'react-redux';

class AirlineForm extends Component {
  state = {
    enteredAirline: '',
  };
  handleClick = (event) => {
    console.log('clicking add airline');
    this.props.dispatch({
      type: 'ADD_AIRLINE_TO_LIST',
      payload: this.state.enteredAirline,
    });
    this.setState({
      enteredAirline: '',
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
        <h1>Redux Airport</h1>
        <input
          onChange={this.handleAirlineInputChange}
          value={this.state.enteredAirline}
          placeholder="Airline Name"
        />
        <button onClick={this.handleClick}>Add Airline</button>
      </div>
    );
  }
}

export default connect()(AirlineForm);
