import React from "react";
import "./tasksFilter.css";

export default class TasksFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
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

    return <div className="filters">{buttons}</div>;
  }
}

// const TasksFilter = () => {
//   return (
//     <ul className="filters">
//       <li>
//         <button className="selected">All</button>
//       </li>
//       <li>
//         <button>Active</button>
//       </li>
//       <li>
//         <button>Completed</button>
//       </li>
//     </ul>
//   );
// };

// export default TasksFilter;
