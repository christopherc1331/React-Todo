import React from "react";

import TodoForm from "./components/TodoComponents/TodoForm.js";
import TodoList from "./components/TodoComponents/TodoList.js";

const tasks = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  addTask = (event, task) => {
    event.preventDefault();
    const existingTask = this.state.tasks.filter(item => item.task === task);

    if (existingTask.length === 0) {
      const newTask = {
        task: task,
        id: Date.now(),
        completed: false
      };
      console.log(newTask);

      this.setState({
        tasks: [...tasks, newTask]
      });
    } else {
      alert("This item already exists!");
    }
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
