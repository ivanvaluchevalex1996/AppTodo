import React from "react";

import TaskFilter from "../TasksFilter";
import "./footer.css";

function Footer({

  clearTaskMy, leftItems, onFilterChange, filtered,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {leftItems}
        {" "}
        items left
      </span>
      <TaskFilter filtered={filtered} onFilterChange={onFilterChange} />

      <button type="button" className="clear-completed" onClick={clearTaskMy}>
        Clear completed
      </button>
    </footer>
  );
}
export default Footer;
