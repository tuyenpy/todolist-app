import React, { Component } from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem/TodoItem";

class TodoList extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { todos, header, onDone, onDel } = this.props;
    return (
      <div className="TodoList">
        <h6>{header}</h6>
        {todos.map((item, index) => (
          <TodoItem item={item} key={index} onDone={onDone} onDel={onDel} />
        ))}
      </div>
    );
  }
}

export default TodoList;
