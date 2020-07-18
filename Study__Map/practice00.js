let map = new Map();

map.set(1, 1);
map.set(2, 2);
map.set(3, 3);

console.log(map.has(3)); // true
console.log(map.has(1)); // true
console.log(map.entries());

map = new Map();

console.log(map);
