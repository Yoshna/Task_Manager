import { useState, useEffect } from "react";
import classes from "./AddTask.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
const AddTask = (props) => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");
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

  //   let errorLine = null;

  const addTaskHandler = async (event) => {
    event.preventDefault();
    const res = await axios.get("/auth/login");
    // console.log(res);
    const task = {
      label: taskLabel,
      deadline: new Date(taskDeadline),
      isDone: false,
      userId: res.data._id,
    };
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
    if (task.deadline < new Date()) {
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
        <button onClick={addTaskHandler}>Add</button>
      </form>
    </div>
  );
};
export default AddTask;
