// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo.js";

const TodoList = props => {
  console.log(props);

  return (
    <div>
      {props.tasks.map(task => (
        <Todo toggleTask={props.toggleTask} key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TodoList;
