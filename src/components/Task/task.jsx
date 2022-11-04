import React from "react";
import { formatDistanceToNow } from "date-fns";
import "./task.css";

function Task({
  label, onDeleted, onToggleDone, done, taskId, date,
}) {
  let nameClass = "";
  if (done) {
    nameClass += "completed";
  }
  return (
    <li className={nameClass}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={onToggleDone}
          defaultChecked={done}
          id={`todo-${taskId}`}
        />
        <label htmlFor={`todo-${taskId}`}>
          <span className="description">{label}</span>
          <span className="created">
            {`created ${formatDistanceToNow(
              date,
            )} ago`}

          </span>
        </label>
        <button type="button" className="icon icon-edit" />
        <button
          type="button"
          className="icon icon-destroy"
          onClick={onDeleted}
        />
      </div>
    </li>
  );
}

export default Task;
