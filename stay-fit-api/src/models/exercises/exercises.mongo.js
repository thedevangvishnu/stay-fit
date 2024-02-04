const mongoose = require("mongoose");

const exercisesSchema = new mongoose.Schema({
  id: String,
  name: String,
  bodyPart: String,
  target: String,
  equipment: String,
  gifUrl: String,
  secondaryMuscles: [String],
  instructions: [String],
});

module.exports = mongoose.model("Exercise", exercisesSchema);
