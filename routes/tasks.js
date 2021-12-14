const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");
const { validateTasks } = require("../validation/validation");
const { login } = require("../middleware/auth");
const User = require("../models/user");

// const login = (req, res, next) => {
//   console.log(req.user);
//   console.log("fefefe");

//   if (!req.user) {
//     return res.status(401).json({ body: null, error: "Login to continue" });
//   } else {
//     next();
//   }
// };

router.get("/", login, async (req, res) => {
  let tasks = await User.findById(req.user._id)
    .populate("tasks")
    .select("tasks");
  //console.log(tasks);
  tasks = tasks.tasks;
  // console.log(tasks);
  res.send(tasks);
});

router.post("/", login, async (req, res) => {
  // console.log(req.body);
  try {
    console.log("hhcdkd");
    const { error } = validateTasks(req.body);
    if (error) {
      console.log(error);
      res.status(400).send(error.message);
      return;
    }
  } catch (err) {
    console.log(err);
  }
  let user = await User.findById(req.body.userId);
  let array = [...user?.tasks];
  let task = new Task({
    ...req.body,
  });
  task = await task.save();
  array.push(task._id);
  user.tasks = array;
  await user.save();
  res.send(task);
});

router.put("/:id", login, async (req, res) => {
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

router.delete("/:id", login, async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) {
    res.status(400).send("Task not present");
  }

  res.send(task);
});

module.exports = router;
