import React from "react";
import "./Todo.css";

const Todo = props => {
  console.log(props);
  return (
    <h4
      className={`task${props.task.completed ? " completed" : ""}`}
      onClick={() => {
        props.toggleTask(props.task.id);
        console.log(props.task.completed);
      }}
    >
      {props.task.task}
    </h4>
  );
};

export default Todo;
