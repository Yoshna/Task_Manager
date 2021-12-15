import classes from "./Task.module.css";
import { useState, useEffect } from "react";
import moment from "moment";
import countdown from "countdown";
import "moment-countdown";

const Task = (props) => {
  const [time, setTime] = useState(0);
  let buttons = null;
  if (!props.isDone) {
    buttons = (
      <div>
        <button onClick={props.done}>Done</button>
        <button onClick={props.delete}>Delete</button>
      </div>
    );
  }

  const getTime = () => {
    // console.log(`${props.deadline}T23:59:59`);
    const count = moment(`${props.timeleft}T23:59:59`).countdown().toString();
    // const d = count.splice(0,2)
    // const h = count.substring()
    // const h = count.substring()
    // const h = count.substring()
    setTime(count);
  };

  useEffect(() => {
    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <div className={classes.Task}>
      <p>Due Date - {props.deadline}</p>
      {!props.isDone ? <p>Time Remaining - {time}</p> : null}
      <div className={classes.TaskLabel}>
        <span>{props.label}</span>
        {buttons}
      </div>
    </div>
  );
};
export default Task;
