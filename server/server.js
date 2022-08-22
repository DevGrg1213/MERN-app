require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutsRoutes = require("./Routes/workoutsRoutes");
const userRoutes = require("./Routes/userRoutes");
// express app
const app = express();

// middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutsRoutes);
app.use("/api/users", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening to the request
    app.listen(process.env.PORT, () => {
      console.log(
        "Connnected to Database & Listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error.message));
