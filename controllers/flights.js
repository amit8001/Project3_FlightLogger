const db = require("../models");

module.exports = function(app) {
  
//get all flights
app.get("/api/flights/", function(req, res) {
  db.Flight.find(
     {}
  )
  //db.Flight.find({})
    // Specify that we want to populate the retrieved libraries with any associated books
    .populate("aircraft")
    .populate("user")
    .then(function(dbFlight) {
      res.json(dbFlight);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

//get all flights for a user/pilot
app.get("/api/flights/:id", function(req, res) {
    db.Flight.find(
      {"user": req.params.id }   
    )
      .populate("aircraft")
      .populate("user")
      .then(function(dbFlight) {
        res.json(dbFlight);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });

 
//Below code is to submit/POST a flight document (!! WIP !!)

app.post("/api/flight/submit", function(req, res) {

  console.log(req.body);
  var flight = new db.Flight(req.body); //need to use the same User var that was exported in index.js of models
  //user.encryptPwd();

  db.Flight.create(flight)
    .then(function(dbFlight) {
      // If saved successfully, send the the new User document to the client
      res.json(dbFlight);

    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});


}
