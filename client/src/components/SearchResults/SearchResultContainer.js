import React, { Component } from "react";
import FlightList from "./FlightList";
import API from "../../utils/API";
import "./SearchResultContainer.css";
import AddFlightModal from "./AddFlightModal";

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from "react-router-dom"

class SearchResultContainer extends Component {
  state = {
      results: [],
      aircraftList: []
  };


  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getFlightsForUser(this.props.user_id)
    .then(res => {
      console.log(res.data);
      this.setState({ results: res.data});
    })
    .catch(err => console.log(err));

    API.getAllAircrafts()
    .then(res => {
      console.log(res.data);
      this.setState({ aircraftList: res.data}); 
    })
    .catch(err => console.log(err));

  }

  getlatestFlights =id => {
    API.getFlightsForUser(id)
    .then(res => {
      console.log(res.data);
      this.setState({ results: res.data});
    })
    .catch(err => console.log(err));
  } 

  // getTailNumbers = () => {
  //   let unique = [];
  //   let arr_m = this.state.results;
  //   for (let i=0; i<arr_m.length; ++i) {
  //   //for (let i=0; i<1; ++i) {
  //       let tailNumber = arr_m[i].aircraft.ID;
  //       let aircraftobjId = arr_m[i].aircraft._id;
  //       if(!unique.includes(tailNumber)) {
  //           unique.push({tNum: tailNumber,
  //                         objId:aircraftobjId});
  //       }
  //   }
  //   return unique;
  // }

// getTailNumbers = (arr) => {
//     let f = [];
//     //let arr = this.state.results;
//     return arr.filter(function(n) {
//       return f.indexOf(n.aircraft.ID) == -1 && f.push(n.aircraft.ID)
//     })
//   }

getTailNumbers  =() => {
  API.getAllAircrafts()
  .then(res => {
    console.log(res.data);
    this.setState({ aircraftList: res.data});


    // this.state.aircraftList.map(a => {
    //   return ({tNum: a.ID,
    //           objId:a._id})
    // })


  })
  .catch(err => console.log(err));
} 

  render() {

    //added 10/9
    //const { component: Component, ...props } = this.props
    //this.getTailNumbers();
    //console.log("****inside "+this.aircraftobjects);

   // console.log(this.aircraftobjects);

    // this.uniqueTailnumbers = this.aircraftobjects.map(a => {
    //   return ({tNum: a.ID,
    //           objId:a._id})
    // })

   // console.log(this.uniqueTailnumbers);
    return (
      <div>
           {
                this.state.results.length === 0 ? 
                  (<h3> No flights found!</h3>)
                  :
                  (
                  
                    <FlightList 
                      results={this.state.results} 
                        
                    />
                  )   

              }

        <div id ="footer">
              <AddFlightModal 
                pilot = {this.props.user_id}
                latest = {this.getlatestFlights}

                tailNumbers={this.state.aircraftList}
                
                />
        </div> 
      </div>
    );
  }
}

export default SearchResultContainer;
