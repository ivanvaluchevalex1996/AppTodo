const onToggleDone = (id, todoData) => {
  const idx = todoData.findIndex((el) => el.id === id);

  const oldItem = todoData[idx];
  const newItem = { ...oldItem, done: !oldItem.done };
  const newArray = [
    ...todoData.slice(0, idx),
    newItem,
    ...todoData.slice(idx + 1),
  ];
  return {
    todoData: newArray,
  };
};

export default onToggleDone;
// const onToggleDone = (id) => {
//   this.setState(({ todoData }) => {
//     const idx = todoData.findIndex((el) => el.id === id);

//     const oldItem = todoData[idx];
//     const newItem = { ...oldItem, done: !oldItem.done };
//     const newArray = [
//       ...todoData.slice(0, idx),
//       newItem,
//       ...todoData.slice(idx + 1),
//     ];
//     return {
//       todoData: newArray,
//     };
//   });
// };

// export default onToggleDone;
