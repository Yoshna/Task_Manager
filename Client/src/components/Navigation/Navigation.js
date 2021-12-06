import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavigationItem}>
        <NavLink to="/" activeclassname={classes.activec}>
          My Tasks
        </NavLink>
      </div>
      <div className={classes.NavigationItem}>
        <NavLink to="/taskdone" activeclassname={classes.active}>
          Tasks Done
        </NavLink>
      </div>
      <div className={classes.NavigationItem}>
        <NavLink to="/addtask" activeclassname={classes.activec}>
          Add A Task
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
