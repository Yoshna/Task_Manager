import { useState, useEffect } from "react";
import classes from "./AddTask.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
const AddTask = (props) => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
  const [reminderTime, setReminderTime] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  const taskLabelHandler = (event) => {
    setTaskLabel(event.target.value);
  };
  const taskDeadlineHandler = (event) => {
    // console.log(event.target.value);
    setTaskDeadline(event.target.value);
  };
  const reminderTimeHandler = (event) => {
    // console.log(event.target.value);
    setReminderTime(event.target.value);
  };

  //   let errorLine = null;

  const addTaskHandler = async (event) => {
    event.preventDefault();
    const res = await axios.get("/auth/login");
    // console.log(res);
    // console.log(taskDeadline);
    const task = {
      label: taskLabel,
      deadline: new Date(taskDeadline),
      isDone: false,
      userId: res.data._id,
      reminderTime: reminderTime,
    };
    // console.log(task.deadline);
    // const d = new Date();
    // console.log(d);
    // let de = new Date(task.deadline);
    // de = de.setHours(23);
    // console.log((de - d.getTime()) / 1000 / 60 / 60);
    // const t = de - d.getTime();
    // console.log(t);
    // console.log(de);
    // console.log("okay");
    // const n = task.deadline.getTime() - d.getTime();
    // console.log(task.deadline.getTime());
    // console.log(d.getTime());
    // console.log(n);
    // const s = n / 1000;
    // const m = s / 60;
    // const h = m / 60;
    // console.log(s);
    // console.log(m);
    // console.log(h);
    // console.log(h / 24);

    // console.log(task.deadline);
    // console.log(typeof(task.deadline));
    if (taskLabel.trim() === "") {
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter Task Label
        </p>
      );
      setError(errorLine);
    }
    if (taskDeadline.trim() === "") {
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter Task Deadline
        </p>
      );
      setError(errorLine);
    }
    const [hour, min] = task.reminderTime.split(":");
    let date = new Date(task.deadline);
    date.setHours(hour);
    date.setMinutes(min);
    const today = new Date();
    console.log(date, today);
    if (date < today) {
      //   console.log("error");
      const errorLine = (
        <p
          style={{
            color: "red",
          }}
        >
          Enter date which is after today's date
        </p>
      );
      setError(errorLine);
      //   console.log("errorsss");
    } else {
      axios.post("/tasks", task).then((res) => {
        navigate("/");
      });
    }
    // setTimeout(() => {
    //   setError(null);
    // }, 5000);
  };

  return (
    <div className={classes.AddTask}>
      {error}
      <h1>Add A Task</h1>
      <form>
        <label>Task Label</label>
        <input
          type="text"
          value={taskLabel}
          onChange={taskLabelHandler}
        ></input>
        <label>Task Deadline</label>
        <input
          type="date"
          value={taskDeadline}
          onChange={taskDeadlineHandler}
        ></input>
        <label>Reminder Time</label>
        <input
          type="time"
          value={reminderTime}
          onChange={reminderTimeHandler}
        ></input>
        <button onClick={addTaskHandler}>Add</button>
      </form>
    </div>
  );
};
export default AddTask;
