import React, { Component } from 'react';
import * as moment from 'moment';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'


function aircraft_attr(aircraft) {
  return !aircraft ? null : `<div>
  <div>${aircraft.make} ${aircraft.type}</div>
</div>`;
};
 
function dateFormatter(cell) {
  if (!cell) {
        return "";
  }
  return `${moment(cell).format("MM/DD/YYYY")? moment(cell).format("MM/DD/YYYY"):moment(cell).format("MM/DD/YYYY") }`;
} 

class FlightList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.results}>
          <TableHeaderColumn isKey dataField='_id'
          dataAlign='center'
          headerAlign="left"
          width="10"
          tdStyle={
              {backgroundColor: 'green'}}
          
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='remarks'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          
          >
            remarks
          </TableHeaderColumn>
         <TableHeaderColumn dataField='aircraft'
          dataFormat={aircraft_attr}
          dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >Aircraft Make</TableHeaderColumn>
           <TableHeaderColumn dataField='flight_day'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Flight_Day
          </TableHeaderColumn>
 <TableHeaderColumn dataField='flight_night'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Flight_Night
          </TableHeaderColumn>
          <TableHeaderColumn dataField='flight_actual'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Flight_Actual
          </TableHeaderColumn>
          <TableHeaderColumn dataField='flight_simulated'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Flight_Simulated
          </TableHeaderColumn>
          <TableHeaderColumn dataField='date'
           dataAlign='center'
           dataFormat={dateFormatter}
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Flight Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='from'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            From
          </TableHeaderColumn>
          <TableHeaderColumn dataField='to'
           dataAlign='center'
           headerAlign="center"
           width="15"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            To
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default FlightList;