"use strict";

class Calculate {
  data;
  constructor(data = []) {
    this.data = data;
  }

  minimum() {
    if (this.data.length === 0) return 0;
    let minimum = this.data[0];
    this.data.map((num) => {
      if (num < minimum) {
        minimum = num;
      }
    });
    return minimum;
  }

  maximum() {
    if (this.data.length === 0) return 0;
    let maximum = this.data[0];
    this.data.map((num) => {
      if (num > maximum) {
        maximum = num;
      }
    });
    return maximum;
  }

  total() {
    return this.data.length;
  }

  average() {
    if (this.data.length === 0) return 0;
    let average = 0;
    this.data.map((num) => {
      average += num;
    });
    return average / this.data.length;
  }
}

export default Calculate;
