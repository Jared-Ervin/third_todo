import React, { useState } from "react";

export function NewTask(props) {
  const taskObject = {
    title: "",
    description: "",
    dueDate: "",
    createTime: "",
  };
  const [newTask, setNewTask] = useState(taskObject);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewTask({
      ...newTask,
      [name]: value,
      createTime: new Date().toLocaleString()
    });
  };

  const handleSubmitTask = () => {
    props.addTask(newTask);
    setNewTask(taskObject);
  };

  return (
    <div>
      <button id="create-task-button" onClick={handleSubmitTask}>
        +
      </button>
      <div id="create-task-modal">
        <form>
          <label>Task Title</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleChange}
          />
          <label>description</label>
          <input
            type="text"
            name="description"
            value={newTask.description}
            onChange={handleChange}
          />
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={newTask.dueDate}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
}
