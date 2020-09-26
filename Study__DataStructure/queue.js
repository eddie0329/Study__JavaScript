class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    return this;
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  circuit() {
    this.queue.forEach((element) => {
      console.log(element);
    });
  }
}

const myQueue = new Queue();
myQueue.enqueue(1).enqueue(2).enqueue(3);
myQueue.circuit(); // 1 2 3
console.log(myQueue.front()); // 1
console.log(myQueue.isEmpty()); // false
console.log(myQueue.dequeue()); // 1
console.log(myQueue.dequeue()); // 2
console.log(myQueue.dequeue()); // 3
console.log(myQueue.isEmpty()); // true
console.log(myQueue.front()); // undefined
