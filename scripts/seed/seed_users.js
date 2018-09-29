const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/flightlogger"
);

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

  db.User
  .deleteMany({})
  .then(() => db.User.collection.insertMany(user))
  .then(data1 => {
    console.log(data1.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

