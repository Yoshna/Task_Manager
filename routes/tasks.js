const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Task = require("../models/tasks");
const { validateTasks } = require("../validation/validation");
const { login } = require("../middleware/auth");
const User = require("../models/user");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");

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
  if (req.body.reminderTime) {
    const date = JSON.stringify(req.body.deadline).substring(1, 11);
    const mailOptions = {
      from: "dev.yoshnam@gmail.com",
      to: req.user.emailId,
      subject: "Email from Task Manager",
      text: `You have ${req.body.label} scheduled on ${date} `,
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "dev.yoshnam@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const timel = JSON.stringify(req.body.deadline).substring(1, 11);
    console.log(new Date().toLocaleString());
    schedule.scheduleJob(`${timel}T${req.body.reminderTime}:00`, () => {
      console.log("emailll ", new Date(), req.body.label);
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Email send: " + info.response);
        }
      });
    });
  }
  //console.log(req.body.reminderTime);
  // console.log(timel);
  // const s = new Date().getMinutes();
  // console.log(s);
  try {
    // console.log("hhcdkd");
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
