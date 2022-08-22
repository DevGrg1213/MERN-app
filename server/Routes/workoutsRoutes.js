const express = require("express");
const workoutsController = require("../controllers/workoutsController");
const router = express.Router();

// GET all the workouts
router.get("/", workoutsController.getAllWorkouts);
// create a new workouts
router.post("/", workoutsController.createWorkout);
// GET one workout
router.get("/:id", workoutsController.getWorkout);
// DELETE a workout
router.delete("/:id", workoutsController.deleteWorkout);
// UPDATE a workout
router.patch("/:id", workoutsController.updateWorkout);

module.exports = router;
