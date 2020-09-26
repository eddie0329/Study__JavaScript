class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
    return this;
  }
  getNext() {
    return this.next;
  }
  setNext(newNext) {
    this.next = newNext;
    return this;
  }
  getPrev() {
    return this.prev;
  }
  setPrev(newPrev) {
    this.prev = newPrev;
    return this;
  }
  getValue() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    // init linked list
    this.head = new Node('HEAD');
    this.end = new Node('END');
    this.head.setNext(this.end);
    this.end.setPrev(this.head);
    return this;
  }

  addLast(value) {
    const newNode = new Node(value);
    const endPrev = this.end.getPrev();
    endPrev.setNext(newNode);
    this.end.setPrev(newNode);
    newNode.setNext(this.end);
    newNode.setPrev(endPrev);
    return this;
  }

  removeLast() {
    try {
      const endPrev = this.end.getPrev();
      // If there  are no nodes other than HEAD and END
      if (endPrev === this.head) {
        throw new Error('Cannot remove');
      }
      const endPrevPrev = endPrev.getPrev();
      this.end.setPrev(endPrevPrev);
      endPrevPrev.setNext(this.end);
    } catch (err) {
      console.error(err);
    }
    return this;
  }

  front() {
    return this.head.getNext();
  }

  back() {
    return this.end.getPrev();
  }

  /**
   * This function circuit entire linked list
   */
  circuit() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.getValue());
      const newNode = currentNode.getNext();
      currentNode = newNode;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addLast(1);
linkedList.circuit(); // HEAD -> 1 -> END
linkedList.removeLast();
linkedList.circuit(); // HEAD -> END
linkedList.removeLast(); // ERROR!
