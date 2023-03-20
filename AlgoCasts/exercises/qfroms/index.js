// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.firstStack = new Stack();
    this.secondStack = new Stack();
  }

  add(record) {
    this.firstStack.push(record);
  }

  peek() {
    this.reinstateFirstStacks(this.firstStack, this.secondStack);
    const record = this.secondStack.peek();
    this.reinstateSecondStacks();

    return record;
  }

  remove() {
    this.reinstateFirstStacks();
    const record = this.secondStack.pop();
    this.reinstateSecondStacks();

    return record;
  }

  reinstateFirstStacks() {
    while (this.firstStack.peek()) {
      this.secondStack.push(this.firstStack.pop());
    }
  }

  reinstateSecondStacks() {
    while (this.secondStack.peek()) {
      this.firstStack.push(this.secondStack.pop());
    }
  }
}

module.exports = Queue;
