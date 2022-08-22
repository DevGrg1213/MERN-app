const mongoose = require("mongoose");
const workoutsModel = require("../Models/workoutsModel");

exports.getAllWorkouts = async (req, res) => {
  try {
    const workout = await workoutsModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "No such workout",
      });
    }
    const workout = await workoutsModel.findById(id);
    if (!workout) {
      return res.status(400).json({
        error: "No such workout",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  const emptyFields = [];
  if (!title) {
    emptyFields.push("title");
  }
  if (!reps) {
    emptyFields.push("reps");
  }
  if (!load) {
    emptyFields.push("load");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill in all the feilds", emptyFields });
  }
  try {
    const workout = await workoutsModel.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout exist" });
    }
    const workout = await workoutsModel.findOneAndDelete({ _id: id });

    if (!workout) {
      res.status(400).json({ error: "No such workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "No such workout exist",
      });
    }
    const workout = await workoutsModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!workout) {
      return res.status(400).json({
        error: "No such workout exist",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: "no such workout" });
  }
};
