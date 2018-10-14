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
      results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    API.getFlightsForUser(this.props.user_id)
    .then(res => {
      console.log(res.data);
      this.setState({ results: res.data});
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

  render() {

    //added 10/9
    //const { component: Component, ...props } = this.props

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
                />
        </div> 
      </div>
    );
  }
}

export default SearchResultContainer;
