import classes from "./Home.module.css";
// import { useState, useEffect } from "react";
// import moment from "moment";
// import countdown from "countdown";
// import "moment-countdown";

const Home = (props) => {
  // const [time, setTime] = useState(0);
  // const startDate = new Date();
  // const [rHour, setRHour] = useState(0);
  // const [rMin, setRMin] = useState(0);
  // const [rSec, setRSec] = useState(0);

  // const getTime = (endTime) => {
  //   const finishHours =
  //     moment(endTime).hour() +
  //     moment(endTime).minute() / 60 +
  //     moment(endTime).second() / 3600;
  //   console.log(finishHours);
  //   console.log(moment(endTime).hour());
  //   console.log(moment(endTime).date());
  //   console.log(moment(endTime).minute());
  //   console.log(moment(endTime).second());
  //   const currentHours =
  //     moment().hour() + moment().minute() / 60 + moment().second() / 3600;
  //   console.log(currentHours);
  //   console.log(moment().hour());
  //   console.log(moment().minute());
  //   console.log(moment().second());
  //   const datehr = (moment(endTime).date() - moment().date()) * 24;
  //   console.log(datehr);
  //   const remainingHours = finishHours - currentHours + datehr;

  //   const remainingHour = Math.floor(remainingHours);
  //   const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
  //   const remainingSecond = Math.floor(
  //     ((remainingHours - remainingHour) * 60 - remainingMinute) * 60
  //   );

  //   setRHour(remainingHour);
  //   setRMin(remainingMinute);
  //   setRSec(remainingSecond);
  //   console.log("count");
  // };

  // const getTime = () => {
  //   const count = moment("2021-12-16T23:59:59").countdown().toString();
  //   setTime(count);
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     // let endTime = moment("2021-12-16").format();
  //     // console.log(endTime);
  //     // // endTime = endTime.setHours(23);
  //     // // console.log(endTime);
  //     // getTime(endTime);
  //     getTime();
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
