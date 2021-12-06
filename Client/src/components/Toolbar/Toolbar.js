import classes from "./Toolbar.module.css";
import Navigation from "../Navigation/Navigation";
const Toolbar = (props) => {
  return (
    <div>
      <header className={classes.Toolbar}>
        <div className={classes.Logo}>
          <span>LOGO</span>
        </div>
        <Navigation />
      </header>
    </div>
  );
};

export default Toolbar;
