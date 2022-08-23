const { application } = require("express");
const express = require("express");
const workoutsController = require("../controllers/workoutsController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();
// checking if user is authorized
router.use(requireAuth);
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
