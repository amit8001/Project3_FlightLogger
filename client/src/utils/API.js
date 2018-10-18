import axios from "axios";

export default {
  signup: function(signupInfo) {
    console.log("Entered API.signup(" + JSON.stringify(signupInfo) + ")");
    let response =  axios.post("/api/register", signupInfo);
    console.log("Response: " + JSON.stringify(response));
    return response;
  },
  login: function(loginInfo) {
    console.log("Entered API.login(" + JSON.stringify(loginInfo) + ")");
    let response =  axios.post("/api/login", loginInfo);
    console.log("Response: " + JSON.stringify(response));
    return response;
  },

  getFlightsForUser: function(query) {
    return axios.get("/api/flights/" + query);
   // return axios.get("/api/flights/");
  },

  postflightsForUser: function(flightInfo) {
    console.log("Entered API.postflightsForUser(" + JSON.stringify(flightInfo) + ")");
    return axios.post("/api/flight/submit/", flightInfo);
  },

  getAllAircrafts: function() {
    return axios.get("/api/aircrafts/");
   // return axios.get("/api/flights/");
  },

};
