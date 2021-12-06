const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");

router.get("/", async (req, res) => {
  const tasks = await Task.find({});
  res.send(tasks);
});

router.post("/", async (req, res) => {
  //   if (error) {
  //     res.status(400).send(error.message);
  //     return;
  //   }
  let task = new Task({
    ...req.body,
  });
  task = await task.save();
  res.send(task);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        isDone: true,
      },
    },
    {
      new: true,
    }
  );
  if (!task) {
    res.status(404).send("task doesn't exist");
    return;
  }
  res.send(task);
});

router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    res.status(400).send("Task not present");
  }

  res.send(task);
});

module.exports = router;
