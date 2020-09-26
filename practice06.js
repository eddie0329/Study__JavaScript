// JAVASCRIPT TRICKS

// REDUCE
const fruits = [
  { name: 'apple', price: 1 },
  { name: 'orange', price: 2 },
  { name: 'peer', price: 3 },
];

const fruitPrices = fruits.reduce((a, c) => {
  a[c.name] = c.price;
  return a;
}, {});

console.log(fruitPrices); // { apple: 1, orange: 2, peer: 3 }

// DESTRUCTURING
// |_Object
const fruitPrices2 = {
  apples: {
    red: 1,
    green: 2,
  },
};

const {
  apples: { red },
} = fruitPrices2;

console.log(red); // 1

// |_Array

const nums = [3, 2, 1];
const [first] = nums.sort();
console.log(first); // 1
