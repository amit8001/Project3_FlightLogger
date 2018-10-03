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
  // Create a new Book in the database
  db.Flight.create(req.body)
    .then(function(dbFlight) {
      // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
      // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return db.Flight.findOneAndUpdate(
        
          {}, //latest one that was just created...
          { 
            $push: { aircraft: req.body.aircraft._id }, //will get from request obj, will be sent when we submit the form
            $push: { user: req.body.user._id } //will get from request obj, will be sent when we submit the form

          }, 
          { new: true }
        );
    })
    .then(function(dbLibrary) {
      // If the Library was updated successfully, send it back to the client
      res.json(dbLibrary);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});


}
