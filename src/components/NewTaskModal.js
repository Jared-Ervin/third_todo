import React, { useState } from "react";

export function NewTaskModal(props) {
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
      createTime: new Date().toLocaleString(),
    });
  };

  const handleSubmitTask = () => {
    if (!newTask.title) return;
    props.addTask(newTask);
    setNewTask(taskObject);
    props.setModalStatus(false);
  };

  const handleAlert = () => {
    alert("Task needs a title!");
  };

  if (props.modalStatus) {
    return (
      <div id="new-task-modal">
        <div id="new-task-modal-content">
          <div id="create-task-modal">
            <button
              id="close-task-modal"
              onClick={() => props.setModalStatus(false)}
            >
              x
            </button>
            <form>
              <div id="task-title-input">
                <label>Task Title</label>
                <br/>
                <input
                  type="text"
                  name="title"
                  value={newTask.title}
                  onChange={handleChange}
                />
              </div>
              <div id="task-desc-input">
                <label>Description</label>
                <br/>
                <input
                  type="text"
                  name="description"
                  value={newTask.description}
                  onChange={handleChange}
                />
              </div>
              <div id="task-due-input">
                <label>Due Date</label>
                <br/>
                <input
                  type="date"
                  name="dueDate"
                  value={newTask.dueDate}
                  onChange={handleChange}
                />
              </div>
            </form>
            <br/>
            <button
              id="create-task-button"
              onClick={newTask.title ? handleSubmitTask : handleAlert}
            >
              Create Task
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
