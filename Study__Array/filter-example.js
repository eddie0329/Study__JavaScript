let array = [1, 2, 3, 4, 5];

const result = array.filter(a => a < 3);

console.log('=====result====');
console.log(result);

const todoList = new Array(
  {
    id: 1,
    todo: 'feeding dog',
    completed: false
  },
  {
    id: 2,
    todo: 'studying vue',
    completed: true
  },
  {
    id: 3,
    todo: 'computing skills',
    completed: false
  }
);

const result_todoList = todoList.filter(todo => todo.completed === false);
console.log('====result_todoList====');
console.log(result_todoList);
