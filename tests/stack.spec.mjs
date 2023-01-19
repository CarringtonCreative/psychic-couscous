import { expect } from "chai";
import Stack from "../src/stack.mjs";

describe("Testing module for Stack data structure", () => {
  describe("Test stack construction", () => {
    const stack = new Stack();
    const data = stack.data;
    it("should return an empty stack", () => {
      expect(data).to.not.be.undefined;
      expect(data.length).to.be.equal(0);
    });
    it("should return an empty stack for push", () => {
      const result = stack.push();
      expect(result).to.be.undefined;
      expect(data.length).to.be.equal(0);
    });
    it("should return an undefined for pop", () => {
      const result = stack.pop();
      expect(result).to.be.undefined;
      expect(data.length).to.be.equal(0);
    });
  });
  describe("Test push functionality", () => {
    const stack = new Stack();
    const data = stack.data;
    it("should import Stack.pop function", () => {
      expect(stack.pop).to.be.a("function");
    });
    it("should have a stack with one element", () => {
      stack.push(1);
      expect(data.length).to.be.equal(1);
      expect(data[0]).to.be.equal(1);
    });
    it("should have a stack with 3 elements", () => {
      stack.push(3);
      stack.push(5);
      expect(data.length).to.be.equal(3);
      expect(data[1]).to.be.equal(3);
      expect(data[2]).to.be.equal(5);
    });
  });
  describe("Test pop functionality", () => {
    const stack = new Stack([1, 3, 5]);
    const data = stack.data;
    it("should import Stack.pop function", () => {
      expect(stack.pop).to.be.a("function");
    });
    it("should have a stack with 2 elements", () => {
      const result = stack.pop();
      expect(result).to.be.equal(5);
      expect(data.length).to.be.equal(2);
      expect(data[0]).to.be.equal(1);
      expect(data[1]).to.be.equal(3);
    });
    it("should have a stack with 1 element", () => {
      const result = stack.pop();
      expect(result).to.be.equal(3);
      expect(data.length).to.be.equal(1);
      expect(data[0]).to.be.equal(1);
    });
    it("should have a stack with 0 elements", () => {
      const result = stack.pop();
      expect(result).to.be.equal(1);
      expect(data.length).to.be.equal(0);
      expect(data[0]).to.be.undefined;
    });
  });
  describe("Test peek functionality", () => {
    const stack = new Stack([1, 2, 3]);
    const data = stack.data;
    it("should import Stack.peek function", () => {
      expect(stack.peek).to.be.a("function");
    });
    it("should return the item on top of the stack (LIFO)", () => {
      const result = stack.peek();
      expect(result).to.be.equal(3);
    });
  });
});
