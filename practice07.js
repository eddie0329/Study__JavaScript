const example = (a, b, c) => {
  console.log(a + b + c);
};

example(1, 2, 3); // 6
example.call(null, 1, 2, 3); // 6
example.apply(null, [1, 2, 3]); // 6

const obj1 = {
  name: 'eddie',
  greeting: function () {
    console.log(`Hi, ${this.name}`);
  },
};

const obj2 = {
  name: 'claire',
};

obj1.greeting(); // Hi, eddie
obj1.greeting.call(obj2); // Hi, claire
obj1.greeting.apply(obj2); // Hi, claire
const greetingClaire = obj1.greeting.bind(obj2);
greetingClaire(); // Hi, claire

function example2() {
  console.log(Array.prototype.join.call(arguments));
}

example2('eddie', 2, true); // [Arguments] { '0': 'eddie', '1': 2, '2': true }
