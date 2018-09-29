const mongoose = require("mongoose");
const db = require("../../models");

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

db.Aircraft
  .deleteMany({})
  .then(() => db.Aircraft.collection.insertMany(aircraft))
  .then(data1 => {
    console.log(data1.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
