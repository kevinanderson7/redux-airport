import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class AirlineTable extends Component {
  render() {
    console.log('Table', this.props.reduxState);
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Airline Name</TableCell>
              <TableCell>Airline Number of Planes</TableCell>
            </TableRow>
          </TableHead>

          {this.props.reduxState.airlineList.map((item, index) => {
            return (
              <TableBody>
                <TableRow key={index}>
                  <TableCell>{item.enteredAirline}</TableCell>
                  <TableCell>{item.enteredAirlineNumber}</TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    );
  }
}

const mapStoreToProps = (reduxState) => {
  return {
    reduxState,
  };
};

export default connect(mapStoreToProps)(AirlineTable);
