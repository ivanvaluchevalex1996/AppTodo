import React from "react";
// import { formatDistanceToNow } from "date-fns";

import "./task.css";
import Timer from "../Timer/timer";

function Task({
  label, onDeleted, onToggleDone, done, taskId,
  // label, onDeleted, onToggleDone, done, taskId, date,
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
          {/* <div className="buttons_click">
            <button type="button" className="icon icon-play" />
            <button type="button" className="icon icon-pause" />
          </div> */}
          {/* <span className="created">
            {`created ${formatDistanceToNow(
              date,
            )} ago`}
          </span> */}
          <Timer />
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
