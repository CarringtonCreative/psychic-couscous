"use strict";

import { expect } from "chai";
import Queue from "../src/queue.mjs";

describe("Testing module for Queue data structure", () => {
  describe("Test queue construction", () => {
    const queue = new Queue();
    const data = queue.data;

    it("should return an empty queue", () => {
      expect(data).to.not.be.undefined;
      expect(data.length).to.be.equal(0);
    });
  });
  describe("Test enqueue functionality", () => {
    const queue = new Queue();
    const data = queue.data;
    it("should import Queue.enqueue function", () => {
      expect(queue.enqueue).to.be.a("function");
    });
    it("should enqueue the number 1", () => {
      queue.enqueue(1);
      const result = data[0];
      expect(result).to.be.equal(1);
      expect(data.length).to.be.equal(1);
    });
    it("should enqueue the number 2", () => {
      queue.enqueue(2);
      const result = data[1];
      expect(result).to.be.equal(2);
      expect(data.length).to.be.equal(2);
    });
    it("should enqueue the number 5", () => {
      queue.enqueue(5);
      const result = data[2];
      expect(result).to.be.equal(5);
      expect(data.length).to.be.equal(3);
    });
  });
  describe("Test dequeue functionality", () => {
    const queue = new Queue([1, 3, 5]);
    const data = queue.data;
    it("should import Queue.dequeue function", () => {
      expect(queue.dequeue).to.be.a("function");
    });
    it("should dequeue and return 1 (FIFO)", () => {
      expect(data.length).to.be.equal(3);
      const result = queue.dequeue();
      expect(result).to.be.equal(1);
      expect(data.length).to.be.equal(2);
    });
  });
  describe("Test peek functionality", () => {
    const queue = new Queue([1, 3, 5]);
    const data = queue.data;
    it("should import Queue.peek function", () => {
      expect(queue.peek).to.be.a("function");
    });
    it("should return the item on top of the stack (LIFO)", () => {
      const result = queue.peek();
      expect(result).to.be.equal(1);
    });
  });
});
