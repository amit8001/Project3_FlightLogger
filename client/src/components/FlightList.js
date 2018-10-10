import React from "react";
//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
const FlightList = props => (
  // <ul className="list-group">
  //   {props.results.map(result => (
  //     <li className="list-group-item" key={result.id}>
  //       <p>{result.remarks}</p>
  //       <p>{result.flight_day}</p>
  //        <p>{result.aircraft.make}</p>
  //       <p>{result.aircraft.type}</p>
  //     </li>
  //   ))}
  // </ul>


<table>
<tbody>
<tr>
  <th>Flight Id</th>
  <th>Remarks</th>
  <th>Aircraft(Make)</th>
  <th>Aircraft(Type)</th>
</tr>
{props.results.map(
  
  result => (
    <tr key= {result._id}>
      <td>{result.remarks}</td>
      <td>{result.flight_day}</td>
       <td>{result.aircraft.make}</td>
      <td>{result.aircraft.type}</td>
    </tr>
  ))}

  </tbody>
 </table>

);
export default FlightList;
