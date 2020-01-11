const array = Array.of(1, 2, 3, 4, 5, 6);

const result = new Array();

array.forEach(element => result.push(element + 1));

console.log('====result====');
console.log(result);
