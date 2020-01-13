class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

const p1 = new Person("Mary");
console.log(p1.getName());

p1.setName("Eddie");

console.log(p1.getName());

console.log(p1.name);
p1.name = "Paule";
console.log(p1.name);
