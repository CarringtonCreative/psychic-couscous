"use strict";

class Stack {
  data;
  constructor(data = []) {
    this.data = data;
  }

  push(num) {
    if (num === undefined) return;
    this.data.push(num);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

export default Stack;
