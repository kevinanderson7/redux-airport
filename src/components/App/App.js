import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';

class App extends Component {
  handleClick = () => {
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
        <AirlineForm />
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
