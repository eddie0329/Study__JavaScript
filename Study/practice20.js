function sum(start, end) {
  return (end / 2) * (start + end);
}

function sum1(number) {
  if (number === 1) {
    return 1;
  } else {
    return number + sum1(number - 1);
  }
}

console.log(sum(1, 10));
console.log(sum(1, 11));
console.log(11 / 2);
console.log(sum(1, 100));
console.log(sum1(100));
