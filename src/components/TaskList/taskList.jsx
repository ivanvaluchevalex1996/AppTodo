import React from "react";

import Task from "../Task";
import "./taskList.css";

function TaskList({ todos, onDeleted, onToggleDone }) {
  const elements = todos.map((item) => (
    <Task
      key={item.id}
      label={item.label}
      done={item.done}
      change={item.change}
      date={item.date}
      onDeleted={() => {
        onDeleted(item.id);
      }}
      onToggleDone={() => onToggleDone(item.id)}
      taskId={item.id}
    />
  ));
  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
