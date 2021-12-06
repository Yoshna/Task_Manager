import classes from "./Task.module.css";
const Task = (props) => {
  let buttons = null;
  if (!props.isDone) {
    buttons = (
      <div>
        <button
          style={{
            margin: "0 0 0 300px",
          }}
          onClick={props.done}
        >
          Done
        </button>
        <button onClick={props.delete}>Delete</button>
      </div>
    );
  }

  return (
    <div className={classes.Task}>
      <p>Due Date - {props.deadline}</p>
      <div className={classes.TaskLabel}>
        <span>{props.label}</span>
        {buttons}
      </div>
    </div>
  );
};
export default Task;
