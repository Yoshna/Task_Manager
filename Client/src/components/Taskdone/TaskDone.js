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
        let newDeadline = new Date(data.deadline);
        newDeadline = newDeadline.toLocaleDateString();
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

  const deleteHandler = (id) => {
    // console.log(id);
    axios.delete(`/tasks/${id}`).then((res) => {
      const newTaskArr = tasksArr.filter((task) => task.id !== id);
      setTaskArr(newTaskArr);
    });
  };

  let tasks = [];
  if (tasksArr.length > 0) {
    tasks = tasksArr.map((task) => (
      <Task
        key={task.id}
        deadline={task.deadline}
        label={task.label}
        isDone={task.isDone}
        delete={() => deleteHandler(task.id)}
      ></Task>
    ));
  }

  return (
    <div className={classes.TaskDone}>
      <h1>Tasks Done</h1>
      {tasks}
    </div>
  );
};

export default TaskDone;
