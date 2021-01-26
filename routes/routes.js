const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workout/bulk", ({ body }, res) => {
    Workout.insertMany(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workout", (req, res) => {
    Workout.find({})
      .sort({ date: -1 })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;