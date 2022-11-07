import React, { useState } from "react";

import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList/taskList";
import "./app.css";
// import Timer from "../Timer/timer";

function App() {
  const [tasks, setTasks] = useState([{
    label: "Drink", done: false, id: 11, date: new Date(),
  },
  {
    label: "some", done: false, id: 22, date: new Date(),
  },
  {
    label: "asdasd", done: false, id: 33, date: new Date(),
  }]);

  const [filtered, setFiltered] = useState("all");

  const onToggleDone = (id) => {
    const idx = tasks.findIndex((el) => el.id === id);
    const oldItem = tasks[idx];
    const newItem = { ...oldItem, done: !oldItem.done };
    const newArray = [
      ...tasks.slice(0, idx),
      newItem,
      ...tasks.slice(idx + 1),
    ];
    setTasks([
      ...newArray,
    ]);
  };

  const deleteItem = (id) => {
    const idx = tasks.findIndex((el) => el.id === id);
    const [...copyArray] = tasks;
    copyArray.splice(idx, 1);
    setTasks([
      ...copyArray,
    ]);
  };
  const addItem = (text) => {
    const newItem = {
      label: text,
      done: false,
      id: Math.random() * 101,
      date: new Date(),
    };
    setTasks([
      ...tasks,
      newItem,
    ]);
  };
  const unCompletedCount = tasks.filter((el) => !el.done).length;
  const clearTask = () => {
    const idx = tasks.filter((item) => !item.done);
    setTasks([
      ...idx,
    ]);
  };

  const changeTask = (items, btn) => {
    switch (btn) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  const onFilterChange = (name) => {
    setFiltered(name);
  };

  const fiterTask = changeTask(tasks, filtered);

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdd={addItem} />
      <section className="main">
        <TaskList
          todos={fiterTask}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
        />
        <Footer
          filtered={filtered}
          onFilterChange={onFilterChange}
          leftItems={unCompletedCount}
          clearTaskMy={clearTask}
        />
      </section>
    </section>
  );
}
export default App;
