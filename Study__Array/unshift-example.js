const array = Array.of(1, 2, 3, 4);
array.unshift(0);

console.log(array); // 0 , 1, 2, 3, 4

array.unshift(-2, -1);
console.log(array); // -2, -1, 0, 1, 2, 3, 4
