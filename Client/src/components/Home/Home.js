import classes from "./Home.module.css";
import { useState, useEffect } from "react";
import moment from "moment";
import countdown from "countdown";
import "moment-countdown";

const Home = (props) => {
  // const [rDay, setRDay] = useState(0);
  // const [rHour, setRHour] = useState(0);
  // const [rMin, setRMin] = useState(0);
  // const [rSec, setRSec] = useState(0);

  // const getTime = (endTime) => {
  //   const finishHours =
  //     new Date(endTime).getHours() +
  //     new Date(endTime).getMinutes() / 60 +
  //     new Date(endTime).getSeconds() / 3600;
  // console.log(finishHours);
  // console.log(new Date(endTime).getHours());
  // console.log(new Date(endTime).getMinutes());
  // console.log(new Date(endTime).getSeconds());
  // console.log(new Date(endTime).getDate());

  // const currentHours =
  //   new Date().getHours() +
  //   new Date().getMinutes() / 60 +
  //   new Date().getSeconds() / 3600;
  // console.log(currentHours);
  // console.log(new Date().getHours());
  // console.log(new Date().getMinutes());
  // console.log(new Date().getSeconds());
  // console.log(new Date().getDate());
  //   const datediff = new Date(endTime).getDate() - new Date().getDate();
  //   const remainingHours = finishHours - currentHours + datediff * 24;

  //   const remainingHour = Math.floor(remainingHours);
  //   let hours = 0;
  //   let days = 0;
  //   if (remainingHour > 24) {
  //     days = Math.floor(remainingHour / 24);
  //     hours = remainingHour - 24 * days;
  //   }
  //   const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
  //   const remainingSecond = Math.floor(
  //     ((remainingHours - remainingHour) * 60 - remainingMinute) * 60
  //   );

  //   setRDay(days);
  //   setRHour(hours);
  //   setRMin(remainingMinute);
  //   setRSec(remainingSecond);
  //   // console.log("count");
  // };

  // const getTime = () => {
  //   const count = moment("2021-12-16T23:59:59").countdown().toString();
  //   setTime(count);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     let endTime = new Date("2021-12-17T23:59:59");
  //     // console.log(endTime);
  //     getTime(endTime);
  //   }, 1000);
  // }, []);

  return (
    <div className={classes.Header}>
      <h1>TASK MANAGER</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* <p>{time}</p> */}
      {/* <div>
        <span>{("0" + rDay).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + rHour).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + rMin).slice(-2)}</span>
        <span>:</span>
        <span>{("0" + rSec).slice(-2)}</span>
      </div> */}
    </div>
  );
};
export default Home;
