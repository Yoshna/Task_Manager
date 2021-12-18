import classes from "./Task.module.css";
import { useState, useEffect } from "react";

const Task = (props) => {
  // const [time, setTime] = useState("");
  const [rDay, setRDay] = useState(0);
  const [rHour, setRHour] = useState(0);
  const [rMin, setRMin] = useState(0);
  const [rSec, setRSec] = useState(0);
  const getTime = (endTime) => {
    const finishHours =
      new Date(endTime).getHours() +
      new Date(endTime).getMinutes() / 60 +
      new Date(endTime).getSeconds() / 3600;
    // console.log(finishHours);
    // console.log(new Date(endTime).getHours());
    // console.log(new Date(endTime).getMinutes());
    // console.log(new Date(endTime).getSeconds());
    // console.log(new Date(endTime).getDate());

    const currentHours =
      new Date().getHours() +
      new Date().getMinutes() / 60 +
      new Date().getSeconds() / 3600;
    // console.log(currentHours);
    // console.log(new Date().getHours());
    // console.log(new Date().getMinutes());
    // console.log(new Date().getSeconds());
    // console.log(new Date().getDate());
    const datediff = new Date(endTime).getDate() - new Date().getDate();
    const remainingHours = finishHours - currentHours + datediff * 24;

    const remainingHour = Math.floor(remainingHours);
    let hours = remainingHour;
    let days = 0;
    if (remainingHour > 24) {
      days = Math.floor(remainingHour / 24);
      hours = remainingHour - 24 * days;
    }
    let remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
    let remainingSecond = Math.floor(
      ((remainingHours - remainingHour) * 60 - remainingMinute) * 60
    );
    if (remainingHour < 0) {
      days = 0;
      hours = 0;
      remainingMinute = 0;
      remainingSecond = 0;
    }

    setRDay(days);
    setRHour(hours);
    setRMin(remainingMinute);
    setRSec(remainingSecond);
    //sec = remainingSecond;
    //console.log(sec);
  };

  useEffect(() => {
    let endTime = new Date(`${props.timeleft}T23:59:59`);
    const interval = setInterval(() => {
      // console.log(endTime);
      getTime(endTime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let buttons = null;
  if (!props.isDone) {
    buttons = (
      <>
        <button onClick={props.done}>Done</button>
      </>
    );
  }

  // const getTime = () => {
  //   const count = moment(`${props.timeleft}T23:59:59`).countdown().toString();
  //   setTime(count);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     getTime();
  //   }, 1000);
  // }, []);
  const time = (
    <>
      <span>{("0" + rDay).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + rHour).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + rMin).slice(-2)}</span>
      <span>:</span>
      <span>{("0" + rSec).slice(-2)}</span>
    </>
  );
  return (
    <div className={classes.Task}>
      <p>Due Date - {props.deadline}</p>
      {!props.isDone ? <p>Time Remaining - {time}</p> : null}
      <div className={classes.TaskLabel}>
        <span>{props.label}</span>
        <div>
          <button onClick={props.delete}>Delete</button>
          {buttons}
        </div>
      </div>
    </div>
  );
};
export default Task;
