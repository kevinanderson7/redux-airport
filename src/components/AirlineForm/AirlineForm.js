import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={3} alignItems="center">
        <Grid item>
          <h1>Redux Airport</h1>
        </Grid>
        <Grid item>
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Airline Name"
            onChange={this.handleAirlineInputChange}
            value={this.state.enteredAirline}
          />
        </Grid>
        <Grid item>
          <TextField
            margin="normal"
            id="outlined-basic"
            label="Number of Planes"
            onChange={this.handleAirlineNumberChange}
            value={this.state.enteredAirlineNumber}
          />
        </Grid>
        <Grid item>
          <Button
            margin="normal"
            variant="contained"
            onClick={this.handleClick}
          >
            Add Airline
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default connect()(AirlineForm);
