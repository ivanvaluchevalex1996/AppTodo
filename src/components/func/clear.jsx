const clearTask = () => {
  this.setState(({ todoData }) => {
    const idx = todoData.filter((item) => !item.done);
    return {
      todoData: idx,
    };
  });
};

export default clearTask;
