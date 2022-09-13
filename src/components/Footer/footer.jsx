import React from "react";

import TaskFilter from "../TasksFilter";
import "./footer.css";

function Footer({ filter, onFilterChange, clearTaskMy, leftItems }) {
  return (
    <footer className="footer">
      <span className="todo-count">{leftItems} items left</span>
      <TaskFilter filter={filter} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={clearTaskMy}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
