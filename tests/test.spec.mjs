"use strict";

import {
  isEvenOrOdd,
  findSmallestPositiveInteger,
  RESULT,
} from "../src/test.mjs";
import { expect } from "chai";

describe("Testing module", () => {
  describe("test if a number even or odd", () => {
    it("should export 'isEvenOrOdd' function", () => {
      expect(isEvenOrOdd).to.be.a("function");
    });

    it("should never return undefined", () => {
      const testee = isEvenOrOdd;
      const result = testee(0);
      expect(result).not.to.be.undefined;
    });

    it("should return 'odd' for 0", () => {
      const testee = isEvenOrOdd;
      const result = testee(0);
      expect(result).to.be.equal(RESULT.ODD);
    });

    it("should return 'odd' for 1", () => {
      const testee = isEvenOrOdd;
      const result = testee(1);
      expect(result).to.be.equal(RESULT.ODD);
    });

    it("should return 'even' for 2", () => {
      const testee = isEvenOrOdd;
      const result = testee(2);
      expect(result).to.be.equal(RESULT.EVEN);
    });
  });

  describe("test finding the smallest integer number not in array", () => {
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
});
