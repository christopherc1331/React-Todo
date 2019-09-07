import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ""
    };
  }

  changeHandler = event => {
    this.setState({ task: event.target.value });
  };

  submitHandler = event => {
    this.props.addTask(event, this.state.task);
    this.setState({
      task: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={this.changeHandler} value={this.state.task} />
          <button>Add Task</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default TodoForm;
