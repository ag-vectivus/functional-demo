class List {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

const todo = new List();
todo.addItem('Record RxJS series');
todo.addItem('Create emotion detector with TensorFlow');
console.log(todo.getItems());

const list = () => {
  const items = [];

  return Object.freeze({
    addItem: (item) => items.push(item),
    getItems: () => items,
  });
};

const list2 = list();
list2.addItem('Create emotions');
console.log(list2.getItems());
console.log(list2.items);
list2.addItem = '';
list2.addItem('Record');
console.log(list2.getItems());