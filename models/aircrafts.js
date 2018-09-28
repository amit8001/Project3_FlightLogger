const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const aircraftSchema = new Schema({
  ID: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  make: {type: String, required: true},
  categoryClass: { type: String, required: true },
  categoryClassShort: { type: String, required: true },
  complex: { type: Boolean, required: true },
});

const Aircraft = mongoose.model("Aircraft", aircraftSchema);

module.exports = Aircraft;
