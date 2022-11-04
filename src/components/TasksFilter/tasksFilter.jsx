// import React from "react";
// import "./tasksFilter.css";

// export default class TasksFilter extends React.Component {
//   buttons = [
//     { name: "all", label: "All" },
//     { name: "active", label: "Active" },
//     { name: "done", label: "Done" },
//   ];

//   render() {
//     const { filter, onFilterChange } = this.props;
//     const buttons = this.buttons.map(({ name, label }) => {
//       const isActive = filter === name;
//       const clazz = isActive ? "selected" : "button";
//       return (
//         <button
//           type="button"
//           key={name}
//           className={`${clazz}`}
//           onClick={() => onFilterChange(name)}
//         >
//           {label}
//         </button>
//       );
//     });

//     return <div className="filters">{buttons}</div>;
//   }
// }

import React from "react";
import "./tasksFilter.css";

function Footer({
  filter, onFilterChange,
}) {
  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  const elements = buttons.map(({ name, label }) => {
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
  return <div className="filters">{elements}</div>;
}
export default Footer;
