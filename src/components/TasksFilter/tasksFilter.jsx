import React from "react";
import "./tasksFilter.css";

function TaskFilter({
  filtered, onFilterChange,
}) {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const elements = buttons.map(({ name, label }) => {
    const isActive = filtered === name;
    const clazz = isActive ? "selected" : "button";
    return (
      <button
        type="button"
        key={name}
        className={`${clazz}`}
        onClick={() => onFilterChange(name)}

      >
        {label}
      </button>
    );
  });
  return <div className="filters">{elements}</div>;
}
export default TaskFilter;
