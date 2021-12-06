import { useState, useEffect } from "react";
import classes from "./TaskDone.module.css";
import axios from "axios";
import Task from "../../container/Tasks/Task/Task";
const TaskDone = (props) => {
  const [tasksArr, setTaskArr] = useState([]);
  useEffect(() => {
    axios.get("/tasks").then((res) => {
      let newTasks = [];
      res.data.map((data) => {
        // console.log(data.deadline);
        const newDeadline = JSON.stringify(data.deadline).substring(1, 11);
        // console.log(newDeadline);
        if (data.isDone) {
          const task = {
            label: data.label,
            deadline: newDeadline,
            id: data._id,
            isDone: true,
          };
          newTasks = newTasks.concat([task]);
        }
      });
      setTaskArr(newTasks);
    });
  }, []);

  let tasks = [];
  if (tasksArr.length > 0) {
    tasks = tasksArr.map((task) => (
      <Task
        key={task.id}
        deadline={task.deadline}
        label={task.label}
        isDone={task.isDone}
      ></Task>
    ));
  }

  return <div className={classes.TaskDone}>{tasks}</div>;
};

export default TaskDone;
