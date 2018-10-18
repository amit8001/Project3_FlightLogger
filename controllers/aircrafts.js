const db = require("../models");

module.exports = function(app) {
  
  // Route for getting all aircrafts from the db
app.get("/api/aircrafts/", function(req, res) {
  // Using our Book model, "find" every book in our db
  db.Aircraft.find({})
    .then(function(dbAircraft) {
      // If any Books are found, send them to the client
      res.json(dbAircraft);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

}
