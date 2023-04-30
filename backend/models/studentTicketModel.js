const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: { type: String },
  problem: { type: String },
  description: { type: String },
  priorityLevel: { type: String },
  onOffCampus: Boolean,
});

module.exports = mongoose.model("Student", studentSchema);
