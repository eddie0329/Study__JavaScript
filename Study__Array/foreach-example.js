const array = Array.of(1, 2, 3, 4, 5, 6);

const result = new Array();

array.forEach((element) => result.push(element + 1));

console.log('====result====');
console.log(result);

console.log('=============');

const createArray = (...args) => {
  return Array.of(...args);
};
const addOne = (array) => {
  return array.map((number) => number + 1);
};

// console.log(createArray(1, 2, 3, 4, 5).addOne());
console.log(addOne(createArray(1, 2, 3, 4)));
