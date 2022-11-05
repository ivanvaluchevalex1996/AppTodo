// import React from "react";

// import Footer from "../Footer";
// import NewTaskForm from "../NewTaskForm";
// import TaskList from "../TaskList/taskList";
// import "./app.css";
// // поменять имена
// // import addItem from "../func/add";
// // import deleteItem from "../func/delete";
// // import onToggleDone from "../func/toggle";
// // import clearTask from "../func/clear";

// export default class App extends React.Component {
//   static changeTask(items, btn) {
// switch (btn) {
//   case "all":
//     return items;
//   case "active":
//     return items.filter((item) => !item.done);
//   case "done":
//     return items.filter((item) => item.done);
//   default:
//     return items;
// }
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       todoData: [
//         {
//           label: "Drink", done: false, id: 11, date: new Date(),
//         },
//         {
//           label: "some", done: false, id: 22, date: new Date(),
//         },
//         {
//           label: "asdasd", done: false, id: 33, date: new Date(),
//         },
//       ],

//       changeTask: "",
//     };
//   }

//   deleteItem = (id) => {
//     this.setState(({ todoData }) => {
//       const idx = todoData.findIndex((el) => el.id === id);
//       const [...copyArray] = todoData;
//       copyArray.splice(idx, 1);
//       return {
//         todoData: copyArray,
//       };
//     });
//   };

//   addItem = (text) => {
//     const newItem = {
//       label: text,
//       done: false,
//       id: Math.random() * 101,
//       date: new Date(),
//     };

//     this.setState(({ todoData }) => {
//       const [...copyArray] = todoData;
//       copyArray.push(newItem);
//       return {
//         todoData: copyArray,
//       };
//     });
//   };

//   onToggleDone = (id) => {
//     this.setState(({ todoData }) => {
//       const idx = todoData.findIndex((el) => el.id === id);

//       const oldItem = todoData[idx];
//       const newItem = { ...oldItem, done: !oldItem.done };
//       const newArray = [
//         ...todoData.slice(0, idx),
//         newItem,
//         ...todoData.slice(idx + 1),
//       ];
//       return {
//         todoData: newArray,
//       };
//     });
//   };

//   onFilterChange = (changeTask) => {
//     this.setState({ changeTask });
//   };

//   clearTask = () => {
//     this.setState(({ todoData }) => {
//       const idx = todoData.filter((item) => !item.done);
//       return {
//         todoData: idx,
//       };
//     });
//   };

//   render() {
//     const { todoData, changeTask } = this.state;

//     const visibleItems = App.changeTask(todoData, changeTask);
//     // функция для подсчета выполненных задач
//     // const doneCount = this.state.todoData.filter((el) => el.done.length);
//     // const todoCount = this.state.todoData.length - doneCount;
//     const unCompletedCount = todoData.filter((el) => !el.done).length;

//     return (
//       <section className="todoapp">
//         <NewTaskForm onItemAdd={this.addItem} />
//         <section className="main">
//           <TaskList
//             todos={visibleItems}
//             onDeleted={this.deleteItem}
//             onToggleDone={this.onToggleDone}
//           />
//           <Footer
//             filter={changeTask}
//             onFilterChange={this.onFilterChange}
//             clearTaskMy={this.clearTask}
//             leftItems={unCompletedCount}
//           />
//         </section>
//       </section>
//     );
//   }
// }

/* eslint-disable max-len */
import React, { useState } from "react";

import Footer from "../Footer";
import NewTaskForm from "../NewTaskForm";
import TaskList from "../TaskList/taskList";
import "./app.css";
// import clearTask from "../func/clear";
// import addItem from "../func/add";
// import deleteItem from "../func/delete";
// import onToggleDone from "../func/toggle";

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

  // const [filt, setFilt] = useState(tasks);

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

  // const onFilterChange = (changeTask) => {
  //   setFilt([...filt]);
  // };

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

  // const onFilterChange = (changeTask) => {
  //   setTasks([
  //     {
  //       label: "some", done: false, id: 22, date: new Date(),
  //     },
  //   ]);
  // };
  // const onFilterChange = (changeTask) => {
  //   setTasks([
  //     {
  //       label: "some", done: false, id: 22, date: new Date(),
  //     },
  //   ]);
  // };

  return (
    <section className="todoapp">
      <NewTaskForm onItemAdd={addItem} />
      <section className="main">
        <TaskList
          todos={tasks}
          onDeleted={deleteItem}
          onToggleDone={onToggleDone}
        />
        <Footer
          changeTask={changeTask}
          // onFilterChange={onFilterChange}
          leftItems={unCompletedCount}
          clearTaskMy={clearTask}
        />

        {/* // filterChange={changeTask}
          // onFilterChange={onFilterChange}
          // clearTaskMy={clearTask}
          // leftItems={unCompletedCount} */}
      </section>
    </section>
  );
}
export default App;
