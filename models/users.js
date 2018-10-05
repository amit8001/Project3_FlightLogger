const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  licenseNo: {type: String, required: true, unique: true},
  licenseType: { type: String, required: true },

  // `username` must be of type String
  // `username` will trim leading and trailing whitespace before it's saved
  // `username` is a required field and throws a custom error message if not supplied
  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },
  // `password` must be of type String
  // `password` will trim leading and trailing whitespace before it's saved
  // `password` is a required field and throws a custom error message if not supplied
  // `password` uses a custom validation function to only accept values 6 characters or more
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 3;
      },
      "Password should be longer."
    ]
  },


});

// userSchema.methods.encryptPwd = function(){
//   var salt = bcrypt.genSaltSync(10);
//   var hash = bcrypt.hashSync(this.password, salt);
//   this.password=hash;
//   return this.password;
// }

const User_mdl_var = mongoose.model("User", userSchema); //within model method, is the collection name that 
//gets saved within the db in lowercase and plural. LHS is just the name of the const. that is used to export with.
module.exports = User_mdl_var;
