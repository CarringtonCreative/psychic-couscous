"use strict";

import { expect } from "chai";
import { findSmallestPositiveInteger } from "../src/findSmallestPositiveInt.mjs";

describe("Testing module to find the smallest integer number not in array", () => {
  it("should export 'findSmallestPositiveInteger' function", () => {
    expect(findSmallestPositiveInteger).to.be.a("function");
  });

  it("should return 0 for empty array", () => {
    const input = [];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(0);
  });

  it("should return 1 for array [0]", () => {
    const input = [0];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(1);
  });

  it("should return 2 for array [1]", () => {
    const input = [1];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(2);
  });

  it("should return 2 for array [0, 1]", () => {
    const input = [0, 1];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(2);
  });

  it("should return 5 for array [0, 4]", () => {
    const input = [0, 4];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(1);
  });

  it("should return 5 for array [0, 4]", () => {
    const input = [1, 2, 3, 10];
    const testee = findSmallestPositiveInteger;
    const result = testee(input);
    expect(result).to.be.equal(4);
  });
});
