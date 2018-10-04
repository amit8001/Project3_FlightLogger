const db = require("../models");

module.exports = function(app) {
  // register
  app.post("/api/register", function(req, res) {
    // Create a new user using req.body
  console.log(req.body);
    var user = new db.User(req.body); //need to use the same User var that was exported in index.js of models
    //user.encryptPwd();
  
    db.User.create(user)
      .then(function(dbUser) {
        db.User.findOne({ "username": req.body.username },
        function (err, doc) {
          if (err) {
            console.log(err);
          } else {
            console.log(doc);
            res.json(doc);
          }
        })
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);

      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });



//login
  app.post("/api/login", function(req, res) {
    console.log(req.body);
    db.User.findOne({
        "username": req.body.username,
        "password": req.body.password
      }, function (err, doc){
        if (err){
          console.log(err)
        }
        else{
          console.log(doc);
          res.json(doc);
        }
      }
    )
  });

}
