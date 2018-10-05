const mongoose = require("mongoose");
const db = require("../../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/flightlogger"
);

const user = [
  {
      firstName: "Amitav",
      lastName: "Panda",
      licenseNo: "",
      licenseType: "",
      username: "amitav",
      password: "a123456"
  },
  {
      firstName: "Damian",
      lastName: "Riachardson",
      licenseNo: "23456",
      licenseType: "private",
      username: "damian",
      password: "d123456"
  },
  {
      firstName: "Shira",
      lastName: "Applebaum",
      licenseNo: "34567",
      licenseType: "student",
      username: "shira",
      password: "s123456"
  },
  {
      firstName: "Cody",
      lastName: "Granger",
      licenseNo: "45678",
      licenseType: "airline transport pilot",
      username: "cody",
      password: "c123456"
  },
  {
      firstName: "Houssam",
      lastName: "Moustafa",
      licenseNo: "56789",
      licenseType: "commercial",
      username: "houssam",
      password: "h123456"
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

