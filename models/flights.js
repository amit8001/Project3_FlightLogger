const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  id: { type: Number , required: true, unique: true },
  date: { type: Date, required: true },
  from: {type: String, require: true},
  to: {type: String, require: true},
  route: {type: String, require: true},
  remarks: {type: String, default: "No Comments"},
  landingsDay: {type: Number, require: true},
  landingsNight: {type: Number, require: true},
  flightTime: {type: Number, require: true},
  aircraft: {
    type: Schema.Types.ObjectId,
    ref: "Aircraft"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  flight_day: {type: Number, default: 0},
  flight_night: {type: Number, default: 0},
  flight_actual: {type: Number, default: 0},
  flight_simulated: {type: Number, default: 0},
});

const Flight = mongoose.model("Flight", flightSchema);

module.exports = Flight;
