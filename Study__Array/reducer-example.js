const array = Array.of(1, 2, 3, 4);

const initialValue = 10;

const result = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(result);
