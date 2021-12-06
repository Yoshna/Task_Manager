const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  isDone: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
