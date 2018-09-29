const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/flightlogger"
);


const aircraft = [
  {
      ID: "N757QJ",
      type: "C152",
      make: "Cessna",
      categoryClass: "Airplane Single Engine Land",       // dropdown (ASEL, AMEL, ASES, AMES)
      categoryClassShort: "ASEL",                         // auto-populated
      complex: "false"
  },
  {
      ID: "N19777",
      type: "C172",
      make: "Cessna",
      categoryClass: "Airplane Single Engine Land",
      categoryClassShort: "ASEL",
      complex: "false"
  },
  {
      ID: "N55220",
      type: "PA-28R-200",
      make: "Piper",
      categoryClass: "Airplane Single Engine Land",
      categoryClassShort: "ASEL",
      complex: true
  },
];

const user = [
  {
      firstName: "Amitav",
      lastName: "Panda",
      licenseNo: "",
      licenseType: ""
  },
  {
      firstName: "Richardson",
      lastName: "Damian",
      licenseNo: "23456",
      licenseType: "private"
  },
  {
      firstName: "Shira",
      lastName: "Applebaum",
      licenseNo: "34567",
      licenseType: "student"
  },
  {
      firstName: "Cody",
      lastName: "Granger",
      licenseNo: "45678",
      licenseType: "airline transport pilot"
  },
  {
      firstName: "Houssam",
      lastName: "Moustafa",
      licenseNo: "56789",
      licenseType: "commercial"
  },
];

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
// aircraft: [
//   "5baeeec9a48f7c36c492a880"
// ],
// user: [
// "5baef29d3748406018b77aab"
// ],
flight_day: 0.6,
flight_night: 0.4,
flight_actual: 0.3,
flight_simulated: 0.7,
  }
];

db.Aircraft
  .remove({})
  .then(() => db.Aircraft.collection.insertMany(aircraft))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(user))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

 db.Flight
  .deleteMany({})
  .then(() => db.Flight.collection.insertMany(flights))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
//  db.Flight.findOneAndUpdate(
//    {}, 
//    { $push: { user: 
      
//       () =>  db.User.findOne({firstName:"Cody"}, function(err,doc){
//                   return doc._id;
//             })
       
  
//     } },
//   // { $push: { aircraft: dbAircraft._id } }, 
//    { new: true }
//  )

 