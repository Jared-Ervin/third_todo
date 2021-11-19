import "./App.css";
import { NewTask } from "./components/NewTask.js";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTask = (newTask) => {
    setTodoList([...todoList, newTask]);
  };
  console.log(todoList)
  return (
    <div className="App">
      <h1>Third Todo List</h1>
      <NewTask addTask={addTask} />
    </div>
  );
}

export default App;
