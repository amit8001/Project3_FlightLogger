const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/flightlogger"
);

const flights = [
  {
      id: 1,
      date: "2017-12-02",     // date dropdown ?
      aircraftType: "C152",   // auto-populated from aircraft data
      aircraftId: "N757QJ",   // dropdown from aircraft data
      from: "47N",
      to: "47N",
      route: "",
      remarks: "practice landings",
      landingsDay: 1,
      landingsNight: 0,
     flightTime: 2,
        aircraft: [
        "5bafa0a54743691dac03c1a2"
        ],
        user: [
        "5bafa13d6e4c2315387f12b8"
        ],
flight_day: 0.6,
flight_night: 0.4,
flight_actual: 0.3,
flight_simulated: 0.7,
  }
];


 db.Flight
  .deleteMany({})
  .then(() => db.Flight.collection.insertMany(flights))
  .then(() => {
    process.exit(0);
  })
 
  .catch(err => {
    console.error(err);
    process.exit(1);
  })



