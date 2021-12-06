import { useState } from "react";
import classes from "./AddTask.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
const AddTask = (props) => {
  const [taskLabel, setTaskLabel] = useState("");
  const [taskDeadline, setTaskDeadline] = useState("");

  const navigate = useNavigate();

  //   useEffect(() => {
  //     axios.get("/tasks").then((res) => {
  //       res.data.map((data) => console.log(data.label));
  //     });
  //   }, []);

  const taskLabelHandler = (event) => {
    setTaskLabel(event.target.value);
  };
  const taskDeadlineHandler = (event) => {
    setTaskDeadline(event.target.value);
  };

  const addTaskHandler = (event) => {
    event.preventDefault();
    const task = {
      label: taskLabel,
      deadline: taskDeadline,
      isDone: false,
    };
    axios.post("/tasks", task).then((res) => {
      navigate("/");
    });
  };

  return (
    <div className={classes.AddTask}>
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
