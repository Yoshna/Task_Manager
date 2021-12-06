import { useState, useEffect } from "react";
import classes from "./Tasks.module.css";
import Task from "./Task/Task";
import axios from "axios";
const Tasks = (props) => {
  const [taskArr, setTaskArr] = useState([]);

  useEffect(() => {
    axios.get("/tasks").then((res) => {
      let newTaskArr = [];
      res.data.map((data) => {
        // console.log(data.deadline);
        const newDeadline = JSON.stringify(data.deadline).substring(1, 11);
        // console.log(newDeadline);
        const task = {
          label: data.label,
          deadline: newDeadline,
          id: data._id,
          isDone: data.isDone,
        };
        if (!data.isDone) {
          newTaskArr = newTaskArr.concat([task]);
        }
      });
      setTaskArr(newTaskArr);
    });
  }, []);

  const doneHandler = (id) => {
    console.log(id);
    axios.put(`/tasks/${id}`).then((res) => {
      const newTaskArr = taskArr.filter((task) => task.id !== id);
      setTaskArr(newTaskArr);
    });
  };
  const deleteHandler = (id) => {
    // console.log(id);
    axios.delete(`/tasks/${id}`).then((res) => {
      const newTaskArr = taskArr.filter((task) => task.id !== id);
      setTaskArr(newTaskArr);
    });
  };

  let tasks = [];

  if (taskArr.length > 0) {
    tasks = taskArr.map((task) => (
      <Task
        key={task.id}
        deadline={task.deadline}
        label={task.label}
        done={() => doneHandler(task.id)}
        delete={() => deleteHandler(task.id)}
      ></Task>
    ));
  }

  return (
    <div className={classes.Header}>
      <h1>My Tasks</h1>
      {tasks}
    </div>
  );
};
export default Tasks;
