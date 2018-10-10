import React, { Component } from "react";
import FlightList from "./FlightList_test";
import API from "../utils/API";

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
    API.getFlightsForUser(this.props.match.params.id)
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
                  
                    <FlightList results={this.state.results} />
                  )   

              }

              {/* <Route 
                {...props} 
                  render={props => (
                  this.state.loggedIn ?
                    <Component {...props} /> :
                    <Redirect to='/' />
                )} 
              /> */}
      </div>
    );
  }
}

export default SearchResultContainer;
