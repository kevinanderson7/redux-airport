import React, { Component } from 'react';
import { connect } from 'react-redux';
import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineTable from '../AirlineTable/AirlineTable';
import 'fontsource-roboto';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <h1>Redux Airport</h1>
          <AirlineForm />
          {/* <h1>Redux Airport</h1>
        <input
          type="text"
          onChange={this.handleAirlineInputChange}
          placeholder="Airline Name"
        />
        <button onClick={this.handleClick}>Add Airline</button> */}
          <AirlineTable />
        </Container>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    airlineList: store.airlineList,
  };
};

export default connect(mapStoreToProps)(App);
