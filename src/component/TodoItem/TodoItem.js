import React, { Component } from "react";
import "./TodoItem.css";
import del from "./delete.svg";

class TodoItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    let { item, onDone, onDel } = this.props;
    return (
      <div className={item.isDone ? "TodoItem isDone" : "TodoItem"}>
        <p onClick={() => onDone(item.id)}>
          {item.id}. {item.todo}
        </p>
        <img src={del} alt="delete" />
      </div>
    );
  }
}

export default TodoItem;
