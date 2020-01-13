function Person(input) {
  Person.prototype.eyes = input;
}

let kim = new Person(3);
let choi = new Person(1);

console.log(kim.eyes);
console.log(choi.eyes);
