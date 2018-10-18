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

function aircraft_id(aircraft) {
  return !aircraft ? null : `<div>
  <div>${aircraft.ID}</div>
</div>`;
};
 
function dateFormatter(cell) {
  if (!cell) {
        return "";
  }
  return `${moment.utc(cell).format("MM/DD/YYYY")? moment.utc(cell).format("MM/DD/YYYY"):moment.utc(cell).format("MM/DD/YYYY") }`;
} 

// const cellEditProp = {
//   mode: 'click'
// };

class FlightList extends Component {
  render() {
    return (
      <div>
        {/* <BootstrapTable data={this.props.results} cellEdit={ cellEditProp }> */}
        <BootstrapTable data={this.props.results} >
        <TableHeaderColumn dataField='date'
           dataAlign='center'
           dataFormat={dateFormatter}
           headerAlign="center"
           width="10"
           dataSort
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}

              tdStyle={
                {backgroundColor: 'lightgrey',
                fontWeight: 'bolder'}}
          >
            Date
          </TableHeaderColumn>

        <TableHeaderColumn  isKey dataField='aircraft'
          dataFormat={aircraft_id}
          dataAlign='center'
           headerAlign="center"
           width="12"
          
          thStyle={
                {fontWeight: 'bolder', 
                color: 'white',
                backgroundColor:'black'
          }}
          >
          Aircraft ID</TableHeaderColumn>

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
          >Aircraft Type</TableHeaderColumn>

           <TableHeaderColumn dataField='from'
           dataAlign='center'
           headerAlign="center"
           width="8"
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
           width="8"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            To
          </TableHeaderColumn>
          <TableHeaderColumn dataField='route'
           dataAlign='center'
           headerAlign="center"
           width="8"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Route
          </TableHeaderColumn>

          <TableHeaderColumn dataField='remarks'
           dataAlign='left'
           headerAlign="center"
           width="25"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          
          >
            Remarks
          </TableHeaderColumn>
         
          <TableHeaderColumn dataField='landingsDay'
           dataAlign='center'
           headerAlign="center"
           width="8"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Lnds
          </TableHeaderColumn>

          <TableHeaderColumn dataField='flight_day'
           dataAlign='center'
           headerAlign="center"
           width="8"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Day
          </TableHeaderColumn>
 <TableHeaderColumn dataField='flight_night'
           dataAlign='center'
           headerAlign="center"
           width="8"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Night
          </TableHeaderColumn>
          <TableHeaderColumn dataField='flight_actual'
           dataAlign='center'
           headerAlign="center"
           width="10"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Actual
          </TableHeaderColumn>
          <TableHeaderColumn dataField='flight_simulated'
           dataAlign='center'
           headerAlign="center"
           width="10"
           thStyle={
               {fontWeight: 'bolder', 
               color: 'white',
               backgroundColor:'black'
              }}
          >
            Hood
          </TableHeaderColumn>
          
         
        </BootstrapTable>
      </div>
    );
  }
}
 
export default FlightList;