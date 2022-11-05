const deleteItem = (id) => {
  this.setState(({ todoData }) => {
    const idx = todoData.findIndex((el) => el.id === id);
    const [...copyArray] = todoData;
    copyArray.splice(idx, 1);
    return {
      todoData: copyArray,
    };
  });
};

export default deleteItem;
