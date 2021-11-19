import React from "react";
import { v4 as uuidv4 } from "uuid";

export function TaskList(props) {
  const makeList = () => {
    return props.todoList.map((element, index) => {
      return (
        <div key={uuidv4()} className="task">
          <li className="task-content">
            <div className="task-title">{element.title}</div>
            <div className="task-description">{element.description}</div>
            <div className="task-due-date">{element.dueDate}</div>
          </li>
        </div>
      );
    });
  };
  return <ul>{makeList()}</ul>;
}
