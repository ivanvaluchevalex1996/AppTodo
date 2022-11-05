const addItem = (text) => {
  const newItem = {
    label: text,
    done: false,
    id: Math.random() * 101,
    date: new Date(),
  };

  this.setState(({ todoData }) => {
    const [...copyArray] = todoData;
    copyArray.push(newItem);
    return {
      todoData: copyArray,
    };
  });
};

export default addItem;
