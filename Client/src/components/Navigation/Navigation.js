import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Navigation = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    axios.get("/auth/login").then((res) => {
      // console.log(res);
      // console.log("fvvf");
      if (res.data) {
        setIsLogin(true);
      }
    });
  }, []);

  let activeStyle = {
    color: "white",
  };

  let routes = (
    <>
      <div className={classes.NavigationItem}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
      </div>
      <div className={classes.NavigationItem}>
        <NavLink
          to="/login"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Login
        </NavLink>
      </div>
    </>
  );
  if (isLogin) {
    routes = (
      <>
        <div className={classes.NavigationItem}>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </div>
        <div className={classes.NavigationItem}>
          <NavLink
            to="/taskss"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Tasks
          </NavLink>
        </div>
        <div className={classes.NavigationItem}>
          <NavLink
            to="/taskdone"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Tasks Done
          </NavLink>
        </div>
        <div className={classes.NavigationItem}>
          <NavLink
            to="/addtask"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Add A Task
          </NavLink>
        </div>
        <div className={classes.NavigationItem}>
          <NavLink
            to="/logout"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Logout
          </NavLink>
        </div>
      </>
    );
  }

  return <div className={classes.Navigation}>{routes}</div>;
};

export default Navigation;
