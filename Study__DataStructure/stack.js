class Stack {
  constructor() {
    this.stack = [];
    return this;
  }

  push(element) {
    this.stack.push(element);
    return this;
  }

  pop() {
    if (this.top() === null) {
      return 'No element to pop';
    }
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  circuit() {
    this.stack.forEach((element) => {
      console.log(element);
    });
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.top()); // 3
myStack.circuit(); // 1 2 3
console.log(myStack.isEmpty()); // false
myStack.pop();
myStack.pop();
myStack.pop();
myStack.circuit(); // NONE
console.log(myStack.isEmpty()); // true
