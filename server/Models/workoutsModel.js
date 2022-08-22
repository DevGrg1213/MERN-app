const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A workout must have a title"],
    },
    reps: {
      type: Number,
      required: [true, "A workout must have a reps"],
    },
    load: {
      type: Number,
      required: [true, "A workout must have a load"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workout", workoutSchema);
