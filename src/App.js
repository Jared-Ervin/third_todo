import "./App.css";
import { NewTaskModal } from "./components/NewTaskModal.js";
import { TaskList } from "./components/TaskList";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);

  const openModal = () => {
    if (modalStatus) return;
    setModalStatus(!modalStatus);
  };

  const addTask = (newTask) => {
    setTodoList([...todoList, newTask]);
  };
  return (
    <div className="App">
      <h1>Third Todo List</h1>
      <div className="new-task-button-wrapper">
        <button id="new-task-button" onClick={openModal}>
          + New Task
        </button>
      </div>
      <NewTaskModal
        addTask={addTask}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        openModal={openModal}
      />
      <TaskList todoList={todoList} />
    </div>
  );
}

export default App;
