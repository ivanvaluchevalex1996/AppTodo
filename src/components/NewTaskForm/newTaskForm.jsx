import React, { useState } from "react";
import "./newTaskForm.css";

function NewTaskForm({ onItemAdd }) {
  const [label, setLabel] = useState("");

  function onLableChange(event) {
    return setLabel(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    onItemAdd(label);
    setLabel("");
  }

  return (
    <header className="header">
      <form onSubmit={onSubmit}>
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onLableChange}
          value={label}
        />
      </form>
    </header>
  );
}

export default NewTaskForm;
