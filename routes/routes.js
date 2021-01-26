const router = require("express").Router();
const path = require("path")
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts/bulk", ({ body }, res) => {
    Workout.insertMany(body)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    Workout.find({})
      .sort({ day: -1 })
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .sort({ day: -1 }).limit(7)
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.put("/api/workouts/:id", (req, res) => {
      console.log(req.body)
      console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, {
        $push: {exercises: req.body}
    })
      .then(workout => {
        console.log(workout)
        res.json(workout);
      })
      .catch(err => {
        console.log(err)
        res.status(400).json(err);
      });
  });

  router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
  });
  
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
  });

  module.exports = router;