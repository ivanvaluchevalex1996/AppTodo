// import React from "react";

// import Footer from "../Footer";
// import NewTaskForm from "../NewTaskForm";
// import TaskList from "../TaskList/taskList";

// import "./app.css";

// export default class App extends React.Component {
//   static filter(items, filter) {
//     switch (filter) {
//       case "all":
//         return items;
//       case "active":
//         return items.filter((item) => !item.done);
//       case "done":
//         return items.filter((item) => item.done);
//       default:
//         return items;
//     }
//   }

//   static createTodoItem(label, id) {
//     return {
//       label,
//       done: false,
//       id,
//       date: new Date(),
//     };
//   }

//   constructor(props) {
//     super(props);

//     this.state = {
//       todoData: [
//         App.createTodoItem("Drink Coffee", 11),
//         App.createTodoItem("Make Awesome App", 22),
//         App.createTodoItem("Have a lunch", 33),
//       ],

//       filter: "",
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
//     const newItem = App.createTodoItem(text, Number(new Date()));

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

//   onFilterChange = (filter) => {
//     this.setState({ filter });
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
//     const { todoData, filter } = this.state;

//     const visibleItems = App.filter(todoData, filter);
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
//             onToggleChange={this.onToggleChange}
//           />
//           <Footer
//             filter={filter}
//             onFilterChange={this.onFilterChange}
//             clearTaskMy={this.clearTask}
//             leftItems={unCompletedCount}
//           />
//         </section>
//       </section>
//     );
//   }
// }
