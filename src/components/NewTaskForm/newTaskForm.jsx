// import React from "react";
// import "./newTaskForm.css";

// export default class NewTaskForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       label: "",
//     };
//   }

//   onLableChange = (event) => {
//     this.setState({
//       label: event.target.value,
//     });
//   };

//   onSubmit = (event) => {
//     event.preventDefault();
//     // this.props.onItemAdd(this.state.label);
//     const { onItemAdd } = this.props;
//     const { label } = this.state;
//     onItemAdd(label);
//     this.setState({
//       label: "",
//     });
//   };

//   render() {
//     const { label } = this.state;

//     return (
// <header className="header">
//   <form onSubmit={this.onSubmit}>
//     <h1>todos</h1>
//     <input
//       className="new-todo"
//       placeholder="What needs to be done?"
//       onChange={this.onLableChange}
//       value={label}
//     />
//   </form>
// </header>
//     );
//   }
// }

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
