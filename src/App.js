import React, { Component } from "react";
import "./App.css";
import addItem from "./add-item.svg";
import TodoList from "./component/TodoList/TodoList";
import StatusBar from "./component/StatusBar/StatusBar";
import NavBar from "./component/NavBar/NavBar";
import AddItem from "./component/AddItem/AddItem";
import Opp from "./component/Opp/Opp";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: "01", todo: "working a", isDone: false },
        { id: "02", todo: "working b", isDone: false },
        { id: "03", todo: "working c", isDone: false },
        { id: "04", todo: "working d", isDone: false },
        { id: "05", todo: "working e", isDone: false },
        { id: "06", todo: "working f", isDone: false }
      ],
      newTodo: "",
      isAdd: false
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDone = this.onDone.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onDel = this.onDel.bind(this);
  }

  onChange(e) {
    this.setState({
      newTodo: e.target.value
    });
  }

  onClick() {
    let { newTodo } = this.state;
    let n = this.state.todos.length + 1;
    let id = n > 9 ? `${n}` : `0${n}`;
    let todo = `${newTodo}`;
    console.log(todo);
    let item = {
      id: id,
      todo: todo,
      isDone: false
    };
    if (newTodo.trim() !== "") {
      this.setState({
        todos: [...this.state.todos, item],
        newTodo: ""
      });
    }
  }

  onDone(index) {
    let id = parseInt(index) - 1;
    this.setState({
      todos: [
        ...this.state.todos.slice(0, id),
        {
          id: this.state.todos[id].id,
          todo: this.state.todos[id].todo,
          isDone: !this.state.todos[id].isDone
        },
        ...this.state.todos.slice(id + 1)
      ]
    });
  }
  onClose() {
    this.setState({
      isAdd: false
    });
  }

  onDel(index) {
    let id = parseInt(index);
    console.log(id);
    this.setState({
      todos: [
        ...this.state.todos.slice(0, id),
        ...this.state.todos.slice(id + 1)
      ]
    });
  }

  render() {
    let { todos, newTodo, isAdd } = this.state;
    let opp = this.state.todos.length === 0 ? true : false;
    let unFinish = todos.filter(({ isDone }) => !isDone);
    let isDone = todos.filter(({ isDone }) => isDone);
    return (
      <div className="App">
        <StatusBar />
        <NavBar />
        {opp && <Opp />}

        {!opp && (
          <>
            <TodoList
              todos={unFinish}
              header="Upcoming"
              onDone={this.onDone}
              onDel={this.onDel}
            />
            <TodoList
              todos={isDone}
              header="Finished"
              onDone={this.onDone}
              onDel={this.onDel}
            />
          </>
        )}

        {isAdd && (
          <AddItem
            newTodo={newTodo}
            onChange={this.onChange}
            onClick={this.onClick}
            onClose={this.onClose}
          />
        )}
        {!isAdd && (
          <img
            src={addItem}
            alt="add item"
            id="add-item"
            onClick={() => this.setState({ isAdd: true })}
          />
        )}
      </div>
    );
  }
}

export default App;
