const db = require("../models");

module.exports =  function(app){

    //find all flights
    app.get('/api/flights',function(req, res){
        db.Flight.find({}).then(function(dbFlights){
            res.json(dbFlights);
        }
    )}
)

    app.get('/api/flights:id', function(req,res){
        db.Flight.findOne({id: req.params.id}).then(function(dbFlight){
            res.json(dbFlight)
        })
    })

    app.post('/api/flights:id', function(req, res){
        db.Flight.findOne({id: req.params.id}).then(function(dbFlight){
            res.json(dbFlight)
        })
    })

}