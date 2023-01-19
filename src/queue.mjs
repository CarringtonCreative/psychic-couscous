"use strict";

class Queue {
  data;

  constructor(nums = []) {
    this.data = nums;
  }

  enqueue(num) {
    this.data.push(num);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }
}

export default Queue;
